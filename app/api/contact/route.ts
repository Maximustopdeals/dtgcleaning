
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactFormData = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  street?: unknown;
  postalCode?: unknown;
  city?: unknown;
  service?: unknown;
  referral?: unknown;
  message?: unknown;
};

const serviceLabels: Record<string, string> = {
  glasbewassing: "Glasbewassing",
  zonnepanelen: "Zonnepanelen reiniging",
  overig: "Overig",
};

const referralLabels: Record<string, string> = {
  google: "Via Google",
  "mond-tot-mond": "Via familie, vrienden of kennissen",
  buren: "Via buren in de straat",
  herhaalklant: "Ik ben al klant",
  overig: "Anders",
};

const getString = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\r?\n/g, "<br />");

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Ongeldige formuliergegevens." },
        { status: 400 }
      );
    }

    const data = body as ContactFormData;

    const name = getString(data.name);
    const email = getString(data.email).toLowerCase();
    const phone = getString(data.phone);
    const street = getString(data.street);
    const postalCode = getString(data.postalCode)
      .replace(/\s+/g, "")
      .toUpperCase();
    const city = getString(data.city);
    const service = getString(data.service);
    const referral = getString(data.referral);
    const message = getString(data.message);

    // Verplichte velden controleren
    if (
      !name ||
      !email ||
      !street ||
      !postalCode ||
      !city ||
      !service ||
      !message
    ) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    // Maximale veldlengtes controleren
    if (
      name.length > 120 ||
      email.length > 254 ||
      phone.length > 25 ||
      street.length > 150 ||
      postalCode.length > 6 ||
      city.length > 100 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        {
          error: "Een of meerdere velden bevatten te veel tekens.",
        },
        { status: 400 }
      );
    }

    // E-mailadres controleren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Vul een geldig e-mailadres in." },
        { status: 400 }
      );
    }

    // Nederlandse postcode controleren
    const postalCodeRegex = /^[1-9][0-9]{3}[A-Z]{2}$/;

    if (!postalCodeRegex.test(postalCode)) {
      return NextResponse.json(
        {
          error:
            "Vul een geldige Nederlandse postcode in, bijvoorbeeld 1234 AB.",
        },
        { status: 400 }
      );
    }

    // Geselecteerde dienst controleren
    if (!Object.prototype.hasOwnProperty.call(serviceLabels, service)) {
      return NextResponse.json(
        { error: "Selecteer een geldige dienst." },
        { status: 400 }
      );
    }

    // Vindwijze is optioneel, maar wordt gecontroleerd als deze is ingevuld
    if (
      referral &&
      !Object.prototype.hasOwnProperty.call(referralLabels, referral)
    ) {
      return NextResponse.json(
        {
          error:
            "Selecteer een geldige optie bij hoe u ons gevonden heeft.",
        },
        { status: 400 }
      );
    }

    // Resend API-key controleren
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY ontbreekt.");

      return NextResponse.json(
        {
          error: "De e-mailservice is momenteel niet beschikbaar.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const formattedPostalCode =
      `${postalCode.slice(0, 4)} ${postalCode.slice(4)}`;

    const serviceLabel = serviceLabels[service];
    const referralLabel = referral
      ? referralLabels[referral]
      : "Niet opgegeven";

    // Alle gegevens veilig maken voor HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Niet opgegeven");
    const safeStreet = escapeHtml(street);
    const safePostalCode = escapeHtml(formattedPostalCode);
    const safeCity = escapeHtml(city);
    const safeService = escapeHtml(serviceLabel);
    const safeReferral = escapeHtml(referralLabel);
    const safeMessage = escapeHtml(message);

    const rows = [
      ["Naam", safeName],
      ["E-mailadres", safeEmail],
      ["Telefoonnummer", safePhone],
      ["Straat en huisnummer", safeStreet],
      ["Postcode", safePostalCode],
      ["Woonplaats", safeCity],
      ["Gewenste dienst", safeService],
      ["Hoe heeft de klant ons gevonden?", safeReferral],
    ];

    const htmlRows = rows
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#1a3a52;width:40%;vertical-align:top;">
              ${label}
            </td>
            <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#374151;vertical-align:top;">
              ${value}
            </td>
          </tr>
        `
      )
      .join("");

    const textRows = [
      `Naam: ${name}`,
      `E-mailadres: ${email}`,
      `Telefoonnummer: ${phone || "Niet opgegeven"}`,
      `Straat en huisnummer: ${street}`,
      `Postcode: ${formattedPostalCode}`,
      `Woonplaats: ${city}`,
      `Gewenste dienst: ${serviceLabel}`,
      `Hoe heeft de klant ons gevonden?: ${referralLabel}`,
    ].join("\n");

    // Voorkom nieuwe regels in het onderwerp
    const safeSubjectName = name.replace(/[\r\n]/g, " ");

    const { error } = await resend.emails.send({
      from: "DTG Cleaning <info@dtgcleaning.nl>",
      to: ["info@dtgcleaning.nl"],
      replyTo: email,
      subject: `Nieuwe offerteaanvraag van ${safeSubjectName}`,
      html: `
        <!DOCTYPE html>
        <html lang="nl">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Nieuwe offerteaanvraag</title>
          </head>
          <body style="margin:0;padding:32px 16px;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#374151;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background-color:#ffffff;border-radius:10px;overflow:hidden;">
              <tr>
                <td style="padding:28px 30px;background-color:#1a3a52;color:#ffffff;">
                  <h1 style="margin:0;font-size:22px;line-height:1.4;font-weight:700;">
                    Nieuwe offerteaanvraag
                  </h1>
                  <p style="margin:8px 0 0;font-size:14px;line-height:1.6;color:#e5edf3;">
                    Er is een nieuwe aanvraag ontvangen via dtgcleaning.nl.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:26px 30px 12px;">
                  <h2 style="margin:0 0 16px;font-size:17px;color:#1a3a52;">
                    Gegevens van de klant
                  </h2>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;line-height:1.6;">
                    ${htmlRows}
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:18px 30px 28px;">
                  <h2 style="margin:0 0 12px;font-size:17px;color:#1a3a52;">
                    Bericht / aanvullende informatie
                  </h2>

                  <div style="padding:16px;background-color:#f8fafc;border:1px solid #e5e7eb;border-radius:6px;font-size:14px;line-height:1.7;color:#374151;">
                    ${safeMessage}
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:18px 30px;background-color:#f8fafc;border-top:1px solid #e5e7eb;font-size:12px;line-height:1.6;color:#6b7280;">
                  Dit bericht is automatisch verzonden via het contactformulier van
                  <strong>dtgcleaning.nl</strong>.
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
      text: `${textRows}

BERICHT / AANVULLENDE INFORMATIE
${message}

---
Deze aanvraag is verzonden via het contactformulier van dtgcleaning.nl.`,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          error:
            "Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw of neem telefonisch contact op.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Uw offerteaanvraag is succesvol ontvangen. Wij nemen binnen 24 uur contact met u op.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        error:
          "Er is een technische fout opgetreden. Probeer het later opnieuw.",
      },
      { status: 500 }
    );
  }
}

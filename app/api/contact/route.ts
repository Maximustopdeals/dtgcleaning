
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { randomUUID } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactFormData = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  referral?: unknown;
  message?: unknown;
};

// HTML-inhoud veilig maken
const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\r?\n/g, "<br />");

// Optionele velden verwerken
const getOptionalValue = (value: unknown): string =>
  typeof value === "string" && value.trim()
    ? value.trim()
    : "Niet opgegeven";

export async function POST(req: Request) {
  try {
    // JSON-gegevens ophalen uit het contactformulier
    const body: unknown = await req.json();

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        { error: "Ongeldige formuliergegevens." },
        { status: 400 }
      );
    }

    const data = body as ContactFormData;

    const name =
      typeof data.name === "string" ? data.name.trim() : "";

    const email =
      typeof data.email === "string" ? data.email.trim() : "";

    const message =
      typeof data.message === "string" ? data.message.trim() : "";

    const phone = getOptionalValue(data.phone);
    const service = getOptionalValue(data.service);
    const referral = getOptionalValue(data.referral);

    // Verplichte velden controleren
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    // E-mailadres valideren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Voer een geldig e-mailadres in." },
        { status: 400 }
      );
    }

    // Resend API-key controleren
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY ontbreekt.");

      return NextResponse.json(
        {
          error:
            "De e-mailservice is momenteel niet beschikbaar.",
        },
        { status: 500 }
      );
    }

    // Resend pas initialiseren bij een daadwerkelijke aanvraag
    const resend = new Resend(apiKey);

    // Gegevens veilig maken voor HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeReferral = escapeHtml(referral);
    const safeMessage = escapeHtml(message);

    // Onderwerp beveiligen tegen ongewenste regeleinden
    const safeSubjectName = name.replace(/[\r\n]/g, " ");

    // Resend e-mail versturen
    const { error } = await resend.emails.send(
      {
        from: "DTG Cleaning <info@dtgcleaning.nl>",
        to: ["info@dtgcleaning.nl"],
        replyTo: email,
        subject: `Nieuwe aanvraag via DTG Cleaning van ${safeSubjectName}`,

        // HTML e-mail
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">

            <h2 style="color: #0e304d;">
              Nieuwe contactaanvraag via DTG Cleaning
            </h2>

            <p>
              Er is een nieuwe aanvraag ontvangen via het contactformulier.
            </p>

            <table style="width: 100%; border-collapse: collapse;">

              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <strong>Naam</strong>
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <strong>E-mail</strong>
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${safeEmail}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <strong>Telefoon</strong>
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${safePhone}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <strong>Gewenste dienst</strong>
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${safeService}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <strong>Hoe gevonden</strong>
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${safeReferral}
                </td>
              </tr>

            </table>

            <h3 style="color: #0e304d; margin-top: 25px;">
              Bericht
            </h3>

            <div style="background: #f5f7f9; padding: 15px; border-radius: 6px;">
              ${safeMessage}
            </div>

            <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />

            <p style="font-size: 12px; color: #888;">
              Dit bericht is automatisch verzonden via het contactformulier van dtgcleaning.nl.
            </p>

          </div>
        `,

        // Platte tekstversie
        text: `
Nieuwe contactaanvraag via DTG Cleaning

Naam: ${name}
E-mail: ${email}
Telefoon: ${phone}
Gewenste dienst: ${service}
Hoe gevonden: ${referral}

Bericht:
${message}
        `,

        // Unieke sleutel per verzending
        headers: {
          "Idempotency-Key": randomUUID(),
        },
      }
    );

    // Resend foutafhandeling
    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        { error: "E-mail kon niet verzonden worden." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Bedankt voor uw bericht! Ik neem binnen 24 uur contact met u op.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Server Error:", err);

    return NextResponse.json(
      { error: "Er is een serverfout opgetreden." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

// Dit zorgt dat de API route niet gecached wordt en op Node.js draait
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoppjdk";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validatie
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Voer een geldig e-mailadres in." },
        { status: 400 }
      );
    }

    // Doorsturen naar Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Niet opgegeven",
        service: service || "Niet opgegeven",
        message,
        _subject: `Nieuwe aanvraag van ${name} via dtgcleaning.nl`,
        _replyto: email,
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Bedankt voor uw bericht! Ik neem binnen 24 uur contact met u op.",
        },
        { status: 200 }
      );
    } else {
      const errorData = await response.json().catch(() => null);
      console.error("Formspree fout:", errorData);
      return NextResponse.json(
        { error: "Er is iets misgegaan bij het versturen. Probeer het later opnieuw." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API route fout:", error);
    return NextResponse.json(
      { error: "Er is een technische fout opgetreden." },
      { status: 500 }
    );
  }
}

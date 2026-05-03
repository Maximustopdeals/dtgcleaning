# D.T.G. Cleaning Website

Een complete Next.js website voor D.T.G. Cleaning, een glasbewassingsbedrijf in Nijkerk.

## Wat is er nieuw in deze versie?

- ✅ **BackToTop knop** toegevoegd (linksonder, verschijnt na scrollen)
- ✅ **Favicon** toegevoegd voor browser tab
- ✅ **Consistente groene vinkjes** op alle pagina's
- ✅ **WAAROM D.T.G. CLEANING** sectie toegevoegd op Schoonmaakdiensten pagina
- ✅ **Groene vinkjes** in "Maak kennis met mij" sectie op Over Mij pagina
- ✅ JavaScript fouten opgelost

## Projectstructuur

```
dtgcleaning-website/
├── app/                          # Next.js App Router pagina's
│   ├── page.tsx                  # Homepagina
│   ├── layout.tsx                # Root layout met metadata
│   ├── globals.css               # Globale CSS styles
│   ├── contact/
│   │   └── page.tsx              # Contact pagina met FAQ
│   ├── over-mij/
│   │   └── page.tsx              # Over mij pagina
│   └── schoonmaakdiensten/
│       └── page.tsx              # Diensten pagina
├── components/                   # Herbruikbare componenten
│   ├── Navigation.tsx            # Navigatie menu
│   ├── Footer.tsx                # Footer
│   ├── WhatsAppButton.tsx        # WhatsApp chat knop
│   └── BackToTop.tsx             # Terug naar boven knop
├── public/                       # Statische bestanden
│   └── images/                   # Alle afbeeldingen
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── next-env.d.ts
├── postcss.config.js
└── README.md
```

## Pagina's

- **/** - Homepagina
- **/schoonmaakdiensten** - Dienstenoverzicht met WAAROM D.T.G. CLEANING sectie
- **/over-mij** - Over Dominique
- **/contact** - Contactformulier en FAQ

## Installatie & Lokale Ontwikkeling

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Build voor Productie

```bash
# Maak productie build
npm run build

# De statische bestanden worden geplaatst in de 'dist' map
```

## Deploy naar Vercel

### Optie 1: Via GitHub (Aanbevolen)

1. Maak een nieuwe repository op GitHub
2. Upload de uitgepakte bestanden naar de repository (niet de map zelf, maar de inhoud!)
3. Ga naar [vercel.com](https://vercel.com) en log in
4. Klik "Add New Project"
5. Importeer je GitHub repository
6. Vercel detecteert automatisch Next.js
7. Klik "Deploy"

### Optie 2: Via Vercel CLI

```bash
# Installeer Vercel CLI
npm i -g vercel

# Login en deploy
vercel
```

## Belangrijk: Uploaden naar GitHub

Wanneer je de bestanden uploadt naar GitHub, zorg er dan voor dat je de **inhoud** van de map uploadt, niet de map zelf. De structuur op GitHub moet er zo uitzien:

```
repository-naam/
├── app/
├── components/
├── public/
├── package.json
├── next.config.js
└── ...etc
```

Niet zo:
```
repository-naam/
└── dtgcleaning-website/     ← FOUT! Deze extra map mag er niet zijn
    ├── app/
    ├── components/
    └── ...etc
```

## Configuratie

### Contactformulier
Het contactformulier gebruikt Formspree. Wijzig de form action in `app/contact/page.tsx` als je een eigen Formspree endpoint wilt gebruiken.

### Google Analytics & Tag Manager
De tracking codes zijn al geconfigureerd in `app/layout.tsx`. Vervang de huidige codes door je eigen GTM en GA codes.

### Afbeeldingen
Alle afbeeldingen bevinden zich in `public/images/`. Je kunt nieuwe afbeeldingen toevoegen door ze in deze map te plaatsen en te refereren als `/images/bestandsnaam.jpg`.

## Technologieën

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (iconen)

## SEO

De website is geoptimaliseerd voor SEO met:
- Server-side rendering (SSR)
- Meta tags per pagina
- Semantische HTML
- Snelle laadtijden
- Mobielvriendelijk ontwerp

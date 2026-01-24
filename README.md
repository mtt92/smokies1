# 🌬️ SMOKIES Digital Smoke - Website

Sito web professionale per la catena di Vape Shop SMOKIES con **4 sedi in Liguria**.

## 🏪 Sedi

- **Smokie's Savona**: Via Paolo Boselli, 32r - Tel: 389 1745622
- **Smokie's Voltri**: Via Carlo Camozzini, 23r - Tel: 320 6741637
- **Smokie's Bolzaneto**: Via Costantino Reta, 113R - Tel: 388 4727981
- **Smokie's Foce**: Piazza Tommaseo, 18/R - Tel: 349 2238847

## 🚀 Tecnologie Utilizzate

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: Lucide React
- **Font**: Inter (Google Fonts)
- **Language**: TypeScript

## 📦 Installazione

1. **Estrai la cartella** e aprila in Visual Studio Code

2. **Installa le dipendenze**:
```bash
npm install
```

3. **Avvia il server di sviluppo**:
```bash
npm run dev
```

4. Apri il browser su [http://localhost:3000](http://localhost:3000)

## 🎨 Struttura del Progetto

```
smokies-website/
├── app/
│   ├── layout.tsx          # Layout globale + SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Stili globali + glassmorphism
│   ├── sitemap.ts          # Sitemap XML
│   ├── robots.ts           # Robots.txt
│   ├── prodotti/
│   │   └── page.tsx        # Pagina prodotti
│   ├── sedi/
│   │   └── page.tsx        # Pagina sedi
│   ├── galleria/
│   │   └── page.tsx        # Pagina galleria
│   ├── chi-siamo/
│   │   └── page.tsx        # Pagina chi siamo
│   └── contatti/
│       └── page.tsx        # Pagina contatti
├── components/
│   ├── Navbar.tsx          # Barra di navigazione
│   ├── Footer.tsx          # Footer
│   ├── Button.tsx          # Componente bottone
│   ├── FloatingWhatsApp.tsx # Bottone WhatsApp flottante
│   └── SchemaOrg.tsx       # Schema.org JSON-LD
└── public/
    └── images/             # Immagini della galleria
```

## ⚙️ Configurazione

### Form Contatti (Formspree)

1. Vai su [formspree.io](https://formspree.io) e crea un account
2. Crea un nuovo form e copia il Form ID
3. Apri `app/contatti/page.tsx`
4. Sostituisci `YOUR_FORM_ID` alla riga 19 con il tuo Form ID:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### WhatsApp

Sostituisci il numero di telefono `393123456789` con il tuo numero nei seguenti file:
- `components/Navbar.tsx`
- `components/FloatingWhatsApp.tsx`
- `app/page.tsx`
- `app/sedi/page.tsx`

### Dati Sedi

Modifica i dati delle sedi in `app/sedi/page.tsx` (indirizzi, telefoni, orari).

## 🏗️ Build per Produzione

```bash
npm run build
npm start
```

## 🎯 Features

✅ Design moderno con sfumature green/dark
✅ Animazioni fluide con Framer Motion
✅ Completamente responsive (mobile-first)
✅ **SEO ottimizzato** (meta tags, sitemap, robots.txt, Schema.org)
✅ Performance elevate
✅ Form contatti funzionante
✅ Integrazione WhatsApp
✅ Galleria fotografica con lightbox
✅ **6 pagine complete** (Home, Prodotti, Sedi, Galleria, Chi Siamo, Contatti)
✅ Effetti glassmorphism e backdrop blur

## 📱 Pagine

- **Home** (`/`): Hero, Features, Recensioni, CTA
- **Prodotti** (`/prodotti`): 6 categorie con brand e caratteristiche
- **Sedi** (`/sedi`): Cards con info delle 3 sedi + mappe
- **Galleria** (`/galleria`): Grid fotografica con lightbox
- **Chi Siamo** (`/chi-siamo`): Storia, valori, timeline
- **Contatti** (`/contatti`): Form di contatto + info

## 🎨 Palette Colori

- **Background**: Gradiente sfumato `#1a1a1a` → `#0f1f0f` (dark con sfumature verdi)
- **Cards**: `rgba(30, 30, 30, 0.6)` con glassmorphism
- **Accent Primary**: `#22c55e` (green-500)
- **Accent Secondary**: `#10b981` (emerald-500)
- **Text**: `#fafafa` (zinc-100)
- **Borders**: `rgba(34, 197, 94, 0.1)` (green con trasparenza)

## 📞 Supporto

Per domande o problemi, contatta il team di sviluppo.

## 🚀 SEO Implementato

- ✅ Meta tags ottimizzati per ogni pagina
- ✅ Open Graph per social sharing
- ✅ Twitter Cards
- ✅ Sitemap.xml dinamico
- ✅ Robots.txt configurato
- ✅ Schema.org JSON-LD (LocalBusiness)
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Alt text su tutte le immagini

---

**© 2025 SMOKIES Digital Smoke - Tutti i diritti riservati**

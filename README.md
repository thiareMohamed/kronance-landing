# Kronance Corporate

Site corporate international pour **Kronance**, entreprise technologique spécialisée en :

- Web & Mobile Development
- DevOps & Cloud
- DevSecOps & Security
- AI & Innovation
- API & Backend Engineering

> Positionnement : corporate technology company (pas une landing SaaS produit).

---

## Stack technique

- Next.js 14 (App Router)
- TypeScript (strict)
- TailwindCSS
- Framer Motion
- Lucide Icons
- next-intl (i18n)
- next-themes (dark/light mode)

---

## Fonctionnalités clés

- **Internationalisation EN/FR**
  - routing localisé : `/en` et `/fr`
  - textes externalisés dans `messages/en.json` et `messages/fr.json`
- **Dark / Light mode**
  - `next-themes` avec `defaultTheme: "system"`
  - toggle dans la navbar
- **Architecture modulaire**
  - composants réutilisables (`SectionWrapper`, `ServiceCard`, `ContactForm`, etc.)
  - sections corporate séparées dans `/sections`
- **Sections corporate**
  - Hero
  - About
  - Services
  - Core Platform / Features
  - Projects (mock case studies)
  - Technology / Expertise
  - Security / DevSecOps
  - AI / Innovation
  - Contact
  - Footer
- SEO de base (metadata globale)
- Responsive mobile-first

---

## Structure du projet

```bash
.
├── app
│   ├── [locale]
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── layout.tsx
├── components
│   ├── providers
│   ├── ui
│   ├── section-wrapper.tsx
│   ├── service-card.tsx
│   ├── contact-form.tsx
│   └── ...
├── sections
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── projects-section.tsx
│   ├── contact-section.tsx
│   └── ...
├── messages
│   ├── en.json
│   └── fr.json
├── i18n
├── lib
├── styles
└── middleware.ts
```

---

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Puis ouvrir :

- http://localhost:3000/en
- http://localhost:3000/fr

---

## Vérifications qualité

```bash
npm run lint
npm run build
```

---

## Déploiement Vercel

1. Importer le repository dans Vercel
2. Framework détecté automatiquement (Next.js)
3. Build command : `npm run build`
4. Deploy

---

## Notes

- Frontend uniquement (pas de backend applicatif)
- Données mockées pour sections corporate
- Projet prêt pour déploiement Vercel

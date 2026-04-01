# Kronance Landing

Landing page premium et internationale pour **Kronance**, plateforme globale tout-en-un pour :

- Développement Web & Mobile
- DevOps (CI/CD, déploiement, observabilité)
- DevSecOps (scanning, secrets, conformité)
- Intelligence Artificielle (APIs IA, automatisation intelligente)
- Backend & API
- Outils cloud et infrastructure

> Stack : Next.js 14 (App Router), TypeScript, TailwindCSS, next-intl, next-themes, Framer Motion, Lucide Icons.

---

## Fonctionnalités implémentées

- Landing page moderne SaaS (style futuriste, glassmorphism léger, glow)
- Internationalisation **EN/FR** via `next-intl`
  - Routes localisées : `/en` et `/fr`
  - Traductions pour Hero, Features, CTA, Footer, FAQ et sections principales
- Dark/Light mode via `next-themes`
  - Préférence par défaut : `system`
  - Toggle dans la navbar
- Architecture modulaire et scalable :
  - `app/`, `components/`, `sections/`, `messages/`, `lib/`, `styles/`
- Animations fluides avec Framer Motion
- SEO metadata (title, description, OpenGraph, Twitter)
- Accessibilité de base (aria labels, accordion accessible)
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
│   └── ...
├── i18n
├── lib
├── messages
│   ├── en.json
│   └── fr.json
├── sections
├── styles
└── middleware.ts
```

---

## Démarrage local

### 1) Installer les dépendances

```bash
npm install
```

### 2) Lancer en développement

```bash
npm run dev
```

Puis ouvrir :  
- `http://localhost:3000/en`  
- `http://localhost:3000/fr`

---

## Scripts

```bash
npm run dev    # mode développement
npm run lint   # vérification lint
npm run build  # build production
npm run start  # lancer le build en local
```

---

## Déploiement sur Vercel

1. Importer le repository dans Vercel.
2. Laisser les paramètres par défaut (framework Next.js détecté automatiquement).
3. Build command : `npm run build`
4. Output : géré automatiquement par Next.js
5. Déployer.

---

## Notes

- Projet frontend-only (aucun backend)
- Données mockées
- Prêt pour production côté landing page

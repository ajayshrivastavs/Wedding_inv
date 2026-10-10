# Vinayak & Niharika — Royal Wedding Invitation

Premium, mobile-first Maharashtrian digital wedding invitation.

## Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Edit wedding details

Open:

`src/main.tsx`

At the top, edit the `weddingData` object. Wedding content is intentionally centralized there.

## Notes

- No backend or database.
- No paid APIs.
- Google Maps opens the supplied venue link.
- Phone buttons use `tel:` on supported devices.
- Share uses the Web Share API when available and clipboard fallback otherwise.
- Music is intentionally not included/autoplayed.

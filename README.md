# DT Hamilton Mechanical

The DT Hamilton Mechanical website uses the Next.js App Router, React, and Virtue Composer.

## Local development

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Run `npm run check` for ESLint, strict Composer Doctor, and a production build. Google Sans is served from the font file in `app/fonts/`.

## Project layout

- `app/(pages)/` contains public pages and their CSS modules.
- `app/api/contact/route.js` handles quote submissions.
- `components/site/` contains shared site components and their scoped styles.
- `components/composer/` contains the local Composer wrappers. Import new Composer components through this directory.
- `lib/config/` and `lib/seo/` hold shared site configuration and page metadata.
- `styles/` contains the existing global stylesheet and Composer foundation CSS.
- `public/` contains the images, logos, and other static assets.

Composer is installed with the Section and Button wrappers. Its config records file-specific exceptions for the existing layout, mobile navigation, and quote form. Remove each exception when the corresponding UI is migrated.

The contact endpoint uses `GMAIL_USER`, `GMAIL_PASS`, `FROM_EMAIL`, and `BUSINESS_EMAIL` from the server environment. Use a mock transport for local verification.

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production domain — used for canonical URLs, hreflang and the sitemap.
  site: 'https://rail.yiantechglobal.com',

  integrations: [
    // Generates /sitemap-index.xml + /sitemap-0.xml at build time.
    sitemap(),
  ],

  vite: {
    // Tailwind CSS v4 is wired in through the official Vite plugin.
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      // English stays prefix-free ("/", "/about").
      // Spanish lives under "/es/..." — see src/pages/es/.
      prefixDefaultLocale: false,
    },
  },
});

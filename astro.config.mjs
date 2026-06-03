// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";
import sanity from '@sanity/astro';
import { sessionDrivers } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    configPath: 'wrangler.build.jsonc',
  }),
  session: {
    driver: sessionDrivers.lruCache(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sanity({
    projectId: "8wtid1bt",
    dataset: "production",
    useCdn: false, // for static builds
    // token: import.meta.env.SANITY_TOKEN, // needs read access
    // perspective: 'previewDrafts',
  })],
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  output: 'static',
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

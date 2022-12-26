import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import embeds from 'astro-embed/integration';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://lucianocanziani.netlify.app/",
  integrations: [mdx(), sitemap(), tailwind(), react(),embeds()],
  legacy: {
    astroFlavoredMarkdown: true,
  },
});

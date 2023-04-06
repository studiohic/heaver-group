import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import svelte from "@astrojs/svelte";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  site: "https://heavergroup.com",
  integrations: [
    svelte(),
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        config: "storyblok/Config",
        navigation: "storyblok/Navigation",
        nav_item: "storyblok/NavItem",
        nav_sub_item: "storyblok/NavSubItem",
        tabbed_content: "storyblok/TabbedContent",
        ticker: "storyblok/Ticker",
      },
    }),
    sitemap({
      filter: (page) => page !== "https://heavergroup.com/config/",
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});

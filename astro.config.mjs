import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";

import svelte from "@astrojs/svelte";
const m2dxOptions = {
  styleDirectives: true,
};

export default defineConfig({
  output: "server",
  integrations: [mdx(), tailwind(), prefetch(), svelte()],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    extendDefaultPlugins: true,
    astroFlavoredMarkdown: false,
    extendPlugins: false,
  },
  adapter: vercel(),
});

import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";
import remarkDirective from "remark-directive";

/** @type {import('astro-m2dx').Options} */
import image from "@astrojs/image";
const m2dxOptions = {
  styleDirectives: true
};

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [mdx(), tailwind(), prefetch(), image()],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    extendDefaultPlugins: true,
    astroFlavoredMarkdown: false
  },
  adapter: vercel()
});
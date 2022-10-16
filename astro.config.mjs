import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [prefetch(), tailwind()],
  adapter: vercel(),
});

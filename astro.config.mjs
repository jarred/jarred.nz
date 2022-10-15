import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [prefetch(), tailwind()],
});

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 11654,
    host: "0.0.0.0"
  },
  site: "https://orkhasnat.github.io",
  base: "/ISC-BD",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon()]
});
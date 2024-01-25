import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 11654,
    host: "0.0.0.0"
  },
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    react()]
});
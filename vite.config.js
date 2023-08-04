import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "AFTA WALLET - A cross-border multi-currency wallet",
        short_name: "AFTA WALLET",
        description: "AFTA WALLET - A cross-border multi-currency wallet",
        theme_color: "#ffffff",
      },
    }),
  ],
});

import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
    },

    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
    includeAssets: ["favicon.ico", "robots.txt", "safari-pinned-tab.svg"],
    manifest: {
      name: "Afta Wallet",
      short_name: "Afta Wallet",
      description: "AFTA WALLET - A cross-border multi-currency wallet",
      theme_color: "#ffffff",
      icons: [
        {
          src: "logo-trans.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
  }), sentryVitePlugin({
    org: "flowerdream",
    project: "after-wallet"
  }), sentryVitePlugin({
    org: "flowerdream",
    project: "after-wallet"
  })],
});
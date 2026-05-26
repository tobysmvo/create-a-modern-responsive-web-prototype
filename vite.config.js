import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),

      manifest: {
        name: "HomèVo – Laboratoire Éco-Design",
        short_name: "HomèVo",

        description:
          "Plateforme interactive d’analyse climatique, architecturale et environnementale.",

        theme_color: "#1f3b2f",
        background_color: "#f4efe4",

        display: "standalone",

        orientation: "portrait",

        scope: "/",
        start_url: "/",

        lang: "fr",

        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },

          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },

          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
});
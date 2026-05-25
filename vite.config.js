import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true  // Active la PWA en mode dev pour tester
      },
      includeAssets: [
        'favicon-16x16.png',
        'favicon-32x32.png',
        'apple-touch-icon.png'
      ],
      manifest: {
        name: 'HomèVo — Laboratoire Éco-Design',
        short_name: 'HomèVo',
        description: "Plateforme d'analyse bioclimatique et d'écoconception architecturale.",
        theme_color: '#344C3C',
        background_color: '#F8F4EC',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        lang: 'fr',
        categories: ['productivity', 'education', 'utilities'],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        // Mise en cache des assets statiques
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            // Cache des images modèles architecturaux
            urlPattern: /\/assets\/models\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'homevo-models',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 jours
              }
            }
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    include: ['jspdf']
  }
})
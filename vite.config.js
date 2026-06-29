import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // ─── Gzip compression for .js, .css, .html, .svg ─────────────────────
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress files > 1KB
    }),

    // ─── Brotli compression (preferred by modern browsers) ────────────────
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ],

  build: {
    // ─── Target modern browsers for smaller bundles ────────────────────────
    target: ['es2020', 'chrome87', 'firefox78', 'safari14', 'edge88'],

    // ─── Asset inlining threshold (inline < 4KB as base64) ────────────────
    assetsInlineLimit: 4096,

    // ─── CSS code splitting — one chunk per async chunk ───────────────────
    cssCodeSplit: true,

    // ─── Source maps only in dev ──────────────────────────────────────────
    sourcemap: false,

    // ─── Vite 8 uses Oxc minifier by default (faster than esbuild) ───────
    // minify: 'oxc' — this is already the default, no override needed

    // ─── Rollup options: manual chunk splitting ────────────────────────────
    rollupOptions: {
      output: {
        // Chunk naming — content hash for cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop() || '';
          if (/png|jpe?g|svg|gif|webp|avif/.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (ext === 'css') {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/woff2?|ttf|otf|eot/.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },

        // ─── Manual chunk splitting ──────────────────────────────────────
        manualChunks(id) {
          // Vendor: React core (tiny, always needed)
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // Vendor: React Router
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          // Vendor: Lucide icons (tree-shaken per icon)
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          // Vendor: Markdown renderer (heavy, only loaded on product detail pages)
          if (id.includes('node_modules/markdown-to-jsx')) {
            return 'vendor-markdown';
          }
          // Data layer — static data files
          if (id.includes('/src/data/')) {
            return 'data';
          }
          // Page chunks — each page route gets its own chunk
          if (id.includes('/src/pages/')) {
            const match = id.match(/\/pages\/(\w+)/);
            if (match) return `page-${match[1].toLowerCase()}`;
          }
        },
      },
    },

    // ─── Report on large chunks ───────────────────────────────────────────
    chunkSizeWarningLimit: 200, // Warn at 200KB
  },

  // ─── Dev server optimizations ─────────────────────────────────────────────
  server: {
    // Pre-bundle dependencies for faster dev HMR
    hmr: true,
  },

  // ─── Dependency pre-bundling ────────────────────────────────────────────
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
    ],
    exclude: [
      // Heavy deps only used in specific pages — let Vite lazy-load them
      'markdown-to-jsx',
    ],
  },
});

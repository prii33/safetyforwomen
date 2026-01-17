import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        viteCompression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 10240,
        }),
        viteCompression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 10240,
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'icons': ['react-icons'],
              'maps': ['leaflet', 'react-leaflet'],
              'markdown': ['react-markdown', 'remark-gfm'],
              'motion': ['framer-motion']
            }
          }
        },
        chunkSizeWarningLimit: 1000,
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: mode === 'production',
          }
        }
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom']
      }
    };
});

import path, { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import handlebars from 'vite-plugin-handlebars';
import copy from 'rollup-plugin-copy';

const requestAnalytics = () => ({
  name: 'request-analytics',
  configureServer(server) {
    return () => {
      server.middlewares.use((req, res, next) => {
        console.log(`${req.method.toUpperCase()} ${req.url}`)
        next()
      })
    }
  }
})

const hotUpdateReport = () => ({
  name: 'hot-update-report',
  handleHotUpdate({ file, timestamp, modules }) {
    console.log(`[${file}]${timestamp}: ${modules.length} module(s) updated`)
  }
})

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/html/partials'),
    }),
    svelte(),
    requestAnalytics(),
    hotUpdateReport(),
    copy({
      targets: [
        { src: 'cache/preserve-cache-folder.txt', dest: '../assets/cache' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    outDir: '../assets/',
    rollupOptions: {
      input: {
        'theme': resolve(__dirname, 'src/js/theme.js'),
      },
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.match(/\.css/)) {
            return `css/${assetInfo.name}`;
          }
          return assetInfo.name;
        },
      }
    }
  }
};

// vite.config.js
import path, { resolve } from "path";
import { svelte } from "file:///Users/SOURIYA/Documents/dev/elegant-seo-website/_dev/node_modules/.pnpm/@sveltejs+vite-plugin-svelte@2.4.1_svelte@3.59.1+vite@4.3.9/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import handlebars from "file:///Users/SOURIYA/Documents/dev/elegant-seo-website/_dev/node_modules/.pnpm/vite-plugin-handlebars@1.6.0_sass@1.62.1/node_modules/vite-plugin-handlebars/dist/index.js";
import copy from "file:///Users/SOURIYA/Documents/dev/elegant-seo-website/_dev/node_modules/.pnpm/rollup-plugin-copy@3.4.0/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
var __vite_injected_original_dirname = "/Users/SOURIYA/Documents/dev/elegant-seo-website/_dev";
var requestAnalytics = () => ({
  name: "request-analytics",
  configureServer(server) {
    return () => {
      server.middlewares.use((req, res, next) => {
        console.log(`${req.method.toUpperCase()} ${req.url}`);
        next();
      });
    };
  }
});
var hotUpdateReport = () => ({
  name: "hot-update-report",
  handleHotUpdate({ file, timestamp, modules }) {
    console.log(`[${file}]${timestamp}: ${modules.length} module(s) updated`);
  }
});
var vite_config_default = {
  plugins: [
    handlebars({
      partialDirectory: resolve(__vite_injected_original_dirname, "src/html/partials")
    }),
    svelte(),
    requestAnalytics(),
    hotUpdateReport(),
    copy({
      targets: [
        { src: "cache/preserve-cache-folder.txt", dest: "../assets/cache" }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    outDir: "../assets/",
    rollupOptions: {
      input: {
        "theme": resolve(__vite_injected_original_dirname, "src/js/theme.js")
      },
      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.match(/\.css/)) {
            return `css/${assetInfo.name}`;
          }
          return assetInfo.name;
        }
      }
    }
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvU09VUklZQS9Eb2N1bWVudHMvZGV2L2VsZWdhbnQtc2VvLXdlYnNpdGUvX2RldlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL1NPVVJJWUEvRG9jdW1lbnRzL2Rldi9lbGVnYW50LXNlby13ZWJzaXRlL19kZXYvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL1NPVVJJWUEvRG9jdW1lbnRzL2Rldi9lbGVnYW50LXNlby13ZWJzaXRlL19kZXYvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCwgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tICdAc3ZlbHRlanMvdml0ZS1wbHVnaW4tc3ZlbHRlJztcbmltcG9ydCBoYW5kbGViYXJzIGZyb20gJ3ZpdGUtcGx1Z2luLWhhbmRsZWJhcnMnO1xuaW1wb3J0IGNvcHkgZnJvbSAncm9sbHVwLXBsdWdpbi1jb3B5JztcblxuY29uc3QgcmVxdWVzdEFuYWx5dGljcyA9ICgpID0+ICh7XG4gIG5hbWU6ICdyZXF1ZXN0LWFuYWx5dGljcycsXG4gIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cmVxLm1ldGhvZC50b1VwcGVyQ2FzZSgpfSAke3JlcS51cmx9YClcbiAgICAgICAgbmV4dCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgaG90VXBkYXRlUmVwb3J0ID0gKCkgPT4gKHtcbiAgbmFtZTogJ2hvdC11cGRhdGUtcmVwb3J0JyxcbiAgaGFuZGxlSG90VXBkYXRlKHsgZmlsZSwgdGltZXN0YW1wLCBtb2R1bGVzIH0pIHtcbiAgICBjb25zb2xlLmxvZyhgWyR7ZmlsZX1dJHt0aW1lc3RhbXB9OiAke21vZHVsZXMubGVuZ3RofSBtb2R1bGUocykgdXBkYXRlZGApXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGx1Z2luczogW1xuICAgIGhhbmRsZWJhcnMoe1xuICAgICAgcGFydGlhbERpcmVjdG9yeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaHRtbC9wYXJ0aWFscycpLFxuICAgIH0pLFxuICAgIHN2ZWx0ZSgpLFxuICAgIHJlcXVlc3RBbmFseXRpY3MoKSxcbiAgICBob3RVcGRhdGVSZXBvcnQoKSxcbiAgICBjb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgeyBzcmM6ICdjYWNoZS9wcmVzZXJ2ZS1jYWNoZS1mb2xkZXIudHh0JywgZGVzdDogJy4uL2Fzc2V0cy9jYWNoZScgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgfVxuICB9LFxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4uL2Fzc2V0cy8nLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgICd0aGVtZSc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2pzL3RoZW1lLmpzJyksXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnanMvW25hbWVdLmpzJyxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUubWF0Y2goL1xcLmNzcy8pKSB7XG4gICAgICAgICAgICByZXR1cm4gYGNzcy8ke2Fzc2V0SW5mby5uYW1lfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZTtcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlWLE9BQU8sUUFBUSxlQUFlO0FBQy9XLFNBQVMsY0FBYztBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxtQkFBbUIsT0FBTztBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLGdCQUFnQixRQUFRO0FBQ3RCLFdBQU8sTUFBTTtBQUNYLGFBQU8sWUFBWSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVM7QUFDekMsZ0JBQVEsSUFBSSxHQUFHLElBQUksT0FBTyxZQUFZLEtBQUssSUFBSSxLQUFLO0FBQ3BELGFBQUs7QUFBQSxNQUNQLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTSxrQkFBa0IsT0FBTztBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxRQUFRLEdBQUc7QUFDNUMsWUFBUSxJQUFJLElBQUksUUFBUSxjQUFjLFFBQVEsMEJBQTBCO0FBQUEsRUFDMUU7QUFDRjtBQUVBLElBQU8sc0JBQVE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULGtCQUFrQixRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLElBQzFELENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxJQUNQLGlCQUFpQjtBQUFBLElBQ2pCLGdCQUFnQjtBQUFBLElBQ2hCLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLEVBQUUsS0FBSyxtQ0FBbUMsTUFBTSxrQkFBa0I7QUFBQSxNQUNwRTtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLFNBQVMsUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUMvQztBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsS0FBSyxNQUFNLE9BQU8sR0FBRztBQUNqQyxtQkFBTyxPQUFPLFVBQVU7QUFBQSxVQUMxQjtBQUNBLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=

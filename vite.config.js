import path, { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const outputPluginStats = () => ({
  name: 'output-plugin-stats',
  configResolved(config) {
    const plugins = config.plugins.map((plugin) => plugin.name)
    console.log(`Your project has ${plugins.length} Vite plugins.`)
    console.table(plugins)
  }
})

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
  handleHotUpdate({file, timestamp, modules}) {
    console.log(`${timestamp}: ${modules.length} module(s) updated`)
  }
})

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'html/partials'),
    }),
    outputPluginStats(),
    requestAnalytics(),
    hotUpdateReport(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    }
  },
};

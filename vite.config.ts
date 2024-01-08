import { fileURLToPath, URL } from 'node:url'

// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'


const proxy = {
  '/api': {
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/api/, '')
  },
  '/new-api': {
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/new-api/, '')
  },
}

export default defineConfig({
  // base: base,

  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    hmr: {
      overlay: false
    },
    proxy: proxy
  },

  build: {
    sourcemap: false
  }
})

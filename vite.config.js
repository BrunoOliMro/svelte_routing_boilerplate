import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        landing: path.resolve(__dirname, "index.html"),
        login: path.resolve(__dirname, "login/index.html")
      },
    },
    outDir: "./build/"
  }
})

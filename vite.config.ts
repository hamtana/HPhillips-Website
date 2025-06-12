import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Ensures Vite dev server also handles client-side routing properly
    fs: {
      allow: ['.'],
    },
  }
});
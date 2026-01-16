import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  server: {
    port: 5176,      // <--- Forces this port
    strictPort: true, // <--- Fails if 5176 is taken (optional, keeps it predictable)
  },
})
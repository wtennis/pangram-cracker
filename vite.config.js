import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pangram-cracker/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Biblioteca-musical/',
  server: {
    host: true, // expone el servidor en la red local (muestra la URL "Network")
  },
  preview: {
    host: true,
  },
})
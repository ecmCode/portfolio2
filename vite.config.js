import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { baseURL } from './routeConfig'

// https://vitejs.dev/config/
export default defineConfig({
  base: baseURL,
  plugins: [react()]
})

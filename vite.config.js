import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { baseURL } from './routeConfig'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:baseURL
  },
  base: baseURL,
  plugins: [react()]
})

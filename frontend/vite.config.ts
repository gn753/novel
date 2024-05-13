import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@/pages', replacement: '/src/pages' },
      { find: '@/components', replacement: '/src/components' },
      { find: '@/hooks', replacement: '/src/hooks' },
      { find: '@/layouts', replacement: '/src/layouts' },
      { find: 'node_modules', replacement: '/node_modules' }
    ]
  },
  server: {
    host: 'localhost',
    port: 3000
  }
})

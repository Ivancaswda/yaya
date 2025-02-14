import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  port: {port: 5555},
  build: {
    rollupOptions: {
      external: ['react-toastify']
    }
  },
    resolve: {
    alias: {
      'react-router-dom': require.resolve('react-router-dom'),
    },
  },
})

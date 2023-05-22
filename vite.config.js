import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// docs:: https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4444,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: '@data', replacement: path.resolve(__dirname, 'src/data') },
    ],
  },
})

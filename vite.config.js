import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        // three.js and its react bindings are the bulk of the JS and change
        // far less often than the site content, so give them their own
        // long-lived chunk instead of rebuilding one monolith every deploy.
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei', '@react-spring/three'],
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})

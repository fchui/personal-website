import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: "/",
    plugins: [react()],
    preview: {
      port: env.PORT || 8000,
      host: true,
      strictPort: true
    },
    server: {
      host: true,
      strictPort: true,
      port: env.PORT || 8000, // This is the port which we will use in docker
      // Thanks @sergiomoura for the window fix
      // add the next lines if you're using windows and hot reload doesn't work
      watch: {
        usePolling: true
      }
    },
  }
})

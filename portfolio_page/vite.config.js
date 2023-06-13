import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNesting from 'postcss-nesting';
import tailwindConfig from './tailwind.config';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
        plugins: [
            tailwindConfig,
            postcssNesting
        ],
    },
  },
})

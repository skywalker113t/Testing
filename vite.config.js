import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Make sure it says -swc

export default defineConfig({
  plugins: [react()],
})
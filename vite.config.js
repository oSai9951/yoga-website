import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/yoga-website/', // IMPORTANT: Use your repo name
});

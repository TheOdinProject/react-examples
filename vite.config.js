import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // where `npm run X` was executed i.e. the dir for the example being run
  root: process.env.INIT_CWD,
  plugins: [react()],
});

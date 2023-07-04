import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'emd_ui',
      formats: ['esm'] as any, // Use ESM format instead of UMD
      fileName: 'emd_ui.js', // Remove the format placeholder from the file name
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
});

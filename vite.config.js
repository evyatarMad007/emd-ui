import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'emd_ui',
      formats: ['esm'], // Use ESM format instead of UMD
      fileName: 'emd_ui.js', // Remove the format placeholder from the file name
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        },
        dir: 'dist/src', // Specify the output directory for the source files
        sourcemap: 'inline', // Include inline source maps
      },
      preserveEntrySignatures: 'allow-extension', // Preserve the file extension of entry points
    },
    emptyOutDir: false, // Do not empty the output directory before each build
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'), // Create an alias for the src folder
    },
  },
});

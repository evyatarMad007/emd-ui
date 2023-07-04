import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts', // This should be the entry point of your library
      name: 'MyReactUILibrary',
      fileName: (format) => `my-react-ui-library.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      // This is to prevent React from being bundled
      // with your library, instead, it uses the consumer's React installation
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
};

export default config;

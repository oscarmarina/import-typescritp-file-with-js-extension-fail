import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'ts',
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'demo/index.html'),
      formats: ['es'],
    },
  },
});

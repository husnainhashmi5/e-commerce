// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify'
    }
  }
});

const images = import.meta.glob("/src/assets/*", { eager: true });

const getImageUrl = (imagePath) => {
  return images[imagePath]?.default || "";
};
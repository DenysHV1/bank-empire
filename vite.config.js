import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { globalStylesOptions } from './global.styles';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      outDir: '../dist',
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
          assetFileNames: assetInfo => {
            if (assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name][extname]';
            }
            return 'assets/[name][extname]';
          },
        },
      },
      assetsInlineLimit: 0,
      copyPublicDir: true,
    },
    publicDir: 'src/public',
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      ViteImageOptimizer({
        exclude: /^sprite.svg$/,
        png: {
          quality: 60,
        },
        jpeg: {
          quality: 60,
        },
        jpg: {
          quality: 60,
        },
        webp: {
          quality: 60,
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: globalStylesOptions,
        },
      },
    },
    base: './',
  };
});

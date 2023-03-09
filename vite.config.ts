import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import postcss from 'postcss-preset-env';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 1339,
    },
    css: {
        postcss: {
            plugins: [postcss()],
        },
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            'src': path.join(__dirname, 'src'),
        },
    },
    plugins: [
        vue(),
        eslint(),
    ],
});

import { join } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: join(__dirname, 'index.js'),
            name: 'MonacoEditor',
            fileName: (format) => `monaco.${format}.js`,
        },
        rollupOptions: {
            output: {
                format: 'esm',
                exports: 'named',
                sourcemap: true,
            },
        },
    },
});
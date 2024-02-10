import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const config = defineConfig({
    plugins: [vue()],
    target: 'es2015',
    build: {
        outDir: path.resolve(__dirname, '../dist/esm'),
        emptyOutDir: true,
        cssCodeSplit: true,
        minify: false,
        rollupOptions: {
            context: 'globalThis',
            preserveEntrySignatures: 'strict',
            input: path.resolve(__dirname, '../src/index.js'),
            external: (id) => {
                return !/^(src|\.|\/|plugin-vue:export-helper)/.test(id)
            },
            output: [
                {
                    format: "esm",
                    preserveModules: true,
                    preserveModulesRoot: "src",
                    entryFileNames: () => {
                        return '[name].js';
                    }
                },
            ],
        },
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
});

export default config;

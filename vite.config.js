import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';


const config = defineConfig({
    plugins: [vue()],
    target: 'es2015',
    build: {
        outDir: path.resolve(__dirname, './dist'),
        lib: {
            entry: path.resolve(__dirname, './src/index.js'),
            name: 'ViewUIPlus'
        },
        rollupOptions: {
            context: 'globalThis',
            preserveEntrySignatures: 'strict',
            external: ['vue'],
            output: [
                {
                    format: 'umd',
                    exports: 'named',
                    sourcemap: false,
                    entryFileNames: 'viewuiplus.min.js',
                    chunkFileNames: '[name].js',
                    assetFileNames: '[name].[ext]',
                    namespaceToStringTag: true,
                    inlineDynamicImports: false,
                    manualChunks: undefined,
                    globals: { vue: 'Vue' }
                },
                {
                    format: 'es',
                    exports: 'named',
                    sourcemap: false,
                    entryFileNames: 'viewuiplus.min.esm.js',
                    chunkFileNames: '[name].js',
                    assetFileNames: '[name].[ext]',
                    namespaceToStringTag: true,
                    inlineDynamicImports: false,
                    manualChunks: undefined,
                    globals: { vue: 'Vue' }
                }
            ]
        }
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
});

export default config;

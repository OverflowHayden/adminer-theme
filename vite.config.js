import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
        preprocessorOptions: {
            scss: {
                loadPaths: ['node_modules'],
                quietDeps: true,
            },
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: false,
        rollupOptions: {
            input: 'src/adminer.scss',
            output: {
                assetFileNames: 'adminer.css',
            },
        },
    },
    plugins: [
        {
            // A CSS-only entry still produces an empty JS chunk; only adminer.css belongs in dist.
            name: 'css-only',
            generateBundle(options, bundle) {
                for (const [fileName, file] of Object.entries(bundle)) {
                    if (file.type === 'chunk') {
                        delete bundle[fileName];
                    }
                }
            },
        },
    ],
});

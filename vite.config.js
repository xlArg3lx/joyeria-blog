import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        hmr: {
            host: 'joyeria-elegance.pixflow.me',
            protocol: 'wss' // Usar WebSocket seguro
        }
    },
    build: {
        outDir: 'public/build',
        manifest: true,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]',
                entryFileNames: 'assets/[name]-[hash].js',
            }
        }
    },
    base: '/build/', // Ruta base relativa para producción
    optimizeDeps: {
        include: ['react', 'react-dom']
    },
    resolve: {
        alias: {
            '@': '/resources/js',
            '~': '/resources',
            'public': '/public',
        }
    }
});

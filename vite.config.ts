import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import {createHtmlPlugin} from "vite-plugin-html";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({

    plugins: [
        tsconfigPaths(),
        react(),
        createHtmlPlugin({
            minify: true,
            inject: {
                data: {
                    title: 'My App'
                }
            }
        }),
        svgr()
    ],
    server: {
        proxy: {
            '/api': 'http://localhost:8788'
        }
    }
})

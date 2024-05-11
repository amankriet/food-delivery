import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    // build: {
    //     transpileDependencies: ['fsevents']
    // },
    optimizeDeps: {
        esbuildOptions: {
            jsx: "automatic",
        }
    },
    plugins: [
        react(),
        vitePluginSvgr()
    ],
})

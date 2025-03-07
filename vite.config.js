import { defineConfig } from 'vite'

// esbuild
export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'useResize'
        },
        rollupOptions: {

            external: ['vue'],
            output: {
                globals: {
                    useResize: 'useResize'
                }
            }
        }
    },
})
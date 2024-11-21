import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [react(), dts({ rollupTypes: true, exclude: ["**/*.stories.(ts|tsx)"] })],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, "src/lib/index.ts"),
            name: "Library name",
            fileName: "index",
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    css: {
        postcss: "./postcss.config.js",
    },
});

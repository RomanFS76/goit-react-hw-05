/* eslint-disable no-irregular-whitespace */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
    sourcemap: true,
    // eslint-disable-next-line no-irregular-whitespace
  },
});

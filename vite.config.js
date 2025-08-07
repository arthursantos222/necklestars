import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/necklestars/", // O nome do seu repo com barra no começo e fim
  plugins: [react()],
});

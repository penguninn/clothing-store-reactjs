import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

const alias = {
  "@": resolve(__dirname, "./src"),
  "@pages": resolve(__dirname, "./src/pages"),
  "@components": resolve(__dirname, "./src/components"),
  "@common": resolve(__dirname, "./src/components/common"),
  "@ui": resolve(__dirname, "./src/components/ui"),
  "@hooks": resolve(__dirname, "./src/hooks"),
  "@layouts": resolve(__dirname, "./src/layouts"),
  "@types": resolve(__dirname, "./src/types"),
  "@lib": resolve(__dirname, "./src/lib"),
  "@services": resolve(__dirname, "./src/services"),
  "@constants": resolve(__dirname, "./src/constants"),
  "@guards": resolve(__dirname, "./src/guards"),
  "@utils": resolve(__dirname, "./src/utils"),
  "@assets": resolve(__dirname, "./src/assets"),
  "@editor": resolve(__dirname, "./src/editor"),
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias,
  },
});

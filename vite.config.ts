import { defineConfig } from "vite";
import autoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    autoImport({
      dirs: ["./src"],
      dts: true,
    }),
  ],
});

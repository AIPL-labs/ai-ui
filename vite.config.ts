import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    // sourcemap: true,
    commonjsOptions: {},
    target: "es2022",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pizza: resolve(__dirname, "pizza.html"),
      },
    },
  },

  base: "",
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
  plugins: [react()],
  define: {
    __BUILD_TIMESTAMP__: JSON.stringify(new Date().toISOString()),
    __APP_VERSION__: JSON.stringify("1.0.0"),
    __PAP_ID__: JSON.stringify(
      "access-point-1725394696984-a760a179-851e-48d0-b276-85e7a426239c"
    ),
    __APP_FRONT__: JSON.stringify("pizza-demo"),
  },
});

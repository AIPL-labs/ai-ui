import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { version } from "./package.json"; // Import version from package.json

export default defineConfig({
  build: {
    // sourcemap: true,
    sourcemap: false,
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
    __APP_VERSION__: JSON.stringify(version),

    // Local dev settings
    // __HOME_BASE__: JSON.stringify("http://localhost:8787"),
    // __PAP_ID__: JSON.stringify(
    //   "access-point-1725394696984-a760a179-851e-48d0-b276-85e7a426239c"
    // ),
    // Local dev power-user settings
    // __HOME_BASE__: JSON.stringify("http://localhost:8787"),
    // __PAP_ID__: undefined,
    // __APP_FRONT__: JSON.stringify("power-user"),

    // Production pizza demo settings
    // // __PAP_ID__: JSON.stringify(
    // //   "access-point-1725394696984-a760a179-851e-48d0-b276-85e7a426239c"
    // // ),
    // __PAP_ID__: undefined,
    // __APP_FRONT__: JSON.stringify("power-user"),

    // AI-UI Production settings
    __HOME_BASE__: JSON.stringify("https://ai-worker.intelligage.workers.dev"),
    __PAP_ID__: JSON.stringify(
      "access-point-1725571260862-23455f95-1253-4dfe-96e3-952ac6af647c"
    ),
    __APP_FRONT__: JSON.stringify("pizza-demo"),

    // AI-Workfroce Production settings
    // __HOME_BASE__: JSON.stringify("https://ai-worker.intelligage.workers.dev"),
    // __PAP_ID__: undefined,
    // __APP_FRONT__: JSON.stringify("power-user"),
  },
});

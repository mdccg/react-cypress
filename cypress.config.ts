import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173'
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    viewportWidth: 1366,
    viewportHeight: 768
  },
});

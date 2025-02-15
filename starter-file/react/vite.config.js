import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
});

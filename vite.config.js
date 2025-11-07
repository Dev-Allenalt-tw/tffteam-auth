import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace YOUR_GITHUB_USERNAME and REPO_NAME with your repo details if needed
export default defineConfig({
  plugins: [react()],
  base: "/",
});

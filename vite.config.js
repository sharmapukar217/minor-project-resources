import { defineConfig } from "vite";

import unocss from "unocss/vite";
import mkcert from "vite-plugin-mkcert";
import { sveltekit } from "@sveltejs/kit/vite";

const https = process.argv.includes("--https");
const prod = process.env.NODE_ENV === "production";

export default defineConfig({
	plugins: [
		unocss(),
		sveltekit(),
		https && mkcert()
	],
	server: { port: 3000, host: "0.0.0.0" },
	preview: { port: 3000, host: "0.0.0.0" },
});

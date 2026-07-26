import { r as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <link rel=\"icon\" type=\"image/svg+xml\" href=\"/public/logo/logo-v2.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Phillips Music & Tech</title>\n  </head>\n  <!-- Google tag (gtag.js) -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-7FP88TG3SL\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-7FP88TG3SL');\n<\/script>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/src/main.tsx\"><\/script>\n  </body>\n</html>\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260610-beta_@upstash+redis@1.37.0_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };

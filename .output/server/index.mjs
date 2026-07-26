globalThis.__nitro_main__ = import.meta.url;
import { a as defineLazyEventHandler, c as serve, i as defineHandler, n as HTTPError, o as toEventHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region node_modules/.pnpm/nitro@3.0.260610-beta_@upstash+redis@1.37.0_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-1zj/dtYulwudBOeJ2zosUCxSpZs\"",
		"mtime": "2026-07-26T08:12:28.973Z",
		"size": 6148,
		"path": "../public/.DS_Store"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1a-Ww60UaGmGdV+XIDLkNZIDigz3YA\"",
		"mtime": "2026-07-26T08:12:28.974Z",
		"size": 26,
		"path": "../public/robots.txt"
	},
	"/vite.svg": {
		"type": "image/svg+xml",
		"etag": "\"5d9-9/Odcje3kalF1Spc16j7Nl8xM2Y\"",
		"mtime": "2026-07-26T08:12:28.974Z",
		"size": 1497,
		"path": "../public/vite.svg"
	},
	"/assets/about-C5kPCLv_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d3-jUU0qWeo/DgGojWLL4olWkEtjn8\"",
		"mtime": "2026-07-26T08:12:28.828Z",
		"size": 723,
		"path": "../public/assets/about-C5kPCLv_.js"
	},
	"/assets/react.svg": {
		"type": "image/svg+xml",
		"etag": "\"101e-9QXdyOvla9xR77ch7wSSOo0waN0\"",
		"mtime": "2026-07-26T08:12:28.974Z",
		"size": 4126,
		"path": "../public/assets/react.svg"
	},
	"/assets/routes-fZ1PSw1A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ced-Jfs4kH4rgT9NpoNbjrGbUEGTqw8\"",
		"mtime": "2026-07-26T08:12:28.828Z",
		"size": 3309,
		"path": "../public/assets/routes-fZ1PSw1A.js"
	},
	"/assets/styles-CA54bOK_.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"a981-706O9uzjYrnQAIz91jcRmxo1/MY\"",
		"mtime": "2026-07-26T08:12:28.829Z",
		"size": 43393,
		"path": "../public/assets/styles-CA54bOK_.css"
	},
	"/assets/index-CkuD7HLa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4eef2-d5wHG2sTGhdogTPhDUakT6v+72M\"",
		"mtime": "2026-07-26T08:12:28.828Z",
		"size": 323314,
		"path": "../public/assets/index-CkuD7HLa.js"
	},
	"/projects/CV.png": {
		"type": "image/png",
		"etag": "\"2edd0-SGKQHhYIUgB1LRaqVBTNQPAI29c\"",
		"mtime": "2026-07-26T08:12:28.955Z",
		"size": 191952,
		"path": "../public/projects/CV.png"
	},
	"/projects/project1.png": {
		"type": "image/png",
		"etag": "\"a2ba-CoTktp2o+0RZDFDVR8XAIg6HVn0\"",
		"mtime": "2026-07-26T08:12:28.968Z",
		"size": 41658,
		"path": "../public/projects/project1.png"
	},
	"/projects/reviewEngine.png": {
		"type": "image/png",
		"etag": "\"2164-btAxzki7IsUFc1IQdk2w53qoWfc\"",
		"mtime": "2026-07-26T08:12:28.966Z",
		"size": 8548,
		"path": "../public/projects/reviewEngine.png"
	},
	"/projects/project2.png": {
		"type": "image/png",
		"etag": "\"1bcd0-TD8Ngci5gh8pF8EYQGp3q9FpAC0\"",
		"mtime": "2026-07-26T08:12:28.969Z",
		"size": 113872,
		"path": "../public/projects/project2.png"
	},
	"/projects/reviewEngine-2.png": {
		"type": "image/png",
		"etag": "\"d331-EDcKeyrrIUw0wH5oXbFG+b53Qi8\"",
		"mtime": "2026-07-26T08:12:28.969Z",
		"size": 54065,
		"path": "../public/projects/reviewEngine-2.png"
	},
	"/logo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"86330-oRAy/xjG/j6iA8ngWPKgszDhk0I\"",
		"mtime": "2026-07-26T08:12:28.976Z",
		"size": 549680,
		"path": "../public/logo.jpeg"
	},
	"/projects/sp-circle-logo.png": {
		"type": "image/png",
		"etag": "\"6a12a-kLOJMp3wnmXVXbQcjHRwgbmiZOg\"",
		"mtime": "2026-07-26T08:12:28.972Z",
		"size": 434474,
		"path": "../public/projects/sp-circle-logo.png"
	},
	"/projects/sp-flat-logo.png": {
		"type": "image/png",
		"etag": "\"5a60c-770J484o1qWP2g/OdR80tkXDfnU\"",
		"mtime": "2026-07-26T08:12:28.972Z",
		"size": 370188,
		"path": "../public/projects/sp-flat-logo.png"
	},
	"/logo/logo-v2.png": {
		"type": "image/png",
		"etag": "\"149973-ziC26yhA7bnfNrvaBgIg/gqjjfc\"",
		"mtime": "2026-07-26T08:12:28.956Z",
		"size": 1350003,
		"path": "../public/logo/logo-v2.png"
	},
	"/projects/imageNotAvailable.png": {
		"type": "image/png",
		"etag": "\"136e53-jT3GoMzdxshzPxpmL+/PshiCKQA\"",
		"mtime": "2026-07-26T08:12:28.966Z",
		"size": 1273427,
		"path": "../public/projects/imageNotAvailable.png"
	},
	"/projects/nichols.png": {
		"type": "image/png",
		"etag": "\"16c8f4-8lhVkJAQ+DUFh+/gErAPIAT04+A\"",
		"mtime": "2026-07-26T08:12:28.976Z",
		"size": 1493236,
		"path": "../public/projects/nichols.png"
	},
	"/projects/InDevelopment.png": {
		"type": "image/png",
		"etag": "\"1c770e-XyqH2543Hs8n+qCrLt8y7dr3odk\"",
		"mtime": "2026-07-26T08:12:28.966Z",
		"size": 1865486,
		"path": "../public/projects/InDevelopment.png"
	},
	"/audio/WhatGoesAround.mp3": {
		"type": "audio/mpeg",
		"etag": "\"4f623f-LnUnNnhVGvFYrHkZyqDbbvIgO9k\"",
		"mtime": "2026-07-26T08:12:28.978Z",
		"size": 5202495,
		"path": "../public/audio/WhatGoesAround.mp3"
	},
	"/audio/Runaway.mp3": {
		"type": "audio/mpeg",
		"etag": "\"902500-MQsxsdcz9Tzre75kK8regSg57BQ\"",
		"mtime": "2026-07-26T08:12:28.966Z",
		"size": 9446656,
		"path": "../public/audio/Runaway.mp3"
	},
	"/audio/Floating.mp3": {
		"type": "audio/mpeg",
		"etag": "\"ef5d3a-oJ1F8AyY+YHf8NfzDqOaWHNvhoM\"",
		"mtime": "2026-07-26T08:12:28.968Z",
		"size": 15686970,
		"path": "../public/audio/Floating.mp3"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260610-beta_@upstash+redis@1.37.0_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IYbR4t = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IYbR4t
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260610-beta_@upstash+redis@1.37.0_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260610-beta_@upstash+redis@1.37.0_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260610-beta_@upstash+redis@1.37.0_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260610-beta_@upstash+redis@1.37.0_chokidar@5.0.0_jiti@2.7.0_vite@8.1.5_@types+node@22.20.1_jiti@2.7.0_/node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };

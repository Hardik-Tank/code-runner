(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,347,e=>{e.v({name:"next",version:"16.1.1",description:"The React Framework",main:"./dist/server/next.js",license:"MIT",repository:"vercel/next.js",bugs:"https://github.com/vercel/next.js/issues",homepage:"https://nextjs.org",types:"index.d.ts",files:["dist","app.js","app.d.ts","babel.js","babel.d.ts","client.js","client.d.ts","compat","cache.js","cache.d.ts","constants.js","constants.d.ts","document.js","document.d.ts","dynamic.js","dynamic.d.ts","error.js","error.d.ts","future","legacy","script.js","script.d.ts","server.js","server.d.ts","head.js","head.d.ts","image.js","image.d.ts","link.js","link.d.ts","form.js","form.d.ts","router.js","router.d.ts","jest.js","jest.d.ts","og.js","og.d.ts","root-params.js","root-params.d.ts","types.d.ts","types.js","index.d.ts","types/global.d.ts","types/compiled.d.ts","image-types/global.d.ts","navigation-types/navigation.d.ts","navigation-types/compat/navigation.d.ts","font","navigation.js","navigation.d.ts","headers.js","headers.d.ts","navigation-types","web-vitals.js","web-vitals.d.ts","experimental/testing/server.js","experimental/testing/server.d.ts","experimental/testmode/playwright.js","experimental/testmode/playwright.d.ts","experimental/testmode/playwright/msw.js","experimental/testmode/playwright/msw.d.ts","experimental/testmode/proxy.js","experimental/testmode/proxy.d.ts"],bin:{next:"./dist/bin/next"},scripts:{dev:"cross-env NEXT_SERVER_NO_MANGLE=1 taskr",build:"taskr release",prepublishOnly:"cd ../../ && turbo run build",types:"tsc --project tsconfig.build.json --declaration --emitDeclarationOnly --stripInternal --declarationDir dist",typescript:"tsec --noEmit","ncc-compiled":"taskr ncc",storybook:"BROWSER=none storybook dev -p 6006","build-storybook":"storybook build","test-storybook":"test-storybook"},taskr:{requires:["./taskfile-webpack.js","./taskfile-ncc.js","./taskfile-swc.js","./taskfile-watch.js"]},dependencies:{"@next/env":"16.1.1","@swc/helpers":"0.5.15","baseline-browser-mapping":"^2.8.3","caniuse-lite":"^1.0.30001579",postcss:"8.4.31","styled-jsx":"5.1.6"},peerDependencies:{"@opentelemetry/api":"^1.1.0","@playwright/test":"^1.51.1","babel-plugin-react-compiler":"*",react:"^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0","react-dom":"^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",sass:"^1.3.0"},peerDependenciesMeta:{"babel-plugin-react-compiler":{optional:!0},sass:{optional:!0},"@opentelemetry/api":{optional:!0},"@playwright/test":{optional:!0}},optionalDependencies:{sharp:"^0.34.4","@next/swc-darwin-arm64":"16.1.1","@next/swc-darwin-x64":"16.1.1","@next/swc-linux-arm64-gnu":"16.1.1","@next/swc-linux-arm64-musl":"16.1.1","@next/swc-linux-x64-gnu":"16.1.1","@next/swc-linux-x64-musl":"16.1.1","@next/swc-win32-arm64-msvc":"16.1.1","@next/swc-win32-x64-msvc":"16.1.1"},devDependencies:{"@babel/code-frame":"7.26.2","@babel/core":"7.26.10","@babel/eslint-parser":"7.24.6","@babel/generator":"7.27.0","@babel/plugin-syntax-bigint":"7.8.3","@babel/plugin-syntax-dynamic-import":"7.8.3","@babel/plugin-syntax-import-attributes":"7.26.0","@babel/plugin-syntax-jsx":"7.25.9","@babel/plugin-syntax-typescript":"7.25.4","@babel/plugin-transform-class-properties":"7.25.9","@babel/plugin-transform-export-namespace-from":"7.25.9","@babel/plugin-transform-modules-commonjs":"7.26.3","@babel/plugin-transform-numeric-separator":"7.25.9","@babel/plugin-transform-object-rest-spread":"7.25.9","@babel/plugin-transform-runtime":"7.26.10","@babel/preset-env":"7.26.9","@babel/preset-react":"7.26.3","@babel/preset-typescript":"7.27.0","@babel/runtime":"7.27.0","@babel/traverse":"7.27.0","@babel/types":"7.27.0","@base-ui-components/react":"1.0.0-beta.2","@capsizecss/metrics":"3.4.0","@edge-runtime/cookies":"6.0.0","@edge-runtime/ponyfill":"4.0.0","@edge-runtime/primitives":"6.0.0","@hapi/accept":"5.0.2","@jest/transform":"29.5.0","@jest/types":"29.5.0","@modelcontextprotocol/sdk":"1.18.1","@mswjs/interceptors":"0.23.0","@napi-rs/triples":"1.2.0","@next/font":"16.1.1","@next/polyfill-module":"16.1.1","@next/polyfill-nomodule":"16.1.1","@next/react-refresh-utils":"16.1.1","@next/swc":"16.1.1","@opentelemetry/api":"1.6.0","@playwright/test":"1.51.1","@rspack/core":"1.6.7","@storybook/addon-a11y":"8.6.0","@storybook/addon-essentials":"8.6.0","@storybook/addon-interactions":"8.6.0","@storybook/addon-webpack5-compiler-swc":"3.0.0","@storybook/blocks":"8.6.0","@storybook/react":"8.6.0","@storybook/react-webpack5":"8.6.0","@storybook/test":"8.6.0","@storybook/test-runner":"0.21.0","@swc/core":"1.11.24","@swc/types":"0.1.7","@taskr/clear":"1.1.0","@taskr/esnext":"1.1.0","@types/babel__code-frame":"7.0.6","@types/babel__core":"7.20.5","@types/babel__generator":"7.27.0","@types/babel__template":"7.4.4","@types/babel__traverse":"7.20.7","@types/bytes":"3.1.1","@types/ci-info":"2.0.0","@types/compression":"0.0.36","@types/content-disposition":"0.5.4","@types/content-type":"1.1.3","@types/cookie":"0.3.3","@types/cross-spawn":"6.0.0","@types/debug":"4.1.5","@types/express-serve-static-core":"4.17.33","@types/fresh":"0.5.0","@types/glob":"7.1.1","@types/jsonwebtoken":"9.0.0","@types/lodash":"4.14.198","@types/lodash.curry":"4.1.6","@types/path-to-regexp":"1.7.0","@types/picomatch":"2.3.3","@types/platform":"1.3.4","@types/react":"19.0.8","@types/react-dom":"19.0.3","@types/react-is":"18.2.4","@types/semver":"7.3.1","@types/send":"0.14.4","@types/serve-handler":"6.1.4","@types/shell-quote":"1.7.1","@types/tar":"6.1.5","@types/text-table":"0.2.1","@types/ua-parser-js":"0.7.36","@types/webpack-sources1":"npm:@types/webpack-sources@0.1.5","@types/ws":"8.2.0","@vercel/ncc":"0.34.0","@vercel/nft":"0.27.1","@vercel/routing-utils":"5.2.0","@vercel/turbopack-ecmascript-runtime":"*",acorn:"8.14.0",anser:"1.4.9",arg:"4.1.0",assert:"2.0.0","async-retry":"1.2.3","async-sema":"3.0.0","axe-playwright":"2.0.3","babel-loader":"10.0.0","babel-plugin-react-compiler":"0.0.0-experimental-3fde738-20250918","babel-plugin-transform-define":"2.0.0","babel-plugin-transform-react-remove-prop-types":"0.4.24","browserify-zlib":"0.2.0",browserslist:"4.28.0",buffer:"5.6.0",busboy:"1.6.0",bytes:"3.1.1","ci-info":"watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540","cli-select":"1.1.2","client-only":"0.0.1",commander:"12.1.0","comment-json":"3.0.3",compression:"1.7.4",conf:"5.0.0","constants-browserify":"1.0.0","content-disposition":"0.5.3","content-type":"1.0.4",cookie:"0.4.1","cross-env":"6.0.3","cross-spawn":"7.0.3","crypto-browserify":"3.12.0","css-loader":"7.1.2","css.escape":"1.5.1","cssnano-preset-default":"7.0.6","data-uri-to-buffer":"3.0.1",debug:"4.1.1",devalue:"2.0.1","domain-browser":"4.19.0","edge-runtime":"4.0.1",events:"3.3.0","find-up":"4.1.0",fresh:"0.5.2",glob:"7.1.7","gzip-size":"5.1.1","http-proxy":"1.18.1","http-proxy-agent":"5.0.0","https-browserify":"1.0.0","https-proxy-agent":"5.0.1","icss-utils":"5.1.0","ignore-loader":"0.1.2","image-size":"1.2.1","ipaddr.js":"2.2.0","is-docker":"2.0.0","is-wsl":"2.2.0","jest-worker":"27.5.1",json5:"2.2.3",jsonwebtoken:"9.0.0","loader-runner":"4.3.0","loader-utils2":"npm:loader-utils@2.0.4","loader-utils3":"npm:loader-utils@3.1.3","lodash.curry":"4.1.1","mini-css-extract-plugin":"2.4.4",msw:"2.3.0",nanoid:"3.1.32","native-url":"0.3.4","neo-async":"2.6.1","node-html-parser":"5.3.3",ora:"4.0.4","os-browserify":"0.3.0","p-limit":"3.1.0","p-queue":"6.6.2","path-browserify":"1.0.1","path-to-regexp":"6.3.0",picomatch:"4.0.1","postcss-flexbugs-fixes":"5.0.2","postcss-modules-extract-imports":"3.0.0","postcss-modules-local-by-default":"4.2.0","postcss-modules-scope":"3.0.0","postcss-modules-values":"4.0.0","postcss-preset-env":"7.4.3","postcss-safe-parser":"6.0.0","postcss-scss":"4.0.3","postcss-value-parser":"4.2.0",process:"0.11.10",punycode:"2.1.1","querystring-es3":"0.2.1","raw-body":"2.4.1","react-refresh":"0.12.0",recast:"0.23.11","regenerator-runtime":"0.13.4","safe-stable-stringify":"2.5.0","sass-loader":"16.0.5","schema-utils2":"npm:schema-utils@2.7.1","schema-utils3":"npm:schema-utils@3.0.0",semver:"7.3.2",send:"0.18.0","serve-handler":"6.1.6","server-only":"0.0.1",setimmediate:"1.0.5","shell-quote":"1.7.3","source-map":"0.6.1","source-map-loader":"5.0.0","source-map08":"npm:source-map@0.8.0-beta.0","stacktrace-parser":"0.1.10",storybook:"8.6.0","stream-browserify":"3.0.0","stream-http":"3.1.1","strict-event-emitter":"0.5.0","string-hash":"1.1.3",string_decoder:"1.3.0","strip-ansi":"6.0.0","style-loader":"4.0.0",superstruct:"1.0.3",tar:"6.1.15",taskr:"1.1.0",terser:"5.27.0","terser-webpack-plugin":"5.3.9","text-table":"0.2.0","timers-browserify":"2.0.12","tty-browserify":"0.0.1",typescript:"5.9.2","ua-parser-js":"1.0.35",unistore:"3.4.1",util:"0.12.4","vm-browserify":"1.1.2",watchpack:"2.4.0","web-vitals":"4.2.1",webpack:"5.98.0","webpack-sources1":"npm:webpack-sources@1.4.3","webpack-sources3":"npm:webpack-sources@3.2.3",ws:"8.2.3",zod:"3.25.76","zod-validation-error":"3.4.0"},keywords:["react","framework","nextjs","web","server","node","front-end","backend","cli","vercel"],engines:{node:">=20.9.0"}})},82532,e=>{"use strict";var t=e.i(95187);let s=(0,t.createServerReference)("0068cfc52621f96c0e2b2d9e40ed2b64e4d6ba3912",t.callServer,void 0,t.findSourceMapURL,"detectKeylessEnvDriftAction");e.s(["detectKeylessEnvDriftAction",()=>s])},18566,(e,t,s)=>{t.exports=e.r(76562)},95187,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r={callServer:function(){return a.callServer},createServerReference:function(){return n.createServerReference},findSourceMapURL:function(){return i.findSourceMapURL}};for(var o in r)Object.defineProperty(s,o,{enumerable:!0,get:r[o]});let a=e.r(32120),i=e.r(92245),n=e.r(35326)},33525,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},91915,(e,t,s)=>{"use strict";function r(e,t={}){if(t.onlyHashChange)return void e();let s=document.documentElement;if("smooth"!==s.dataset.scrollBehavior)return void e();let o=s.style.scrollBehavior;s.style.scrollBehavior="auto",t.dontForceLayout||s.getClientRects(),e(),s.style.scrollBehavior=o}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"disableSmoothScrollDuringRouteTransition",{enumerable:!0,get:function(){return r}}),e.r(33525)},93375,96248,4816,28069,e=>{"use strict";let t=[".lcl.dev",".lclstage.dev",".lclclerk.com"],s=[".accounts.dev",".accountsstage.dev",".accounts.lclclerk.com"],r=[".lcl.dev",".stg.dev",".lclstage.dev",".stgstage.dev",".dev.lclclerk.com",".stg.lclclerk.com",".accounts.lclclerk.com","accountsstage.dev","accounts.dev"],o=[".lcl.dev","lclstage.dev",".lclclerk.com",".accounts.lclclerk.com"],a=[".accountsstage.dev"];e.s(["CURRENT_DEV_INSTANCE_SUFFIXES",()=>s,"DEV_OR_STAGING_SUFFIXES",()=>r,"LEGACY_DEV_INSTANCE_SUFFIXES",()=>t,"LOCAL_API_URL",()=>"https://api.lclclerk.com","LOCAL_ENV_SUFFIXES",()=>o,"PROD_API_URL",()=>"https://api.clerk.com","STAGING_API_URL",()=>"https://api.clerkstage.dev","STAGING_ENV_SUFFIXES",()=>a],93375);let i=t=>"undefined"!=typeof atob&&"function"==typeof atob?atob(t):e.g.Buffer?new e.g.Buffer(t,"base64").toString():t;e.s(["isomorphicAtob",()=>i],96248);let n=t=>"undefined"!=typeof btoa&&"function"==typeof btoa?btoa(t):e.g.Buffer?new e.g.Buffer(t).toString("base64"):t;e.s(["isomorphicBtoa",()=>n],4816);let l="pk_live_",c="pk_test_",d=/^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;function u(e){return`${d.test(e)||e.startsWith("clerk.")&&t.some(t=>e.endsWith(t))?c:l}${n(`${e}$`)}`}function p(e){if(!e.endsWith("$"))return!1;let t=e.slice(0,-1);return!t.includes("$")&&t.includes(".")}function m(e,t={}){let s;if(!(e=e||"")||!f(e)){if(t.fatal&&!e)throw Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");if(t.fatal&&!f(e))throw Error("Publishable key not valid.");return null}let r=e.startsWith(l)?"production":"development";try{s=i(e.split("_")[2])}catch{if(t.fatal)throw Error("Publishable key not valid: Failed to decode key.");return null}if(!p(s)){if(t.fatal)throw Error("Publishable key not valid: Decoded key has invalid format.");return null}let o=s.slice(0,-1);return t.proxyUrl?o=t.proxyUrl:"development"!==r&&t.domain&&t.isSatellite&&(o=`clerk.${t.domain}`),{instanceType:r,frontendApi:o}}function f(e=""){try{if(!(e.startsWith(l)||e.startsWith(c)))return!1;let t=e.split("_");if(3!==t.length)return!1;let s=t[2];if(!s)return!1;return p(i(s))}catch{return!1}}function b(){let e=new Map;return{isDevOrStagingUrl:t=>{if(!t)return!1;let s="string"==typeof t?t:t.hostname,o=e.get(s);return void 0===o&&(o=r.some(e=>s.endsWith(e)),e.set(s,o)),o}}}function y(e){return e.startsWith("test_")||e.startsWith("pk_test_")}function h(e){return e.startsWith("live_")||e.startsWith("pk_live_")}function g(e){return e.startsWith("test_")||e.startsWith("sk_test_")}function v(e){return e.startsWith("live_")||e.startsWith("sk_live_")}async function x(e,t=globalThis.crypto.subtle){let s=new TextEncoder().encode(e);return n(String.fromCharCode(...new Uint8Array(await t.digest("sha-1",s)))).replace(/\+/gi,"-").replace(/\//gi,"_").substring(0,8)}let _=(e,t)=>`${e}_${t}`;e.s(["buildPublishableKey",()=>u,"createDevOrStagingUrlCache",()=>b,"getCookieSuffix",()=>x,"getSuffixedCookieName",()=>_,"isDevelopmentFromPublishableKey",()=>y,"isDevelopmentFromSecretKey",()=>g,"isProductionFromPublishableKey",()=>h,"isProductionFromSecretKey",()=>v,"isPublishableKey",()=>f,"parsePublishableKey",()=>m],28069)},15331,e=>{"use strict";let t=e=>{if(0==e.length)return"";if(1==e.length)return e[0];let t=e.slice(0,-1).join(", ");return t+`, or ${e.slice(-1)}`},s=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;function r(e){return s.test(e||"")}function o(e){let t=e||"";return t.charAt(0).toUpperCase()+t.slice(1)}function a(e){return e?e.replace(/([-_][a-z])/g,e=>e.toUpperCase().replace(/-|_/,"")):""}function i(e){return e?e.replace(/[A-Z]/g,e=>`_${e.toLowerCase()}`):""}let n=e=>{let t=s=>{if(!s)return s;if(Array.isArray(s))return s.map(e=>"object"==typeof e||Array.isArray(e)?t(e):e);let r={...s};for(let s of Object.keys(r)){let o=e(s.toString());o!==s&&(r[o]=r[s],delete r[s]),"object"==typeof r[o]&&(r[o]=t(r[o]))}return r};return t},l=n(i),c=n(a);function d(e){if("boolean"==typeof e)return e;if(null==e)return!1;if("string"==typeof e){if("true"===e.toLowerCase())return!0;if("false"===e.toLowerCase())return!1}let t=parseInt(e,10);return!isNaN(t)&&t>0}function u(e){return Object.entries(e).reduce((e,[t,s])=>(void 0!==s&&(e[t]=s),e),{})}e.s(["camelToSnake",()=>i,"deepCamelToSnake",()=>l,"deepSnakeToCamel",()=>c,"getNonUndefinedValues",()=>u,"isIPV4Address",()=>r,"isTruthy",()=>d,"snakeToCamel",()=>a,"titleize",()=>o,"toSentence",()=>t])},49542,11432,e=>{"use strict";let t=(...e)=>{};e.s(["noop",()=>t],49542);let s=()=>{let e=t,s=t;return{promise:new Promise((t,r)=>{e=t,s=r}),resolve:e,reject:s}};e.s(["createDeferredPromise",()=>s],11432)},2193,41383,78754,65112,3949,e=>{"use strict";e.i(47167);let t=()=>!1,s=()=>!1,r=()=>{try{return!0}catch{}return!1};function o(e,t,s){return"function"==typeof e?e(t):void 0!==e?e:void 0!==s?s:void 0}function a(e){return Promise.all(Array.from(e).map(e=>e.then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))}e.s(["isDevelopmentEnvironment",()=>t,"isProductionEnvironment",()=>r,"isTestEnvironment",()=>s],41383),e.s(["handleValueOrFn",()=>o],78754),e.i(49542),e.i(11432);let i=e=>{t()&&console.error(`Clerk: ${e}`)},n=(e,t)=>{if(e&&t)for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&null!==e[s]&&"object"==typeof e[s]?(void 0===t[s]&&(t[s]=new(Object.getPrototypeOf(e[s])).constructor),n(e[s],t[s])):Object.prototype.hasOwnProperty.call(e,s)&&void 0!==e[s]&&(t[s]=e[s])},l=(e,t)=>{if(e&&t)for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&null!==e[s]&&"object"==typeof e[s]?(void 0===t[s]&&(t[s]=new(Object.getPrototypeOf(e[s])).constructor),l(e[s],t[s])):Object.prototype.hasOwnProperty.call(e,s)&&void 0===t[s]&&(t[s]=e[s])};function c(e){return e.endsWith(".lclstage.dev")||e.endsWith(".stgstage.dev")||e.endsWith(".clerkstage.dev")||e.endsWith(".accountsstage.dev")}e.s(["allSettled",()=>a,"fastDeepMergeAndKeep",()=>l,"fastDeepMergeAndReplace",()=>n,"logErrorInDevMode",()=>i],65112),e.s(["isStaging",()=>c],3949),e.s([],2193)},78424,22375,82524,89397,e=>{"use strict";let t;e.i(2193);var s=e.i(41383),r=e.i(47167),o=e.i(93375);e.i(96248),e.i(4816);var a=e.i(28069),i=e.i(15331);e.s([],22375),r.default.env.NEXT_PUBLIC_CLERK_JS_VERSION,r.default.env.NEXT_PUBLIC_CLERK_JS_URL,r.default.env.CLERK_API_VERSION,r.default.env.CLERK_SECRET_KEY,r.default.env.CLERK_MACHINE_SECRET_KEY,r.default.env.CLERK_ENCRYPTION_KEY,r.default.env.CLERK_API_URL||(t=(0,a.parsePublishableKey)("pk_test_ZW5hYmxpbmctYWxiYWNvcmUtNzQuY2xlcmsuYWNjb3VudHMuZGV2JA")?.frontendApi,t?.startsWith("clerk.")&&o.LEGACY_DEV_INSTANCE_SUFFIXES.some(e=>t?.endsWith(e))?o.PROD_API_URL:o.LOCAL_ENV_SUFFIXES.some(e=>t?.endsWith(e))?o.LOCAL_API_URL:o.STAGING_ENV_SUFFIXES.some(e=>t?.endsWith(e))?o.STAGING_API_URL:o.PROD_API_URL),r.default.env.NEXT_PUBLIC_CLERK_DOMAIN,r.default.env.NEXT_PUBLIC_CLERK_PROXY_URL,(0,i.isTruthy)(r.default.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),r.default.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,r.default.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;let n={name:"@clerk/nextjs",version:"6.36.7",environment:"production"};(0,i.isTruthy)(r.default.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),(0,i.isTruthy)(r.default.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);let l=(0,i.isTruthy)(r.default.env.NEXT_PUBLIC_CLERK_KEYLESS_DISABLED)||!1;e.s(["KEYLESS_DISABLED",()=>l,"SDK_METADATA",()=>n],82524);var c=e.i(347);let d=c.default.version.startsWith("13.")||c.default.version.startsWith("14.0");e.s(["isNextWithUnstableServerActions",()=>d],89397);let u=!d&&(0,s.isDevelopmentEnvironment)()&&!l;e.s(["canUseKeyless",()=>u],78424)},5766,e=>{"use strict";let t,s;var r,o=e.i(71645);let a={data:""},i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let s="",r="",o="";for(let a in e){let i=e[a];"@"==a[0]?"i"==a[1]?s=a+" "+i+";":r+="f"==a[1]?c(i,a):a+"{"+c(i,"k"==a[1]?"":t)+"}":"object"==typeof i?r+=c(i,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(a,i):a+":"+i+";")}return s+(t&&o?t+"{"+o+"}":o)+r},d={},u=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+u(e[s]);return t}return e};function p(e){let t,s,r=this||{},o=e.call?e(r.p):e;return((e,t,s,r,o)=>{var a;let p=u(e),m=d[p]||(d[p]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(p));if(!d[m]){let t=p!==e?e:(e=>{let t,s,r=[{}];for(;t=i.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(s=t[3].replace(l," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[m]=c(o?{["@keyframes "+m]:t}:t,s?"":"."+m)}let f=s&&d.g?d.g:null;return s&&(d.g=d[m]),a=d[m],f?t.data=t.data.replace(f,a):-1===t.data.indexOf(a)&&(t.data=r?a+t.data:t.data+a),m})(o.unshift?o.raw?(t=[].slice.call(arguments,1),s=r.p,o.reduce((e,r,o)=>{let a=t[o];if(a&&a.call){let e=a(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==a?"":a)},"")):o.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):o,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||a})(r.target),r.g,r.o,r.k)}p.bind({g:1});let m,f,b,y=p.bind({k:1});function h(e,t){let s=this||{};return function(){let r=arguments;function o(a,i){let n=Object.assign({},a),l=n.className||o.className;s.p=Object.assign({theme:f&&f()},n),s.o=/ *go\d+/.test(l),n.className=p.apply(s,r)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),b&&c[0]&&b(n),m(c,n)}return t?t(o):o}}var g=(e,t)=>"function"==typeof e?e(t):e,v=(t=0,()=>(++t).toString()),x=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},_="default",w=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},k=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},j={},S=(e,t=_)=>{j[t]=w(j[t]||E,e),k.forEach(([e,s])=>{e===t&&s(j[t])})},C=e=>Object.keys(j).forEach(t=>S(e,t)),L=(e=_)=>t=>{S(t,e)},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={},t=_)=>{let[s,r]=(0,o.useState)(j[t]||E),a=(0,o.useRef)(j[t]);(0,o.useEffect)(()=>(a.current!==j[t]&&r(j[t]),k.push([t,r]),()=>{let e=k.findIndex(([e])=>e===t);e>-1&&k.splice(e,1)}),[t]);let i=s.toasts.map(t=>{var s,r,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...s,toasts:i}},P=e=>(t,s)=>{let r,o=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||v()}))(t,e,s);return L(o.toasterId||(r=o.id,Object.keys(j).find(e=>j[e].toasts.some(e=>e.id===r))))({type:2,toast:o}),o.id},N=(e,t)=>P("blank")(e,t);N.error=P("error"),N.success=P("success"),N.loading=P("loading"),N.custom=P("custom"),N.dismiss=(e,t)=>{let s={type:3,toastId:e};t?L(t)(s):C(s)},N.dismissAll=e=>N.dismiss(void 0,e),N.remove=(e,t)=>{let s={type:4,toastId:e};t?L(t)(s):C(s)},N.removeAll=e=>N.remove(void 0,e),N.promise=(e,t,s)=>{let r=N.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?g(t.success,e):void 0;return o?N.success(o,{id:r,...s,...null==s?void 0:s.success}):N.dismiss(r),e}).catch(e=>{let o=t.error?g(t.error,e):void 0;o?N.error(o,{id:r,...s,...null==s?void 0:s.error}):N.dismiss(r)}),e};var R=1e3,T=(e,t="default")=>{let{toasts:s,pausedAt:r}=I(e,t),a=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=R)=>{if(a.has(e))return;let s=setTimeout(()=>{a.delete(e),n({type:4,toastId:e})},t);a.set(e,s)},[]);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),o=s.map(s=>{if(s.duration===1/0)return;let r=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(r<0){s.visible&&N.dismiss(s.id);return}return setTimeout(()=>N.dismiss(s.id,t),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[s,r,t]);let n=(0,o.useCallback)(L(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=(0,o.useCallback)(()=>{r&&n({type:6,time:Date.now()})},[r,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:a}=t||{},i=s.filter(t=>(t.position||a)===(e.position||a)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[s]);return(0,o.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},O=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$=h("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,F=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,M=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,z=h("div")`
  position: absolute;
`,Y=h("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=h("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(V,null,t):t:"blank"===s?null:o.createElement(Y,null,o.createElement($,{...r}),"loading"!==s&&o.createElement(z,null,"error"===s?o.createElement(K,{...r}):o.createElement(B,{...r})))},H=h("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,q=h("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Z=o.memo(({toast:e,position:t,style:s,children:r})=>{let a=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[r,o]=x()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${y(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(G,{toast:e}),n=o.createElement(q,{...e.ariaProps},g(e.message,e));return o.createElement(H,{className:e.className,style:{...a,...s,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});r=o.createElement,c.p=void 0,m=r,f=void 0,b=void 0;var J=({id:e,className:t,style:s,onHeightUpdate:r,children:a})=>{let i=o.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:s},a)},Q=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:a,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=T(s,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(s=>{let i,n,l=s.position||t,c=d.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}),u=(i=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:x()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...n});return o.createElement(J,{id:s.id,key:s.id,onHeightUpdate:d.updateHeight,className:s.visible?Q:"",style:u},"custom"===s.type?g(s.message,s):a?a(s):o.createElement(Z,{toast:s,position:l}))}))};e.s(["CheckmarkIcon",()=>B,"ErrorIcon",()=>K,"LoaderIcon",()=>$,"ToastBar",()=>Z,"ToastIcon",()=>G,"Toaster",()=>ee,"default",()=>N,"resolveValue",()=>g,"toast",()=>N,"useToaster",()=>T,"useToasterStore",()=>I],5766)},78451,e=>{"use strict";e.i(47167);var t=e.i(43476),s=e.i(53355),r=e.i(38703);e.i(50711);var o=e.i(82045),a=e.i(71645),i=e.i(81958);function n({children:e,client:t,useAuth:s}){var r;let o=(r=s,(0,a.useMemo)(()=>function(){let{isLoaded:e,isSignedIn:t,getToken:s,orgId:o,orgRole:i}=r(),n=(0,a.useCallback)(async({forceRefreshToken:e})=>{try{return await s({template:"convex",skipCache:e})}catch{return null}},[o,i]);return(0,a.useMemo)(()=>({isLoading:!e,isAuthenticated:t??!1,fetchAccessToken:n}),[e,t,n])},[r]));return a.default.createElement(i.ConvexProviderWithAuth,{client:t,useAuth:o},e)}let l=new o.ConvexReactClient("https://doting-dachshund-25.convex.cloud");function c({children:e}){return(0,t.jsx)(s.ClerkProvider,{publishableKey:"pk_test_ZW5hYmxpbmctYWxiYWNvcmUtNzQuY2xlcmsuYWNjb3VudHMuZGV2JA",children:(0,t.jsx)(n,{client:l,useAuth:r.useAuth,children:e})})}e.s(["default",()=>c],78451)},34084,e=>{"use strict";var t=e.i(71645),s=e.i(27085);e.i(50711);var r=e.i(82045),o=e.i(83394);function a(){let{user:e}=(0,s.useUser)(),a=(0,r.useMutation)(o.api.users.syncUser);return(0,t.useEffect)(()=>{e&&a({userId:e.id,email:e.emailAddresses[0].emailAddress,name:e.fullName||"User"})},[e]),null}e.s(["default",()=>a])},98943,e=>{e.v(t=>Promise.all(["static/chunks/50c38290e18476d8.js"].map(t=>e.l(t))).then(()=>t(37572)))}]);
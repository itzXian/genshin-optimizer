import{r as K,j as he,eq as Me,g as be}from"./index-CIkbQ-nq.js";function we(e,t){for(var a=0;a<t.length;a++){const o=t[a];if(typeof o!="string"&&!Array.isArray(o)){for(const d in o)if(d!=="default"&&!(d in e)){const c=Object.getOwnPropertyDescriptor(o,d);c&&Object.defineProperty(e,d,c.get?c:{enumerable:!0,get:()=>o[d]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var De={},H={};H._=H._interop_require_default=ve;function ve(e){return e&&e.__esModule?e:{default:e}}var le={},Ge={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return t}});let t=a=>{}})(Ge);var Ne={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return t}});function t(a){let{widthInt:o,heightInt:d,blurWidth:c,blurHeight:n,blurDataURL:i,objectFit:N}=a;const E=20,u=c?c*40:o,p=n?n*40:d,l=u&&p?"viewBox='0 0 "+u+" "+p+"'":"",I=l?"none":N==="contain"?"xMidYMid":N==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+E+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+E+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+I+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}})(Ne);var te={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(d,c){for(var n in c)Object.defineProperty(d,n,{enumerable:!0,get:c[n]})}t(e,{VALID_LOADERS:function(){return a},imageConfigDefault:function(){return o}});const a=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}})(te);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return E}});const t=Ne,a=te;function o(u){return u.default!==void 0}function d(u){return u.src!==void 0}function c(u){return typeof u=="object"&&(o(u)||d(u))}function n(u){return typeof u>"u"?u:typeof u=="number"?Number.isFinite(u)?u:NaN:typeof u=="string"&&/^[0-9]+$/.test(u)?parseInt(u,10):NaN}function i(u,p,l){let{deviceSizes:I,allSizes:f}=u;if(l){const O=/(^|\s)(1?\d?\d)vw/g,T=[];for(let h;h=O.exec(l);h)T.push(parseInt(h[2]));if(T.length){const h=Math.min(...T)*.01;return{widths:f.filter(m=>m>=I[0]*h),kind:"w"}}return{widths:f,kind:"w"}}return typeof p!="number"?{widths:I,kind:"w"}:{widths:[...new Set([p,p*2].map(O=>f.find(T=>T>=O)||f[f.length-1]))],kind:"x"}}function N(u){let{config:p,src:l,unoptimized:I,width:f,quality:L,sizes:O,loader:T}=u;if(I)return{src:l,srcSet:void 0,sizes:void 0};const{widths:h,kind:m}=i(p,f,O),r=h.length-1;return{sizes:!O&&m==="w"?"100vw":O,srcSet:h.map((_,s)=>T({config:p,src:l,quality:L,width:_})+" "+(m==="w"?_:s+1)+m).join(", "),src:T({config:p,src:l,quality:L,width:h[r]})}}function E(u,p){let{src:l,sizes:I,unoptimized:f=!1,priority:L=!1,loading:O,className:T,quality:h,width:m,height:r,fill:_=!1,style:s,overrideSrc:g,onLoad:D,onLoadingComplete:A,placeholder:S="empty",blurDataURL:y,fetchPriority:R,layout:P,objectFit:M,objectPosition:w,lazyBoundary:Y,lazyRoot:Z,...X}=u;const{imgConf:W,showAltText:F,blurComplete:V,defaultLoader:q}=p;let b,v=W||a.imageConfigDefault;if("allSizes"in v)b=v;else{const C=[...v.deviceSizes,...v.imageSizes].sort((k,B)=>k-B),x=v.deviceSizes.sort((k,B)=>k-B);b={...v,allSizes:C,deviceSizes:x}}if(typeof q>"u")throw new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`);let j=X.loader||q;delete X.loader,delete X.srcSet;const J="__next_img_default"in j;if(J){if(b.loader==="custom")throw new Error('Image with src "'+l+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{const C=j;j=x=>{const{config:k,...B}=x;return C(B)}}if(P){P==="fill"&&(_=!0);const C={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},x={responsive:"100vw",fill:"100vw"},k=C[P];k&&(s={...s,...k});const B=x[P];B&&!I&&(I=B)}let U="",G=n(m),z=n(r),de,pe;if(c(l)){const C=o(l)?l.default:l;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(C));if(!C.height||!C.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(C));if(de=C.blurWidth,pe=C.blurHeight,y=y||C.blurDataURL,U=C.src,!_){if(!G&&!z)G=C.width,z=C.height;else if(G&&!z){const x=G/C.width;z=Math.round(C.height*x)}else if(!G&&z){const x=z/C.height;G=Math.round(C.width*x)}}}l=typeof l=="string"?l:U;let me=!L&&(O==="lazy"||typeof O>"u");(!l||l.startsWith("data:")||l.startsWith("blob:"))&&(f=!0,me=!1),b.unoptimized&&(f=!0),J&&l.endsWith(".svg")&&!b.dangerouslyAllowSVG&&(f=!0),L&&(R="high");const Ue=n(h),$=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:w}:{},F?{}:{color:"transparent"},s),ge=!V&&S!=="empty"?S==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:G,heightInt:z,blurWidth:de,blurHeight:pe,blurDataURL:y||"",objectFit:$.objectFit})+'")':'url("'+S+'")':null;let Le=ge?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:ge}:{};const re=N({config:b,src:l,unoptimized:f,width:G,quality:Ue,sizes:I,loader:j});return{props:{...X,loading:me?"lazy":O,fetchPriority:R,width:G,height:z,decoding:"async",className:T,style:{...$,...Le},sizes:re.sizes,srcSet:re.srcSet,src:g||re.src},meta:{unoptimized:f,priority:L,placeholder:S,fill:_}}}})(le);var _e={exports:{}},ee={};function Ie(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(Ie=function(o){return o?a:t})(e)}ee._=ee._interop_require_wildcard=We;function We(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var a=Ie(t);if(a&&a.has(e))return a.get(e);var o={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(c!=="default"&&Object.prototype.hasOwnProperty.call(e,c)){var n=d?Object.getOwnPropertyDescriptor(e,c):null;n&&(n.get||n.set)?Object.defineProperty(o,c,n):o[c]=e[c]}return o.default=e,a&&a.set(e,o),o}var Q={exports:{}},oe={},Ce;function Fe(){return Ce||(Ce=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});const t=K,a=typeof window>"u",o=a?()=>{}:t.useLayoutEffect,d=a?()=>{}:t.useEffect;function c(n){const{headManager:i,reduceComponentsToState:N}=n;function E(){if(i&&i.mountedInstances){const p=t.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(N(p,n))}}if(a){var u;i==null||(u=i.mountedInstances)==null||u.add(n.children),E()}return o(()=>{var p;return i==null||(p=i.mountedInstances)==null||p.add(n.children),()=>{var l;i==null||(l=i.mountedInstances)==null||l.delete(n.children)}}),o(()=>(i&&(i._pendingUpdate=E),()=>{i&&(i._pendingUpdate=E)})),d(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}}(oe)),oe}var ne={},fe;function Xe(){return fe||(fe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return o}});const o=H._(K).default.createContext({})}(ne)),ne}var se={},Se;function je(){return Se||(Se=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"HeadManagerContext",{enumerable:!0,get:function(){return o}});const o=H._(K).default.createContext({})}(se)),se}var ie={},Pe;function xe(){return Pe||(Pe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(a){let{ampFirst:o=!1,hybrid:d=!1,hasQuery:c=!1}=a===void 0?{}:a;return o||d&&c}}(ie)),ie}var Re;function He(){return Re||(Re=1,function(e,t){"use client";var a={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\nguye\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_14512_PZGHEDMCXZXFXPIA",COLORTERM:"truecolor",COLUMNS:"129",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"VANPC",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FORCE_COLOR:"true",GIT_ASKPASS:"c:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\nguye",INIT_CWD:"D:\\GithubProjects\\genshin-optimizer",LANG:"en_US.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\nguye\\AppData\\Local",LOGONSERVER:"\\\\VANPC",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.6.1 win32 x64",npm_execpath:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4\\yarn",npm_node_execpath:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4\\node",npm_package_json:"D:\\GithubProjects\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.15.1",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_SKIP_NX_CACHE:"true",NX_TASK_HASH:"14285012768393364058",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"D:\\GithubProjects\\genshin-optimizer",OneDrive:"C:\\Users\\nguye\\OneDrive",OneDriveConsumer:"C:\\Users\\nguye\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"D:\\GithubProjects\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;D:\\GithubProjects\\genshin-optimizer\\apps\\node_modules\\.bin;D:\\GithubProjects\\genshin-optimizer\\node_modules\\.bin;D:\\GithubProjects\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4;C:\\Program Files\\PowerShell\\7;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\dotnet\\;C:\\Program Files\\PowerShell\\7\\;C:\\Users\\nguye\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\nguye\\AppData\\Roaming\\npm;C:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\nguye\\.dotnet\\tools",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",POWERSHELL_DISTRIBUTION_CHANNEL:"MSI:Windows 10 Pro",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 23 Model 8 Stepping 2, AuthenticAMD",PROCESSOR_LEVEL:"23",PROCESSOR_REVISION:"0802",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"D:\\GithubProjects\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\nguye\\OneDrive\\Documents\\PowerShell\\Modules;C:\\Program Files\\PowerShell\\Modules;c:\\program files\\powershell\\7\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",PWD:"D:\\GithubProjects\\genshin-optimizer",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\nguye\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.94.1",TMP:"C:\\Users\\nguye\\AppData\\Local\\Temp",USERDOMAIN:"VANPC",USERDOMAIN_ROAMINGPROFILE:"VANPC",USERNAME:"nguye",USERPROFILE:"C:\\Users\\nguye",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-2726f81895-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(t,"__esModule",{value:!0});function o(m,r){for(var _ in r)Object.defineProperty(m,_,{enumerable:!0,get:r[_]})}o(t,{default:function(){return h},defaultHead:function(){return l}});const d=H,c=ee,n=he,i=c._(K),N=d._(Fe()),E=Xe(),u=je(),p=xe();function l(m){m===void 0&&(m=!1);const r=[(0,n.jsx)("meta",{charSet:"utf-8"})];return m||r.push((0,n.jsx)("meta",{name:"viewport",content:"width=device-width"})),r}function I(m,r){return typeof r=="string"||typeof r=="number"?m:r.type===i.default.Fragment?m.concat(i.default.Children.toArray(r.props.children).reduce((_,s)=>typeof s=="string"||typeof s=="number"?_:_.concat(s),[])):m.concat(r)}const f=["name","httpEquiv","charSet","itemProp"];function L(){const m=new Set,r=new Set,_=new Set,s={};return g=>{let D=!0,A=!1;if(g.key&&typeof g.key!="number"&&g.key.indexOf("$")>0){A=!0;const S=g.key.slice(g.key.indexOf("$")+1);m.has(S)?D=!1:m.add(S)}switch(g.type){case"title":case"base":r.has(g.type)?D=!1:r.add(g.type);break;case"meta":for(let S=0,y=f.length;S<y;S++){const R=f[S];if(g.props.hasOwnProperty(R))if(R==="charSet")_.has(R)?D=!1:_.add(R);else{const P=g.props[R],M=s[R]||new Set;(R!=="name"||!A)&&M.has(P)?D=!1:(M.add(P),s[R]=M)}}break}return D}}function O(m,r){const{inAmpMode:_}=r;return m.reduce(I,[]).reverse().concat(l(_).reverse()).filter(L()).reverse().map((s,g)=>{const D=s.key||g;if(a.__NEXT_OPTIMIZE_FONTS&&!_&&s.type==="link"&&s.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(A=>s.props.href.startsWith(A))){const A={...s.props||{}};return A["data-href"]=A.href,A.href=void 0,A["data-optimized-fonts"]=!0,i.default.cloneElement(s,A)}return i.default.cloneElement(s,{key:D})})}function T(m){let{children:r}=m;const _=(0,i.useContext)(E.AmpStateContext),s=(0,i.useContext)(u.HeadManagerContext);return(0,n.jsx)(N.default,{reduceComponentsToState:O,headManager:s,inAmpMode:(0,p.isInAmpMode)(_),children:r})}const h=T;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(Q,Q.exports)),Q.exports}var ae={},Ee;function Ve(){return Ee||(Ee=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return d}});const a=H._(K),o=te,d=a.default.createContext(o.imageConfigDefault)}(ae)),ae}var ue={},Oe;function ze(){return Oe||(Oe=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return o}});const o=H._(K).default.createContext(null)}(ue)),ue}var ce={},Ae;function Te(){return Ae||(Ae=1,function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\nguye\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_14512_PZGHEDMCXZXFXPIA",COLORTERM:"truecolor",COLUMNS:"129",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"VANPC",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FORCE_COLOR:"true",GIT_ASKPASS:"c:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\nguye",INIT_CWD:"D:\\GithubProjects\\genshin-optimizer",LANG:"en_US.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\nguye\\AppData\\Local",LOGONSERVER:"\\\\VANPC",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.6.1 win32 x64",npm_execpath:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4\\yarn",npm_node_execpath:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4\\node",npm_package_json:"D:\\GithubProjects\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.15.1",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_SKIP_NX_CACHE:"true",NX_TASK_HASH:"14285012768393364058",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"D:\\GithubProjects\\genshin-optimizer",OneDrive:"C:\\Users\\nguye\\OneDrive",OneDriveConsumer:"C:\\Users\\nguye\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"D:\\GithubProjects\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;D:\\GithubProjects\\genshin-optimizer\\apps\\node_modules\\.bin;D:\\GithubProjects\\genshin-optimizer\\node_modules\\.bin;D:\\GithubProjects\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4;C:\\Program Files\\PowerShell\\7;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\dotnet\\;C:\\Program Files\\PowerShell\\7\\;C:\\Users\\nguye\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\nguye\\AppData\\Roaming\\npm;C:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\nguye\\.dotnet\\tools",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",POWERSHELL_DISTRIBUTION_CHANNEL:"MSI:Windows 10 Pro",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 23 Model 8 Stepping 2, AuthenticAMD",PROCESSOR_LEVEL:"23",PROCESSOR_REVISION:"0802",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"D:\\GithubProjects\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\nguye\\OneDrive\\Documents\\PowerShell\\Modules;C:\\Program Files\\PowerShell\\Modules;c:\\program files\\powershell\\7\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",PWD:"D:\\GithubProjects\\genshin-optimizer",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\nguye\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.94.1",TMP:"C:\\Users\\nguye\\AppData\\Local\\Temp",USERDOMAIN:"VANPC",USERDOMAIN_ROAMINGPROFILE:"VANPC",USERNAME:"nguye",USERPROFILE:"C:\\Users\\nguye",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-2726f81895-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o}});function a(d){let{config:c,src:n,width:i,quality:N}=d;return c.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+(N||75)+(t.NEXT_DEPLOYMENT_ID?"&dpl="+t.NEXT_DEPLOYMENT_ID:"")}a.__next_img_default=!0;const o=a}(ce)),ce}(function(e,t){"use client";var a={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\nguye\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_14512_PZGHEDMCXZXFXPIA",COLORTERM:"truecolor",COLUMNS:"129",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"VANPC",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FORCE_COLOR:"true",GIT_ASKPASS:"c:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\nguye",INIT_CWD:"D:\\GithubProjects\\genshin-optimizer",LANG:"en_US.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\nguye\\AppData\\Local",LOGONSERVER:"\\\\VANPC",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.6.1 win32 x64",npm_execpath:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4\\yarn",npm_node_execpath:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4\\node",npm_package_json:"D:\\GithubProjects\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.15.1",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_SKIP_NX_CACHE:"true",NX_TASK_HASH:"14285012768393364058",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"D:\\GithubProjects\\genshin-optimizer",OneDrive:"C:\\Users\\nguye\\OneDrive",OneDriveConsumer:"C:\\Users\\nguye\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"D:\\GithubProjects\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;D:\\GithubProjects\\genshin-optimizer\\apps\\node_modules\\.bin;D:\\GithubProjects\\genshin-optimizer\\node_modules\\.bin;D:\\GithubProjects\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4;C:\\Program Files\\PowerShell\\7;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\dotnet\\;C:\\Program Files\\PowerShell\\7\\;C:\\Users\\nguye\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\nguye\\AppData\\Roaming\\npm;C:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\nguye\\.dotnet\\tools",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",POWERSHELL_DISTRIBUTION_CHANNEL:"MSI:Windows 10 Pro",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 23 Model 8 Stepping 2, AuthenticAMD",PROCESSOR_LEVEL:"23",PROCESSOR_REVISION:"0802",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"D:\\GithubProjects\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\nguye\\OneDrive\\Documents\\PowerShell\\Modules;C:\\Program Files\\PowerShell\\Modules;c:\\program files\\powershell\\7\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",PWD:"D:\\GithubProjects\\genshin-optimizer",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\nguye\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.94.1",TMP:"C:\\Users\\nguye\\AppData\\Local\\Temp",USERDOMAIN:"VANPC",USERDOMAIN_ROAMINGPROFILE:"VANPC",USERNAME:"nguye",USERPROFILE:"C:\\Users\\nguye",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-2726f81895-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});const o=H,d=ee,c=he,n=d._(K),i=o._(Me),N=o._(He()),E=le,u=te,p=Ve(),l=ze(),I=o._(Te()),f=a.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function L(r,_,s,g,D,A,S){const y=r==null?void 0:r.src;if(!r||r["data-loaded-src"]===y)return;r["data-loaded-src"]=y,("decode"in r?r.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!r.parentElement||!r.isConnected)){if(_!=="empty"&&D(!0),s!=null&&s.current){const P=new Event("load");Object.defineProperty(P,"target",{writable:!1,value:r});let M=!1,w=!1;s.current({...P,nativeEvent:P,currentTarget:r,target:r,isDefaultPrevented:()=>M,isPropagationStopped:()=>w,persist:()=>{},preventDefault:()=>{M=!0,P.preventDefault()},stopPropagation:()=>{w=!0,P.stopPropagation()}})}g!=null&&g.current&&g.current(r)}})}function O(r){return n.use?{fetchPriority:r}:{fetchpriority:r}}const T=(0,n.forwardRef)((r,_)=>{let{src:s,srcSet:g,sizes:D,height:A,width:S,decoding:y,className:R,style:P,fetchPriority:M,placeholder:w,loading:Y,unoptimized:Z,fill:X,onLoadRef:W,onLoadingCompleteRef:F,setBlurComplete:V,setShowAltText:q,sizesInput:b,onLoad:v,onError:j,...J}=r;return(0,c.jsx)("img",{...J,...O(M),loading:Y,width:S,height:A,decoding:y,"data-nimg":X?"fill":"1",className:R,style:P,sizes:D,srcSet:g,src:s,ref:(0,n.useCallback)(U=>{_&&(typeof _=="function"?_(U):typeof _=="object"&&(_.current=U)),U&&(j&&(U.src=U.src),U.complete&&L(U,w,W,F,V))},[s,w,W,F,V,j,Z,b,_]),onLoad:U=>{const G=U.currentTarget;L(G,w,W,F,V)},onError:U=>{q(!0),w!=="empty"&&V(!0),j&&j(U)}})});function h(r){let{isAppRouter:_,imgAttributes:s}=r;const g={as:"image",imageSrcSet:s.srcSet,imageSizes:s.sizes,crossOrigin:s.crossOrigin,referrerPolicy:s.referrerPolicy,...O(s.fetchPriority)};return _&&i.default.preload?(i.default.preload(s.src,g),null):(0,c.jsx)(N.default,{children:(0,c.jsx)("link",{rel:"preload",href:s.srcSet?void 0:s.src,...g},"__nimg-"+s.src+s.srcSet+s.sizes)})}const m=(0,n.forwardRef)((r,_)=>{const g=!(0,n.useContext)(l.RouterContext),D=(0,n.useContext)(p.ImageConfigContext),A=(0,n.useMemo)(()=>{const F=f||D||u.imageConfigDefault,V=[...F.deviceSizes,...F.imageSizes].sort((b,v)=>b-v),q=F.deviceSizes.sort((b,v)=>b-v);return{...F,allSizes:V,deviceSizes:q}},[D]),{onLoad:S,onLoadingComplete:y}=r,R=(0,n.useRef)(S);(0,n.useEffect)(()=>{R.current=S},[S]);const P=(0,n.useRef)(y);(0,n.useEffect)(()=>{P.current=y},[y]);const[M,w]=(0,n.useState)(!1),[Y,Z]=(0,n.useState)(!1),{props:X,meta:W}=(0,E.getImgProps)(r,{defaultLoader:I.default,imgConf:A,blurComplete:M,showAltText:Y});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(T,{...X,unoptimized:W.unoptimized,placeholder:W.placeholder,fill:W.fill,onLoadRef:R,onLoadingCompleteRef:P,setBlurComplete:w,setShowAltText:Z,sizesInput:r.sizes,ref:_}),W.priority?(0,c.jsx)(h,{isAppRouter:g,imgAttributes:X}):null]})});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)})(_e,_e.exports);var Be=_e.exports;(function(e){var t={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\nguye\\AppData\\Roaming",BERRY_BIN_FOLDER:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_14512_PZGHEDMCXZXFXPIA",COLORTERM:"truecolor",COLUMNS:"129",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"VANPC",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",COREPACK_ROOT:"C:\\Program Files\\nodejs\\node_modules\\corepack",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",FORCE_COLOR:"true",GIT_ASKPASS:"c:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\nguye",INIT_CWD:"D:\\GithubProjects\\genshin-optimizer",LANG:"en_US.UTF-8",LERNA_PACKAGE_NAME:"frontend",LOCALAPPDATA:"C:\\Users\\nguye\\AppData\\Local",LOGONSERVER:"\\\\VANPC",NODE_ENV:"production",npm_config_user_agent:"yarn/3.4.1 npm/? node/v21.6.1 win32 x64",npm_execpath:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4\\yarn",npm_node_execpath:"C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4\\node",npm_package_json:"D:\\GithubProjects\\genshin-optimizer\\package.json",npm_package_name:"genshin-optimizer",npm_package_version:"10.15.1",NUMBER_OF_PROCESSORS:"12",NX_CLI_SET:"true",NX_GA_TRACKINGID:"UA-000000-01",NX_LOAD_DOT_ENV_FILES:"true",NX_SKIP_NX_CACHE:"true",NX_TASK_HASH:"14285012768393364058",NX_TASK_TARGET_PROJECT:"frontend",NX_TASK_TARGET_TARGET:"build",NX_URLS_GUIDES:"[]",NX_URL_DISCORD_GDEV:"https://discord.com/",NX_URL_DISCORD_GO:"https://discord.com/",NX_URL_GITHUB_API_GO_RELEASES:"https://api.github.com/repos///releases/tags/",NX_URL_GITHUB_FRZYC:"https://github.com/",NX_URL_GITHUB_GO:"https://github.com/",NX_URL_GITHUB_GO_CURRENT_VERSION:"",NX_URL_GITHUB_LANTUA:"https://github.com/",NX_URL_GITHUB_VAN:"https://github.com/",NX_URL_KQM_MULTI_GUIDE:"https://keqingmains.com/misc/multi-optimization/",NX_URL_PATREON_FRZYC:"https://www.patreon.com/",NX_URL_PAYPAL_FRZYC:"https://www.paypal.com/",NX_URL_TWITCH_FRZYC:"https://www.twitch.tv/",NX_URL_TWITTER_FRZYC:"https://twitter.com/frzyc",NX_URL_WEBSITE_KQM:"https://keqingmains.com/",NX_URL_YOUTUBE_TUTPL:"https://www.youtube.com/",NX_WORKSPACE_ROOT:"D:\\GithubProjects\\genshin-optimizer",OneDrive:"C:\\Users\\nguye\\OneDrive",OneDriveConsumer:"C:\\Users\\nguye\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PATH:"D:\\GithubProjects\\genshin-optimizer\\apps\\frontend\\node_modules\\.bin;D:\\GithubProjects\\genshin-optimizer\\apps\\node_modules\\.bin;D:\\GithubProjects\\genshin-optimizer\\node_modules\\.bin;D:\\GithubProjects\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs;C:\\Users\\nguye\\AppData\\Local\\Temp\\xfs-b14c61d4;C:\\Program Files\\PowerShell\\7;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\dotnet\\;C:\\Program Files\\PowerShell\\7\\;C:\\Users\\nguye\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\nguye\\AppData\\Roaming\\npm;C:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\nguye\\.dotnet\\tools",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",POWERSHELL_DISTRIBUTION_CHANNEL:"MSI:Windows 10 Pro",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"AMD64 Family 23 Model 8 Stepping 2, AuthenticAMD",PROCESSOR_LEVEL:"23",PROCESSOR_REVISION:"0802",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROJECT_CWD:"D:\\GithubProjects\\genshin-optimizer",PROMPT:"$P$G",PSModulePath:"C:\\Users\\nguye\\OneDrive\\Documents\\PowerShell\\Modules;C:\\Program Files\\PowerShell\\Modules;c:\\program files\\powershell\\7\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",PWD:"D:\\GithubProjects\\genshin-optimizer",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\nguye\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.94.1",TMP:"C:\\Users\\nguye\\AppData\\Local\\Temp",USERDOMAIN:"VANPC",USERDOMAIN_ROAMINGPROFILE:"VANPC",USERNAME:"nguye",USERPROFILE:"C:\\Users\\nguye",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\nguye\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-2726f81895-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS",YARN_IGNORE_CWD:"1"};Object.defineProperty(e,"__esModule",{value:!0});function a(E,u){for(var p in u)Object.defineProperty(E,p,{enumerable:!0,get:u[p]})}a(e,{default:function(){return N},getImageProps:function(){return i}});const o=H,d=le,c=Be,n=o._(Te());function i(E){const{props:u}=(0,d.getImgProps)(E,{defaultLoader:n.default,imgConf:t.__NEXT_IMAGE_OPTS});for(const[p,l]of Object.entries(u))l===void 0&&delete u[p];return{props:u}}const N=c.Image})(De);var ye=De;const ke=be(ye),Ze=we({__proto__:null,default:ke},[ye]);export{Ze as i};

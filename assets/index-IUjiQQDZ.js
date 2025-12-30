import{r as El,g as Ic,a as X,R as Uc,b as Qt,j as m,m as me,A as Fc}from"./vendor-4H_YiKKr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var tr={},uo;function Oc(){if(uo)return tr;uo=1;var i=El();return tr.createRoot=i.createRoot,tr.hydrateRoot=i.hydrateRoot,tr}var Bc=Oc();const kc=Ic(Bc);El();function Gi(){return Gi=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Gi.apply(this,arguments)}var Pn;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Pn||(Pn={}));const fo="popstate";function zc(i){i===void 0&&(i={});function e(n,r){let{pathname:s,search:a,hash:o}=n.location;return Ps("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(n,r){return typeof r=="string"?r:Ir(r)}return Vc(e,t,null,i)}function ut(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Pa(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Gc(){return Math.random().toString(36).substr(2,8)}function po(i,e){return{usr:i.state,key:i.key,idx:e}}function Ps(i,e,t,n){return t===void 0&&(t=null),Gi({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?Si(e):e,{state:t,key:e&&e.key||n||Gc()})}function Ir(i){let{pathname:e="/",search:t="",hash:n=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Si(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let n=i.indexOf("?");n>=0&&(e.search=i.substr(n),i=i.substr(0,n)),i&&(e.pathname=i)}return e}function Vc(i,e,t,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:s=!1}=n,a=r.history,o=Pn.Pop,l=null,c=h();c==null&&(c=0,a.replaceState(Gi({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function d(){o=Pn.Pop;let g=h(),u=g==null?null:g-c;c=g,l&&l({action:o,location:v.location,delta:u})}function p(g,u){o=Pn.Push;let b=Ps(v.location,g,u);c=h()+1;let w=po(b,c),E=v.createHref(b);try{a.pushState(w,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(E)}s&&l&&l({action:o,location:v.location,delta:1})}function f(g,u){o=Pn.Replace;let b=Ps(v.location,g,u);c=h();let w=po(b,c),E=v.createHref(b);a.replaceState(w,"",E),s&&l&&l({action:o,location:v.location,delta:0})}function x(g){let u=r.location.origin!=="null"?r.location.origin:r.location.href,b=typeof g=="string"?g:Ir(g);return b=b.replace(/ $/,"%20"),ut(u,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,u)}let v={get action(){return o},get location(){return i(r,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(fo,d),l=g,()=>{r.removeEventListener(fo,d),l=null}},createHref(g){return e(r,g)},createURL:x,encodeLocation(g){let u=x(g);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:p,replace:f,go(g){return a.go(g)}};return v}var mo;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(mo||(mo={}));function Hc(i,e,t){return t===void 0&&(t="/"),Wc(i,e,t)}function Wc(i,e,t,n){let r=typeof e=="string"?Si(e):e,s=Na(r.pathname||"/",t);if(s==null)return null;let a=wl(i);jc(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=id(s);o=ed(a[l],c)}return o}function wl(i,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(ut(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let c=Dn([n,l.relativePath]),h=t.concat(l);s.children&&s.children.length>0&&(ut(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),wl(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Jc(c,s.index),routesMeta:h})};return i.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Tl(s.path))r(s,a,l)}),e}function Tl(i){let e=i.split("/");if(e.length===0)return[];let[t,...n]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(n.length===0)return r?[s,""]:[s];let a=Tl(n.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>i.startsWith("/")&&l===""?"/":l)}function jc(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:Qc(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const Xc=/^:[\w-]+$/,qc=3,Yc=2,$c=1,Kc=10,Zc=-2,go=i=>i==="*";function Jc(i,e){let t=i.split("/"),n=t.length;return t.some(go)&&(n+=Zc),e&&(n+=Yc),t.filter(r=>!go(r)).reduce((r,s)=>r+(Xc.test(s)?qc:s===""?$c:Kc),n)}function Qc(i,e){return i.length===e.length&&i.slice(0,-1).every((n,r)=>n===e[r])?i[i.length-1]-e[e.length-1]:0}function ed(i,e,t){let{routesMeta:n}=i,r={},s="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=td({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:Dn([s,d.pathname]),pathnameBase:ld(Dn([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=Dn([s,d.pathnameBase]))}return a}function td(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,n]=nd(i.path,i.caseSensitive,i.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:n.reduce((c,h,d)=>{let{paramName:p,isOptional:f}=h;if(p==="*"){let v=o[d]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const x=o[d];return f&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:i}}function nd(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Pa(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let n=[],r="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(n.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(n.push({paramName:"*"}),r+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":i!==""&&i!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function id(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pa(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function Na(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=i.charAt(t);return n&&n!=="/"?null:i.slice(t)||"/"}const rd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sd=i=>rd.test(i);function ad(i,e){e===void 0&&(e="/");let{pathname:t,search:n="",hash:r=""}=typeof i=="string"?Si(i):i,s;if(t)if(sd(t))s=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),Pa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?s=xo(t.substring(1),"/"):s=xo(t,e)}else s=e;return{pathname:s,search:cd(n),hash:dd(r)}}function xo(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Kr(i,e,t,n){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function od(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function La(i,e){let t=od(i);return e?t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase):t.map(n=>n.pathnameBase)}function Da(i,e,t,n){n===void 0&&(n=!1);let r;typeof i=="string"?r=Si(i):(r=Gi({},i),ut(!r.pathname||!r.pathname.includes("?"),Kr("?","pathname","search",r)),ut(!r.pathname||!r.pathname.includes("#"),Kr("#","pathname","hash",r)),ut(!r.search||!r.search.includes("#"),Kr("#","search","hash",r)));let s=i===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let d=e.length-1;if(!n&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}o=d>=0?e[d]:"/"}let l=ad(r,o),c=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Dn=i=>i.join("/").replace(/\/\/+/g,"/"),ld=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),cd=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,dd=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function hd(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Al=["post","put","patch","delete"];new Set(Al);const ud=["get",...Al];new Set(ud);function Vi(){return Vi=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Vi.apply(this,arguments)}const Ia=X.createContext(null),fd=X.createContext(null),Un=X.createContext(null),Vr=X.createContext(null),Fn=X.createContext({outlet:null,matches:[],isDataRoute:!1}),Rl=X.createContext(null);function pd(i,e){let{relative:t}=e===void 0?{}:e;Ei()||ut(!1);let{basename:n,navigator:r}=X.useContext(Un),{hash:s,pathname:a,search:o}=Pl(i,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:Dn([n,a])),r.createHref({pathname:l,search:o,hash:s})}function Ei(){return X.useContext(Vr)!=null}function On(){return Ei()||ut(!1),X.useContext(Vr).location}function Cl(i){X.useContext(Un).static||X.useLayoutEffect(i)}function qi(){let{isDataRoute:i}=X.useContext(Fn);return i?Ad():md()}function md(){Ei()||ut(!1);let i=X.useContext(Ia),{basename:e,future:t,navigator:n}=X.useContext(Un),{matches:r}=X.useContext(Fn),{pathname:s}=On(),a=JSON.stringify(La(r,t.v7_relativeSplatPath)),o=X.useRef(!1);return Cl(()=>{o.current=!0}),X.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){n.go(c);return}let d=Da(c,JSON.parse(a),s,h.relative==="path");i==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Dn([e,d.pathname])),(h.replace?n.replace:n.push)(d,h.state,h)},[e,n,a,s,i])}function Pl(i,e){let{relative:t}=e===void 0?{}:e,{future:n}=X.useContext(Un),{matches:r}=X.useContext(Fn),{pathname:s}=On(),a=JSON.stringify(La(r,n.v7_relativeSplatPath));return X.useMemo(()=>Da(i,JSON.parse(a),s,t==="path"),[i,a,s,t])}function gd(i,e){return xd(i,e)}function xd(i,e,t,n){Ei()||ut(!1);let{navigator:r}=X.useContext(Un),{matches:s}=X.useContext(Fn),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=On(),h;if(e){var d;let g=typeof e=="string"?Si(e):e;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||ut(!1),h=g}else h=c;let p=h.pathname||"/",f=p;if(l!=="/"){let g=l.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=Hc(i,{pathname:f}),v=bd(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Dn([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Dn([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,t,n);return e&&v?X.createElement(Vr.Provider,{value:{location:Vi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Pn.Pop}},v):v}function _d(){let i=Td(),e=hd(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:r},t):null,null)}const vd=X.createElement(_d,null);class Md extends X.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?X.createElement(Fn.Provider,{value:this.props.routeContext},X.createElement(Rl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yd(i){let{routeContext:e,match:t,children:n}=i,r=X.useContext(Ia);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),X.createElement(Fn.Provider,{value:e},n)}function bd(i,e,t,n){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),i==null){var s;if(!t)return null;if(t.errors)i=t.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let a=i,o=(r=t)==null?void 0:r.errors;if(o!=null){let h=a.findIndex(d=>d.route.id&&o?.[d.route.id]!==void 0);h>=0||ut(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,c=-1;if(t&&n&&n.v7_partialHydration)for(let h=0;h<a.length;h++){let d=a[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:p,errors:f}=t,x=d.route.loader&&p[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||x){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,d,p)=>{let f,x=!1,v=null,g=null;t&&(f=o&&d.route.id?o[d.route.id]:void 0,v=d.route.errorElement||vd,l&&(c<0&&p===0?(Rd("route-fallback"),x=!0,g=null):c===p&&(x=!0,g=d.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,p+1)),b=()=>{let w;return f?w=v:x?w=g:d.route.Component?w=X.createElement(d.route.Component,null):d.route.element?w=d.route.element:w=h,X.createElement(yd,{match:d,routeContext:{outlet:h,matches:u,isDataRoute:t!=null},children:w})};return t&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?X.createElement(Md,{location:t.location,revalidation:t.revalidation,component:v,error:f,children:b(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):b()},null)}var Nl=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(Nl||{}),Ll=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Ll||{});function Sd(i){let e=X.useContext(Ia);return e||ut(!1),e}function Ed(i){let e=X.useContext(fd);return e||ut(!1),e}function wd(i){let e=X.useContext(Fn);return e||ut(!1),e}function Dl(i){let e=wd(),t=e.matches[e.matches.length-1];return t.route.id||ut(!1),t.route.id}function Td(){var i;let e=X.useContext(Rl),t=Ed(),n=Dl();return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function Ad(){let{router:i}=Sd(Nl.UseNavigateStable),e=Dl(Ll.UseNavigateStable),t=X.useRef(!1);return Cl(()=>{t.current=!0}),X.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?i.navigate(r):i.navigate(r,Vi({fromRouteId:e},s)))},[i,e])}const _o={};function Rd(i,e,t){_o[i]||(_o[i]=!0)}function Cd(i,e){i?.v7_startTransition,i?.v7_relativeSplatPath}function Pd(i){let{to:e,replace:t,state:n,relative:r}=i;Ei()||ut(!1);let{future:s,static:a}=X.useContext(Un),{matches:o}=X.useContext(Fn),{pathname:l}=On(),c=qi(),h=Da(e,La(o,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(h);return X.useEffect(()=>c(JSON.parse(d),{replace:t,state:n,relative:r}),[c,d,r,t,n]),null}function Yn(i){ut(!1)}function Nd(i){let{basename:e="/",children:t=null,location:n,navigationType:r=Pn.Pop,navigator:s,static:a=!1,future:o}=i;Ei()&&ut(!1);let l=e.replace(/^\/*/,"/"),c=X.useMemo(()=>({basename:l,navigator:s,static:a,future:Vi({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof n=="string"&&(n=Si(n));let{pathname:h="/",search:d="",hash:p="",state:f=null,key:x="default"}=n,v=X.useMemo(()=>{let g=Na(h,l);return g==null?null:{location:{pathname:g,search:d,hash:p,state:f,key:x},navigationType:r}},[l,h,d,p,f,x,r]);return v==null?null:X.createElement(Un.Provider,{value:c},X.createElement(Vr.Provider,{children:t,value:v}))}function Ld(i){let{children:e,location:t}=i;return gd(Ns(e),t)}new Promise(()=>{});function Ns(i,e){e===void 0&&(e=[]);let t=[];return X.Children.forEach(i,(n,r)=>{if(!X.isValidElement(n))return;let s=[...e,r];if(n.type===X.Fragment){t.push.apply(t,Ns(n.props.children,s));return}n.type!==Yn&&ut(!1),!n.props.index||!n.props.children||ut(!1);let a={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=Ns(n.props.children,s)),t.push(a)}),t}function Ls(){return Ls=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Ls.apply(this,arguments)}function Dd(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function Id(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Ud(i,e){return i.button===0&&(!e||e==="_self")&&!Id(i)}function Ds(i){return i===void 0&&(i=""),new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((e,t)=>{let n=i[t];return e.concat(Array.isArray(n)?n.map(r=>[t,r]):[[t,n]])},[]))}function Fd(i,e){let t=Ds(i);return e&&e.forEach((n,r)=>{t.has(r)||e.getAll(r).forEach(s=>{t.append(r,s)})}),t}const Od=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Bd="6";try{window.__reactRouterVersion=Bd}catch{}const kd="startTransition",vo=Uc[kd];function zd(i){let{basename:e,children:t,future:n,window:r}=i,s=X.useRef();s.current==null&&(s.current=zc({window:r,v5Compat:!0}));let a=s.current,[o,l]=X.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},h=X.useCallback(d=>{c&&vo?vo(()=>l(d)):l(d)},[l,c]);return X.useLayoutEffect(()=>a.listen(h),[a,h]),X.useEffect(()=>Cd(n),[n]),X.createElement(Nd,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,future:n})}const Gd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hd=X.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:d}=e,p=Dd(e,Od),{basename:f}=X.useContext(Un),x,v=!1;if(typeof c=="string"&&Vd.test(c)&&(x=c,Gd))try{let w=new URL(window.location.href),E=c.startsWith("//")?new URL(w.protocol+c):new URL(c),A=Na(E.pathname,f);E.origin===w.origin&&A!=null?c=A+E.search+E.hash:v=!0}catch{}let g=pd(c,{relative:r}),u=Wd(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:r,viewTransition:d});function b(w){n&&n(w),w.defaultPrevented||u(w)}return X.createElement("a",Ls({},p,{href:x||g,onClick:v||s?n:b,ref:t,target:l}))});var Mo;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Mo||(Mo={}));var yo;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(yo||(yo={}));function Wd(i,e){let{target:t,replace:n,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=qi(),c=On(),h=Pl(i,{relative:a});return X.useCallback(d=>{if(Ud(d,t)){d.preventDefault();let p=n!==void 0?n:Ir(c)===Ir(h);l(i,{replace:p,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,h,n,r,t,i,s,a,o])}function Il(i){let e=X.useRef(Ds(i)),t=X.useRef(!1),n=On(),r=X.useMemo(()=>Fd(n.search,t.current?null:e.current),[n.search]),s=qi(),a=X.useCallback((o,l)=>{const c=Ds(typeof o=="function"?o(r):o);t.current=!0,s("?"+c,l)},[s,r]);return[r,a]}function Ul(){const[i,e]=X.useState("dark"),[t,n]=X.useState(!1);X.useEffect(()=>{const a=localStorage.getItem("theme"),o=window.matchMedia("(prefers-color-scheme: dark)").matches,l=a||(o?"dark":"light");e(l),r(l),n(!0)},[]);const r=a=>{const o=document.documentElement;a==="dark"?o.classList.add("dark"):o.classList.remove("dark"),localStorage.setItem("theme",a)};return{theme:i,toggleTheme:()=>{const a=i==="dark"?"light":"dark";e(a),r(a)},mounted:t}}class jd extends Qt.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("ErrorBoundary caught:",e,t)}render(){return this.state.hasError?m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white flex items-center justify-center",children:m.jsxs("div",{className:"max-w-md text-center space-y-6",children:[m.jsx("div",{className:"text-5xl",children:"⚠️"}),m.jsx("h1",{className:"text-2xl font-bold",children:"Oops! Something went wrong"}),m.jsx("p",{className:"text-gray-400",children:"We encountered an unexpected error. Please refresh the page and try again."}),this.state.error&&m.jsxs("details",{className:"text-left bg-white/5 rounded-lg p-4 border border-white/10",children:[m.jsx("summary",{className:"cursor-pointer font-mono text-sm text-gray-300 hover:text-white",children:"Error details"}),m.jsx("pre",{className:"mt-2 text-xs text-gray-400 overflow-auto",children:this.state.error.toString()})]}),m.jsx("button",{onClick:()=>window.location.reload(),className:"mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors",children:"Refresh Page"})]})}):this.props.children}}var Xd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const qd=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),lt=(i,e)=>{const t=X.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},h)=>X.createElement("svg",{ref:h,...Xd,width:r,height:r,stroke:n,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${qd(i)}`,o].join(" "),...c},[...e.map(([d,p])=>X.createElement(d,p)),...Array.isArray(l)?l:[l]]));return t.displayName=`${i}`,t};const Yd=lt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);const $d=lt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);const Fl=lt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Kd=lt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const Zd=lt("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);const Jd=lt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Qd=lt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const eh=lt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);const Ol=lt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);const th=lt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const nh=lt("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const Bl=lt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const ih=lt("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);const rh=lt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);const sh=lt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const ah=lt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);const oh=lt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);const lh=lt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);const ch=lt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const kl=lt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);const zl=lt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);const dh=lt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const Gl=lt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Vl=({children:i,user:e,onLogout:t})=>{const{theme:n,toggleTheme:r,mounted:s}=Ul(),a=On(),[o,l]=X.useState(!1);if(!s)return m.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center",children:m.jsx("div",{className:"animate-pulse text-white",children:"Loading..."})});const c=[{path:"/dashboard",label:"Dashboard",icon:"📊"},{path:"/explore",label:"Explore",icon:"🔍"},{path:"/matches",label:"Matches",icon:"🎯"},{path:"/generate",label:"Generate",icon:"⚙️"}],h=d=>a.pathname===d;return m.jsxs("div",{className:"min-h-screen flex flex-col bg-transparent text-white",children:[m.jsx("nav",{className:"fixed top-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl",children:m.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:m.jsxs("div",{className:"flex items-center justify-between h-16",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("button",{onClick:()=>l(!o),className:"p-2 rounded-lg hover:bg-white/10 transition-colors","aria-label":"Toggle menu",children:m.jsx(sh,{size:20})}),e&&m.jsxs("div",{className:"flex items-center gap-3 px-3 py-1 rounded-lg bg-white/5 border border-white/10",children:[m.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:m.jsx("span",{className:"text-xs font-bold text-white",children:e.username.charAt(0).toUpperCase()})}),m.jsx("span",{className:"text-sm font-medium text-gray-300",children:e.username})]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer","aria-label":"Toggle theme",title:`Switch to ${n==="dark"?"light":"dark"} mode`,children:n==="dark"?m.jsx(lh,{size:20,className:"text-yellow-400"}):m.jsx(ah,{size:20,className:"text-gray-300"})}),e&&t&&m.jsx("button",{onClick:t,className:"p-2 rounded-lg hover:bg-red-500/10 hover:text-red-400 text-gray-400 transition-colors","aria-label":"Logout",title:"Logout",children:m.jsx(rh,{size:20})})]})]})})}),o&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity",onClick:()=>l(!1)}),m.jsx("div",{className:"fixed left-0 top-16 h-screen w-64 bg-black/95 backdrop-blur-xl border-r border-white/10 z-40 animate-in slide-in-from-left-96 duration-300",children:m.jsx("div",{className:"flex flex-col gap-2 p-4",children:c.map(d=>m.jsxs(Hd,{to:d.path,className:`px-6 py-4 rounded-lg text-base font-medium transition-all flex items-center gap-3 ${h(d.path)?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"text-gray-300 hover:bg-white/10"}`,onClick:()=>l(!1),children:[m.jsx("span",{className:"text-2xl",children:d.icon}),m.jsx("span",{children:d.label})]},d.path))})})]}),m.jsx("main",{className:"flex-1 pt-16 pb-12",children:i}),m.jsx("footer",{className:"border-t border-white/10 bg-black/50 backdrop-blur-sm py-8",children:m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[m.jsxs("div",{className:"space-y-3",children:[m.jsx("h3",{className:"font-semibold text-white",children:"HackQuest AI"}),m.jsx("p",{className:"text-sm text-gray-400",children:"Win your next hackathon with AI-powered insights, profile analysis, and winning strategies."})]}),m.jsxs("div",{className:"space-y-3",children:[m.jsx("h3",{className:"font-semibold text-white",children:"Quick Links"}),m.jsxs("ul",{className:"space-y-2 text-sm",children:[m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition-colors",children:"Documentation"})}),m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition-colors",children:"API Docs"})}),m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition-colors",children:"GitHub"})})]})]}),m.jsxs("div",{className:"space-y-3",children:[m.jsx("h3",{className:"font-semibold text-white",children:"Support"}),m.jsxs("ul",{className:"space-y-2 text-sm",children:[m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition-colors",children:"Contact Us"})}),m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition-colors",children:"Feedback"})}),m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-gray-400 hover:text-blue-400 transition-colors",children:"Status"})})]})]})]}),m.jsxs("div",{className:"border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400",children:[m.jsx("p",{children:"© 2025 HackQuest AI. All rights reserved."}),m.jsxs("div",{className:"flex gap-6 mt-4 sm:mt-0",children:[m.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy"}),m.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms"}),m.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Cookies"})]})]})]})})]})};Vl.displayName="Layout";const Ua="182",hh=0,bo=1,uh=2,Ar=1,fh=2,Oi=3,In=0,Ft=1,gn=2,_n=0,gi=1,Is=2,So=3,Eo=4,ph=5,Kn=100,mh=101,gh=102,xh=103,_h=104,vh=200,Mh=201,yh=202,bh=203,Us=204,Fs=205,Sh=206,Eh=207,wh=208,Th=209,Ah=210,Rh=211,Ch=212,Ph=213,Nh=214,Os=0,Bs=1,ks=2,_i=3,zs=4,Gs=5,Vs=6,Hs=7,Fa=0,Lh=1,Dh=2,on=0,Hl=1,Wl=2,jl=3,Xl=4,ql=5,Yl=6,$l=7,Kl=300,ei=301,vi=302,Ws=303,js=304,Hr=306,Xs=1e3,xn=1001,qs=1002,yt=1003,Ih=1004,nr=1005,Et=1006,Zr=1007,Jn=1008,Vt=1009,Zl=1010,Jl=1011,Hi=1012,Oa=1013,cn=1014,sn=1015,Mn=1016,Ba=1017,ka=1018,Wi=1020,Ql=35902,ec=35899,tc=1021,nc=1022,Kt=1023,yn=1026,Qn=1027,ic=1028,za=1029,Mi=1030,Ga=1031,Va=1033,Rr=33776,Cr=33777,Pr=33778,Nr=33779,Ys=35840,$s=35841,Ks=35842,Zs=35843,Js=36196,Qs=37492,ea=37496,ta=37488,na=37489,ia=37490,ra=37491,sa=37808,aa=37809,oa=37810,la=37811,ca=37812,da=37813,ha=37814,ua=37815,fa=37816,pa=37817,ma=37818,ga=37819,xa=37820,_a=37821,va=36492,Ma=36494,ya=36495,ba=36283,Sa=36284,Ea=36285,wa=36286,Uh=3200,Ha=0,Fh=1,Cn="",jt="srgb",yi="srgb-linear",Ur="linear",Je="srgb",ni=7680,wo=519,Oh=512,Bh=513,kh=514,Wa=515,zh=516,Gh=517,ja=518,Vh=519,To=35044,Ao="300 es",an=2e3,Fr=2001;function rc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){const i=Or("canvas");return i.style.display="block",i}const Ro={};function Co(...i){const e="THREE."+i.shift();console.log(e,...i)}function Pe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Xe(...i){const e="THREE."+i.shift();console.error(e,...i)}function ji(...i){const e=i.join(" ");e in Ro||(Ro[e]=!0,Pe(...i))}function Wh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jr=Math.PI/180,Ta=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function jh(i,e){return(i%e+e)%e}function Qr(i,e,t){return(1-t)*i+t*e}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],p=s[a+0],f=s[a+1],x=s[a+2],v=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=v;return}if(d!==v||l!==p||c!==f||h!==x){let g=l*p+c*f+h*x+d*v;g<0&&(p=-p,f=-f,x=-x,v=-v,g=-g);let u=1-o;if(g<.9995){const b=Math.acos(g),w=Math.sin(b);u=Math.sin(u*b)/w,o=Math.sin(o*b)/w,l=l*u+p*o,c=c*u+f*o,h=h*u+x*o,d=d*u+v*o}else{l=l*u+p*o,c=c*u+f*o,h=h*u+x*o,d=d*u+v*o;const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],p=s[a+1],f=s[a+2],x=s[a+3];return e[t]=o*x+h*d+l*f-c*p,e[t+1]=l*x+h*p+c*d-o*f,e[t+2]=c*x+h*f+o*p-l*d,e[t+3]=h*x-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),p=l(n/2),f=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=p*h*d+c*f*x,this._y=c*f*d-p*h*x,this._z=c*h*x+p*f*d,this._w=c*h*d-p*f*x;break;case"YXZ":this._x=p*h*d+c*f*x,this._y=c*f*d-p*h*x,this._z=c*h*x-p*f*d,this._w=c*h*d+p*f*x;break;case"ZXY":this._x=p*h*d-c*f*x,this._y=c*f*d+p*h*x,this._z=c*h*x+p*f*d,this._w=c*h*d-p*f*x;break;case"ZYX":this._x=p*h*d-c*f*x,this._y=c*f*d+p*h*x,this._z=c*h*x-p*f*d,this._w=c*h*d+p*f*x;break;case"YZX":this._x=p*h*d+c*f*x,this._y=c*f*d+p*h*x,this._z=c*h*x-p*f*d,this._w=c*h*d-p*f*x;break;case"XZY":this._x=p*h*d-c*f*x,this._y=c*f*d-p*h*x,this._z=c*h*x+p*f*d,this._w=c*h*d+p*f*x;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const es=new O,Po=new $i;class De{constructor(e,t,n,r,s,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],f=n[5],x=n[8],v=r[0],g=r[3],u=r[6],b=r[1],w=r[4],E=r[7],A=r[2],R=r[5],N=r[8];return s[0]=a*v+o*b+l*A,s[3]=a*g+o*w+l*R,s[6]=a*u+o*E+l*N,s[1]=c*v+h*b+d*A,s[4]=c*g+h*w+d*R,s[7]=c*u+h*E+d*N,s[2]=p*v+f*b+x*A,s[5]=p*g+f*w+x*R,s[8]=p*u+f*E+x*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,p=o*l-h*s,f=c*s-a*l,x=t*d+n*p+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*c-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=p*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ts.makeScale(e,t)),this}rotate(e){return this.premultiply(ts.makeRotation(-e)),this}translate(e,t){return this.premultiply(ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ts=new De,No=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lo=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xh(){const i={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?Ur:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yi]:{primaries:e,whitePoint:n,transfer:Ur,toXYZ:No,fromXYZ:Lo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:No,fromXYZ:Lo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const He=Xh();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class qh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ii===void 0&&(ii=Or("canvas")),ii.width=e.width,ii.height=e.height;const r=ii.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yh=0;class Xa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ns(r[a].image)):s.push(ns(r[a]))}else s=ns(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let $h=0;const is=new O;class wt extends wi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=xn,r=xn,s=Et,a=Jn,o=Kt,l=Vt,c=wt.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Yi(),this.name="",this.source=new Xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(is).x}get height(){return this.source.getSize(is).y}get depth(){return this.source.getSize(is).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Kl;wt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],x=l[9],v=l[2],g=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,E=(f+1)/2,A=(u+1)/2,R=(h+p)/4,N=(d+v)/4,k=(x+g)/4;return w>E&&w>A?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=R/n,s=N/n):E>A?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=k/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=N/s,r=k/s),this.set(n,r,s,t),this}let b=Math.sqrt((g-x)*(g-x)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(d-v)/b,this.z=(p-h)/b,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new wt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends Kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sc extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zh extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(s,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),rr.subVectors(this.max,Pi),ri.subVectors(e.a,Pi),si.subVectors(e.b,Pi),ai.subVectors(e.c,Pi),Sn.subVectors(si,ri),En.subVectors(ai,si),Gn.subVectors(ri,ai);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Gn.z,Gn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Gn.z,0,-Gn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Gn.y,Gn.x,0];return!rs(t,ri,si,ai,rr)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,ri,si,ai,rr))?!1:(sr.crossVectors(Sn,En),t=[sr.x,sr.y,sr.z],rs(t,ri,si,ai,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new O,new O,new O,new O,new O,new O,new O,new O],Xt=new O,ir=new Ki,ri=new O,si=new O,ai=new O,Sn=new O,En=new O,Gn=new O,Pi=new O,rr=new O,sr=new O,Vn=new O;function rs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vn.fromArray(i,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Jh=new Ki,Ni=new O,ss=new O;class Zi{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ni,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(ss)),this.expandByPoint(Ni.copy(e.center).sub(ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const un=new O,as=new O,ar=new O,wn=new O,os=new O,or=new O,ls=new O;class qa{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){as.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(as);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ar),o=wn.dot(this.direction),l=-wn.dot(ar),c=wn.lengthSq(),h=Math.abs(1-a*a);let d,p,f,x;if(h>0)if(d=a*l-o,p=a*o-l,x=s*h,d>=0)if(p>=-x)if(p<=x){const v=1/h;d*=v,p*=v,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(as).addScaledVector(ar,p),f}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){os.subVectors(t,e),or.subVectors(n,e),ls.crossVectors(os,or);let a=this.direction.dot(ls),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(or.crossVectors(wn,or));if(l<0)return null;const c=o*this.direction.dot(os.cross(wn));if(c<0||l+c>a)return null;const h=-o*wn.dot(ls);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,s,a,o,l,c,h,d,p,f,x,v,g){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,p,f,x,v,g)}set(e,t,n,r,s,a,o,l,c,h,d,p,f,x,v,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=x,u[11]=v,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/oi.setFromMatrixColumn(e,0).length(),s=1/oi.setFromMatrixColumn(e,1).length(),a=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*h,f=a*d,x=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+x*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*h,f=l*d,x=c*h,v=c*d;t[0]=p+v*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=v+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*h,f=l*d,x=c*h,v=c*d;t[0]=p-v*o,t[4]=-a*d,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=v-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*h,f=a*d,x=o*h,v=o*d;t[0]=l*h,t[4]=x*c-f,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,f=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=v-p*d,t[8]=x*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+x,t[10]=p-v*d}else if(e.order==="XZY"){const p=a*l,f=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+v,t[5]=a*h,t[9]=f*d-x,t[2]=x*d-f,t[6]=o*h,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qh,e,eu)}lookAt(e,t,n){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Tn.crossVectors(n,kt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Tn.crossVectors(n,kt)),Tn.normalize(),lr.crossVectors(kt,Tn),r[0]=Tn.x,r[4]=lr.x,r[8]=kt.x,r[1]=Tn.y,r[5]=lr.y,r[9]=kt.y,r[2]=Tn.z,r[6]=lr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],f=n[13],x=n[2],v=n[6],g=n[10],u=n[14],b=n[3],w=n[7],E=n[11],A=n[15],R=r[0],N=r[4],k=r[8],M=r[12],S=r[1],C=r[5],F=r[9],B=r[13],j=r[2],Y=r[6],V=r[10],W=r[14],J=r[3],ue=r[7],le=r[11],fe=r[15];return s[0]=a*R+o*S+l*j+c*J,s[4]=a*N+o*C+l*Y+c*ue,s[8]=a*k+o*F+l*V+c*le,s[12]=a*M+o*B+l*W+c*fe,s[1]=h*R+d*S+p*j+f*J,s[5]=h*N+d*C+p*Y+f*ue,s[9]=h*k+d*F+p*V+f*le,s[13]=h*M+d*B+p*W+f*fe,s[2]=x*R+v*S+g*j+u*J,s[6]=x*N+v*C+g*Y+u*ue,s[10]=x*k+v*F+g*V+u*le,s[14]=x*M+v*B+g*W+u*fe,s[3]=b*R+w*S+E*j+A*J,s[7]=b*N+w*C+E*Y+A*ue,s[11]=b*k+w*F+E*V+A*le,s[15]=b*M+w*B+E*W+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],f=e[14],x=e[3],v=e[7],g=e[11],u=e[15],b=l*f-c*p,w=o*f-c*d,E=o*p-l*d,A=a*f-c*h,R=a*p-l*h,N=a*d-o*h;return t*(v*b-g*w+u*E)-n*(x*b-g*A+u*R)+r*(x*w-v*A+u*N)-s*(x*E-v*R+g*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],f=e[11],x=e[12],v=e[13],g=e[14],u=e[15],b=d*g*c-v*p*c+v*l*f-o*g*f-d*l*u+o*p*u,w=x*p*c-h*g*c-x*l*f+a*g*f+h*l*u-a*p*u,E=h*v*c-x*d*c+x*o*f-a*v*f-h*o*u+a*d*u,A=x*d*l-h*v*l-x*o*p+a*v*p+h*o*g-a*d*g,R=t*b+n*w+r*E+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=b*N,e[1]=(v*p*s-d*g*s-v*r*f+n*g*f+d*r*u-n*p*u)*N,e[2]=(o*g*s-v*l*s+v*r*c-n*g*c-o*r*u+n*l*u)*N,e[3]=(d*l*s-o*p*s-d*r*c+n*p*c+o*r*f-n*l*f)*N,e[4]=w*N,e[5]=(h*g*s-x*p*s+x*r*f-t*g*f-h*r*u+t*p*u)*N,e[6]=(x*l*s-a*g*s-x*r*c+t*g*c+a*r*u-t*l*u)*N,e[7]=(a*p*s-h*l*s+h*r*c-t*p*c-a*r*f+t*l*f)*N,e[8]=E*N,e[9]=(x*d*s-h*v*s-x*n*f+t*v*f+h*n*u-t*d*u)*N,e[10]=(a*v*s-x*o*s+x*n*c-t*v*c-a*n*u+t*o*u)*N,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*f-t*o*f)*N,e[12]=A*N,e[13]=(h*v*r-x*d*r+x*n*p-t*v*p-h*n*g+t*d*g)*N,e[14]=(x*o*r-a*v*r-x*n*l+t*v*l+a*n*g-t*o*g)*N,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*p+t*o*p)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,p=s*c,f=s*h,x=s*d,v=a*h,g=a*d,u=o*d,b=l*c,w=l*h,E=l*d,A=n.x,R=n.y,N=n.z;return r[0]=(1-(v+u))*A,r[1]=(f+E)*A,r[2]=(x-w)*A,r[3]=0,r[4]=(f-E)*R,r[5]=(1-(p+u))*R,r[6]=(g+b)*R,r[7]=0,r[8]=(x+w)*N,r[9]=(g-b)*N,r[10]=(1-(p+v))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=oi.set(r[0],r[1],r[2]).length();const a=oi.set(r[4],r[5],r[6]).length(),o=oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),qt.copy(this);const c=1/s,h=1/a,d=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=d,qt.elements[9]*=d,qt.elements[10]*=d,t.setFromRotationMatrix(qt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=an,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r);let x,v;if(l)x=s/(a-s),v=a*s/(a-s);else if(o===an)x=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Fr)x=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=an,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-r),p=-(t+e)/(t-e),f=-(n+r)/(n-r);let x,v;if(l)x=1/(a-s),v=a/(a-s);else if(o===an)x=-2/(a-s),v=-(a+s)/(a-s);else if(o===Fr)x=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new O,qt=new at,Qh=new O(0,0,0),eu=new O(1,1,1),Tn=new O,lr=new O,kt=new O,Do=new at,Io=new $i;class Zt{constructor(e=0,t=0,n=0,r=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tu=0;const Uo=new O,li=new $i,fn=new at,cr=new O,Li=new O,nu=new O,iu=new $i,Fo=new O(1,0,0),Oo=new O(0,1,0),Bo=new O(0,0,1),ko={type:"added"},ru={type:"removed"},ci={type:"childadded",child:null},cs={type:"childremoved",child:null};class Mt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new O,t=new Zt,n=new $i,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new De}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Fo,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fo,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Li,cr,this.up):fn.lookAt(cr,Li,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),li.setFromRotationMatrix(fn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ko),ci.child=e,this.dispatchEvent(ci),ci.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ru),cs.child=e,this.dispatchEvent(cs),cs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ko),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,iu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new O(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new O,pn=new O,ds=new O,mn=new O,di=new O,hi=new O,zo=new O,hs=new O,us=new O,fs=new O,ps=new ht,ms=new ht,gs=new ht;class $t{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),pn.subVectors(n,t),ds.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(pn),l=Yt.dot(ds),c=pn.dot(pn),h=pn.dot(ds),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(c*l-o*h)*p,x=(a*h-o*l)*p;return s.set(1-f-x,x,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ps.setScalar(0),ms.setScalar(0),gs.setScalar(0),ps.fromBufferAttribute(e,t),ms.fromBufferAttribute(e,n),gs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ps,s.x),a.addScaledVector(ms,s.y),a.addScaledVector(gs,s.z),a}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),pn.subVectors(e,t),Yt.cross(pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Yt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;di.subVectors(r,n),hi.subVectors(s,n),hs.subVectors(e,n);const l=di.dot(hs),c=hi.dot(hs);if(l<=0&&c<=0)return t.copy(n);us.subVectors(e,r);const h=di.dot(us),d=hi.dot(us);if(h>=0&&d<=h)return t.copy(r);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(di,a);fs.subVectors(e,s);const f=di.dot(fs),x=hi.dot(fs);if(x>=0&&f<=x)return t.copy(s);const v=f*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(hi,o);const g=h*x-f*d;if(g<=0&&d-h>=0&&f-x>=0)return zo.subVectors(s,r),o=(d-h)/(d-h+(f-x)),t.copy(r).addScaledVector(zo,o);const u=1/(g+v+p);return a=v*u,o=p*u,t.copy(n).addScaledVector(di,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},dr={h:0,s:0,l:0};function xs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=He.workingColorSpace){if(e=jh(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=xs(a,s,e+1/3),this.g=xs(a,s,e),this.b=xs(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return He.workingToColorSpace(St.copy(this),e),Math.round(Ge(St.r*255,0,255))*65536+Math.round(Ge(St.g*255,0,255))*256+Math.round(Ge(St.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(St.copy(this),t);const n=St.r,r=St.g,s=St.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=jt){He.workingToColorSpace(St.copy(this),e);const t=St.r,n=St.g,r=St.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(dr);const n=Qr(An.h,dr.h,t),r=Qr(An.s,dr.s,t),s=Qr(An.l,dr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ie;Ie.NAMES=oc;let su=0;class Bn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=gi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Us,this.blendDst=Fs,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Us&&(n.blendSrc=this.blendSrc),this.blendDst!==Fs&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zi extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new O,hr=new qe;let au=0;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:au++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=To,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),e}}class lc extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cc extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ou=0;const Wt=new at,_s=new Mt,ui=new O,zt=new Ki,Di=new Ki,vt=new O;class At extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rc(e)?cc:lc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return _s.lookAt(e),_s.updateMatrix(),this.applyMatrix4(_s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(zt.min,Di.min),zt.expandByPoint(vt),vt.addVectors(zt.max,Di.max),zt.expandByPoint(vt)):(zt.expandByPoint(Di.min),zt.expandByPoint(Di.max))}zt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(e,c),vt.add(ui)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<n.count;k++)o[k]=new O,l[k]=new O;const c=new O,h=new O,d=new O,p=new qe,f=new qe,x=new qe,v=new O,g=new O;function u(k,M,S){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),p.fromBufferAttribute(s,k),f.fromBufferAttribute(s,M),x.fromBufferAttribute(s,S),h.sub(c),d.sub(c),f.sub(p),x.sub(p);const C=1/(f.x*x.y-x.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(C),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(C),o[k].add(v),o[M].add(v),o[S].add(v),l[k].add(g),l[M].add(g),l[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,M=b.length;k<M;++k){const S=b[k],C=S.start,F=S.count;for(let B=C,j=C+F;B<j;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new O,E=new O,A=new O,R=new O;function N(k){A.fromBufferAttribute(r,k),R.copy(A);const M=o[k];w.copy(M),w.sub(A.multiplyScalar(A.dot(M))).normalize(),E.crossVectors(R,M);const C=E.dot(l[k])<0?-1:1;a.setXYZW(k,w.x,w.y,w.z,C)}for(let k=0,M=b.length;k<M;++k){const S=b[k],C=S.start,F=S.count;for(let B=C,j=C+F;B<j;B+=3)N(e.getX(B+0)),N(e.getX(B+1)),N(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let p=0,f=e.count;p<f;p+=3){const x=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let f=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let u=0;u<h;u++)p[x++]=c[f++]}return new Lt(p,h,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new at,Hn=new qa,ur=new Zi,Vo=new O,fr=new O,pr=new O,mr=new O,vs=new O,gr=new O,Ho=new O,xr=new O;class Nt extends Mt{constructor(e=new At,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(vs.fromBufferAttribute(d,e),a?gr.addScaledVector(vs,h):gr.addScaledVector(vs.sub(t),h))}t.add(gr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),Hn.copy(e.ray).recast(e.near),!(ur.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(ur,Vo)===null||Hn.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Go.copy(s).invert(),Hn.copy(e.ray).applyMatrix4(Go),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){const g=p[x],u=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let E=b,A=w;E<A;E+=3){const R=o.getX(E),N=o.getX(E+1),k=o.getX(E+2);r=_r(this,u,e,n,c,h,d,R,N,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=x,u=v;g<u;g+=3){const b=o.getX(g),w=o.getX(g+1),E=o.getX(g+2);r=_r(this,a,e,n,c,h,d,b,w,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=p.length;x<v;x++){const g=p[x],u=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let E=b,A=w;E<A;E+=3){const R=E,N=E+1,k=E+2;r=_r(this,u,e,n,c,h,d,R,N,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=x,u=v;g<u;g+=3){const b=g,w=g+1,E=g+2;r=_r(this,a,e,n,c,h,d,b,w,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function lu(i,e,t,n,r,s,a,o){let l;if(e.side===Ft?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===In,o),l===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xr);return c<t.near||c>t.far?null:{distance:c,point:xr.clone(),object:i}}function _r(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,fr),i.getVertexPosition(l,pr),i.getVertexPosition(c,mr);const h=lu(i,e,t,n,fr,pr,mr,Ho);if(h){const d=new O;$t.getBarycoord(Ho,fr,pr,mr,d),r&&(h.uv=$t.getInterpolatedAttribute(r,o,l,c,d,new qe)),s&&(h.uv1=$t.getInterpolatedAttribute(s,o,l,c,d,new qe)),a&&(h.normal=$t.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new O,materialIndex:0};$t.getNormal(fr,pr,mr,p.normal),h.face=p,h.barycoord=d}return h}class Ti extends At{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,f=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function x(v,g,u,b,w,E,A,R,N,k,M){const S=E/N,C=A/k,F=E/2,B=A/2,j=R/2,Y=N+1,V=k+1;let W=0,J=0;const ue=new O;for(let le=0;le<V;le++){const fe=le*C-B;for(let ke=0;ke<Y;ke++){const Fe=ke*S-F;ue[v]=Fe*b,ue[g]=fe*w,ue[u]=j,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[g]=0,ue[u]=R>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(ke/N),d.push(1-le/k),W+=1}}for(let le=0;le<k;le++)for(let fe=0;fe<N;fe++){const ke=p+fe+Y*le,Fe=p+fe+Y*(le+1),ot=p+(fe+1)+Y*(le+1),st=p+(fe+1)+Y*le;l.push(ke,Fe,st),l.push(Fe,ot,st),J+=6}o.addGroup(f,J,M),f+=J,p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=bi(i[t]);for(const r in n)e[r]=n[r]}return e}function cu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const du={clone:bi,merge:Ct};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new O,Wo=new qe,jo=new qe;class Pt extends hc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Wo,jo),t.subVectors(jo,Wo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class fu extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pt(fi,pi,e,t);r.layers=this.layers,this.add(r);const s=new Pt(fi,pi,e,t);s.layers=this.layers,this.add(s);const a=new Pt(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new Pt(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new Pt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new Pt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class uc extends wt{constructor(e=[],t=ei,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fc extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ti(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:_n});s.uniforms.tEquirect.value=t;const a=new Nt(r,s),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Et),new fu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Bi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pu={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),u=this._getHandJoint(c,v);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&p>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ya{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new Ya(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $a extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mu extends wt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=yt,h=yt,d,p){super(null,a,o,l,c,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ys=new O,gu=new O,xu=new De;class $n{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ys.subVectors(n,t).cross(gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xu.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Zi,_u=new qe(.5,.5),vr=new O;class Ka{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],p=s[6],f=s[7],x=s[8],v=s[9],g=s[10],u=s[11],b=s[12],w=s[13],E=s[14],A=s[15];if(r[0].setComponents(c-a,f-h,u-x,A-b).normalize(),r[1].setComponents(c+a,f+h,u+x,A+b).normalize(),r[2].setComponents(c+o,f+d,u+v,A+w).normalize(),r[3].setComponents(c-o,f-d,u-v,A-w).normalize(),n)r[4].setComponents(l,p,g,E).normalize(),r[5].setComponents(c-l,f-p,u-g,A-E).normalize();else if(r[4].setComponents(c-l,f-p,u-g,A-E).normalize(),t===an)r[5].setComponents(c+l,f+p,u+g,A+E).normalize();else if(t===Fr)r[5].setComponents(l,p,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){Wn.center.set(0,0,0);const t=_u.distanceTo(e.center);return Wn.radius=.7071067811865476+t,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(vr.x=r.normal.x>0?e.max.x:e.min.x,vr.y=r.normal.y>0?e.max.y:e.min.y,vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pc extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Br=new O,kr=new O,Xo=new at,Ii=new qa,Mr=new Zi,bs=new O,qo=new O;class vu extends Mt{constructor(e=new At,t=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Br.fromBufferAttribute(t,r-1),kr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Br.distanceTo(kr);e.setAttribute("lineDistance",new Tt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),Mr.radius+=s,e.ray.intersectsSphere(Mr)===!1)return;Xo.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Xo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=f,g=x-1;v<g;v+=c){const u=h.getX(v),b=h.getX(v+1),w=yr(this,e,Ii,l,u,b,v);w&&t.push(w)}if(this.isLineLoop){const v=h.getX(x-1),g=h.getX(f),u=yr(this,e,Ii,l,v,g,x-1);u&&t.push(u)}}else{const f=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let v=f,g=x-1;v<g;v+=c){const u=yr(this,e,Ii,l,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){const v=yr(this,e,Ii,l,x-1,f,x-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Br.fromBufferAttribute(o,r),kr.fromBufferAttribute(o,s),t.distanceSqToSegment(Br,kr,bs,qo)>n)return;bs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(bs);if(!(c<e.near||c>e.far))return{distance:c,point:qo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class mc extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yo=new at,Aa=new qa,br=new Zi,Sr=new O;class gc extends Mt{constructor(e=new At,t=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),br.radius+=s,e.ray.intersectsSphere(br)===!1)return;Yo.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(Yo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=p,v=f;x<v;x++){const g=c.getX(x);Sr.fromBufferAttribute(d,g),$o(Sr,g,l,r,e,t,this)}}else{const p=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=p,v=f;x<v;x++)Sr.fromBufferAttribute(d,x),$o(Sr,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $o(i,e,t,n,r,s,a){const o=Aa.distanceSqToPoint(i);if(o<t){const l=new O;Aa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Mu extends wt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xi extends wt{constructor(e,t,n=cn,r,s,a,o=yt,l=yt,c,h=yn,d=1){if(h!==yn&&h!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yu extends Xi{constructor(e,t=cn,n=ei,r,s,a=yt,o=yt,l,c=yn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xc extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ji extends At{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,p=t/l,f=[],x=[],v=[],g=[];for(let u=0;u<h;u++){const b=u*p-a;for(let w=0;w<c;w++){const E=w*d-s;x.push(E,-b,0),v.push(0,0,1),g.push(w/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const w=b+c*u,E=b+c*(u+1),A=b+1+c*(u+1),R=b+1+c*u;f.push(w,E,R),f.push(E,A,R)}this.setIndex(f),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class zr extends At{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new O,p=new O,f=[],x=[],v=[],g=[];for(let u=0;u<=n;u++){const b=[],w=u/n;let E=0;u===0&&a===0?E=.5/t:u===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const R=A/t;d.x=-e*Math.cos(r+R*s)*Math.sin(a+w*o),d.y=e*Math.cos(a+w*o),d.z=e*Math.sin(r+R*s)*Math.sin(a+w*o),x.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),g.push(R+E,1-w),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const w=h[u][b+1],E=h[u][b],A=h[u+1][b],R=h[u+1][b+1];(u!==0||a>0)&&f.push(w,E,R),(u!==n-1||l<Math.PI)&&f.push(E,A,R)}this.setIndex(f),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Za extends At{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new O,d=new O,p=new O;for(let f=0;f<=n;f++)for(let x=0;x<=r;x++){const v=x/r*s,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=r;x++){const v=(r+1)*f+x-1,g=(r+1)*(f-1)+x-1,u=(r+1)*(f-1)+x,b=(r+1)*f+x;a.push(v,g,b),a.push(g,u,b)}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bu extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jn extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Su extends Bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eu extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wu extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ja extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ss=new at,Ko=new O,Zo=new O;class _c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ko),Zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zo),t.updateMatrixWorld(),Ss.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ss,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tu extends _c{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0}}class Au extends Ja{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Qa extends hc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ru extends _c{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lr extends Ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vc extends Ja{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cu extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Jo(i,e,t,n){const r=Pu(n);switch(t){case tc:return i*e;case ic:return i*e/r.components*r.byteLength;case za:return i*e/r.components*r.byteLength;case Mi:return i*e*2/r.components*r.byteLength;case Ga:return i*e*2/r.components*r.byteLength;case nc:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case Va:return i*e*4/r.components*r.byteLength;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $s:case Zs:return Math.max(i,16)*Math.max(e,8)/4;case Ys:case Ks:return Math.max(i,8)*Math.max(e,8)/2;case Js:case Qs:case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ea:case ia:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case va:case Ma:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ba:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ea:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pu(i){switch(i){case Vt:case Zl:return{byteLength:1,components:1};case Hi:case Jl:case Mn:return{byteLength:2,components:1};case Ba:case ka:return{byteLength:2,components:4};case cn:case Oa:case sn:return{byteLength:4,components:1};case Ql:case ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);function Mc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Nu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let p=0;for(let f=1;f<d.length;f++){const x=d[p],v=d[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,x=d.length;f<x;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,If=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Lu,alphahash_pars_fragment:Du,alphamap_fragment:Iu,alphamap_pars_fragment:Uu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:ku,batching_pars_vertex:zu,batching_vertex:Gu,begin_vertex:Vu,beginnormal_vertex:Hu,bsdfs:Wu,iridescence_fragment:ju,bumpmap_pars_fragment:Xu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Ku,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:Qu,color_vertex:ef,common:tf,cube_uv_reflection_fragment:nf,defaultnormal_vertex:rf,displacementmap_pars_vertex:sf,displacementmap_vertex:af,emissivemap_fragment:of,emissivemap_pars_fragment:lf,colorspace_fragment:cf,colorspace_pars_fragment:df,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:wf,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:xf,fog_fragment:_f,fog_pars_fragment:vf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:yf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Sf,lights_pars_begin:Ef,lights_toon_fragment:Tf,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:Nf,lights_fragment_begin:Lf,lights_fragment_maps:Df,lights_fragment_end:If,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:zf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:jf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:$f,normal_fragment_begin:Kf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:Qf,normal_vertex:ep,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:rp,iridescence_pars_fragment:sp,opaque_fragment:ap,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:dp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:xp,skinbase_vertex:_p,skinning_pars_vertex:vp,skinning_vertex:Mp,skinnormal_vertex:yp,specularmap_fragment:bp,specularmap_pars_fragment:Sp,tonemapping_fragment:Ep,tonemapping_pars_fragment:wp,transmission_fragment:Tp,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Pp,worldpos_vertex:Np,background_vert:Lp,background_frag:Dp,backgroundCube_vert:Ip,backgroundCube_frag:Up,cube_vert:Fp,cube_frag:Op,depth_vert:Bp,depth_frag:kp,distance_vert:zp,distance_frag:Gp,equirect_vert:Vp,equirect_frag:Hp,linedashed_vert:Wp,linedashed_frag:jp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:$p,meshmatcap_vert:Kp,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:Qp,meshphong_vert:em,meshphong_frag:tm,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:rm,meshtoon_frag:sm,points_vert:am,points_frag:om,shadow_vert:lm,shadow_frag:cm,sprite_vert:dm,sprite_frag:hm},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},nn={basic:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ct([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ct([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ct([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ct([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ct([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ct([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ct([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ct([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ct([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Ct([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Ct([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};nn.physical={uniforms:Ct([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Er={r:0,b:0,g:0},Xn=new Zt,um=new at;function fm(i,e,t,n,r,s,a){const o=new Ie(0);let l=s===!0?0:1,c,h,d=null,p=0,f=null;function x(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function v(w){let E=!1;const A=x(w);A===null?u(o,l):A&&A.isColor&&(u(A,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,E){const A=x(E);A&&(A.isCubeTexture||A.mapping===Hr)?(h===void 0&&(h=new Nt(new Ti(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:bi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Xn.copy(E.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(Xn)),h.material.toneMapped=He.getTransfer(A.colorSpace)!==Je,(d!==A||p!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,p=A.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Nt(new Ji(2,2),new Jt({name:"BackgroundMaterial",uniforms:bi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=He.getTransfer(A.colorSpace)!==Je,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||p!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,p=A.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,E){w.getRGB(Er,dc(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,E,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:v,addToRenderList:g,dispose:b}}function pm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(S,C,F,B,j){let Y=!1;const V=d(B,F,C);s!==V&&(s=V,c(s.object)),Y=f(S,B,F,j),Y&&x(S,B,F,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(S,C,F,B),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,C,F){const B=F.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let Y=j[C.id];Y===void 0&&(Y={},j[C.id]=Y);let V=Y[B];return V===void 0&&(V=p(l()),Y[B]=V),V}function p(S){const C=[],F=[],B=[];for(let j=0;j<t;j++)C[j]=0,F[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,C,F,B){const j=s.attributes,Y=C.attributes;let V=0;const W=F.getAttributes();for(const J in W)if(W[J].location>=0){const le=j[J];let fe=Y[J];if(fe===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),le===void 0||le.attribute!==fe||fe&&le.data!==fe.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function x(S,C,F,B){const j={},Y=C.attributes;let V=0;const W=F.getAttributes();for(const J in W)if(W[J].location>=0){let le=Y[J];le===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const fe={};fe.attribute=le,le&&le.data&&(fe.data=le.data),j[J]=fe,V++}s.attributes=j,s.attributesNum=V,s.index=B}function v(){const S=s.newAttributes;for(let C=0,F=S.length;C<F;C++)S[C]=0}function g(S){u(S,0)}function u(S,C){const F=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;F[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),j[S]!==C&&(i.vertexAttribDivisor(S,C),j[S]=C)}function b(){const S=s.newAttributes,C=s.enabledAttributes;for(let F=0,B=C.length;F<B;F++)C[F]!==S[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function w(S,C,F,B,j,Y,V){V===!0?i.vertexAttribIPointer(S,C,F,j,Y):i.vertexAttribPointer(S,C,F,B,j,Y)}function E(S,C,F,B){v();const j=B.attributes,Y=F.getAttributes(),V=C.defaultAttributeValues;for(const W in Y){const J=Y[W];if(J.location>=0){let ue=j[W];if(ue===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const le=ue.normalized,fe=ue.itemSize,ke=e.get(ue);if(ke===void 0)continue;const Fe=ke.buffer,ot=ke.type,st=ke.bytesPerElement,$=ot===i.INT||ot===i.UNSIGNED_INT||ue.gpuType===Oa;if(ue.isInterleavedBufferAttribute){const Q=ue.data,xe=Q.stride,Le=ue.offset;if(Q.isInstancedInterleavedBuffer){for(let Me=0;Me<J.locationSize;Me++)u(J.location+Me,Q.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Me=0;Me<J.locationSize;Me++)g(J.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Me=0;Me<J.locationSize;Me++)w(J.location+Me,fe/J.locationSize,ot,le,xe*st,(Le+fe/J.locationSize*Me)*st,$)}else{if(ue.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)u(J.location+Q,ue.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Q=0;Q<J.locationSize;Q++)g(J.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Q=0;Q<J.locationSize;Q++)w(J.location+Q,fe/J.locationSize,ot,le,fe*st,fe/J.locationSize*Q*st,$)}}else if(V!==void 0){const le=V[W];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(J.location,le);break;case 3:i.vertexAttrib3fv(J.location,le);break;case 4:i.vertexAttrib4fv(J.location,le);break;default:i.vertexAttrib1fv(J.location,le)}}}}b()}function A(){k();for(const S in n){const C=n[S];for(const F in C){const B=C[F];for(const j in B)h(B[j].object),delete B[j];delete C[F]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const F in C){const B=C[F];for(const j in B)h(B[j].object),delete B[j];delete C[F]}delete n[S.id]}function N(S){for(const C in n){const F=n[C];if(F[S.id]===void 0)continue;const B=F[S.id];for(const j in B)h(B[j].object),delete B[j];delete F[S.id]}}function k(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function mm(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];t.update(f,n,1)}function l(c,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],p[x]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let x=0;for(let v=0;v<d;v++)x+=h[v]*p[v];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(N){return!(N!==Kt&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const k=N===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Vt&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==sn&&!k)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:E,maxSamples:A,samples:R}}function xm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new $n,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||r;return r=p,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const x=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,u=i.get(d);if(!r||x===null||x.length===0||s&&!g)s?h(null):c();else{const b=s?0:n,w=b*4;let E=u.clippingState||null;l.value=E,E=h(x,p,w,f);for(let A=0;A!==w;++A)E[A]=t[A];u.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,f,x){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const u=f+v*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<u)&&(g=new Float32Array(u));for(let w=0,E=f;w!==v;++w,E+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function _m(i){let e=new WeakMap;function t(a,o){return o===Ws?a.mapping=ei:o===js&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ws||o===js)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Nn=4,Qo=[.125,.215,.35,.446,.526,.582],Zn=20,vm=256,Ui=new Qa,el=new Ie;let Es=null,ws=0,Ts=0,As=!1;const Mm=new O;class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Mm}=s;Es=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,ws,Ts),this._renderer.xr.enabled=As,e.scissorTest=!1,mi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Mn,format:Kt,colorSpace:yi,depthBuffer:!1},r=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ym(s)),this._blurMaterial=Sm(s,e,t),this._ggxMaterial=bm(s,e,t)}return r}_compileMaterial(e){const t=new Nt(new At,e);this._renderer.compile(t,Ui)}_sceneToCubeUV(e,t,n,r,s){const l=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(el),d.toneMapping=on,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new Ti,new zi({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let u=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,u=!0):(g.color.copy(el),u=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));const A=this._cubeSize;mi(r,E*A,w>2?A:0,A,A),d.setRenderTarget(r),u&&d.render(v,l),d.render(e,l)}d.toneMapping=f,d.autoClear=p,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ei||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;mi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ui)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),p=0+c*1.25,f=d*p,{_lodMax:x}=this,v=this._sizeLods[n],g=3*v*(n>x-Nn?n-x+Nn:0),u=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,mi(s,g,u,3*v,2*v),r.setRenderTarget(s),r.render(o,Ui),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,mi(e,g,u,3*v,2*v),r.setRenderTarget(e),r.render(o,Ui)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=c;const p=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zn-1),v=s/x,g=isFinite(s)?1+Math.floor(h*v):Zn;g>Zn&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zn}`);const u=[];let b=0;for(let N=0;N<Zn;++N){const k=N/v,M=Math.exp(-k*k/2);u.push(M),N===0?b+=M:N<g&&(b+=2*M)}for(let N=0;N<u.length;N++)u[N]=u[N]/b;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:w}=this;p.dTheta.value=x,p.mipInt.value=w-n;const E=this._sizeLods[r],A=3*E*(r>w-Nn?r-w+Nn:0),R=4*(this._cubeSize-E);mi(t,A,R,3*E,2*E),l.setRenderTarget(t),l.render(d,Ui)}}function ym(i){const e=[],t=[],n=[];let r=i;const s=i-Nn+1+Qo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Nn?l=Qo[a-i+Nn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,v=3,g=2,u=1,b=new Float32Array(v*x*f),w=new Float32Array(g*x*f),E=new Float32Array(u*x*f);for(let R=0;R<f;R++){const N=R%3*2/3-1,k=R>2?0:-1,M=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];b.set(M,v*x*R),w.set(p,g*x*R);const S=[R,R,R,R,R,R];E.set(S,u*x*R)}const A=new At;A.setAttribute("position",new Lt(b,v)),A.setAttribute("uv",new Lt(w,g)),A.setAttribute("faceIndex",new Lt(E,u)),n.push(new Nt(A,null)),r>Nn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nl(i,e,t){const n=new ln(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bm(i,e,t){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Sm(i,e,t){const n=new Float32Array(Zn),r=new O(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function il(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function rl(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Wr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Em(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ws||l===js,h=l===ei||l===vi;if(c||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new tl(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new tl(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ji("WebGLRenderer: "+n+" extension not supported."),r}}}function Tm(i,e,t,n){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const f in p)e.update(p[f],i.ARRAY_BUFFER)}function c(d){const p=[],f=d.index,x=d.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let w=0,E=b.length;w<E;w+=3){const A=b[w+0],R=b[w+1],N=b[w+2];p.push(A,R,R,N,N,A)}}else if(x!==void 0){const b=x.array;v=x.version;for(let w=0,E=b.length/3-1;w<E;w+=3){const A=w+0,R=w+1,N=w+2;p.push(A,R,R,N,N,A)}}else return;const g=new(rc(p)?cc:lc)(p,1);g.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,g)}function h(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Am(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}function c(p,f,x){x!==0&&(i.drawElementsInstanced(n,f,s,p*a,x),t.update(f,n,x))}function h(p,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,x);let g=0;for(let u=0;u<x;u++)g+=f[u];t.update(g,n,1)}function d(p,f,x,v){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],v[u]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,v,0,x);let u=0;for(let b=0;b<x;b++)u+=f[b]*v[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Rm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Cm(i,e,t){const n=new WeakMap,r=new ht;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();const f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),x===!0&&(w=2),v===!0&&(w=3);let E=o.attributes.position.count*w,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*A*4*d),N=new sc(R,E,A,d);N.type=sn,N.needsUpdate=!0;const k=w*4;for(let S=0;S<d;S++){const C=g[S],F=u[S],B=b[S],j=E*A*4*S;for(let Y=0;Y<C.count;Y++){const V=Y*k;f===!0&&(r.fromBufferAttribute(C,Y),R[j+V+0]=r.x,R[j+V+1]=r.y,R[j+V+2]=r.z,R[j+V+3]=0),x===!0&&(r.fromBufferAttribute(F,Y),R[j+V+4]=r.x,R[j+V+5]=r.y,R[j+V+6]=r.z,R[j+V+7]=0),v===!0&&(r.fromBufferAttribute(B,Y),R[j+V+8]=r.x,R[j+V+9]=r.y,R[j+V+10]=r.z,R[j+V+11]=B.itemSize===4?r.w:1)}}p={count:d,texture:N,size:new qe(E,A)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Pm(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Nm={[Hl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[Xl]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function Lm(i,e,t,n,r){const s=new ln(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new ln(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),o=new At;o.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const l=new bu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Nt(o,l),h=new Qa(-1,1,1,-1,0,1);let d=null,p=null,f=!1,x,v=null,g=[],u=!1;this.setSize=function(b,w){s.setSize(b,w),a.setSize(b,w);for(let E=0;E<g.length;E++){const A=g[E];A.setSize&&A.setSize(b,w)}},this.setEffects=function(b){g=b,u=g.length>0&&g[0].isRenderPass===!0;const w=s.width,E=s.height;for(let A=0;A<g.length;A++){const R=g[A];R.setSize&&R.setSize(w,E)}},this.begin=function(b,w){if(f||b.toneMapping===on&&g.length===0)return!1;if(v=w,w!==null){const E=w.width,A=w.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return u===!1&&b.setRenderTarget(s),x=b.toneMapping,b.toneMapping=on,!0},this.hasRenderPass=function(){return u},this.end=function(b,w){b.toneMapping=x,f=!0;let E=s,A=a;for(let R=0;R<g.length;R++){const N=g[R];if(N.enabled!==!1&&(N.render(b,A,E,w),N.needsSwap!==!1)){const k=E;E=A,A=k}}if(d!==b.outputColorSpace||p!==b.toneMapping){d=b.outputColorSpace,p=b.toneMapping,l.defines={},He.getTransfer(d)===Je&&(l.defines.SRGB_TRANSFER="");const R=Nm[p];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(v),b.render(c,h),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const yc=new wt,Ra=new Xi(1,1),bc=new sc,Sc=new Zh,Ec=new uc,sl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=sl[r];if(s===void 0&&(s=new Float32Array(r),sl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),xt(t,n)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),xt(t,n)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),xt(t,n)}}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Ym(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ra.compareFunction=t.isReversedDepthBuffer()?ja:Wa,s=Ra):s=yc,t.setTexture2D(e||s,r)}function $m(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Sc,r)}function Km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ec,r)}function Zm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bc,r)}function Jm(i){switch(i){case 5126:return Dm;case 35664:return Im;case 35665:return Um;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return km;case 5124:case 35670:return zm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Hm;case 5125:return Wm;case 36294:return jm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Zm}}function Qm(i,e){i.uniform1fv(this.addr,e)}function eg(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function tg(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function ng(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function ig(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rg(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sg(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ag(i,e){i.uniform1iv(this.addr,e)}function og(i,e){i.uniform2iv(this.addr,e)}function lg(i,e){i.uniform3iv(this.addr,e)}function cg(i,e){i.uniform4iv(this.addr,e)}function dg(i,e){i.uniform1uiv(this.addr,e)}function hg(i,e){i.uniform2uiv(this.addr,e)}function ug(i,e){i.uniform3uiv(this.addr,e)}function fg(i,e){i.uniform4uiv(this.addr,e)}function pg(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ra:a=yc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function mg(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Sc,s[a])}function gg(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ec,s[a])}function xg(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bc,s[a])}function _g(i){switch(i){case 5126:return Qm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return rg;case 35676:return sg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return dg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return xg}}class vg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jm(t.type)}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_g(t.type)}}class yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function bg(i,e,t){const n=i.name,r=n.length;for(Rs.lastIndex=0;;){const s=Rs.exec(n),a=Rs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){dl(t,c===void 0?new vg(o,i,e):new Mg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new yg(o),dl(t,d)),t=d}}}class Dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);bg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function hl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sg=37297;let Eg=0;function wg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ul=new De;function Tg(i){He._getMatrix(ul,He.workingColorSpace,i);const e=`mat3( ${ul.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case Ur:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wg(i.getShaderSource(e),o)}else return s}function Ag(i,e){const t=Tg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Rg={[Hl]:"Linear",[Wl]:"Reinhard",[jl]:"Cineon",[Xl]:"ACESFilmic",[Yl]:"AgX",[$l]:"Neutral",[ql]:"Custom"};function Cg(i,e){const t=Rg[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wr=new O;function Pg(){He.getLuminanceCoefficients(wr);const i=wr.x.toFixed(4),e=wr.y.toFixed(4),t=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function Lg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ki(i){return i!==""}function pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(i){return i.replace(Ig,Fg)}const Ug=new Map;function Fg(i,e){let t=Ue[e];if(t===void 0){const n=Ug.get(e);if(n!==void 0)t=Ue[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ca(t)}const Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(Og,Bg)}function Bg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kg={[Ar]:"SHADOWMAP_TYPE_PCF",[Oi]:"SHADOWMAP_TYPE_VSM"};function zg(i){return kg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gg={[ei]:"ENVMAP_TYPE_CUBE",[vi]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function Vg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hg={[vi]:"ENVMAP_MODE_REFRACTION"};function Wg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jg={[Fa]:"ENVMAP_BLENDING_MULTIPLY",[Lh]:"ENVMAP_BLENDING_MIX",[Dh]:"ENVMAP_BLENDING_ADD"};function Xg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jg[i.combine]||"ENVMAP_BLENDING_NONE"}function qg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Yg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zg(t),c=Vg(t),h=Wg(t),d=Xg(t),p=qg(t),f=Ng(t),x=Lg(s),v=r.createProgram();let g,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ki).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ki).join(`
`),u.length>0&&(u+=`
`)):(g=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),u=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?Ue.tonemapping_pars_fragment:"",t.toneMapping!==on?Cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Ag("linearToOutputTexel",t.outputColorSpace),Pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),a=Ca(a),a=pl(a,t),a=ml(a,t),o=Ca(o),o=pl(o,t),o=ml(o,t),a=gl(a),o=gl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=b+g+a,E=b+u+o,A=hl(r,r.VERTEX_SHADER,w),R=hl(r,r.FRAGMENT_SHADER,E);r.attachShader(v,A),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function N(C){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(A)||"",j=r.getShaderInfoLog(R)||"",Y=F.trim(),V=B.trim(),W=j.trim();let J=!0,ue=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,A,R);else{const le=fl(r,A,"vertex"),fe=fl(r,R,"fragment");Xe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+le+`
`+fe)}else Y!==""?Pe("WebGLProgram: Program Info Log:",Y):(V===""||W==="")&&(ue=!1);ue&&(C.diagnostics={runnable:J,programLog:Y,vertexShader:{log:V,prefix:g},fragmentShader:{log:W,prefix:u}})}r.deleteShader(A),r.deleteShader(R),k=new Dr(r,v),M=Dg(r,v)}let k;this.getUniforms=function(){return k===void 0&&N(this),k};let M;this.getAttributes=function(){return M===void 0&&N(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Sg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let $g=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zg(e),t.set(e,n)),n}}class Zg{constructor(e){this.id=$g++,this.code=e,this.usedTimes=0}}function Jg(i,e,t,n,r,s,a){const o=new ac,l=new Kg,c=new Set,h=[],d=new Map,p=r.logarithmicDepthBuffer;let f=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,C,F,B){const j=F.fog,Y=B.geometry,V=M.isMeshStandardMaterial?F.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),J=W&&W.mapping===Hr?W.image.height:null,ue=x[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&Pe("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=le!==void 0?le.length:0;let ke=0;Y.morphAttributes.position!==void 0&&(ke=1),Y.morphAttributes.normal!==void 0&&(ke=2),Y.morphAttributes.color!==void 0&&(ke=3);let Fe,ot,st,$;if(ue){const Ke=nn[ue];Fe=Ke.vertexShader,ot=Ke.fragmentShader}else Fe=M.vertexShader,ot=M.fragmentShader,l.update(M),st=l.getVertexShaderID(M),$=l.getFragmentShaderID(M);const Q=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Le=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,We=!!M.map,_t=!!M.matcap,Ve=!!W,$e=!!M.aoMap,et=!!M.lightMap,Oe=!!M.bumpMap,ft=!!M.normalMap,P=!!M.displacementMap,pt=!!M.emissiveMap,Ye=!!M.metalnessMap,nt=!!M.roughnessMap,be=M.anisotropy>0,T=M.clearcoat>0,_=M.dispersion>0,D=M.iridescence>0,q=M.sheen>0,Z=M.transmission>0,H=be&&!!M.anisotropyMap,Ee=T&&!!M.clearcoatMap,re=T&&!!M.clearcoatNormalMap,ye=T&&!!M.clearcoatRoughnessMap,Ce=D&&!!M.iridescenceMap,te=D&&!!M.iridescenceThicknessMap,ae=q&&!!M.sheenColorMap,ve=q&&!!M.sheenRoughnessMap,Se=!!M.specularMap,se=!!M.specularColorMap,Be=!!M.specularIntensityMap,L=Z&&!!M.transmissionMap,he=Z&&!!M.thicknessMap,ne=!!M.gradientMap,pe=!!M.alphaMap,ee=M.alphaTest>0,K=!!M.alphaHash,ie=!!M.extensions;let Ne=on;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const it={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:Fe,fragmentShader:ot,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:yi,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:_t,envMap:Ve,envMapMode:Ve&&W.mapping,envMapCubeUVHeight:J,aoMap:$e,lightMap:et,bumpMap:Oe,normalMap:ft,displacementMap:P,emissiveMap:pt,normalMapObjectSpace:ft&&M.normalMapType===Fh,normalMapTangentSpace:ft&&M.normalMapType===Ha,metalnessMap:Ye,roughnessMap:nt,anisotropy:be,anisotropyMap:H,clearcoat:T,clearcoatMap:Ee,clearcoatNormalMap:re,clearcoatRoughnessMap:ye,dispersion:_,iridescence:D,iridescenceMap:Ce,iridescenceThicknessMap:te,sheen:q,sheenColorMap:ae,sheenRoughnessMap:ve,specularMap:Se,specularColorMap:se,specularIntensityMap:Be,transmission:Z,transmissionMap:L,thicknessMap:he,gradientMap:ne,opaque:M.transparent===!1&&M.blending===gi&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:K,combine:M.combine,mapUv:We&&v(M.map.channel),aoMapUv:$e&&v(M.aoMap.channel),lightMapUv:et&&v(M.lightMap.channel),bumpMapUv:Oe&&v(M.bumpMap.channel),normalMapUv:ft&&v(M.normalMap.channel),displacementMapUv:P&&v(M.displacementMap.channel),emissiveMapUv:pt&&v(M.emissiveMap.channel),metalnessMapUv:Ye&&v(M.metalnessMap.channel),roughnessMapUv:nt&&v(M.roughnessMap.channel),anisotropyMapUv:H&&v(M.anisotropyMap.channel),clearcoatMapUv:Ee&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(M.sheenRoughnessMap.channel),specularMapUv:Se&&v(M.specularMap.channel),specularColorMapUv:se&&v(M.specularColorMap.channel),specularIntensityMapUv:Be&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:he&&v(M.thicknessMap.channel),alphaMapUv:pe&&v(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ft||be),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(We||pe),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&He.getTransfer(M.map.colorSpace)===Je,decodeVideoTextureEmissive:pt&&M.emissiveMap.isVideoTexture===!0&&He.getTransfer(M.emissiveMap.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ie&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&M.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function u(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(b(S,M),w(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function w(M,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const S=x[M.type];let C;if(S){const F=nn[S];C=du.clone(F.uniforms)}else C=M.uniforms;return C}function A(M,S){let C=d.get(S);return C!==void 0?++C.usedTimes:(C=new Yg(i,S,M,s),h.push(C),d.set(S,C)),C}function R(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),d.delete(M.cacheKey),M.destroy()}}function N(M){l.remove(M)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:E,acquireProgram:A,releaseProgram:R,releaseShaderCache:N,programs:h,dispose:k}}function Qg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function e0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _l(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,p,f,x,v,g){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:x,renderOrder:d.renderOrder,z:v,group:g},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=v,u.group=g),e++,u}function o(d,p,f,x,v,g){const u=a(d,p,f,x,v,g);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):t.push(u)}function l(d,p,f,x,v,g){const u=a(d,p,f,x,v,g);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||e0),n.length>1&&n.sort(p||_l),r.length>1&&r.sort(p||_l)}function h(){for(let d=e,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function t0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new vl,i.set(n,[a])):r>=s.length?(a=new vl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function n0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ie};break;case"SpotLight":t={position:new O,direction:new O,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function i0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let r0=0;function s0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a0(i){const e=new n0,t=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const r=new O,s=new at,a=new at;function o(c){let h=0,d=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,x=0,v=0,g=0,u=0,b=0,w=0,E=0,A=0,R=0,N=0;c.sort(s0);for(let M=0,S=c.length;M<S;M++){const C=c[M],F=C.color,B=C.intensity,j=C.distance;let Y=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Mi?Y=C.shadow.map.texture:Y=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=F.r*B,d+=F.g*B,p+=F.b*B;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],B);N++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,J=t.get(C);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=C.shadow.matrix,b++}n.directional[f]=V,f++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(F).multiplyScalar(B),V.distance=j,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[v]=V;const W=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,W.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[v]=W.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=Y,E++}v++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(F).multiplyScalar(B),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=V,g++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const W=C.shadow,J=t.get(C);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=Y,n.pointShadowMatrix[x]=C.shadow.matrix,w++}n.point[x]=V,x++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(B),V.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[u]=V,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const k=n.hash;(k.directionalLength!==f||k.pointLength!==x||k.spotLength!==v||k.rectAreaLength!==g||k.hemiLength!==u||k.numDirectionalShadows!==b||k.numPointShadows!==w||k.numSpotShadows!==E||k.numSpotMaps!==A||k.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=N,k.directionalLength=f,k.pointLength=x,k.spotLength=v,k.rectAreaLength=g,k.hemiLength=u,k.numDirectionalShadows=b,k.numPointShadows=w,k.numSpotShadows=E,k.numSpotMaps=A,k.numLightProbes=N,n.version=r0++)}function l(c,h){let d=0,p=0,f=0,x=0,v=0;const g=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const w=c[u];if(w.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(w.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(w.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(w.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),p++}else if(w.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Ml(i){const e=new a0(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function o0(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ml(i),e.set(r,[o])):s>=a.length?(o=new Ml(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,d0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],h0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],yl=new at,Fi=new O,Cs=new O;function u0(i,e,t){let n=new Ka;const r=new qe,s=new qe,a=new ht,o=new Eu,l=new wu,c={},h=t.maxTextureSize,d={[In]:Ft,[Ft]:In,[gn]:gn},p=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const x=new At;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let u=this.type;this.render=function(R,N,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===fh&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Ar);const M=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_n),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=u!==this.type;B&&N.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(Y=>Y.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,Y=R.length;j<Y;j++){const V=R[j],W=V.shadow;if(W===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const J=W.getFrameExtents();if(r.multiply(J),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,W.mapSize.y=s.y)),W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Oi){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ln(r.x,r.y,{format:Mi,type:Mn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new Xi(r.x,r.y,sn),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=yn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt}else{V.isPointLight?(W.map=new fc(r.x),W.map.depthTexture=new yu(r.x,cn)):(W.map=new ln(r.x,r.y),W.map.depthTexture=new Xi(r.x,r.y,cn)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=yn;const le=i.state.buffers.depth.getReversed();this.type===Ar?(W.map.depthTexture.compareFunction=le?ja:Wa,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt)}W.camera.updateProjectionMatrix()}const ue=W.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<ue;le++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,le),i.clear();else{le===0&&(i.setRenderTarget(W.map),i.clear());const fe=W.getViewport(le);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),F.viewport(a)}if(V.isPointLight){const fe=W.camera,ke=W.matrix,Fe=V.distance||fe.far;Fe!==fe.far&&(fe.far=Fe,fe.updateProjectionMatrix()),Fi.setFromMatrixPosition(V.matrixWorld),fe.position.copy(Fi),Cs.copy(fe.position),Cs.add(d0[le]),fe.up.copy(h0[le]),fe.lookAt(Cs),fe.updateMatrixWorld(),ke.makeTranslation(-Fi.x,-Fi.y,-Fi.z),yl.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(yl,fe.coordinateSystem,fe.reversedDepth)}else W.updateMatrices(V);n=W.getFrustum(),E(N,k,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===Oi&&b(W,k),W.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,C)};function b(R,N){const k=e.update(v);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ln(r.x,r.y,{format:Mi,type:Mn})),p.uniforms.shadow_pass.value=R.map.depthTexture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(N,null,k,p,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(N,null,k,f,v,null)}function w(R,N,k,M){let S=null;const C=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=k.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const F=S.uuid,B=N.uuid;let j=c[F];j===void 0&&(j={},c[F]=j);let Y=j[B];Y===void 0&&(Y=S.clone(),j[B]=Y,N.addEventListener("dispose",A)),S=Y}if(S.visible=N.visible,S.wireframe=N.wireframe,M===Oi?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:d[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=i.properties.get(S);F.light=k}return S}function E(R,N,k,M,S){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Oi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);const B=e.update(R),j=R.material;if(Array.isArray(j)){const Y=B.groups;for(let V=0,W=Y.length;V<W;V++){const J=Y[V],ue=j[J.materialIndex];if(ue&&ue.visible){const le=w(R,ue,M,S);R.onBeforeShadow(i,R,N,k,B,le,J),i.renderBufferDirect(k,null,B,le,R,J),R.onAfterShadow(i,R,N,k,B,le,J)}}}else if(j.visible){const Y=w(R,j,M,S);R.onBeforeShadow(i,R,N,k,B,Y,null),i.renderBufferDirect(k,null,B,Y,R,null),R.onAfterShadow(i,R,N,k,B,Y,null)}}const F=R.children;for(let B=0,j=F.length;B<j;B++)E(F[B],N,k,M,S)}function A(R){R.target.removeEventListener("dispose",A);for(const k in c){const M=c[k],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const f0={[Os]:Bs,[ks]:Vs,[zs]:Hs,[_i]:Gs,[Bs]:Os,[Vs]:ks,[Hs]:zs,[Gs]:_i};function p0(i,e){function t(){let L=!1;const he=new ht;let ne=null;const pe=new ht(0,0,0,0);return{setMask:function(ee){ne!==ee&&!L&&(i.colorMask(ee,ee,ee,ee),ne=ee)},setLocked:function(ee){L=ee},setClear:function(ee,K,ie,Ne,it){it===!0&&(ee*=Ne,K*=Ne,ie*=Ne),he.set(ee,K,ie,Ne),pe.equals(he)===!1&&(i.clearColor(ee,K,ie,Ne),pe.copy(he))},reset:function(){L=!1,ne=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,ne=null,pe=null,ee=null;return{setReversed:function(K){if(he!==K){const ie=e.get("EXT_clip_control");K?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),he=K;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return he},setTest:function(K){K?Q(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(K){ne!==K&&!L&&(i.depthMask(K),ne=K)},setFunc:function(K){if(he&&(K=f0[K]),pe!==K){switch(K){case Os:i.depthFunc(i.NEVER);break;case Bs:i.depthFunc(i.ALWAYS);break;case ks:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case zs:i.depthFunc(i.EQUAL);break;case Gs:i.depthFunc(i.GEQUAL);break;case Vs:i.depthFunc(i.GREATER);break;case Hs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=K}},setLocked:function(K){L=K},setClear:function(K){ee!==K&&(he&&(K=1-K),i.clearDepth(K),ee=K)},reset:function(){L=!1,ne=null,pe=null,ee=null,he=!1}}}function r(){let L=!1,he=null,ne=null,pe=null,ee=null,K=null,ie=null,Ne=null,it=null;return{setTest:function(Ke){L||(Ke?Q(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Ke){he!==Ke&&!L&&(i.stencilMask(Ke),he=Ke)},setFunc:function(Ke,en,dn){(ne!==Ke||pe!==en||ee!==dn)&&(i.stencilFunc(Ke,en,dn),ne=Ke,pe=en,ee=dn)},setOp:function(Ke,en,dn){(K!==Ke||ie!==en||Ne!==dn)&&(i.stencilOp(Ke,en,dn),K=Ke,ie=en,Ne=dn)},setLocked:function(Ke){L=Ke},setClear:function(Ke){it!==Ke&&(i.clearStencil(Ke),it=Ke)},reset:function(){L=!1,he=null,ne=null,pe=null,ee=null,K=null,ie=null,Ne=null,it=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],x=null,v=!1,g=null,u=null,b=null,w=null,E=null,A=null,R=null,N=new Ie(0,0,0),k=0,M=!1,S=null,C=null,F=null,B=null,j=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=W>=2);let ue=null,le={};const fe=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Fe=new ht().fromArray(fe),ot=new ht().fromArray(ke);function st(L,he,ne,pe){const ee=new Uint8Array(4),K=i.createTexture();i.bindTexture(L,K),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<ne;ie++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(he+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return K}const $={};$[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(_i),Oe(!1),ft(bo),Q(i.CULL_FACE),$e(_n);function Q(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function xe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Le(L,he){return d[L]!==he?(i.bindFramebuffer(L,he),d[L]=he,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Me(L,he){let ne=f,pe=!1;if(L){ne=p.get(he),ne===void 0&&(ne=[],p.set(he,ne));const ee=L.textures;if(ne.length!==ee.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let K=0,ie=ee.length;K<ie;K++)ne[K]=i.COLOR_ATTACHMENT0+K;ne.length=ee.length,pe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ne)}function We(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const _t={[Kn]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[gh]:i.FUNC_REVERSE_SUBTRACT};_t[xh]=i.MIN,_t[_h]=i.MAX;const Ve={[vh]:i.ZERO,[Mh]:i.ONE,[yh]:i.SRC_COLOR,[Us]:i.SRC_ALPHA,[Ah]:i.SRC_ALPHA_SATURATE,[wh]:i.DST_COLOR,[Sh]:i.DST_ALPHA,[bh]:i.ONE_MINUS_SRC_COLOR,[Fs]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[Eh]:i.ONE_MINUS_DST_ALPHA,[Rh]:i.CONSTANT_COLOR,[Ch]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Nh]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(L,he,ne,pe,ee,K,ie,Ne,it,Ke){if(L===_n){v===!0&&(xe(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),L!==ph){if(L!==g||Ke!==M){if((u!==Kn||E!==Kn)&&(i.blendEquation(i.FUNC_ADD),u=Kn,E=Kn),Ke)switch(L){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.ONE,i.ONE);break;case So:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case So:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eo:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}b=null,w=null,A=null,R=null,N.set(0,0,0),k=0,g=L,M=Ke}return}ee=ee||he,K=K||ne,ie=ie||pe,(he!==u||ee!==E)&&(i.blendEquationSeparate(_t[he],_t[ee]),u=he,E=ee),(ne!==b||pe!==w||K!==A||ie!==R)&&(i.blendFuncSeparate(Ve[ne],Ve[pe],Ve[K],Ve[ie]),b=ne,w=pe,A=K,R=ie),(Ne.equals(N)===!1||it!==k)&&(i.blendColor(Ne.r,Ne.g,Ne.b,it),N.copy(Ne),k=it),g=L,M=!1}function et(L,he){L.side===gn?xe(i.CULL_FACE):Q(i.CULL_FACE);let ne=L.side===Ft;he&&(ne=!ne),Oe(ne),L.blending===gi&&L.transparent===!1?$e(_n):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function ft(L){L!==hh?(Q(i.CULL_FACE),L!==C&&(L===bo?i.cullFace(i.BACK):L===uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),C=L}function P(L){L!==F&&(V&&i.lineWidth(L),F=L)}function pt(L,he,ne){L?(Q(i.POLYGON_OFFSET_FILL),(B!==he||j!==ne)&&(i.polygonOffset(he,ne),B=he,j=ne)):xe(i.POLYGON_OFFSET_FILL)}function Ye(L){L?Q(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function nt(L){L===void 0&&(L=i.TEXTURE0+Y-1),ue!==L&&(i.activeTexture(L),ue=L)}function be(L,he,ne){ne===void 0&&(ue===null?ne=i.TEXTURE0+Y-1:ne=ue);let pe=le[ne];pe===void 0&&(pe={type:void 0,texture:void 0},le[ne]=pe),(pe.type!==L||pe.texture!==he)&&(ue!==ne&&(i.activeTexture(ne),ue=ne),i.bindTexture(L,he||$[L]),pe.type=L,pe.texture=he)}function T(){const L=le[ue];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function q(){try{i.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Z(){try{i.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function re(){try{i.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ye(){try{i.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Ce(){try{i.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function te(){try{i.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ae(L){Fe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function ve(L){ot.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function Se(L,he){let ne=c.get(he);ne===void 0&&(ne=new WeakMap,c.set(he,ne));let pe=ne.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(he,L.name),ne.set(L,pe))}function se(L,he){const pe=c.get(he).get(L);l.get(he)!==pe&&(i.uniformBlockBinding(he,pe,L.__bindingPointIndex),l.set(he,pe))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,le={},d={},p=new WeakMap,f=[],x=null,v=!1,g=null,u=null,b=null,w=null,E=null,A=null,R=null,N=new Ie(0,0,0),k=0,M=!1,S=null,C=null,F=null,B=null,j=null,Fe.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:xe,bindFramebuffer:Le,drawBuffers:Me,useProgram:We,setBlending:$e,setMaterial:et,setFlipSided:Oe,setCullFace:ft,setLineWidth:P,setPolygonOffset:pt,setScissorTest:Ye,activeTexture:nt,bindTexture:be,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ce,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:se,texStorage2D:re,texStorage3D:ye,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:H,compressedTexSubImage3D:Ee,scissor:ae,viewport:ve,reset:Be}}function m0(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,_){return f?new OffscreenCanvas(T,_):Or("canvas")}function v(T,_,D){let q=1;const Z=be(T);if((Z.width>D||Z.height>D)&&(q=D/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(q*Z.width),Ee=Math.floor(q*Z.height);d===void 0&&(d=x(H,Ee));const re=_?x(H,Ee):d;return re.width=H,re.height=Ee,re.getContext("2d").drawImage(T,0,0,H,Ee),Pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+Ee+")."),re}else return"data"in T&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function g(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,_,D,q,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=_;if(_===i.RED&&(D===i.FLOAT&&(H=i.R32F),D===i.HALF_FLOAT&&(H=i.R16F),D===i.UNSIGNED_BYTE&&(H=i.R8)),_===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.R8UI),D===i.UNSIGNED_SHORT&&(H=i.R16UI),D===i.UNSIGNED_INT&&(H=i.R32UI),D===i.BYTE&&(H=i.R8I),D===i.SHORT&&(H=i.R16I),D===i.INT&&(H=i.R32I)),_===i.RG&&(D===i.FLOAT&&(H=i.RG32F),D===i.HALF_FLOAT&&(H=i.RG16F),D===i.UNSIGNED_BYTE&&(H=i.RG8)),_===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RG8UI),D===i.UNSIGNED_SHORT&&(H=i.RG16UI),D===i.UNSIGNED_INT&&(H=i.RG32UI),D===i.BYTE&&(H=i.RG8I),D===i.SHORT&&(H=i.RG16I),D===i.INT&&(H=i.RG32I)),_===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGB8UI),D===i.UNSIGNED_SHORT&&(H=i.RGB16UI),D===i.UNSIGNED_INT&&(H=i.RGB32UI),D===i.BYTE&&(H=i.RGB8I),D===i.SHORT&&(H=i.RGB16I),D===i.INT&&(H=i.RGB32I)),_===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),D===i.UNSIGNED_INT&&(H=i.RGBA32UI),D===i.BYTE&&(H=i.RGBA8I),D===i.SHORT&&(H=i.RGBA16I),D===i.INT&&(H=i.RGBA32I)),_===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),_===i.RGBA){const Ee=Z?Ur:He.getTransfer(q);D===i.FLOAT&&(H=i.RGBA32F),D===i.HALF_FLOAT&&(H=i.RGBA16F),D===i.UNSIGNED_BYTE&&(H=Ee===Je?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(T,_){let D;return T?_===null||_===cn||_===Wi?D=i.DEPTH24_STENCIL8:_===sn?D=i.DEPTH32F_STENCIL8:_===Hi&&(D=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===cn||_===Wi?D=i.DEPTH_COMPONENT24:_===sn?D=i.DEPTH_COMPONENT32F:_===Hi&&(D=i.DEPTH_COMPONENT16),D}function A(T,_){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==yt&&T.minFilter!==Et?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){const _=T.target;_.removeEventListener("dispose",R),k(_),_.isVideoTexture&&h.delete(_)}function N(T){const _=T.target;_.removeEventListener("dispose",N),S(_)}function k(T){const _=n.get(T);if(_.__webglInit===void 0)return;const D=T.source,q=p.get(D);if(q){const Z=q[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(T),Object.keys(q).length===0&&p.delete(D)}n.remove(T)}function M(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const D=T.source,q=p.get(D);delete q[_.__cacheKey],a.memory.textures--}function S(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Z=0;Z<_.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=T.textures;for(let q=0,Z=D.length;q<Z;q++){const H=n.get(D[q]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(D[q])}n.remove(T)}let C=0;function F(){C=0}function B(){const T=C;return T>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function j(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Y(T,_){const D=n.get(T);if(T.isVideoTexture&&Ye(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const q=T.image;if(q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,T,_);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+_)}function V(T,_){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,_);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+_)}function W(T,_){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,_);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+_)}function J(T,_){const D=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){Q(D,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+_)}const ue={[Xs]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[qs]:i.MIRRORED_REPEAT},le={[yt]:i.NEAREST,[Ih]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},fe={[Oh]:i.NEVER,[Vh]:i.ALWAYS,[Bh]:i.LESS,[Wa]:i.LEQUAL,[kh]:i.EQUAL,[ja]:i.GEQUAL,[zh]:i.GREATER,[Gh]:i.NOTEQUAL};function ke(T,_){if(_.type===sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Et||_.magFilter===Zr||_.magFilter===nr||_.magFilter===Jn||_.minFilter===Et||_.minFilter===Zr||_.minFilter===nr||_.minFilter===Jn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ue[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,le[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===yt||_.minFilter!==nr&&_.minFilter!==Jn||_.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(T,_){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));const q=_.source;let Z=p.get(q);Z===void 0&&(Z={},p.set(q,Z));const H=j(_);if(H!==T.__cacheKey){Z[H]===void 0&&(Z[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Z[H].usedTimes++;const Ee=Z[T.__cacheKey];Ee!==void 0&&(Z[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(_)),T.__cacheKey=H,T.__webglTexture=Z[H].texture}return D}function ot(T,_,D){return Math.floor(Math.floor(T/D)/_)}function st(T,_,D,q){const H=T.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,D,q,_.data);else{H.sort((te,ae)=>te.start-ae.start);let Ee=0;for(let te=1;te<H.length;te++){const ae=H[Ee],ve=H[te],Se=ae.start+ae.count,se=ot(ve.start,_.width,4),Be=ot(ae.start,_.width,4);ve.start<=Se+1&&se===Be&&ot(ve.start+ve.count-1,_.width,4)===se?ae.count=Math.max(ae.count,ve.start+ve.count-ae.start):(++Ee,H[Ee]=ve)}H.length=Ee+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),ye=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let te=0,ae=H.length;te<ae;te++){const ve=H[te],Se=Math.floor(ve.start/4),se=Math.ceil(ve.count/4),Be=Se%_.width,L=Math.floor(Se/_.width),he=se,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Be,L,he,ne,D,q,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function $(T,_,D){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const Z=Fe(T,_),H=_.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+D);const Ee=n.get(H);if(H.version!==Ee.__version||Z===!0){t.activeTexture(i.TEXTURE0+D);const re=He.getPrimaries(He.workingColorSpace),ye=_.colorSpace===Cn?null:He.getPrimaries(_.colorSpace),Ce=_.colorSpace===Cn||re===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let te=v(_.image,!1,r.maxTextureSize);te=nt(_,te);const ae=s.convert(_.format,_.colorSpace),ve=s.convert(_.type);let Se=w(_.internalFormat,ae,ve,_.colorSpace,_.isVideoTexture);ke(q,_);let se;const Be=_.mipmaps,L=_.isVideoTexture!==!0,he=Ee.__version===void 0||Z===!0,ne=H.dataReady,pe=A(_,te);if(_.isDepthTexture)Se=E(_.format===Qn,_.type),he&&(L?t.texStorage2D(i.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Se,te.width,te.height,0,ae,ve,null));else if(_.isDataTexture)if(Be.length>0){L&&he&&t.texStorage2D(i.TEXTURE_2D,pe,Se,Be[0].width,Be[0].height);for(let ee=0,K=Be.length;ee<K;ee++)se=Be[ee],L?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,se.width,se.height,ae,ve,se.data):t.texImage2D(i.TEXTURE_2D,ee,Se,se.width,se.height,0,ae,ve,se.data);_.generateMipmaps=!1}else L?(he&&t.texStorage2D(i.TEXTURE_2D,pe,Se,te.width,te.height),ne&&st(_,te,ae,ve)):t.texImage2D(i.TEXTURE_2D,0,Se,te.width,te.height,0,ae,ve,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Se,Be[0].width,Be[0].height,te.depth);for(let ee=0,K=Be.length;ee<K;ee++)if(se=Be[ee],_.format!==Kt)if(ae!==null)if(L){if(ne)if(_.layerUpdates.size>0){const ie=Jo(se.width,se.height,_.format,_.type);for(const Ne of _.layerUpdates){const it=se.data.subarray(Ne*ie/se.data.BYTES_PER_ELEMENT,(Ne+1)*ie/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ne,se.width,se.height,1,ae,it)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,se.width,se.height,te.depth,ae,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Se,se.width,se.height,te.depth,0,se.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,se.width,se.height,te.depth,ae,ve,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Se,se.width,se.height,te.depth,0,ae,ve,se.data)}else{L&&he&&t.texStorage2D(i.TEXTURE_2D,pe,Se,Be[0].width,Be[0].height);for(let ee=0,K=Be.length;ee<K;ee++)se=Be[ee],_.format!==Kt?ae!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,se.width,se.height,ae,se.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Se,se.width,se.height,0,se.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,se.width,se.height,ae,ve,se.data):t.texImage2D(i.TEXTURE_2D,ee,Se,se.width,se.height,0,ae,ve,se.data)}else if(_.isDataArrayTexture)if(L){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Se,te.width,te.height,te.depth),ne)if(_.layerUpdates.size>0){const ee=Jo(te.width,te.height,_.format,_.type);for(const K of _.layerUpdates){const ie=te.data.subarray(K*ee/te.data.BYTES_PER_ELEMENT,(K+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ae,ve,ie)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ae,ve,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,ae,ve,te.data);else if(_.isData3DTexture)L?(he&&t.texStorage3D(i.TEXTURE_3D,pe,Se,te.width,te.height,te.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ae,ve,te.data)):t.texImage3D(i.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,ae,ve,te.data);else if(_.isFramebufferTexture){if(he)if(L)t.texStorage2D(i.TEXTURE_2D,pe,Se,te.width,te.height);else{let ee=te.width,K=te.height;for(let ie=0;ie<pe;ie++)t.texImage2D(i.TEXTURE_2D,ie,Se,ee,K,0,ae,ve,null),ee>>=1,K>>=1}}else if(Be.length>0){if(L&&he){const ee=be(Be[0]);t.texStorage2D(i.TEXTURE_2D,pe,Se,ee.width,ee.height)}for(let ee=0,K=Be.length;ee<K;ee++)se=Be[ee],L?ne&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ae,ve,se):t.texImage2D(i.TEXTURE_2D,ee,Se,ae,ve,se);_.generateMipmaps=!1}else if(L){if(he){const ee=be(te);t.texStorage2D(i.TEXTURE_2D,pe,Se,ee.width,ee.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ve,te)}else t.texImage2D(i.TEXTURE_2D,0,Se,ae,ve,te);g(_)&&u(q),Ee.__version=H.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,D){if(_.image.length!==6)return;const q=Fe(T,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const H=n.get(Z);if(Z.version!==H.__version||q===!0){t.activeTexture(i.TEXTURE0+D);const Ee=He.getPrimaries(He.workingColorSpace),re=_.colorSpace===Cn?null:He.getPrimaries(_.colorSpace),ye=_.colorSpace===Cn||Ee===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!Ce&&!te?ae[K]=v(_.image[K],!0,r.maxCubemapSize):ae[K]=te?_.image[K].image:_.image[K],ae[K]=nt(_,ae[K]);const ve=ae[0],Se=s.convert(_.format,_.colorSpace),se=s.convert(_.type),Be=w(_.internalFormat,Se,se,_.colorSpace),L=_.isVideoTexture!==!0,he=H.__version===void 0||q===!0,ne=Z.dataReady;let pe=A(_,ve);ke(i.TEXTURE_CUBE_MAP,_);let ee;if(Ce){L&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Be,ve.width,ve.height);for(let K=0;K<6;K++){ee=ae[K].mipmaps;for(let ie=0;ie<ee.length;ie++){const Ne=ee[ie];_.format!==Kt?Se!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Ne.width,Ne.height,Se,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Be,Ne.width,Ne.height,0,Ne.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Ne.width,Ne.height,Se,se,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Be,Ne.width,Ne.height,0,Se,se,Ne.data)}}}else{if(ee=_.mipmaps,L&&he){ee.length>0&&pe++;const K=be(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Be,K.width,K.height)}for(let K=0;K<6;K++)if(te){L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,Se,se,ae[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,ae[K].width,ae[K].height,0,Se,se,ae[K].data);for(let ie=0;ie<ee.length;ie++){const it=ee[ie].image[K].image;L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,it.width,it.height,Se,se,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Be,it.width,it.height,0,Se,se,it.data)}}else{L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se,se,ae[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,Se,se,ae[K]);for(let ie=0;ie<ee.length;ie++){const Ne=ee[ie];L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Se,se,Ne.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Be,Se,se,Ne.image[K])}}}g(_)&&u(i.TEXTURE_CUBE_MAP),H.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function xe(T,_,D,q,Z,H){const Ee=s.convert(D.format,D.colorSpace),re=s.convert(D.type),ye=w(D.internalFormat,Ee,re,D.colorSpace),Ce=n.get(_),te=n.get(D);if(te.__renderTarget=_,!Ce.__hasExternalTextures){const ae=Math.max(1,_.width>>H),ve=Math.max(1,_.height>>H);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,H,ye,ae,ve,_.depth,0,Ee,re,null):t.texImage2D(Z,H,ye,ae,ve,0,Ee,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),pt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,te.__webglTexture,0,P(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,te.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,_,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const q=_.depthTexture,Z=q&&q.isDepthTexture?q.type:null,H=E(_.stencilBuffer,Z),Ee=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),H,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),H,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,H,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,T)}else{const q=_.textures;for(let Z=0;Z<q.length;Z++){const H=q[Z],Ee=s.convert(H.format,H.colorSpace),re=s.convert(H.type),ye=w(H.internalFormat,Ee,re,H.colorSpace);pt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),ye,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),ye,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ye,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(T,_,D){const q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_.depthTexture);const Ce=s.convert(_.depthTexture.format),te=s.convert(_.depthTexture.type);let ae;_.depthTexture.format===yn?ae=i.DEPTH_COMPONENT24:_.depthTexture.format===Qn&&(ae=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ae,_.width,_.height,0,Ce,te,null)}}else Y(_.depthTexture,0);const H=Z.__webglTexture,Ee=P(_),re=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,ye=_.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===yn)pt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,re,H,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,ye,re,H,0);else if(_.depthTexture.format===Qn)pt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,re,H,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,ye,re,H,0);else throw new Error("Unknown depthTexture format")}function We(T){const _=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)Me(_.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?Me(_.__webglFramebuffer[0],T,0):Me(_.__webglFramebuffer,T,0)}else if(D){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[q],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,H)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(T,_,D){const q=n.get(T);_!==void 0&&xe(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&We(T)}function Ve(T){const _=T.texture,D=n.get(T),q=n.get(_);T.addEventListener("dispose",N);const Z=T.textures,H=T.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),H){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let ye=0;ye<_.mipmaps.length;ye++)D.__webglFramebuffer[re][ye]=i.createFramebuffer()}else D.__webglFramebuffer[re]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)D.__webglFramebuffer[re]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let re=0,ye=Z.length;re<ye;re++){const Ce=n.get(Z[re]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&pt(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const ye=Z[re];D.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Ce=s.convert(ye.format,ye.colorSpace),te=s.convert(ye.type),ae=w(ye.internalFormat,Ce,te,ye.colorSpace,T.isXRRenderTarget===!0),ve=P(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,D.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)xe(D.__webglFramebuffer[re][ye],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye);else xe(D.__webglFramebuffer[re],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let re=0,ye=Z.length;re<ye;re++){const Ce=Z[re],te=n.get(Ce);let ae=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,te.__webglTexture),ke(ae,Ce),xe(D.__webglFramebuffer,T,Ce,i.COLOR_ATTACHMENT0+re,ae,0),g(Ce)&&u(ae)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),ke(re,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)xe(D.__webglFramebuffer[ye],T,_,i.COLOR_ATTACHMENT0,re,ye);else xe(D.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,re,0);g(_)&&u(re),t.unbindTexture()}T.depthBuffer&&We(T)}function $e(T){const _=T.textures;for(let D=0,q=_.length;D<q;D++){const Z=_[D];if(g(Z)){const H=b(T),Ee=n.get(Z).__webglTexture;t.bindTexture(H,Ee),u(H),t.unbindTexture()}}}const et=[],Oe=[];function ft(T){if(T.samples>0){if(pt(T)===!1){const _=T.textures,D=T.width,q=T.height;let Z=i.COLOR_BUFFER_BIT;const H=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(T),re=_.length>1;if(re)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const ye=T.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const te=n.get(_[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,D,q,0,0,D,q,Z,i.NEAREST),l===!0&&(et.length=0,Oe.length=0,et.push(i.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(H),Oe.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const te=n.get(_[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function P(T){return Math.min(r.maxSamples,T.samples)}function pt(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ye(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function nt(T,_){const D=T.colorSpace,q=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==yi&&D!==Cn&&(He.getTransfer(D)===Je?(q!==Kt||Z!==Vt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",D)),_}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=_t,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function g0(i,e){function t(n,r=Cn){let s;const a=He.getTransfer(r);if(n===Vt)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zl)return i.BYTE;if(n===Jl)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Oa)return i.INT;if(n===cn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===nc)return i.RGB;if(n===Kt)return i.RGBA;if(n===yn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===za)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===Rr||n===Cr||n===Pr||n===Nr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ys||n===$s||n===Ks||n===Zs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ks)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Js||n===Qs)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ea)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ta)return s.COMPRESSED_R11_EAC;if(n===na)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return s.COMPRESSED_RG11_EAC;if(n===ra)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sa||n===aa||n===oa||n===la||n===ca||n===da||n===ha||n===ua||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===Ma||n===ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===va)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===Sa||n===Ea||n===wa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jt({vertexShader:x0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M0 extends wi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,x=null;const v=typeof XRWebGLBinding<"u",g=new v0,u={},b=t.getContextAttributes();let w=null,E=null;const A=[],R=[],N=new qe;let k=null;const M=new Pt;M.viewport=new ht;const S=new Pt;S.viewport=new ht;const C=[M,S],F=new Cu;let B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=A[$];return Q===void 0&&(Q=new Ms,A[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=A[$];return Q===void 0&&(Q=new Ms,A[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=A[$];return Q===void 0&&(Q=new Ms,A[$]=Q),Q.getHandSpace()};function Y($){const Q=R.indexOf($.inputSource);if(Q===-1)return;const xe=A[Q];xe!==void 0&&(xe.update($.inputSource,$.frame,c||a),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let $=0;$<A.length;$++){const Q=R[$];Q!==null&&(R[$]=null,A[$].disconnect(Q))}B=null,j=null,g.reset();for(const $ in u)delete u[$];e.setRenderTarget(w),f=null,p=null,d=null,r=null,E=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Le=null,Me=null;b.depth&&(Me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?Qn:yn,Le=b.stencil?Wi:cn);const We={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(We),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new ln(p.textureWidth,p.textureHeight,{format:Kt,type:Vt,depthTexture:new Xi(p.textureWidth,p.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ln(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W($){for(let Q=0;Q<$.removed.length;Q++){const xe=$.removed[Q],Le=R.indexOf(xe);Le>=0&&(R[Le]=null,A[Le].disconnect(xe))}for(let Q=0;Q<$.added.length;Q++){const xe=$.added[Q];let Le=R.indexOf(xe);if(Le===-1){for(let We=0;We<A.length;We++)if(We>=R.length){R.push(xe),Le=We;break}else if(R[We]===null){R[We]=xe,Le=We;break}if(Le===-1)break}const Me=A[Le];Me&&Me.connect(xe)}}const J=new O,ue=new O;function le($,Q,xe){J.setFromMatrixPosition(Q.matrixWorld),ue.setFromMatrixPosition(xe.matrixWorld);const Le=J.distanceTo(ue),Me=Q.projectionMatrix.elements,We=xe.projectionMatrix.elements,_t=Me[14]/(Me[10]-1),Ve=Me[14]/(Me[10]+1),$e=(Me[9]+1)/Me[5],et=(Me[9]-1)/Me[5],Oe=(Me[8]-1)/Me[0],ft=(We[8]+1)/We[0],P=_t*Oe,pt=_t*ft,Ye=Le/(-Oe+ft),nt=Ye*-Oe;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Me[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const be=_t+Ye,T=Ve+Ye,_=P-nt,D=pt+(Le-nt),q=$e*Ve/T*be,Z=et*Ve/T*be;$.projectionMatrix.makePerspective(_,D,q,Z,be,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function fe($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Q=$.near,xe=$.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),F.near=S.near=M.near=Q,F.far=S.far=M.far=xe,(B!==F.near||j!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,j=F.far),F.layers.mask=$.layers.mask|6,M.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const Le=$.parent,Me=F.cameras;fe(F,Le);for(let We=0;We<Me.length;We++)fe(Me[We],Le);Me.length===2?le(F,M,S):F.projectionMatrix.copy(M.projectionMatrix),ke($,F,Le)};function ke($,Q,xe){xe===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ta*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function($){return u[$]};let Fe=null;function ot($,Q){if(h=Q.getViewerPose(c||a),x=Q,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Le=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let Ve=0;Ve<xe.length;Ve++){const $e=xe[Ve];let et=null;if(f!==null)et=f.getViewport($e);else{const ft=d.getViewSubImage(p,$e);et=ft.viewport,Ve===0&&(e.setRenderTargetTextures(E,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(E))}let Oe=C[Ve];Oe===void 0&&(Oe=new Pt,Oe.layers.enable(Ve),Oe.viewport=new ht,C[Ve]=Oe),Oe.matrix.fromArray($e.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray($e.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(et.x,et.y,et.width,et.height),Ve===0&&(F.matrix.copy(Oe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Oe)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Ve=d.getDepthInformation(xe[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,r.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ve=0;Ve<xe.length;Ve++){const $e=xe[Ve].camera;if($e){let et=u[$e];et||(et=new xc,u[$e]=et);const Oe=d.getCameraImage($e);et.sourceTexture=Oe}}}}for(let xe=0;xe<A.length;xe++){const Le=R[xe],Me=A[xe];Le!==null&&Me!==void 0&&Me.update(Le,Q,c||a)}Fe&&Fe($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}const st=new Mc;st.setAnimationLoop(ot),this.setAnimationLoop=function($){Fe=$},this.dispose=function(){}}}const qn=new Zt,y0=new at;function b0(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,dc(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,b,w,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),d(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u)):u.isMeshStandardMaterial?(s(g,u),p(g,u),u.isMeshPhysicalMaterial&&f(g,u,E)):u.isMeshMatcapMaterial?(s(g,u),x(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),v(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,b,w):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Ft&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Ft&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const b=e.get(u),w=b.envMap,E=b.envMapRotation;w&&(g.envMap.value=w,qn.copy(E),qn.x*=-1,qn.y*=-1,qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),g.envMapRotation.value.setFromMatrix4(y0.makeRotationFromEuler(qn)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,b,w){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*b,g.scale.value=w*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function f(g,u,b){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ft&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function v(g,u){const b=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function S0(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const E=w.program;n.uniformBlockBinding(b,E)}function c(b,w){let E=r[b.id];E===void 0&&(x(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",g));const A=w.program;n.updateUBOMapping(b,A);const R=e.render.frame;s[b.id]!==R&&(p(b),s[b.id]=R)}function h(b){const w=d();b.__bindingPointIndex=w;const E=i.createBuffer(),A=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const w=r[b.id],E=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,N=E.length;R<N;R++){const k=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,S=k.length;M<S;M++){const C=k[M];if(f(C,R,M,A)===!0){const F=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let j=0;for(let Y=0;Y<B.length;Y++){const V=B[Y],W=v(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+j,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,j),j+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,E,A){const R=b.value,N=w+"_"+E;if(A[N]===void 0)return typeof R=="number"||typeof R=="boolean"?A[N]=R:A[N]=R.clone(),!0;{const k=A[N];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return A[N]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function x(b){const w=b.uniforms;let E=0;const A=16;for(let N=0,k=w.length;N<k;N++){const M=Array.isArray(w[N])?w[N]:[w[N]];for(let S=0,C=M.length;S<C;S++){const F=M[S],B=Array.isArray(F.value)?F.value:[F.value];for(let j=0,Y=B.length;j<Y;j++){const V=B[j],W=v(V),J=E%A,ue=J%W.boundary,le=J+ue;E+=ue,le!==0&&A-le<W.storage&&(E+=A-le),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=W.storage}}}const R=E%A;return R>0&&(E+=A-R),b.__size=E,b.__cache={},this}function v(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){const w=b.target;w.removeEventListener("dispose",g);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const E0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tn=null;function w0(){return tn===null&&(tn=new mu(E0,16,16,Mi,Mn),tn.name="DFG_LUT",tn.minFilter=Et,tn.magFilter=Et,tn.wrapS=xn,tn.wrapT=xn,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}class eo{constructor(e={}){const{canvas:t=Hh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:f=Vt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const v=f,g=new Set([Va,Ga,za]),u=new Set([Vt,cn,Hi,Wi,Ba,ka]),b=new Uint32Array(4),w=new Int32Array(4);let E=null,A=null;const R=[],N=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let S=!1;this._outputColorSpace=jt;let C=0,F=0,B=null,j=-1,Y=null;const V=new ht,W=new ht;let J=null;const ue=new Ie(0);let le=0,fe=t.width,ke=t.height,Fe=1,ot=null,st=null;const $=new ht(0,0,fe,ke),Q=new ht(0,0,fe,ke);let xe=!1;const Le=new Ka;let Me=!1,We=!1;const _t=new at,Ve=new O,$e=new ht,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ft(){return B===null?Fe:1}let P=n;function pt(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),P===null){const I="webgl2";if(P=pt(I,y),P===null)throw pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Xe("WebGLRenderer: "+y.message),y}let Ye,nt,be,T,_,D,q,Z,H,Ee,re,ye,Ce,te,ae,ve,Se,se,Be,L,he,ne,pe,ee;function K(){Ye=new wm(P),Ye.init(),ne=new g0(P,Ye),nt=new gm(P,Ye,e,ne),be=new p0(P,Ye),nt.reversedDepthBuffer&&p&&be.buffers.depth.setReversed(!0),T=new Rm(P),_=new Qg,D=new m0(P,Ye,be,_,nt,ne,T),q=new _m(M),Z=new Em(M),H=new Nu(P),pe=new pm(P,H),Ee=new Tm(P,H,T,pe),re=new Pm(P,Ee,H,T),Be=new Cm(P,nt,D),ve=new xm(_),ye=new Jg(M,q,Z,Ye,nt,pe,ve),Ce=new b0(M,_),te=new t0,ae=new o0(Ye),se=new fm(M,q,Z,be,re,x,l),Se=new u0(M,re,nt),ee=new S0(P,T,nt,be),L=new mm(P,Ye,T),he=new Am(P,Ye,T),T.programs=ye.programs,M.capabilities=nt,M.extensions=Ye,M.properties=_,M.renderLists=te,M.shadowMap=Se,M.state=be,M.info=T}K(),v!==Vt&&(k=new Lm(v,t.width,t.height,r,s));const ie=new M0(M,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(y){y!==void 0&&(Fe=y,this.setSize(fe,ke,!1))},this.getSize=function(y){return y.set(fe,ke)},this.setSize=function(y,I,G=!0){if(ie.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=y,ke=I,t.width=Math.floor(y*Fe),t.height=Math.floor(I*Fe),G===!0&&(t.style.width=y+"px",t.style.height=I+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(fe*Fe,ke*Fe).floor()},this.setDrawingBufferSize=function(y,I,G){fe=y,ke=I,Fe=G,t.width=Math.floor(y*G),t.height=Math.floor(I*G),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(v===Vt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy($)},this.setViewport=function(y,I,G,z){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,I,G,z),be.viewport(V.copy($).multiplyScalar(Fe).round())},this.getScissor=function(y){return y.copy(Q)},this.setScissor=function(y,I,G,z){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,I,G,z),be.scissor(W.copy(Q).multiplyScalar(Fe).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(y){be.setScissorTest(xe=y)},this.setOpaqueSort=function(y){ot=y},this.setTransparentSort=function(y){st=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,G=!0){let z=0;if(y){let U=!1;if(B!==null){const oe=B.texture.format;U=g.has(oe)}if(U){const oe=B.texture.type,ge=u.has(oe),de=se.getClearColor(),_e=se.getClearAlpha(),we=de.r,Re=de.g,Te=de.b;ge?(b[0]=we,b[1]=Re,b[2]=Te,b[3]=_e,P.clearBufferuiv(P.COLOR,0,b)):(w[0]=we,w[1]=Re,w[2]=Te,w[3]=_e,P.clearBufferiv(P.COLOR,0,w))}else z|=P.COLOR_BUFFER_BIT}I&&(z|=P.DEPTH_BUFFER_BIT),G&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),se.dispose(),te.dispose(),ae.dispose(),_.dispose(),q.dispose(),Z.dispose(),re.dispose(),pe.dispose(),ee.dispose(),ye.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ro),ie.removeEventListener("sessionend",so),kn.stop()};function Ne(y){y.preventDefault(),Co("WebGLRenderer: Context Lost."),S=!0}function it(){Co("WebGLRenderer: Context Restored."),S=!1;const y=T.autoReset,I=Se.enabled,G=Se.autoUpdate,z=Se.needsUpdate,U=Se.type;K(),T.autoReset=y,Se.enabled=I,Se.autoUpdate=G,Se.needsUpdate=z,Se.type=U}function Ke(y){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function en(y){const I=y.target;I.removeEventListener("dispose",en),dn(I)}function dn(y){Tc(y),_.remove(y)}function Tc(y){const I=_.get(y).programs;I!==void 0&&(I.forEach(function(G){ye.releaseProgram(G)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,G,z,U,oe){I===null&&(I=et);const ge=U.isMesh&&U.matrixWorld.determinant()<0,de=Rc(y,I,G,z,U);be.setMaterial(z,ge);let _e=G.index,we=1;if(z.wireframe===!0){if(_e=Ee.getWireframeAttribute(G),_e===void 0)return;we=2}const Re=G.drawRange,Te=G.attributes.position;let ze=Re.start*we,Qe=(Re.start+Re.count)*we;oe!==null&&(ze=Math.max(ze,oe.start*we),Qe=Math.min(Qe,(oe.start+oe.count)*we)),_e!==null?(ze=Math.max(ze,0),Qe=Math.min(Qe,_e.count)):Te!=null&&(ze=Math.max(ze,0),Qe=Math.min(Qe,Te.count));const ct=Qe-ze;if(ct<0||ct===1/0)return;pe.setup(U,z,de,G,_e);let dt,tt=L;if(_e!==null&&(dt=H.get(_e),tt=he,tt.setIndex(dt)),U.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*ft()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(U.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),be.setLineWidth(Ae*ft()),U.isLineSegments?tt.setMode(P.LINES):U.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else U.isPoints?tt.setMode(P.POINTS):U.isSprite&&tt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ji("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,Ze=U._multiDrawCounts,je=U._multiDrawCount,Ot=_e?H.get(_e).bytesPerElement:1,ti=_.get(z).currentProgram.getUniforms();for(let Bt=0;Bt<je;Bt++)ti.setValue(P,"_gl_DrawID",Bt),tt.render(Ae[Bt]/Ot,Ze[Bt])}else if(U.isInstancedMesh)tt.renderInstances(ze,ct,U.count);else if(G.isInstancedBufferGeometry){const Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ze=Math.min(G.instanceCount,Ae);tt.renderInstances(ze,ct,Ze)}else tt.render(ze,ct)};function io(y,I,G){y.transparent===!0&&y.side===gn&&y.forceSinglePass===!1?(y.side=Ft,y.needsUpdate=!0,er(y,I,G),y.side=In,y.needsUpdate=!0,er(y,I,G),y.side=gn):er(y,I,G)}this.compile=function(y,I,G=null){G===null&&(G=y),A=ae.get(G),A.init(I),N.push(A),G.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(A.pushLight(U),U.castShadow&&A.pushShadow(U))}),y!==G&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(A.pushLight(U),U.castShadow&&A.pushShadow(U))}),A.setupLights();const z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const de=oe[ge];io(de,G,U),z.add(de)}else io(oe,G,U),z.add(oe)}),A=N.pop(),z},this.compileAsync=function(y,I,G=null){const z=this.compile(y,I,G);return new Promise(U=>{function oe(){if(z.forEach(function(ge){_.get(ge).currentProgram.isReady()&&z.delete(ge)}),z.size===0){U(y);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let qr=null;function Ac(y){qr&&qr(y)}function ro(){kn.stop()}function so(){kn.start()}const kn=new Mc;kn.setAnimationLoop(Ac),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(y){qr=y,ie.setAnimationLoop(y),y===null?kn.stop():kn.start()},ie.addEventListener("sessionstart",ro),ie.addEventListener("sessionend",so),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const G=ie.enabled===!0&&ie.isPresenting===!0,z=k!==null&&(B===null||G)&&k.begin(M,B);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,B),A=ae.get(y,N.length),A.init(I),N.push(A),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Le.setFromProjectionMatrix(_t,an,I.reversedDepth),We=this.localClippingEnabled,Me=ve.init(this.clippingPlanes,We),E=te.get(y,R.length),E.init(),R.push(E),ie.enabled===!0&&ie.isPresenting===!0){const ge=M.xr.getDepthSensingMesh();ge!==null&&Yr(ge,I,-1/0,M.sortObjects)}Yr(y,I,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(ot,st),Oe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Oe&&se.addToRenderList(E,y),this.info.render.frame++,Me===!0&&ve.beginShadows();const U=A.state.shadowsArray;if(Se.render(U,y,I),Me===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&k.hasRenderPass())===!1){const ge=E.opaque,de=E.transmissive;if(A.setupLights(),I.isArrayCamera){const _e=I.cameras;if(de.length>0)for(let we=0,Re=_e.length;we<Re;we++){const Te=_e[we];oo(ge,de,y,Te)}Oe&&se.render(y);for(let we=0,Re=_e.length;we<Re;we++){const Te=_e[we];ao(E,y,Te,Te.viewport)}}else de.length>0&&oo(ge,de,y,I),Oe&&se.render(y),ao(E,y,I)}B!==null&&F===0&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),z&&k.end(M),y.isScene===!0&&y.onAfterRender(M,y,I),pe.resetDefaultState(),j=-1,Y=null,N.pop(),N.length>0?(A=N[N.length-1],Me===!0&&ve.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?E=R[R.length-1]:E=null};function Yr(y,I,G,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Le.intersectsSprite(y)){z&&$e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_t);const ge=re.update(y),de=y.material;de.visible&&E.push(y,ge,de,G,$e.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Le.intersectsObject(y))){const ge=re.update(y),de=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),$e.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),$e.copy(ge.boundingSphere.center)),$e.applyMatrix4(y.matrixWorld).applyMatrix4(_t)),Array.isArray(de)){const _e=ge.groups;for(let we=0,Re=_e.length;we<Re;we++){const Te=_e[we],ze=de[Te.materialIndex];ze&&ze.visible&&E.push(y,ge,ze,G,$e.z,Te)}}else de.visible&&E.push(y,ge,de,G,$e.z,null)}}const oe=y.children;for(let ge=0,de=oe.length;ge<de;ge++)Yr(oe[ge],I,G,z)}function ao(y,I,G,z){const{opaque:U,transmissive:oe,transparent:ge}=y;A.setupLightsView(G),Me===!0&&ve.setGlobalState(M.clippingPlanes,G),z&&be.viewport(V.copy(z)),U.length>0&&Qi(U,I,G),oe.length>0&&Qi(oe,I,G),ge.length>0&&Qi(ge,I,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function oo(y,I,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){const ze=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new ln(1,1,{generateMipmaps:!0,type:ze?Mn:Vt,minFilter:Jn,samples:nt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}const oe=A.state.transmissionRenderTarget[z.id],ge=z.viewport||V;oe.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);const de=M.getRenderTarget(),_e=M.getActiveCubeFace(),we=M.getActiveMipmapLevel();M.setRenderTarget(oe),M.getClearColor(ue),le=M.getClearAlpha(),le<1&&M.setClearColor(16777215,.5),M.clear(),Oe&&se.render(G);const Re=M.toneMapping;M.toneMapping=on;const Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),Me===!0&&ve.setGlobalState(M.clippingPlanes,z),Qi(y,G,z),D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Qe=0,ct=I.length;Qe<ct;Qe++){const dt=I[Qe],{object:tt,geometry:Ae,material:Ze,group:je}=dt;if(Ze.side===gn&&tt.layers.test(z.layers)){const Ot=Ze.side;Ze.side=Ft,Ze.needsUpdate=!0,lo(tt,G,z,Ae,Ze,je),Ze.side=Ot,Ze.needsUpdate=!0,ze=!0}}ze===!0&&(D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe))}M.setRenderTarget(de,_e,we),M.setClearColor(ue,le),Te!==void 0&&(z.viewport=Te),M.toneMapping=Re}function Qi(y,I,G){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,oe=y.length;U<oe;U++){const ge=y[U],{object:de,geometry:_e,group:we}=ge;let Re=ge.material;Re.allowOverride===!0&&z!==null&&(Re=z),de.layers.test(G.layers)&&lo(de,I,G,_e,Re,we)}}function lo(y,I,G,z,U,oe){y.onBeforeRender(M,I,G,z,U,oe),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,I,G,z,y,oe),U.transparent===!0&&U.side===gn&&U.forceSinglePass===!1?(U.side=Ft,U.needsUpdate=!0,M.renderBufferDirect(G,I,z,U,y,oe),U.side=In,U.needsUpdate=!0,M.renderBufferDirect(G,I,z,U,y,oe),U.side=gn):M.renderBufferDirect(G,I,z,U,y,oe),y.onAfterRender(M,I,G,z,U,oe)}function er(y,I,G){I.isScene!==!0&&(I=et);const z=_.get(y),U=A.state.lights,oe=A.state.shadowsArray,ge=U.state.version,de=ye.getParameters(y,U.state,oe,I,G),_e=ye.getProgramCacheKey(de);let we=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?Z:q).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",en),we=new Map,z.programs=we);let Re=we.get(_e);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===ge)return ho(y,de),Re}else de.uniforms=ye.getUniforms(y),y.onBeforeCompile(de,M),Re=ye.acquireProgram(de,_e),we.set(_e,Re),z.uniforms=de.uniforms;const Te=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=ve.uniform),ho(y,de),z.needsLights=Pc(y),z.lightsStateVersion=ge,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function co(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Dr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function ho(y,I){const G=_.get(y);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Rc(y,I,G,z,U){I.isScene!==!0&&(I=et),D.resetTextureUnits();const oe=I.fog,ge=z.isMeshStandardMaterial?I.environment:null,de=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:yi,_e=(z.isMeshStandardMaterial?Z:q).get(z.envMap||ge),we=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!G.morphAttributes.position,ze=!!G.morphAttributes.normal,Qe=!!G.morphAttributes.color;let ct=on;z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ct=M.toneMapping);const dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,tt=dt!==void 0?dt.length:0,Ae=_.get(z),Ze=A.state.lights;if(Me===!0&&(We===!0||y!==Y)){const Rt=y===Y&&z.id===j;ve.setState(z,y,Rt)}let je=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ze.state.version||Ae.outputColorSpace!==de||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==_e||z.fog===!0&&Ae.fog!==oe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ve.numPlanes||Ae.numIntersection!==ve.numIntersection)||Ae.vertexAlphas!==we||Ae.vertexTangents!==Re||Ae.morphTargets!==Te||Ae.morphNormals!==ze||Ae.morphColors!==Qe||Ae.toneMapping!==ct||Ae.morphTargetsCount!==tt)&&(je=!0):(je=!0,Ae.__version=z.version);let Ot=Ae.currentProgram;je===!0&&(Ot=er(z,I,U));let ti=!1,Bt=!1,Ri=!1;const rt=Ot.getUniforms(),Dt=Ae.uniforms;if(be.useProgram(Ot.program)&&(ti=!0,Bt=!0,Ri=!0),z.id!==j&&(j=z.id,Bt=!0),ti||Y!==y){be.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),rt.setValue(P,"projectionMatrix",y.projectionMatrix),rt.setValue(P,"viewMatrix",y.matrixWorldInverse);const It=rt.map.cameraPosition;It!==void 0&&It.setValue(P,Ve.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&rt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),Y!==y&&(Y=y,Bt=!0,Ri=!0)}if(Ae.needsLights&&(Ze.state.directionalShadowMap.length>0&&rt.setValue(P,"directionalShadowMap",Ze.state.directionalShadowMap,D),Ze.state.spotShadowMap.length>0&&rt.setValue(P,"spotShadowMap",Ze.state.spotShadowMap,D),Ze.state.pointShadowMap.length>0&&rt.setValue(P,"pointShadowMap",Ze.state.pointShadowMap,D)),U.isSkinnedMesh){rt.setOptional(P,U,"bindMatrix"),rt.setOptional(P,U,"bindMatrixInverse");const Rt=U.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),rt.setValue(P,"boneTexture",Rt.boneTexture,D))}U.isBatchedMesh&&(rt.setOptional(P,U,"batchingTexture"),rt.setValue(P,"batchingTexture",U._matricesTexture,D),rt.setOptional(P,U,"batchingIdTexture"),rt.setValue(P,"batchingIdTexture",U._indirectTexture,D),rt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&rt.setValue(P,"batchingColorTexture",U._colorsTexture,D));const Ht=G.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&Be.update(U,G,Ot),(Bt||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,rt.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Dt.envMap.value=_e,Dt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Dt.envMapIntensity.value=I.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=w0()),Bt&&(rt.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ae.needsLights&&Cc(Dt,Ri),oe&&z.fog===!0&&Ce.refreshFogUniforms(Dt,oe),Ce.refreshMaterialUniforms(Dt,z,Fe,ke,A.state.transmissionRenderTarget[y.id]),Dr.upload(P,co(Ae),Dt,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Dr.upload(P,co(Ae),Dt,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(P,"center",U.center),rt.setValue(P,"modelViewMatrix",U.modelViewMatrix),rt.setValue(P,"normalMatrix",U.normalMatrix),rt.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Rt=z.uniformsGroups;for(let It=0,$r=Rt.length;It<$r;It++){const zn=Rt[It];ee.update(zn,Ot),ee.bind(zn,Ot)}}return Ot}function Cc(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Pc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,I,G){const z=_.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_.get(y.texture).__webglTexture=I,_.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const G=_.get(y);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const Nc=P.createFramebuffer();this.setRenderTarget=function(y,I=0,G=0){B=y,C=I,F=G;let z=null,U=!1,oe=!1;if(y){const de=_.get(y);if(de.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),V.copy(y.viewport),W.copy(y.scissor),J=y.scissorTest,be.viewport(V),be.scissor(W),be.setScissorTest(J),j=-1;return}else if(de.__webglFramebuffer===void 0)D.setupRenderTarget(y);else if(de.__hasExternalTextures)D.rebindTextures(y,_.get(y.texture).__webglTexture,_.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Re=y.depthTexture;if(de.__boundDepthTexture!==Re){if(Re!==null&&_.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(y)}}const _e=y.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);const we=_.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[I])?z=we[I][G]:z=we[I],U=!0):y.samples>0&&D.useMultisampledRTT(y)===!1?z=_.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[G]:z=we,V.copy(y.viewport),W.copy(y.scissor),J=y.scissorTest}else V.copy($).multiplyScalar(Fe).floor(),W.copy(Q).multiplyScalar(Fe).floor(),J=xe;if(G!==0&&(z=Nc),be.bindFramebuffer(P.FRAMEBUFFER,z)&&be.drawBuffers(y,z),be.viewport(V),be.scissor(W),be.setScissorTest(J),U){const de=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,G)}else if(oe){const de=I;for(let _e=0;_e<y.textures.length;_e++){const we=_.get(y.textures[_e]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+_e,we.__webglTexture,G,de)}}else if(y!==null&&G!==0){const de=_.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,G)}j=-1},this.readRenderTargetPixels=function(y,I,G,z,U,oe,ge,de=0){if(!(y&&y.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e){be.bindFramebuffer(P.FRAMEBUFFER,_e);try{const we=y.textures[de],Re=we.format,Te=we.type;if(!nt.textureFormatReadable(Re)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Te)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&G>=0&&G<=y.height-U&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),P.readPixels(I,G,z,U,ne.convert(Re),ne.convert(Te),oe))}finally{const we=B!==null?_.get(B).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,I,G,z,U,oe,ge,de=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e)if(I>=0&&I<=y.width-z&&G>=0&&G<=y.height-U){be.bindFramebuffer(P.FRAMEBUFFER,_e);const we=y.textures[de],Re=we.format,Te=we.type;if(!nt.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),P.readPixels(I,G,z,U,ne.convert(Re),ne.convert(Te),0);const Qe=B!==null?_.get(B).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,Qe);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wh(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(ze),P.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,G=0){const z=Math.pow(2,-G),U=Math.floor(y.image.width*z),oe=Math.floor(y.image.height*z),ge=I!==null?I.x:0,de=I!==null?I.y:0;D.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,ge,de,U,oe),be.unbindTexture()};const Lc=P.createFramebuffer(),Dc=P.createFramebuffer();this.copyTextureToTexture=function(y,I,G=null,z=null,U=0,oe=null){oe===null&&(U!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=U,U=0):oe=0);let ge,de,_e,we,Re,Te,ze,Qe,ct;const dt=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(G!==null)ge=G.max.x-G.min.x,de=G.max.y-G.min.y,_e=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Re=G.min.y,Te=G.isBox3?G.min.z:0;else{const Ht=Math.pow(2,-U);ge=Math.floor(dt.width*Ht),de=Math.floor(dt.height*Ht),y.isDataArrayTexture?_e=dt.depth:y.isData3DTexture?_e=Math.floor(dt.depth*Ht):_e=1,we=0,Re=0,Te=0}z!==null?(ze=z.x,Qe=z.y,ct=z.z):(ze=0,Qe=0,ct=0);const tt=ne.convert(I.format),Ae=ne.convert(I.type);let Ze;I.isData3DTexture?(D.setTexture3D(I,0),Ze=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),Ze=P.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),Ze=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const je=P.getParameter(P.UNPACK_ROW_LENGTH),Ot=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ti=P.getParameter(P.UNPACK_SKIP_PIXELS),Bt=P.getParameter(P.UNPACK_SKIP_ROWS),Ri=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);const rt=y.isDataArrayTexture||y.isData3DTexture,Dt=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Ht=_.get(y),Rt=_.get(I),It=_.get(Ht.__renderTarget),$r=_.get(Rt.__renderTarget);be.bindFramebuffer(P.READ_FRAMEBUFFER,It.__webglFramebuffer),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let zn=0;zn<_e;zn++)rt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(y).__webglTexture,U,Te+zn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(I).__webglTexture,oe,ct+zn)),P.blitFramebuffer(we,Re,ge,de,ze,Qe,ge,de,P.DEPTH_BUFFER_BIT,P.NEAREST);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||_.has(y)){const Ht=_.get(y),Rt=_.get(I);be.bindFramebuffer(P.READ_FRAMEBUFFER,Lc),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,Dc);for(let It=0;It<_e;It++)rt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ht.__webglTexture,U,Te+It):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ht.__webglTexture,U),Dt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,oe,ct+It):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rt.__webglTexture,oe),U!==0?P.blitFramebuffer(we,Re,ge,de,ze,Qe,ge,de,P.COLOR_BUFFER_BIT,P.NEAREST):Dt?P.copyTexSubImage3D(Ze,oe,ze,Qe,ct+It,we,Re,ge,de):P.copyTexSubImage2D(Ze,oe,ze,Qe,we,Re,ge,de);be.bindFramebuffer(P.READ_FRAMEBUFFER,null),be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Dt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ze,oe,ze,Qe,ct,ge,de,_e,tt,Ae,dt.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Ze,oe,ze,Qe,ct,ge,de,_e,tt,dt.data):P.texSubImage3D(Ze,oe,ze,Qe,ct,ge,de,_e,tt,Ae,dt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,ze,Qe,ge,de,tt,Ae,dt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,ze,Qe,dt.width,dt.height,tt,dt.data):P.texSubImage2D(P.TEXTURE_2D,oe,ze,Qe,ge,de,tt,Ae,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ti),P.pixelStorei(P.UNPACK_SKIP_ROWS,Bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ri),oe===0&&I.generateMipmaps&&P.generateMipmap(Ze),be.unbindTexture()},this.initRenderTarget=function(y){_.get(y).__webglFramebuffer===void 0&&D.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?D.setTextureCube(y,0):y.isData3DTexture?D.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?D.setTexture2DArray(y,0):D.setTexture2D(y,0),be.unbindTexture()},this.resetState=function(){C=0,F=0,B=null,be.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}const T0=i=>{try{console.log("Starting Three.js scene creation..."),console.log("Container element:",i);const e=new $a;e.background=new Ie(0),e.fog=new Ya(0,500,1e3);const t=new Pt(75,window.innerWidth/window.innerHeight,.1,2e3),n=new eo({antialias:!0,alpha:!1,powerPreference:"high-performance"});console.log("Renderer created:",n),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setClearColor(0,1),n.domElement.style.position="absolute",n.domElement.style.top="0",n.domElement.style.left="0",n.domElement.style.width="100%",n.domElement.style.height="100%",n.domElement.style.zIndex="0",n.shadowMap.enabled=!0,n.shadowMap.type=void 0,console.log("Appending renderer to container...");const r=n.domElement;r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.display="block",i.style.position="relative",i.style.width="100%",i.style.height="100%",i.appendChild(n.domElement),console.log("Renderer appended successfully"),t.position.z=120;const s={x:0,y:0},a=M=>{s.x=M.clientX/window.innerWidth*2-1,s.y=-(M.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",a);const o=150,l=new At,c=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o*3);for(let M=0;M<o;M++){const S=(Math.random()-.5)*400,C=(Math.random()-.5)*400,F=(Math.random()-.5)*400;c[M*3]=S,c[M*3+1]=C,c[M*3+2]=F,d[M*3]=S,d[M*3+1]=C,d[M*3+2]=F;const B=Math.random()*.5+.5;h[M*3]=B,h[M*3+1]=B,h[M*3+2]=B}l.setAttribute("position",new Lt(c,3)),l.setAttribute("color",new Lt(h,3));const p=new mc({size:2.5,sizeAttenuation:!0,transparent:!0,opacity:.7,vertexColors:!0}),f=new gc(l,p);e.add(f);const x=5,v=[];for(let M=0;M<x;M++){const S=new At,C=new Float32Array(600);for(let Y=0;Y<200;Y++){const V=Y/200;C[Y*3]=(V-.5)*300,C[Y*3+1]=Math.sin(V*Math.PI*4+M)*60+Math.cos(V*Math.PI*2+M)*40,C[Y*3+2]=Math.cos(V*Math.PI*3+M)*60}S.setAttribute("position",new Lt(C,3));const F=.1+M/x*.3,B=new pc({color:new Ie().setHSL(F,.7,.5),opacity:.4,transparent:!0,linewidth:2}),j=new vu(S,B);v.push(j),e.add(j)}const g=new Au(65416,1,300);g.position.z=100,g.castShadow=!0,e.add(g);const u=new vc(16777215,.3);e.add(u);const b=new Lr(16777215,.2);b.position.set(200,100,100),b.castShadow=!0,e.add(b);const w=3,E=[];for(let M=0;M<w;M++){const S=new Za(80+M*40,1,32,100),C=new Su({color:new Ie().setHSL(.55+M*.05,.8,.5),emissive:new Ie().setHSL(.55+M*.05,.8,.3),wireframe:!1}),F=new Nt(S,C);F.rotation.x=Math.random()*Math.PI,F.rotation.y=Math.random()*Math.PI,F.castShadow=!0,F.receiveShadow=!0,E.push(F),e.add(F)}const A=()=>{const M=window.innerWidth,S=window.innerHeight;t.aspect=M/S,t.updateProjectionMatrix(),n.setSize(M,S)};window.addEventListener("resize",A);let R=0;const N=()=>{R+=.001,requestAnimationFrame(N),g.position.x=s.x*100,g.position.y=s.y*100,g.intensity=1+Math.sin(R*3)*.5,f.rotation.x+=2e-4,f.rotation.y+=3e-4;const M=l.getAttribute("position"),S=M.array;for(let C=0;C<o;C++){const F=C*3;S[F]=d[F]+Math.sin(R*.3+C)*20,S[F+1]=d[F+1]+Math.cos(R*.2+C*.1)*20,S[F+2]=d[F+2]+Math.sin(R*.25+C*.5)*15}M.needsUpdate=!0,v.forEach((C,F)=>{C.rotation.x+=15e-5*(F+1),C.rotation.y+=25e-5*(F+1),C.rotation.z+=1e-4*(F+1),C.material.opacity=.3+.2*Math.sin(R*2+F)}),E.forEach((C,F)=>{C.rotation.x+=1e-4*(F+1),C.rotation.y+=2e-4*(F+1);const B=1+.05*Math.sin(R*1.5+F);C.scale.set(B,B,B)}),n.render(e,t)};return console.log("Starting animation loop..."),N(),console.log("Three.js scene setup complete, returning cleanup function"),()=>{console.log("Cleaning up Three.js scene..."),window.removeEventListener("resize",A),window.removeEventListener("mousemove",a),i.contains(n.domElement)&&i.removeChild(n.domElement),n.dispose(),l.dispose(),p.dispose(),v.forEach(M=>{M.geometry.dispose(),M.material.dispose()}),E.forEach(M=>{M.geometry.dispose(),M.material.dispose()})}}catch(e){throw console.error("Error in createBackgroundScene:",e),e}},A0=()=>{const i=X.useRef(null),e=X.useRef(null);return X.useEffect(()=>{if(!i.current){console.warn("Container ref not available");return}try{console.log("Initializing Three.js background...");const t=T0(i.current);return console.log("Three.js background initialized successfully"),()=>{t&&t(),e.current&&cancelAnimationFrame(e.current)}}catch(t){console.error("Three.js background failed to initialize:",t)}},[]),m.jsx("div",{ref:i,className:"w-full h-full",style:{width:"100%",height:"100%",overflow:"hidden"}})},R0=({isVisible:i})=>m.jsx(me.div,{initial:{opacity:1},animate:{opacity:i?1:0},exit:{opacity:0},transition:{duration:.8,ease:"easeInOut"},style:{pointerEvents:i?"auto":"none"},className:"fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/0 backdrop-blur-0",children:m.jsxs(me.div,{initial:{scale:.8,opacity:0,y:-20},animate:{scale:i?1:.8,opacity:i?1:0,y:i?0:-20},transition:{duration:.6,ease:"easeOut",delay:.2},className:"flex flex-col items-center gap-4",children:[m.jsx(me.div,{animate:{y:i?[0,-8,0]:0},transition:{duration:2.5,repeat:i?1/0:0,ease:"easeInOut"},className:"w-20 h-20 bg-gradient-to-br from-white to-gray-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-white/20",children:m.jsx("span",{className:"text-4xl font-black",children:"⚡"})}),m.jsxs("div",{className:"text-center space-y-2",children:[m.jsxs("h1",{className:"text-4xl font-black tracking-tight",children:["HackQuest ",m.jsx("span",{className:"bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",children:"AI"})]}),m.jsx("p",{className:"text-sm font-semibold text-gray-400 tracking-widest uppercase",children:"Pro Agent"})]}),m.jsx(me.div,{className:"flex gap-2 mt-6",initial:{opacity:0},animate:{opacity:i?1:0},transition:{delay:.5},children:[0,1,2].map(e=>m.jsx(me.div,{className:"w-2 h-2 bg-white rounded-full",animate:{scale:i?[1,1.5,1]:1,opacity:i?[.6,1,.6]:.6},transition:{duration:1.5,delay:e*.2,repeat:i?1/0:0}},e))}),m.jsx(me.p,{className:"text-xs text-gray-500 mt-4 font-light",animate:{opacity:i?[.5,1,.5]:0},transition:{duration:2,repeat:i?1/0:0,delay:.3},children:"Discovering your hackathon match..."})]})}),C0=i=>{try{const e=new $a,t=new Pt(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=50;const n=new eo({antialias:!0,alpha:!1});n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(0,1),n.setPixelRatio(window.devicePixelRatio),i.appendChild(n.domElement);const r=4e3,s=new At,a=new Float32Array(r*3),o=new Float32Array(r*3),l=new Float32Array(r*3);for(let u=0;u<r;u++){let b,w,E;const A=Math.floor(Math.random()*4);A===0?(b=(Math.random()-.5)*40,w=30,E=(Math.random()-.5)*20):A===1?(b=(Math.random()-.5)*40,w=-30,E=(Math.random()-.5)*20):A===2?(b=-20,w=(Math.random()-.5)*40,E=(Math.random()-.5)*20):(b=20,w=(Math.random()-.5)*40,E=(Math.random()-.5)*20),a[u*3]=b,a[u*3+1]=w,a[u*3+2]=E,o[u*3]=1,o[u*3+1]=1,o[u*3+2]=1;const R=Math.atan2(w,b),N=Math.random()*.3+.1;l[u*3]=Math.cos(R)*N,l[u*3+1]=Math.sin(R)*N,l[u*3+2]=(Math.random()-.5)*.3}s.setAttribute("position",new Lt(a,3)),s.setAttribute("color",new Lt(o,3));const c=new Jt({uniforms:{time:{value:0}},vertexShader:`
                uniform float time;
                attribute vec3 color;
                varying vec3 vColor;
                varying float vAlpha;

                void main() {
                    vColor = color;
                    
                    // Pulsing effect
                    float pulse = sin(time * 0.5 + length(position) * 0.01) * 0.5 + 0.5;
                    float size = 2.0 + pulse * 2.0;
                    
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (300.0 / -mvPos.z);
                    gl_Position = projectionMatrix * mvPos;
                    
                    vAlpha = 0.8;
                }
            `,fragmentShader:`
                varying vec3 vColor;
                varying float vAlpha;

                void main() {
                    // Circular particles with soft falloff
                    vec2 center = gl_PointCoord - vec2(0.5);
                    float dist = length(center);
                    
                    if (dist > 0.5) discard;
                    
                    float alpha = (1.0 - dist * 2.0) * vAlpha;
                    gl_FragColor = vec4(vColor, alpha);
                }
            `,transparent:!0,blending:Is,depthWrite:!1}),h=new gc(s,c);e.add(h);let d=0,p=0;window.addEventListener("mousemove",u=>{d=(u.clientX/window.innerWidth-.5)*100,p=-(u.clientY/window.innerHeight-.5)*100});const f=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",f);let x=0;const v=s.getAttribute("position").array,g=()=>{requestAnimationFrame(g),x+=.016,c.uniforms.time.value=x;for(let u=0;u<r;u++){const b=u*3;v[b]+=l[b],v[b+1]+=l[b+1],v[b+2]+=l[b+2],v[b+1]+=Math.sin(x*.3+v[b]*.02)*.4,v[b]+=Math.cos(x*.25+v[b+1]*.02)*.4,l[b]*=.97,l[b+1]*=.97,l[b+2]*=.97;const w=d-v[b],E=p-v[b+1],A=Math.sqrt(w*w+E*E);if(A<30){const R=(30-A)/30*.5;l[b]-=w/A*R,l[b+1]-=E/A*R}if(Math.abs(v[b])>150||Math.abs(v[b+1])>150){const R=Math.floor(Math.random()*4);R===0?(v[b]=(Math.random()-.5)*40,v[b+1]=30):R===1?(v[b]=(Math.random()-.5)*40,v[b+1]=-30):R===2?(v[b]=-20,v[b+1]=(Math.random()-.5)*40):(v[b]=20,v[b+1]=(Math.random()-.5)*40),v[b+2]=(Math.random()-.5)*20;const N=Math.atan2(v[b+1],v[b]),k=Math.random()*.3+.1;l[b]=Math.cos(N)*k,l[b+1]=Math.sin(N)*k,l[b+2]=(Math.random()-.5)*.3}}s.getAttribute("position").needsUpdate=!0,n.render(e,t)};return g(),()=>{window.removeEventListener("resize",f),n.dispose(),s.dispose(),c.dispose(),i.contains(n.domElement)&&i.removeChild(n.domElement)}}catch(e){throw console.error("Error creating login background:",e),e}},P0=()=>{const i=X.useRef(null);return X.useEffect(()=>{if(!i.current){console.warn("Container ref not available");return}try{console.log("Initializing Login Three.js background...");const e=C0(i.current);return console.log("Login Three.js background initialized successfully"),()=>{e&&e()}}catch(e){console.error("Login Three.js background failed to initialize:",e)}},[]),m.jsx("div",{ref:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",backgroundColor:"#000000",zIndex:0}})},N0=i=>{try{const e=new $a,t=new Pt(75,i.clientWidth/i.clientHeight,.1,1e3);t.position.z=120;const n=new eo({antialias:!0,alpha:!0});n.setSize(i.clientWidth,i.clientHeight),n.setClearColor(0,0),n.setPixelRatio(window.devicePixelRatio),i.appendChild(n.domElement);const r=new Bi;e.add(r);const s=new Ti(80,80,8),a=new jn({color:16777215,metalness:.3,roughness:.4,emissive:1118481}),o=new Nt(s,a);r.add(o);const l=new zr(95,32,32),c=new zi({color:55807,transparent:!0,opacity:.15}),h=new Nt(l,c);h.position.z=-20,r.add(h);const d=new zi({color:6684927,transparent:!0,opacity:.1}),p=new Nt(new zr(85,32,32),d);p.position.z=25,r.add(p);const f=document.createElement("canvas");f.width=512,f.height=512;const x=f.getContext("2d");x.fillStyle="#000000",x.fillRect(0,0,512,512),x.font="bold 180px Arial",x.fillStyle="#00d9ff",x.textAlign="center",x.textBaseline="middle",x.fillText("⚡",256,180),x.font="bold 60px Arial",x.fillStyle="#ffffff",x.fillText("HackQuest",256,350),x.font="40px Arial",x.fillStyle="#00d9ff",x.fillText("AI",256,420);const v=new Mu(f),g=new jn({map:v,metalness:.2,roughness:.5,emissive:1710618});a.color.set(16448250);const u=[new jn({color:1710618,metalness:.4,roughness:.6}),new jn({color:1710618,metalness:.4,roughness:.6}),new jn({color:986895,metalness:.3,roughness:.7}),new jn({color:986895,metalness:.3,roughness:.7}),g,new jn({color:1710618,metalness:.4,roughness:.6})],b=new Nt(s,u);r.remove(o),r.add(b);const w=new vc(16777215,.6);e.add(w);const E=new Lr(16777215,.8);E.position.set(100,100,100),e.add(E);const A=new Lr(55807,.4);A.position.set(-150,50,50),e.add(A);const R=new Lr(6684927,.3);R.position.set(150,-50,50),e.add(R);const N=new Ji(100,20),k=new zi({color:0,transparent:!0,opacity:.3}),M=new Nt(N,k);M.position.y=-55,M.position.z=-5,r.add(M);const S=()=>{const B=i.clientWidth,j=i.clientHeight;t.aspect=B/j,t.updateProjectionMatrix(),n.setSize(B,j)};let C=0;const F=()=>{requestAnimationFrame(F),C+=.008,r.rotation.y=C*.5,r.rotation.x=Math.sin(C*.25)*.1,r.position.y=Math.sin(C*.3)*8,n.render(e,t)};return F(),window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S),n.dispose(),s.dispose(),v.dispose(),u.forEach(B=>B.dispose()),N.dispose(),k.dispose(),l.dispose(),c.dispose(),d.dispose(),i.contains(n.domElement)&&i.removeChild(n.domElement)}}catch(e){throw console.error("Error creating 3D logo:",e),e}},to=()=>{const i=X.useRef(null);return X.useEffect(()=>{if(!i.current){console.warn("Logo container ref not available");return}try{console.log("Initializing 3D logo...");const e=N0(i.current);return console.log("3D logo initialized successfully"),()=>{e&&e()}}catch(e){console.error("3D logo failed to initialize:",e)}},[]),m.jsx("div",{ref:i,style:{width:"100%",height:"200px",position:"relative"}})},Tr=!1,bl=!0,Gr={env:{isDev:Tr,isProd:bl,isPreview:!bl},api:{baseUrl:"http://localhost:8000",wsUrl:"ws://localhost:8000",timeout:3e4},app:{name:"HackQuest AI",description:"Win your next hackathon with AI-powered insights",version:"1.0.0"},features:{enableAnalytics:!Tr,enableErrorReporting:!Tr,enableDebugPanel:Tr}};class L0{baseUrl;token=null;constructor(){this.baseUrl=Gr.api.baseUrl,this.loadToken()}loadToken(){this.token=localStorage.getItem("access_token")}setToken(e){this.token=e,localStorage.setItem("access_token",e)}getHeaders(){const e={"Content-Type":"application/json"};return this.token&&(e.Authorization=`Bearer ${this.token}`),e}async handleResponse(e){if(!e.ok){const t=await e.json().catch(()=>({}));throw new Error(t.detail||`HTTP ${e.status}`)}return e.json()}async register(e,t,n,r){const s=await fetch(`${this.baseUrl}/api/auth/register`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({email:e,username:t,password:n,full_name:r})}),a=await this.handleResponse(s);return this.setToken(a.access_token),a}async login(e,t){const n=await fetch(`${this.baseUrl}/api/auth/login`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({email:e,password:t})}),r=await this.handleResponse(n);return this.setToken(r.access_token),r}async refreshToken(e){const t=e||localStorage.getItem("refresh_token"),n=await fetch(`${this.baseUrl}/api/auth/refresh`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({refresh_token:t})}),r=await this.handleResponse(n);return this.setToken(r.access_token),localStorage.setItem("refresh_token",r.access_token),r}async getProfile(e){const t=await fetch(`${this.baseUrl}/api/profile/${e}`,{method:"GET",headers:this.getHeaders()});return this.handleResponse(t)}async updateProfile(e,t){const n=await fetch(`${this.baseUrl}/api/profile/${e}`,{method:"PATCH",headers:this.getHeaders(),body:JSON.stringify(t)});return this.handleResponse(n)}async syncGitHub(e,t){const n=await fetch(`${this.baseUrl}/api/profile/${e}/sync-github`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({github_username:t})});return this.handleResponse(n)}async getProfileStats(e){const t=await fetch(`${this.baseUrl}/api/profile/${e}/stats`,{method:"GET",headers:this.getHeaders()});return this.handleResponse(t)}async getMatches(e=10){const t=await fetch(`${this.baseUrl}/api/matching/recommendations?limit=${e}`,{method:"GET",headers:this.getHeaders()});return this.handleResponse(t)}async findMatches(e,t){const n={skills:e};t&&(n.filters=t);const r=await fetch(`${this.baseUrl}/api/matching/find`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify(n)});return this.handleResponse(r)}async getHackathonDetail(e){const t=await fetch(`${this.baseUrl}/api/matching/${e}`,{method:"GET",headers:this.getHeaders()});return this.handleResponse(t)}async updateUserProfile(e,t,n){const r=await fetch(`${this.baseUrl}/api/matching/profile/update`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({user_id:e,skills:t,experience:n})});return this.handleResponse(r)}async createHackathon(e){const t=await fetch(`${this.baseUrl}/api/matching/hackathons`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify(e)});return this.handleResponse(t)}async searchHackathons(e,t){const n={query:e};t&&(n.filters=t);const r=await fetch(`${this.baseUrl}/api/matching/hackathons/search`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify(n)});return this.handleResponse(r)}async analyzeUser(e){const t=await fetch(`${this.baseUrl}/api/agent/analyze`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify(e)});return this.handleResponse(t)}async getUserMatches(e,t=5){const n=await fetch(`${this.baseUrl}/api/agent/hackathons/${e}/matches?limit=${t}`,{method:"GET",headers:this.getHeaders()});return this.handleResponse(n)}async scoreMatch(e,t){const n=await fetch(`${this.baseUrl}/api/agent/matches/score`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({user_id:e,hackathon_id:t})});return this.handleResponse(n)}async getHackathonsList(e,t){const n=new URLSearchParams;e&&n.append("limit",String(e)),t&&n.append("offset",String(t));const r=await fetch(`${this.baseUrl}/api/matching/hackathons?${n.toString()}`,{method:"GET",headers:this.getHeaders()});return this.handleResponse(r)}async generateCode(e){const t=await fetch(`${this.baseUrl}/api/generate/boilerplate`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify(e)});return this.handleResponse(t)}async explainCode(e,t){const n=await fetch(`${this.baseUrl}/api/generate/explain`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({code:e,language:t})});return this.handleResponse(n)}async optimizeCode(e,t){const n=await fetch(`${this.baseUrl}/api/generate/optimize`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({code:e,language:t})});return this.handleResponse(n)}async refactorCode(e,t){const n=await fetch(`${this.baseUrl}/api/generate/refactor`,{method:"POST",headers:this.getHeaders(),body:JSON.stringify({code:e,language:t})});return this.handleResponse(n)}async healthCheck(){const e=await fetch(`${this.baseUrl}/api/health`,{method:"GET",headers:this.getHeaders()});return this.handleResponse(e)}connectAgentStream(e,t,n){const r=`${this.baseUrl.replace(/^http/,"ws")}/ws/agent/${e}`,s=new WebSocket(r);return s.onmessage=a=>{try{const o=JSON.parse(a.data);t(o)}catch(o){console.error("Failed to parse WebSocket message:",o)}},s.onerror=n,s}connectNotificationStream(e,t,n){const r=`${this.baseUrl.replace(/^http/,"ws")}/ws/notifications/${e}`,s=new WebSocket(r);return s.onmessage=a=>{try{const o=JSON.parse(a.data);t(o)}catch(o){console.error("Failed to parse WebSocket message:",o)}},s.onerror=n,s}logout(){this.token=null,localStorage.removeItem("access_token"),localStorage.removeItem("user")}isAuthenticated(){return!!this.token}getToken(){return this.token}}const Xr=new L0;function D0({onLoginSuccess:i}){const[e,t]=X.useState(""),[n,r]=X.useState(""),[s,a]=X.useState(!1),[o,l]=X.useState(""),c=async p=>{if(p.preventDefault(),!e||!n){l("Please fill in all fields");return}l(""),a(!0);try{const f=await Xr.login(e,n);localStorage.setItem("user",JSON.stringify({loggedIn:!0})),i&&i({email:f.user.email,username:f.user.username,id:f.user.id})}catch(f){console.error("Login error:",f),l(f instanceof Error?f.message:"Invalid email or password"),a(!1)}},h=async()=>{try{a(!0),l("");const p=Gr.api.baseUrl,x=await(await fetch(`${p}/api/auth/oauth/authorize/github`)).json();if(x.authorization_url)window.location.href=x.authorization_url;else throw new Error("Failed to get authorization URL")}catch(p){console.error("GitHub login error:",p),l("Failed to initiate GitHub login. Please try again."),a(!1)}},d=async()=>{try{a(!0),l("");const p=Gr.api.baseUrl,x=await(await fetch(`${p}/api/auth/oauth/authorize/google`)).json();if(x.authorization_url)window.location.href=x.authorization_url;else throw new Error("Failed to get authorization URL")}catch(p){console.error("Google login error:",p),l("Failed to initiate Google login. Please try again."),a(!1)}};return m.jsxs("div",{className:"h-screen w-screen bg-black relative overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 bg-black z-0"}),m.jsx("div",{className:"fixed inset-0 z-10 pointer-events-none",children:m.jsx(P0,{})}),m.jsxs("div",{className:"fixed inset-0 z-20 flex flex-col items-center justify-center px-6",children:[m.jsx("div",{className:"mb-8 pointer-events-none",children:m.jsx(to,{})}),m.jsx("div",{className:"w-full max-w-md",children:m.jsxs("div",{className:"bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl",children:[m.jsxs("div",{className:"text-center mb-8",children:[m.jsx("h1",{className:"text-3xl font-black text-white mb-1",children:"HackQuest AI"}),m.jsx("p",{className:"text-sm text-gray-400",children:"Find your perfect hackathon match"})]}),m.jsxs("form",{onSubmit:c,className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"email",className:"block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider",children:"Email Address"}),m.jsx("input",{id:"email",type:"email",value:e,onChange:p=>t(p.target.value),placeholder:"name@example.com",className:"w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/[0.3] focus:bg-white/[0.08] transition-all"})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"password",className:"block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider",children:"Password"}),m.jsx("input",{id:"password",type:"password",value:n,onChange:p=>r(p.target.value),placeholder:"••••••••",className:"w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/[0.3] focus:bg-white/[0.08] transition-all"})]}),o&&m.jsx("div",{className:"px-4 py-3 bg-red-500/[0.1] border border-red-500/[0.3] rounded-lg",children:m.jsx("p",{className:"text-sm text-red-400",children:o})}),m.jsx("button",{type:"submit",disabled:s,className:"w-full px-4 py-3 mt-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none",children:s?"Logging in...":"Sign In"})]}),m.jsxs("div",{className:"flex items-center my-6",children:[m.jsx("div",{className:"flex-1 h-px bg-white/[0.1]"}),m.jsx("span",{className:"px-3 text-xs text-gray-500",children:"OR"}),m.jsx("div",{className:"flex-1 h-px bg-white/[0.1]"})]}),m.jsxs("div",{className:"space-y-3",children:[m.jsxs("button",{type:"button",onClick:h,disabled:s,className:"w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white font-medium hover:bg-white/[0.08] disabled:bg-white/[0.02] transition-all flex items-center justify-center gap-2",children:[m.jsx(Bl,{size:18}),"Continue with GitHub"]}),m.jsxs("button",{type:"button",onClick:d,disabled:s,className:"w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white font-medium hover:bg-white/[0.08] disabled:bg-white/[0.02] transition-all flex items-center justify-center gap-2",children:[m.jsx(Zd,{size:18}),"Continue with Google"]})]}),m.jsx("div",{className:"mt-8 text-center text-sm text-gray-400",children:"Demo credentials: test@example.com / password123"})]})})]})]})}function bn(...i){return i.filter(e=>typeof e=="string"&&e.length>0).join(" ")}const rn=Qt.forwardRef(({className:i,children:e,...t},n)=>m.jsx("div",{ref:n,className:bn("rounded-lg border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl hover:border-white/20 dark:bg-slate-950/50",i),...t,children:e}));rn.displayName="Card";const I0=Qt.forwardRef(({className:i,children:e,...t},n)=>m.jsx("div",{ref:n,className:bn("flex flex-col space-y-1.5 pb-6",i),...t,children:e}));I0.displayName="CardHeader";const U0=Qt.forwardRef(({className:i,children:e,...t},n)=>m.jsx("h3",{ref:n,className:bn("text-2xl font-bold tracking-tight text-white",i),...t,children:e}));U0.displayName="CardTitle";const F0=Qt.forwardRef(({className:i,children:e,...t},n)=>m.jsx("p",{ref:n,className:bn("text-sm text-gray-400 leading-relaxed",i),...t,children:e}));F0.displayName="CardDescription";const O0=Qt.forwardRef(({className:i,children:e,...t},n)=>m.jsx("div",{ref:n,className:bn("pt-0",i),...t,children:e}));O0.displayName="CardContent";const Gt=Qt.forwardRef(({className:i,variant:e="default",size:t="md",isLoading:n=!1,disabled:r,children:s,...a},o)=>{const l={default:"bg-white text-black hover:bg-gray-100 active:scale-95 shadow-lg shadow-white/20 font-semibold",outline:"border border-white/20 text-white hover:border-white/40 hover:bg-white/5 ",ghost:"text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200",secondary:"bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-600/20"},c={sm:"px-3 py-1.5 text-sm rounded-md",md:"px-6 py-2.5 text-base rounded-lg",lg:"px-8 py-3.5 text-lg rounded-full font-bold"};return m.jsx("button",{ref:o,disabled:r||n,className:bn("inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black",l[e],c[t],i),...a,children:s})});Gt.displayName="Button";const B0=Qt.forwardRef(({className:i,variant:e="default",children:t,icon:n,...r},s)=>{const a={default:"bg-blue-500/15 border border-blue-500/30 text-blue-400 dark:bg-blue-950 dark:border-blue-800",secondary:"bg-purple-500/15 border border-purple-500/30 text-purple-400 dark:bg-purple-950",outline:"bg-transparent border border-white/20 text-gray-300",success:"bg-green-500/15 border border-green-500/30 text-green-400 dark:bg-green-950",warning:"bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 dark:bg-yellow-950"};return m.jsxs("div",{ref:s,className:bn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all",a[e],i),...r,children:[n&&m.jsx("span",{className:"flex-shrink-0",children:n}),t]})});B0.displayName="Badge";const k0=Qt.forwardRef(({count:i=1,circle:e=!1,className:t,...n},r)=>m.jsx(m.Fragment,{children:Array.from({length:i}).map((s,a)=>m.jsx("div",{ref:a===0?r:null,className:bn("bg-gradient-to-r from-gray-700/20 via-gray-600/30 to-gray-700/20 animate-pulse rounded-lg",e&&"rounded-full",t),...n},a))}));k0.displayName="Skeleton";const wc=Qt.forwardRef(({className:i,label:e,error:t,icon:n,...r},s)=>m.jsxs("div",{className:"w-full space-y-2",children:[e&&m.jsx("label",{className:"block text-sm font-medium text-gray-300",children:e}),m.jsxs("div",{className:"relative group",children:[n&&m.jsx("div",{className:"absolute inset-y-0 left-4 flex items-center text-gray-500 group-focus-within:text-blue-500 transition-colors pointer-events-none",children:n}),m.jsx("input",{ref:s,className:bn("w-full px-4 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder:text-gray-600","focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all","disabled:opacity-50 disabled:cursor-not-allowed",n?"pl-12":"",t?"border-red-500/50 focus:ring-red-500/50":"",i),...r})]}),t&&m.jsx("p",{className:"text-sm text-red-400/80",children:t})]}));wc.displayName="Input";const Sl=()=>{const[i,e]=X.useState([]),[t,n]=X.useState(!1),[r,s]=X.useState(""),[a,o]=X.useState(null),[l,c]=X.useState({totalMatches:0,avgWinProbability:0,bestMatch:null});X.useEffect(()=>{h()},[]);const h=async()=>{n(!0),s("");try{const x=(await Xr.getMatches(10)).data||[];e(x),x.length>0&&c({totalMatches:x.length,avgWinProbability:x.reduce((v,g)=>v+g.win_probability,0)/x.length,bestMatch:x[0]})}catch(f){console.error("Failed to fetch matches:",f),s(f instanceof Error?f.message:"Failed to fetch matches")}finally{n(!1)}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},p={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}};return m.jsx("div",{className:"min-h-screen bg-transparent text-white pt-32",children:m.jsxs(me.div,{variants:p,initial:"hidden",animate:"visible",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[m.jsxs(me.div,{variants:d,className:"mb-12",children:[m.jsx("h1",{className:"text-5xl md:text-6xl font-black mb-4",children:"Your Hackathon Dashboard"}),m.jsx("p",{className:"text-gray-400 text-lg max-w-2xl",children:"Discover personalized hackathon opportunities matched to your unique skill signature"})]}),m.jsxs(me.div,{variants:d,className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[m.jsx(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 rounded-2xl",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-gray-400 text-sm mb-2",children:"Total Matches"}),m.jsx("p",{className:"text-4xl font-bold",children:l.totalMatches})]}),m.jsx(me.div,{whileHover:{scale:1.1},className:"p-3 bg-blue-500/10 rounded-lg",children:m.jsx(ch,{className:"w-8 h-8 text-blue-400"})})]})}),m.jsx(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 rounded-2xl",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-gray-400 text-sm mb-2",children:"Avg Win Probability"}),m.jsxs("p",{className:"text-4xl font-bold",children:[(l.avgWinProbability*100).toFixed(1),"%"]})]}),m.jsx(me.div,{whileHover:{scale:1.1},className:"p-3 bg-green-500/10 rounded-lg",children:m.jsx(kl,{className:"w-8 h-8 text-green-400"})})]})}),m.jsx(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 rounded-2xl",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-gray-400 text-sm mb-2",children:"Best Prize Pool"}),m.jsx("p",{className:"text-4xl font-bold",children:l.bestMatch?.prize_pool?`$${(l.bestMatch.prize_pool/1e3).toFixed(1)}K`:"N/A"})]}),m.jsx(me.div,{whileHover:{scale:1.1},className:"p-3 bg-yellow-500/10 rounded-lg",children:m.jsx(zl,{className:"w-8 h-8 text-yellow-400"})})]})})]}),r&&m.jsx(me.div,{variants:d,className:"mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400",children:r}),m.jsxs(me.div,{variants:d,className:"mb-12",children:[m.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Featured Matches"}),t?m.jsxs("div",{className:"text-center py-12",children:[m.jsx("div",{className:"inline-block animate-spin",children:m.jsx(Gl,{className:"w-8 h-8 text-blue-400"})}),m.jsx("p",{className:"text-gray-400 mt-4",children:"Finding your perfect matches..."})]}):i.length===0?m.jsxs("div",{className:"text-center py-12",children:[m.jsx("p",{className:"text-gray-400",children:"No matches found. Try updating your profile with more skills."}),m.jsx(Gt,{className:"mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg",children:"Update Profile"})]}):m.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:i.map(f=>m.jsxs(me.div,{variants:d,whileHover:{scale:1.02},className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 cursor-pointer",onClick:()=>o(f),children:[m.jsxs("div",{className:"flex items-start justify-between mb-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-blue-400 text-sm font-semibold mb-2",children:f.platform}),m.jsx("h3",{className:"text-xl font-bold",children:f.title})]}),m.jsx("span",{className:"px-3 py-1 bg-white/10 rounded-full text-xs font-semibold",children:f.difficulty})]}),m.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-4",children:[m.jsxs("div",{className:"bg-white/5 rounded-lg p-3",children:[m.jsx("p",{className:"text-gray-400 text-xs mb-1",children:"Skill Match"}),m.jsxs("p",{className:"text-lg font-bold text-green-400",children:[(f.skills_match*100).toFixed(0),"%"]})]}),m.jsxs("div",{className:"bg-white/5 rounded-lg p-3",children:[m.jsx("p",{className:"text-gray-400 text-xs mb-1",children:"Win Prob."}),m.jsxs("p",{className:"text-lg font-bold text-blue-400",children:[(f.win_probability*100).toFixed(0),"%"]})]}),m.jsxs("div",{className:"bg-white/5 rounded-lg p-3",children:[m.jsx("p",{className:"text-gray-400 text-xs mb-1",children:"Prize"}),m.jsxs("p",{className:"text-lg font-bold text-yellow-400",children:["$",(f.prize_pool||0)/1e3,"K"]})]})]}),m.jsxs("div",{className:"mb-4",children:[m.jsx("p",{className:"text-gray-400 text-xs mb-2",children:"Matched Skills"}),m.jsxs("div",{className:"flex flex-wrap gap-1",children:[f.matched_skills.slice(0,3).map(x=>m.jsx("span",{className:"px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded",children:x},x)),f.matched_skills.length>3&&m.jsxs("span",{className:"px-2 py-1 text-xs text-gray-400",children:["+",f.matched_skills.length-3]})]})]}),m.jsxs("div",{className:"flex items-center gap-2 text-gray-400 text-sm mb-4",children:[m.jsx(Jd,{className:"w-4 h-4"}),m.jsxs("span",{children:["Deadline: ",new Date(f.end_date).toLocaleDateString()]}),m.jsx(Gt,{className:"flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm",children:"View Details"}),m.jsx(Gt,{className:"flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm",children:"Generate Code"})]})]},f.id))})]})]})})},z0=["React","TypeScript","Python","Node.js","Docker","AWS","Machine Learning","Vue","Next.js","GraphQL"],Ln={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8}}},no={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},G0=({onExplore:i})=>m.jsxs(me.section,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},className:"min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent",children:[m.jsx("div",{className:"absolute inset-0 bg-black/30 backdrop-blur-sm"}),m.jsxs(me.div,{className:"relative z-10 text-center max-w-4xl mx-auto px-4",variants:no,initial:"hidden",animate:"visible",children:[m.jsx(me.h1,{variants:Ln,className:"text-7xl md:text-8xl font-black text-white mb-6 leading-tight",children:"You've been grinding on your craft..."}),m.jsx(me.p,{variants:Ln,className:"text-2xl md:text-3xl text-gray-300 font-light mb-12 max-w-2xl mx-auto",children:"But one question haunts every developer:"}),m.jsx(me.p,{variants:Ln,className:"text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-16",children:"Will I win the next one?"}),m.jsx(me.div,{variants:Ln,children:m.jsx("button",{onClick:i,className:"px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-colors mb-16 inline-block",children:"Let's Find Out"})})]}),m.jsx(me.div,{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2",animate:{y:[0,12,0]},transition:{duration:2,repeat:1/0},children:m.jsx(Kd,{className:"text-white/50 w-8 h-8"})})]}),V0=()=>{const i=[{emoji:"🎯",title:"Perfect Fit",description:"Thousands of hackathons, but which ones align with YOUR unique skills and style?"},{emoji:"📊",title:"Win Odds",description:"You feel the hunger. But what are your REAL chances against thousands of competitors?"},{emoji:"⚡",title:"Winning Code",description:"You know what to build. But do you know the tech stack that gives you the edge?"}];return m.jsx(me.section,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0},className:"min-h-screen flex items-center justify-center py-20 px-4 bg-transparent",children:m.jsxs("div",{className:"max-w-6xl mx-auto",children:[m.jsx(me.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"text-5xl md:text-6xl font-black text-white text-center mb-16",children:"The Challenge Every Developer Faces"}),m.jsx(me.div,{variants:no,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"grid md:grid-cols-3 gap-8",children:i.map((e,t)=>m.jsxs(me.div,{variants:Ln,className:"backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300",children:[m.jsx("div",{className:"text-5xl mb-4",children:e.emoji}),m.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:e.title}),m.jsx("p",{className:"text-gray-400 text-lg leading-relaxed",children:e.description})]},t))})]})})},H0=()=>{const i=[{number:1,title:"We learn you",description:"Your skills, your wins, your coding philosophy",icon:Yd},{number:2,title:"We search the landscape",description:"Hundreds of hackathons analyzed in real-time",icon:kl},{number:3,title:"We predict your future",description:"Your real winning probability at each event",icon:Gl},{number:4,title:"We give you the blueprint",description:"The exact tech stack to dominate",icon:Qd}];return m.jsx(me.section,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0},className:"min-h-screen flex items-center justify-center py-20 px-4 bg-transparent",children:m.jsxs("div",{className:"max-w-6xl mx-auto w-full",children:[m.jsx(me.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"text-5xl md:text-6xl font-black text-white text-center mb-20",children:"Meet HackQuest AI"}),m.jsx("div",{className:"space-y-20",children:i.map((e,t)=>{const n=e.icon,r=t%2===0;return m.jsxs(me.div,{initial:{opacity:0,x:r?-40:40},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},className:`flex gap-8 items-center ${r?"":"flex-row-reverse"}`,children:[m.jsx(me.div,{initial:{scale:0},whileInView:{scale:1},transition:{duration:.6},viewport:{once:!0},className:"flex-shrink-0 w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-xl",children:m.jsx(n,{className:"w-12 h-12 text-white"})}),m.jsx("div",{className:"flex-1",children:m.jsxs(me.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2,duration:.6},viewport:{once:!0},children:[m.jsxs("h3",{className:"text-4xl font-black text-white mb-3",children:["Step ",e.number]}),m.jsx("h4",{className:"text-2xl font-bold text-gray-200 mb-3",children:e.title}),m.jsx("p",{className:"text-gray-400 text-lg",children:e.description})]})})]},t)})})]})})},W0=({githubId:i,setGithubId:e,selectedSkills:t,setSelectedSkills:n,loading:r,error:s,onDiscover:a})=>{const o=l=>{n(t.includes(l)?t.filter(c=>c!==l):[...t,l])};return m.jsx(me.section,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0},className:"min-h-screen flex items-center justify-center py-20 px-4 bg-transparent",children:m.jsxs("div",{className:"max-w-2xl mx-auto w-full",children:[m.jsxs(me.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"text-center mb-12",children:[m.jsx("h2",{className:"text-5xl md:text-6xl font-black text-white mb-4",children:"Your Journey Starts Here"}),m.jsx("p",{className:"text-xl text-gray-400",children:"Answer two questions, and we'll unlock your potential"})]}),m.jsx(me.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.6},viewport:{once:!0},className:"backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12",children:m.jsxs("div",{className:"space-y-8",children:[m.jsxs(me.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{delay:.1,duration:.6},viewport:{once:!0},children:[m.jsx("label",{className:"block text-2xl font-bold text-white mb-4",children:"First, we need to know you"}),m.jsx("p",{className:"text-gray-400 mb-4",children:"What's your GitHub username?"}),m.jsxs("div",{className:"relative",children:[m.jsx(Bl,{className:"absolute left-4 top-4 text-gray-400 w-5 h-5"}),m.jsx(wc,{type:"text",placeholder:"github-username",value:i,onChange:l=>e(l.target.value),className:"pl-12 bg-black/50 border-white/20 text-white placeholder:text-gray-500",disabled:r})]})]}),m.jsxs(me.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{delay:.2,duration:.6},viewport:{once:!0},children:[m.jsx("label",{className:"block text-2xl font-bold text-white mb-4",children:"Then we learn your superpowers"}),m.jsx("p",{className:"text-gray-400 mb-6",children:"Select the technologies you master:"}),m.jsx("div",{className:"backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6",children:m.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:z0.map(l=>m.jsx(me.button,{onClick:()=>o(l),whileHover:{scale:1.05},whileTap:{scale:.95},className:`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${t.includes(l)?"bg-white text-black":"bg-white/10 text-white hover:bg-white/20"}`,disabled:r,children:l},l))})})]}),s&&m.jsx(me.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-200",children:s}),m.jsx(me.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{delay:.3,duration:.6},viewport:{once:!0},children:m.jsxs("button",{onClick:a,disabled:r||!i.trim(),className:"w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3",children:[m.jsx(oh,{className:"w-5 h-5"}),r?"Discovering...":"Discover Your Destiny"]})}),r&&m.jsx(me.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center text-gray-400 text-sm",children:"This may take a moment. We're working magic..."})]})})]})})},j0=({result:i,onAnalyzeAnother:e})=>{const[t,n]=X.useState(!1);if(!i)return null;const r=()=>{i.selected_hackathon?.title&&(navigator.clipboard.writeText(i.selected_hackathon.title),n(!0),setTimeout(()=>n(!1),2e3))},s=Math.floor(Math.random()*40+40);return m.jsx(me.section,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},className:"min-h-screen py-20 px-4 bg-transparent",children:m.jsxs("div",{className:"max-w-6xl mx-auto",children:[m.jsx(me.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-5xl md:text-6xl font-black text-white text-center mb-16",children:"Your Hackathon Destiny"}),m.jsxs(me.div,{variants:no,initial:"hidden",animate:"visible",className:"grid md:grid-cols-2 gap-8 mb-12",children:[m.jsx(me.div,{variants:Ln,className:"backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all",children:m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"text-3xl font-black text-white mb-2",children:i.selected_hackathon?.title||"The Perfect Hackathon"}),m.jsx("p",{className:"text-gray-400 text-lg",children:"This event is written in the stars for you. The themes, the timeline, the community—it's a match made in hackathon heaven."})]}),m.jsx("div",{className:"border-t border-white/10 pt-6",children:m.jsxs("p",{className:"text-gray-300 mb-3",children:[m.jsx("strong",{children:"Why this matters:"})," Your skill set aligns perfectly with the expected competition and judging criteria. You're not just prepared—you're built for this."]})}),m.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[m.jsxs("p",{className:"text-sm text-gray-400 mb-2",children:[m.jsx(nh,{className:"inline w-4 h-4 mr-2"}),"Judge's Perspective"]}),m.jsx("p",{className:"text-white text-sm leading-relaxed",children:i.judge_critique||"We see a developer who brings both depth and versatility. Your approach suggests someone who understands not just the what, but the why. That's the difference between winning and losing."})]})]})}),m.jsx(me.div,{variants:Ln,className:"backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center",children:m.jsxs("div",{className:"text-center space-y-6 w-full",children:[m.jsx("h3",{className:"text-2xl font-bold text-white",children:"Your Win Odds"}),m.jsx("div",{className:"flex justify-center",children:m.jsxs(me.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.8,ease:"easeOut"},className:"relative w-48 h-48",children:[m.jsxs("svg",{className:"w-full h-full transform -rotate-90",children:[m.jsx("circle",{cx:"96",cy:"96",r:"90",fill:"none",stroke:"currentColor",strokeWidth:"8",className:"text-white/10"}),m.jsx(me.circle,{cx:"96",cy:"96",r:"90",fill:"none",stroke:"currentColor",strokeWidth:"8",className:"text-white",strokeDasharray:`${2*Math.PI*90}`,initial:{strokeDashoffset:2*Math.PI*90},animate:{strokeDashoffset:2*Math.PI*90*(1-s/100)},transition:{duration:1.5,ease:"easeOut"},strokeLinecap:"round"})]}),m.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:m.jsxs("div",{className:"text-center",children:[m.jsxs(me.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.6},className:"text-5xl font-black text-white",children:[s,"%"]}),m.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"Win Probability"})]})})]})}),m.jsx("p",{className:"text-gray-300 max-w-xs mx-auto text-sm",children:"Based on your profile, competition level, and judge criteria. This is YOUR time to shine."})]})})]}),i.boilerplate_code&&m.jsxs(me.div,{variants:Ln,initial:"hidden",animate:"visible",className:"backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12",children:[m.jsxs("div",{className:"flex items-center justify-between mb-6",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Your Winning Blueprint"}),m.jsx("p",{className:"text-gray-400",children:"The exact tech stack engineered for victory"})]}),m.jsx(me.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:r,className:"px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all flex items-center gap-2 text-white",children:t?m.jsxs(m.Fragment,{children:[m.jsx(Fl,{className:"w-4 h-4"}),"Copied!"]}):m.jsxs(m.Fragment,{children:[m.jsx(Ol,{className:"w-4 h-4"}),"Copy"]})})]}),m.jsx("div",{className:"bg-black/50 border border-white/10 rounded-lg p-6 overflow-x-auto",children:m.jsx("code",{className:"text-green-400 font-mono text-sm leading-relaxed",children:typeof i.boilerplate_code?.content=="string"?i.boilerplate_code.content:JSON.stringify(i.boilerplate_code?.content,null,2)})})]}),m.jsxs(me.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.6},className:"text-center",children:[m.jsx("button",{onClick:e,className:"px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-colors inline-block",children:"Analyze Another Profile"}),m.jsx("p",{className:"text-gray-400 mt-6 max-w-2xl mx-auto",children:"Ready to take the next step? Your journey to hackathon glory has officially begun. Trust the data. Trust yourself. Go win."})]})]})})};function X0(){const[i,e]=X.useState("opening"),[t,n]=X.useState(""),[r,s]=X.useState([]),[a,o]=X.useState(!1),[l,c]=X.useState(""),[h,d]=X.useState(null),[p,f]=X.useState(null),x=X.useRef(null),v=()=>{e("form"),setTimeout(()=>{x.current?.scrollIntoView({behavior:"smooth"})},100)},g=async()=>{if(!t.trim()){f("Please enter your GitHub username");return}o(!0),f(null),e("results");try{c("learning-profile");const b=await fetch(`${Gr.api.baseUrl}/run-agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({github_id:t,skills:r})});if(!b.ok)throw new Error(`API Error: ${b.status}`);const w=await b.json();if(w&&w.data){const E=typeof w.data.boilerplate=="string"?{content:w.data.boilerplate}:w.data.boilerplate||{content:""};d({selected_hackathon:w.data.recommendation,win_probability:w.data.win_probability,judge_critique:w.data.critique,boilerplate_code:E}),c("complete")}else throw new Error("No result returned")}catch(b){f(b instanceof Error?b.message:"Failed to generate matches"),e("form")}finally{o(!1)}},u=()=>{n(""),s([]),d(null),f(null),c(""),e("form"),setTimeout(()=>{x.current?.scrollIntoView({behavior:"smooth"})},100)};return m.jsx("div",{ref:x,className:"min-h-screen bg-transparent text-white overflow-hidden",children:m.jsxs(Fc,{mode:"wait",children:[i==="opening"&&m.jsx(G0,{onExplore:v},"opening"),(i==="opening"||i==="form")&&m.jsxs(m.Fragment,{children:[m.jsx(V0,{},"setup"),m.jsx(H0,{},"solution")]}),i==="form"&&m.jsx(W0,{githubId:t,setGithubId:n,selectedSkills:r,setSelectedSkills:s,loading:a,error:p,onDiscover:g},"form"),i==="results"&&m.jsx(j0,{result:h,onAnalyzeAnother:u},"results")]})})}const q0=()=>{const[i,e]=X.useState([]),[t,n]=X.useState(!0),[r,s]=X.useState(""),[a,o]=X.useState(null),[l,c]=X.useState({difficulty:"all",platform:"all"});X.useEffect(()=>{h()},[l]);const h=async()=>{n(!0),s("");try{const f={};l.difficulty!=="all"&&(f.difficulty=l.difficulty),l.platform!=="all"&&(f.platform=l.platform);const x=await Xr.findMatches([],f);e(x.data||[])}catch(f){console.error("Failed to fetch matches:",f),s(f instanceof Error?f.message:"Failed to fetch matches")}finally{n(!1)}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},p=f=>{const x={beginner:"bg-green-500/20 text-green-300",intermediate:"bg-blue-500/20 text-blue-300",advanced:"bg-orange-500/20 text-orange-300",expert:"bg-red-500/20 text-red-300"};return x[f]||x.intermediate};return m.jsx("div",{className:"min-h-screen bg-transparent text-white pt-32 pb-20",children:m.jsxs(me.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[m.jsxs(me.div,{variants:d,className:"mb-12",children:[m.jsx("h1",{className:"text-5xl md:text-6xl font-black mb-4",children:"Hackathon Matches"}),m.jsx("p",{className:"text-gray-400 text-lg",children:"Browse all active hackathons and find your perfect match"})]}),m.jsxs(me.div,{variants:d,className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-semibold mb-2",children:"Difficulty Level"}),m.jsxs("select",{value:l.difficulty,onChange:f=>c({...l,difficulty:f.target.value}),className:"w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500",children:[m.jsx("option",{value:"all",children:"All Levels"}),m.jsx("option",{value:"beginner",children:"Beginner"}),m.jsx("option",{value:"intermediate",children:"Intermediate"}),m.jsx("option",{value:"advanced",children:"Advanced"}),m.jsx("option",{value:"expert",children:"Expert"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-semibold mb-2",children:"Platform"}),m.jsxs("select",{value:l.platform,onChange:f=>c({...l,platform:f.target.value}),className:"w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500",children:[m.jsx("option",{value:"all",children:"All Platforms"}),m.jsx("option",{value:"devpost",children:"DevPost"}),m.jsx("option",{value:"unstop",children:"Unstop"}),m.jsx("option",{value:"hackerearth",children:"HackerEarth"}),m.jsx("option",{value:"devfolio",children:"DevFolio"})]})]})]}),r&&m.jsx(me.div,{variants:d,className:"mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400",children:r}),m.jsx(me.div,{variants:d,children:t?m.jsxs("div",{className:"text-center py-12",children:[m.jsx("div",{className:"inline-block animate-spin",children:m.jsx(zl,{className:"w-8 h-8 text-blue-400"})}),m.jsx("p",{className:"text-gray-400 mt-4",children:"Loading matches..."})]}):i.length===0?m.jsx(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-12 text-center rounded-2xl",children:m.jsx("p",{className:"text-gray-400 text-lg",children:"No hackathons found matching your filters"})}):m.jsx("div",{className:"space-y-4",children:i.map(f=>m.jsxs(me.div,{variants:d,whileHover:{scale:1.01},className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 cursor-pointer transition-all",onClick:()=>o(a?.id===f.id?null:f),children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[m.jsxs("div",{className:"md:col-span-2",children:[m.jsx("p",{className:"text-blue-400 text-sm font-semibold mb-1",children:f.platform?.toUpperCase()||"PLATFORM"}),m.jsx("h3",{className:"text-xl font-bold mb-2",children:f.title}),m.jsxs("p",{className:"text-gray-400 text-sm",children:[f.description?.substring(0,100)||"No description","..."]})]}),m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"bg-white/5 rounded-lg p-3",children:[m.jsx("p",{className:"text-gray-400 text-xs mb-1",children:"Skill Match"}),m.jsxs("p",{className:"text-lg font-bold text-green-400",children:[((f.skills_match||0)*100).toFixed(0),"%"]})]}),m.jsxs("div",{className:"bg-white/5 rounded-lg p-3",children:[m.jsx("p",{className:"text-gray-400 text-xs mb-1",children:"Win Probability"}),m.jsxs("p",{className:"text-lg font-bold text-blue-400",children:[((f.win_probability||0)*100).toFixed(0),"%"]})]})]}),m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex flex-wrap gap-2",children:[m.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${p(f.difficulty||"intermediate")}`,children:f.difficulty||"intermediate"}),m.jsxs("span",{className:"px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold",children:["$",((f.prize_pool||0)/1e3).toFixed(1),"K"]})]}),m.jsx(Gt,{className:"w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold",children:"View Details"})]})]}),m.jsxs("div",{className:"mt-4 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx($d,{className:"w-4 h-4"}),m.jsx("span",{children:f.end_date?new Date(f.end_date).toLocaleDateString():"TBA"})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(dh,{className:"w-4 h-4"}),m.jsxs("span",{children:[(f.matched_skills||[]).length," matched skills"]})]}),f.registration_link&&m.jsxs("a",{href:f.registration_link,target:"_blank",rel:"noopener noreferrer",onClick:x=>x.stopPropagation(),className:"flex items-center gap-2 text-blue-400 hover:text-blue-300",children:[m.jsx(ih,{className:"w-4 h-4"}),m.jsx("span",{children:"Register"})]})]}),a?.id===f.id&&m.jsxs(me.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},className:"mt-6 pt-6 border-t border-white/10",children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[m.jsxs("div",{children:[m.jsx("h4",{className:"font-semibold mb-3",children:"Matched Skills"}),m.jsx("div",{className:"flex flex-wrap gap-2",children:(f.matched_skills||[]).map(x=>m.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs",children:["✓ ",x]},x))})]}),m.jsxs("div",{children:[m.jsx("h4",{className:"font-semibold mb-3",children:"Skills to Learn"}),m.jsx("div",{className:"flex flex-wrap gap-2",children:(f.missing_skills||[]).slice(0,5).map(x=>m.jsxs("span",{className:"px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs",children:["○ ",x]},x))})]})]}),m.jsxs("div",{className:"flex gap-3",children:[m.jsx(Gt,{className:"flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg",children:"Generate Code"}),m.jsx(Gt,{onClick:()=>f.registration_link&&window.open(f.registration_link,"_blank"),className:"flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg",children:"Register Now"})]})]})]},f.id))})})]})})},Y0=()=>{const[i,e]=X.useState("select"),[t,n]=X.useState(""),[r,s]=X.useState(""),[a,o]=X.useState([]),[l,c]=X.useState(null),[h,d]=X.useState(!1),[p,f]=X.useState(!1),[x,v]=X.useState(""),g=["python","javascript","typescript","java","react","fastapi","nodejs","sql","mongodb","aws"],u=async()=>{if(!t||!r){v("Please fill in all required fields");return}d(!0),v("");try{const E=JSON.parse(localStorage.getItem("user")||"{}"),A=await Xr.analyzeUser({user_id:E.id||"user_"+Date.now(),skills:a.length>0?a:["python","react"],github_summary:r});A&&(c(A),e("download"))}catch(E){console.error("Failed to generate code:",E),v(E instanceof Error?E.message:"Failed to generate code")}finally{d(!1)}},b=()=>{const E=l?.boilerplate_code?.backend||"";navigator.clipboard.writeText(E),f(!0),setTimeout(()=>f(!1),2e3)},w={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return m.jsx("div",{className:"min-h-screen bg-transparent text-white pt-32 pb-20",children:m.jsxs(me.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[m.jsxs(me.div,{variants:w,className:"mb-12",children:[m.jsx("h1",{className:"text-5xl md:text-6xl font-black mb-4",children:"Code Generator"}),m.jsx("p",{className:"text-gray-400 text-lg",children:"Generate AI-powered boilerplate code tailored to your hackathon project"})]}),m.jsx(me.div,{variants:w,className:"grid grid-cols-4 gap-2 mb-12",children:["select","configure","generate","download"].map((E,A)=>m.jsx("div",{className:`h-2 rounded-full transition-all ${i===E||A<["select","configure","generate","download"].indexOf(i)?"bg-blue-500":"bg-white/10"}`},E))}),x&&m.jsx(me.div,{variants:w,className:"mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400",children:x}),i==="select"&&m.jsx(me.div,{variants:w,children:m.jsxs(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 rounded-2xl mb-6",children:[m.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Select Your Hackathon"}),m.jsxs("div",{className:"mb-6",children:[m.jsx("label",{className:"block text-sm font-semibold mb-3",children:"Hackathon Project *"}),m.jsx("textarea",{value:t,onChange:E=>n(E.target.value),placeholder:"Describe your hackathon project or idea...",rows:4,className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"})]}),m.jsxs("div",{className:"mb-6",children:[m.jsx("label",{className:"block text-sm font-semibold mb-3",children:"Problem Statement *"}),m.jsx("textarea",{value:r,onChange:E=>s(E.target.value),placeholder:"What problem are you solving?...",rows:3,className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"})]}),m.jsx("div",{className:"flex gap-3",children:m.jsx(Gt,{onClick:()=>e("configure"),className:"flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold",children:"Next: Select Skills"})})]})}),i==="configure"&&m.jsx(me.div,{variants:w,children:m.jsxs(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 rounded-2xl mb-6",children:[m.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Select Your Skills"}),m.jsx("div",{className:"flex flex-wrap gap-3 mb-8",children:g.map(E=>m.jsx("button",{onClick:()=>o(a.includes(E)?a.filter(A=>A!==E):[...a,E]),className:`px-4 py-2 rounded-full font-semibold transition-all ${a.includes(E)?"bg-blue-600 text-white":"bg-white/10 text-gray-300 hover:bg-white/20"}`,children:E},E))}),m.jsxs("div",{className:"flex gap-3",children:[m.jsx(Gt,{onClick:()=>e("select"),className:"flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold",children:"Back"}),m.jsx(Gt,{onClick:()=>e("generate"),className:"flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold",children:"Next: Generate Code"})]})]})}),i==="generate"&&m.jsx(me.div,{variants:w,children:m.jsx(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 rounded-2xl text-center",children:h?m.jsxs(m.Fragment,{children:[m.jsx(me.div,{animate:{rotate:360},transition:{duration:2,repeat:1/0,ease:"linear"},className:"mb-6 flex justify-center",children:m.jsx(eh,{className:"w-12 h-12 text-blue-400"})}),m.jsx("h2",{className:"text-2xl font-bold mb-3",children:"Generating Your Code..."}),m.jsx("p",{className:"text-gray-400 mb-6",children:"AI is analyzing your requirements and creating customized boilerplate"}),m.jsx("div",{className:"space-y-2 text-left max-w-xs mx-auto",children:["Analyzing problem statement...","Selecting frameworks...","Generating backend code...","Generating frontend code...","Creating Docker config..."].map((E,A)=>m.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[m.jsx("div",{className:"w-2 h-2 rounded-full bg-green-400"}),m.jsx("span",{children:E})]},A))})]}):m.jsxs(m.Fragment,{children:[m.jsx("h2",{className:"text-2xl font-bold mb-3",children:"Generate Code"}),m.jsx("p",{className:"text-gray-400 mb-6",children:"Click the button below to generate AI-powered boilerplate code"}),m.jsx(Gt,{onClick:u,disabled:h,className:"w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-lg font-semibold",children:h?"Generating...":"Generate Boilerplate"})]})})}),i==="download"&&l&&m.jsxs(me.div,{variants:w,className:"space-y-6",children:[m.jsxs(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 rounded-2xl",children:[m.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Your Code is Ready! 🎉"}),l.selected_hackathon&&m.jsxs("div",{className:"mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg",children:[m.jsx("h3",{className:"font-semibold text-blue-300 mb-2",children:l.selected_hackathon.title}),m.jsxs("div",{className:"flex justify-between text-sm text-gray-300",children:[m.jsxs("span",{children:["Difficulty: ",l.selected_hackathon.difficulty]}),m.jsxs("span",{children:["Win Probability: ",((l.win_probability||0)*100).toFixed(0),"%"]})]}),l.judge_critique&&m.jsxs("p",{className:"mt-3 text-sm text-gray-400",children:[l.judge_critique.substring(0,150),"..."]})]}),l.boilerplate_code?.backend&&m.jsxs("div",{className:"mb-6",children:[m.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Backend Code Preview"}),m.jsx("div",{className:"bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto max-h-64 overflow-y-auto",children:m.jsxs("pre",{className:"text-xs text-green-400 font-mono whitespace-pre-wrap break-words",children:[l.boilerplate_code.backend.substring(0,500),"..."]})})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[m.jsx(Gt,{onClick:b,className:"px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center justify-center gap-2",children:p?m.jsxs(m.Fragment,{children:[m.jsx(Fl,{className:"w-4 h-4"}),"Copied!"]}):m.jsxs(m.Fragment,{children:[m.jsx(Ol,{className:"w-4 h-4"}),"Copy Backend Code"]})}),m.jsxs(Gt,{className:"px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold flex items-center justify-center gap-2",children:[m.jsx(th,{className:"w-4 h-4"}),"Download as ZIP"]})]})]}),m.jsxs(rn,{className:"bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-6 rounded-2xl",children:[m.jsx("h3",{className:"font-semibold mb-3",children:"Next Steps:"}),m.jsxs("ol",{className:"list-decimal list-inside space-y-2 text-gray-300",children:[m.jsx("li",{children:"Review the generated code structure"}),m.jsx("li",{children:"Customize for your specific requirements"}),m.jsx("li",{children:"Set up your development environment"}),m.jsx("li",{children:"Push code to your GitHub repository"}),m.jsx("li",{children:"Start coding and building! 🚀"})]})]})]})]})})};function $0(){const i=qi(),[e]=Il(),[t,n]=X.useState(null),[r,s]=X.useState(!0);return X.useEffect(()=>{(async()=>{try{const o=e.get("code"),l=e.get("error");if(l)throw new Error(`GitHub OAuth error: ${l}`);if(!o)throw new Error("No authorization code received from GitHub");s(!0);const h=await fetch(`http://localhost:8000/api/auth/oauth/callback/github?code=${o}`,{method:"POST"});if(!h.ok){const p=await h.json();throw new Error(p.detail||"OAuth authentication failed")}const d=await h.json();localStorage.setItem("access_token",d.access_token),localStorage.setItem("refresh_token",d.refresh_token),localStorage.setItem("user",JSON.stringify(d.user)),i("/dashboard")}catch(o){console.error("GitHub OAuth callback error:",o),n(o instanceof Error?o.message:"Authentication failed"),s(!1)}})()},[e,i]),t?m.jsx("div",{className:"h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center",children:m.jsxs("div",{className:"max-w-md w-full mx-4 bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl text-center",children:[m.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Authentication Error"}),m.jsx("p",{className:"text-red-400 mb-6",children:t}),m.jsx("button",{onClick:()=>i("/login"),className:"w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all",children:"Back to Login"})]})}):m.jsx("div",{className:"h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center",children:m.jsxs("div",{className:"max-w-md w-full mx-4 bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl text-center",children:[m.jsx("div",{className:"mb-8 pointer-events-none",children:m.jsx(to,{})}),m.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Completing Authentication"}),m.jsx("p",{className:"text-gray-400",children:"Please wait while we authenticate you with GitHub..."}),m.jsx("div",{className:"mt-6 flex justify-center",children:m.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"})})]})})}function K0(){const i=qi(),[e]=Il(),[t,n]=X.useState(null),[r,s]=X.useState(!0);return X.useEffect(()=>{(async()=>{try{const o=e.get("code"),l=e.get("error");if(l)throw new Error(`Google OAuth error: ${l}`);if(!o)throw new Error("No authorization code received from Google");s(!0);const h=await fetch(`http://localhost:8000/api/auth/oauth/callback/google?code=${o}`,{method:"POST"});if(!h.ok){const p=await h.json();throw new Error(p.detail||"OAuth authentication failed")}const d=await h.json();localStorage.setItem("access_token",d.access_token),localStorage.setItem("refresh_token",d.refresh_token),localStorage.setItem("user",JSON.stringify(d.user)),i("/dashboard")}catch(o){console.error("Google OAuth callback error:",o),n(o instanceof Error?o.message:"Authentication failed"),s(!1)}})()},[e,i]),t?m.jsx("div",{className:"h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center",children:m.jsxs("div",{className:"max-w-md w-full mx-4 bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl text-center",children:[m.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Authentication Error"}),m.jsx("p",{className:"text-red-400 mb-6",children:t}),m.jsx("button",{onClick:()=>i("/login"),className:"w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all",children:"Back to Login"})]})}):m.jsx("div",{className:"h-screen w-screen bg-black relative overflow-hidden flex items-center justify-center",children:m.jsxs("div",{className:"max-w-md w-full mx-4 bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-2xl p-8 shadow-2xl text-center",children:[m.jsx("div",{className:"mb-8 pointer-events-none",children:m.jsx(to,{})}),m.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Completing Authentication"}),m.jsx("p",{className:"text-gray-400",children:"Please wait while we authenticate you with Google..."}),m.jsx("div",{className:"mt-6 flex justify-center",children:m.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"})})]})})}function Z0(){const{mounted:i}=Ul(),[e,t]=X.useState(!0),[n,r]=X.useState(!1),[s,a]=X.useState(null),[o,l]=X.useState("dashboard");if(X.useEffect(()=>{if(i){const p=setTimeout(()=>t(!1),3e3);return()=>clearTimeout(p)}},[i]),!i)return m.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center",children:m.jsx("div",{className:"animate-pulse text-white",children:"Loading..."})});const c=p=>{console.log("App: Login successful, updating auth state with:",p),a(p),r(!0),console.log("App: Auth state updated, isAuthenticated should now be true")},h=()=>{a(null),r(!1)},d=()=>{const p=On();return p.pathname==="/auth/github/callback"?m.jsx($0,{}):p.pathname==="/auth/google/callback"?m.jsx(K0,{}):n?m.jsxs("div",{className:"dark relative w-screen h-screen overflow-hidden",children:[m.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",style:{width:"100vw",height:"100vh"},children:m.jsx(A0,{})}),m.jsxs("div",{className:"relative z-10 w-full h-full overflow-auto bg-black/20 backdrop-blur-sm",children:[m.jsx(R0,{isVisible:e}),m.jsx(Vl,{user:s,onLogout:h,children:m.jsxs(Ld,{children:[m.jsx(Yn,{path:"/",element:m.jsx(Sl,{})}),m.jsx(Yn,{path:"/dashboard",element:m.jsx(Sl,{})}),m.jsx(Yn,{path:"/explore",element:m.jsx(X0,{})}),m.jsx(Yn,{path:"/matches",element:m.jsx(q0,{})}),m.jsx(Yn,{path:"/generate",element:m.jsx(Y0,{})}),m.jsx(Yn,{path:"*",element:m.jsx(Pd,{to:"/dashboard"})})]})})]})]}):m.jsx(D0,{onLoginSuccess:c})};return m.jsx(jd,{children:m.jsx(zd,{children:m.jsx(d,{})})})}kc.createRoot(document.getElementById("root")).render(m.jsx(Qt.StrictMode,{children:m.jsx(Z0,{})}));

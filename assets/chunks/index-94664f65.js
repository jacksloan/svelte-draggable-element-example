function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t){let n;return u(t,(t=>n=t))(),n}function a(t,n,e){t.$$.on_destroy.push(u(n,e))}function f(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function d(t,n,e,o,r,c,s){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(u){const r=l(n,e,o,s);t.p(r,u)}}function p(t,n,e=n){return t.set(e),n}function h(n){return n&&c(n.destroy)?n.destroy:t}const m="undefined"!=typeof window;let $=m?()=>window.performance.now():()=>Date.now(),g=m?t=>requestAnimationFrame(t):t;const b=new Set;function y(t){b.forEach((n=>{n.c(t)||(b.delete(n),n.f())})),0!==b.size&&g(y)}function _(t){let n;return 0===b.size&&g(y),{promise:new Promise((e=>{b.add(n={c:t,f:e})})),abort(){b.delete(n)}}}function w(t,n){t.appendChild(n)}function x(t,n,e){t.insertBefore(n,e||null)}function E(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function A(){return k(" ")}function j(){return k("")}function N(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function C(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function S(t){return Array.from(t.childNodes)}function z(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):v(n)}function O(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return k(n)}function P(t){return O(t," ")}function q(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function F(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let L;function M(t){L=t}function T(){if(!L)throw new Error("Function called outside component initialization");return L}function B(t){T().$$.on_mount.push(t)}function D(t){T().$$.after_update.push(t)}function G(){const t=T();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function H(t,n){T().$$.context.set(t,n)}const I=[],J=[],K=[],Q=[],R=Promise.resolve();let U=!1;function V(t){K.push(t)}let W=!1;const X=new Set;function Y(){if(!W){W=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];M(n),Z(n.$$)}for(M(null),I.length=0;J.length;)J.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];X.has(n)||(X.add(n),n())}K.length=0}while(I.length);for(;Q.length;)Q.pop()();U=!1,W=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(V)}}const tt=new Set;let nt;function et(){nt={r:0,c:[],p:nt}}function ot(){nt.r||r(nt.c),nt=nt.p}function rt(t,n){t&&t.i&&(tt.delete(t),t.i(n))}function ct(t,n,e,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),nt.c.push((()=>{tt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function st(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const s in o)s in e||(e[s]=void 0);return e}function ut(t){return"object"==typeof t&&null!==t?t:{}}function it(t){t&&t.c()}function at(t,n){t&&t.l(n)}function ft(t,n,o,s){const{fragment:u,on_mount:i,on_destroy:a,after_update:f}=t.$$;u&&u.m(n,o),s||V((()=>{const n=i.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(V)}function lt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(I.push(t),U||(U=!0,R.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function pt(n,e,c,s,u,i,a=[-1]){const f=L;M(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&u(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&dt(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!s&&s(l.ctx),e.target){if(e.hydrate){const t=S(e.target);l.fragment&&l.fragment.l(t),t.forEach(E)}else l.fragment&&l.fragment.c();e.intro&&rt(n.$$.fragment),ft(n,e.target,e.anchor,e.customElement),Y()}M(f)}class ht{$destroy(){lt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{n as A,et as B,t as C,f as D,d as E,w as F,$ as G,_ as H,F as I,h as J,N as K,r as L,a as M,u as N,G as O,p as P,i as Q,ht as S,S as a,C as b,z as c,E as d,v as e,x as f,O as g,q as h,pt as i,it as j,A as k,j as l,at as m,P as n,ft as o,st as p,ut as q,ct as r,s,k as t,ot as u,rt as v,lt as w,H as x,D as y,B as z};
function y(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function L(){return Object.create(null)}function g(t){t.forEach(T)}function z(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function B(t,...n){if(t==null)return y;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t){let n;return B(t,e=>n=e)(),n}function dt(t,n,e){t.$$.on_destroy.push(B(n,e))}function _t(t,n,e,i){if(t){const c=O(t,n,e,i);return t[0](c)}}function O(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let s=0;s<o;s+=1)l[s]=n.dirty[s]|c[s];return l}return n.dirty|c}return n.dirty}function mt(t,n,e,i,c,l){if(c){const o=O(n,e,i,l);t.p(o,c)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function yt(t,n,e){return t.set(e),n}function gt(t){return t&&z(t.destroy)?t.destroy:y}const q=typeof window!="undefined";let xt=q?()=>window.performance.now():()=>Date.now(),D=q?t=>requestAnimationFrame(t):y;const _=new Set;function F(t){_.forEach(n=>{n.c(t)||(_.delete(n),n.f())}),_.size!==0&&D(F)}function bt(t){let n;return _.size===0&&D(F),{promise:new Promise(e=>{_.add(n={c:t,f:e})}),abort(){_.delete(n)}}}let v=!1;function R(){v=!0}function U(){v=!1}function V(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=u?c+1:V(1,c,x=>n[e[x]].claim_order,u))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const l=[],o=[];let s=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);s>=r;s--)o.push(n[s]);s--}for(;s>=0;s--)o.push(n[s]);l.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<l.length&&o[r].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(o[r],f)}}function Y(t,n){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function $t(t,n,e){v&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Z(t){t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function tt(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function vt(){return j(" ")}function Et(){return j("")}function kt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function et(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,n,e,i,c=!1){it(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(n(s)){const r=e(s);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(n(s)){const r=e(s);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function I(t,n,e,i){return H(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const s=c.attributes[o];e[s.name]||l.push(s.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function St(t,n,e){return I(t,n,e,tt)}function jt(t,n,e){return I(t,n,e,nt)}function rt(t,n){return H(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function At(t){return rt(t," ")}function Ct(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Mt(t,n){t.value=n==null?"":n}function Lt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Pt(t,n,e){t.classList[e?"add":"remove"](n)}let p;function m(t){p=t}function A(){if(!p)throw new Error("Function called outside component initialization");return p}function Tt(t){A().$$.on_mount.push(t)}function zt(t){A().$$.after_update.push(t)}function Bt(t,n){A().$$.context.set(t,n)}const h=[],P=[],$=[],k=[],W=Promise.resolve();let N=!1;function G(){N||(N=!0,W.then(J))}function Ot(){return G(),W}function S(t){$.push(t)}function qt(t){k.push(t)}const E=new Set;let b=0;function J(){const t=p;do{for(;b<h.length;){const n=h[b];b++,m(n),ct(n.$$)}for(m(null),h.length=0,b=0;P.length;)P.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];E.has(e)||(E.add(e),e())}$.length=0}while(h.length);for(;k.length;)k.pop()();N=!1,E.clear(),m(t)}function ct(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const w=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function Ft(){d.r||g(d.c),d=d.p}function ot(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Ht(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function It(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],s=n[l];if(s){for(const r in o)r in s||(i[r]=1);for(const r in s)c[r]||(e[r]=s[r],c[r]=1);t[l]=s}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Wt(t){return typeof t=="object"&&t!==null?t:{}}function Gt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Jt(t){t&&t.c()}function Kt(t,n){t&&t.l(n)}function st(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:s}=t.$$;c&&c.m(n,e),i||S(()=>{const r=l.map(T).filter(z);o?o.push(...r):g(r),t.$$.on_mount=[]}),s.forEach(S)}function ut(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(h.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Qt(t,n,e,i,c,l,o,s=[-1]){const r=p;m(t);const u=t.$$={fragment:null,ctx:null,props:l,update:y,not_equal:c,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:L(),dirty:s,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,x,...C)=>{const M=C.length?C[0]:x;return u.ctx&&c(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&lt(t,a)),x}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){R();const a=et(n.target);u.fragment&&u.fragment.l(a),a.forEach(Z)}else u.fragment&&u.fragment.c();n.intro&&ot(t.$$.fragment),st(t,n.target,n.anchor,n.customElement),U(),J()}m(r)}class Rt{$destroy(){ut(this,1),this.$destroy=y}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as $,Wt as A,ut as B,K as C,Ot as D,y as E,_t as F,mt as G,pt as H,ht as I,Y as J,kt as K,xt as L,bt as M,Pt as N,gt as O,g as P,dt as Q,B as R,Rt as S,yt as T,ft as U,nt as V,jt as W,Mt as X,wt as Y,P as Z,Gt as _,et as a,Nt as b,St as c,Z as d,tt as e,Lt as f,$t as g,rt as h,Qt as i,Ct as j,vt as k,Et as l,At as m,Dt as n,Ht as o,Ft as p,ot as q,Bt as r,at as s,j as t,zt as u,Tt as v,Jt as w,Kt as x,st as y,It as z};

import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f as p,F as f,h as i,k as l,l as d,n as m,C as h}from"./chunks/index-94664f65.js";function k(s){let r,a,l=s[1].stack+"";return{c(){r=t("pre"),a=e(l)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,l),t.forEach(u)},m(s,t){p(s,r,t),f(r,a)},p(s,r){2&r&&l!==(l=s[1].stack+"")&&i(a,l)},d(s){s&&u(r)}}}function x(s){let r,a,x,E,g,v,P,$=s[1].message+"",j=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),x=l(),E=t("p"),g=e($),v=l(),j&&j.c(),P=d()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),x=m(t),E=o(t,"P",{});var p=n(E);g=c(p,$),p.forEach(u),v=m(t),j&&j.l(t),P=d()},m(s,t){p(s,r,t),f(r,a),p(s,x,t),p(s,E,t),f(E,g),p(s,v,t),j&&j.m(s,t),p(s,P,t)},p(s,[r]){1&r&&i(a,s[0]),2&r&&$!==($=s[1].message+"")&&i(g,$),s[1].stack?j?j.p(s,r):(j=k(s),j.c(),j.m(P.parentNode,P)):j&&(j.d(1),j=null)},i:h,o:h,d(s){s&&u(r),s&&u(x),s&&u(E),s&&u(v),j&&j.d(s),s&&u(P)}}}function E({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,x,a,{status:0,error:1})}}export{E as load};

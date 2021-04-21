import{S as e,i as s,s as r,e as t,t as a,k as n,j as o,c,a as l,g as f,d,n as $,m as i,b as h,f as u,F as m,o as g,G as p,v as x,r as b,w}from"../chunks/index-87039ccd.js";import{D as E,s as v}from"../chunks/DragElement-abfde29a.js";import"../chunks/index-1172df8c.js";function D(e){let s,r,n;return{c(){s=t("div"),r=t("p"),n=a("Drag Me"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=l(s);r=c(t,"P",{});var a=l(r);n=f(a,"Drag Me"),a.forEach(d),t.forEach(d),this.h()},h(){h(s,"class","w-64 h-64 flex flex-row items-center justify-center bg-red-400 border border-red-600 rounded-md")},m(e,t){u(e,s,t),m(s,r),m(r,n)},d(e){e&&d(s)}}}function y(e){let s,r,n;return{c(){s=t("div"),r=t("p"),n=a("Drag Me"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=l(s);r=c(t,"P",{});var a=l(r);n=f(a,"Drag Me"),a.forEach(d),t.forEach(d),this.h()},h(){h(s,"class","w-64 h-64 flex flex-row items-center justify-center bg-green-400 border border-green-600 rounded-md")},m(e,t){u(e,s,t),m(s,r),m(r,n)},d(e){e&&d(s)}}}function M(e){let s,r,n;return{c(){s=t("div"),r=t("p"),n=a("Drag Me"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=l(s);r=c(t,"P",{});var a=l(r);n=f(a,"Drag Me"),a.forEach(d),t.forEach(d),this.h()},h(){h(s,"class","w-64 h-64 flex flex-row items-center justify-center bg-indigo-400 border border-indigo-600 rounded-md")},m(e,t){u(e,s,t),m(s,r),m(r,n)},d(e){e&&d(s)}}}function j(e){let s,r,n;return{c(){s=t("div"),r=t("p"),n=a("Drag Me"),this.h()},l(e){s=c(e,"DIV",{class:!0});var t=l(s);r=c(t,"P",{});var a=l(r);n=f(a,"Drag Me"),a.forEach(d),t.forEach(d),this.h()},h(){h(s,"class","w-64 h-64 flex flex-row items-center justify-center bg-yellow-400 border border-yellow-600 rounded-md")},m(e,t){u(e,s,t),m(s,r),m(r,n)},d(e){e&&d(s)}}}function I(e){let s,r,v,I,P,k,V,N,T,O,R,S,A,B,C,F,G,H;return T=new E({props:{coords:e[0],$$slots:{default:[D]},$$scope:{ctx:e}}}),R=new E({props:{coords:e[1],$$slots:{default:[y]},$$scope:{ctx:e}}}),A=new E({props:{coords:e[2],$$slots:{default:[M]},$$scope:{ctx:e}}}),C=new E({props:{coords:e[3],$$slots:{default:[j]},$$scope:{ctx:e}}}),{c(){s=t("section"),r=t("h1"),v=a("Draggable Elements Example"),I=n(),P=t("button"),k=a("Reset Position"),V=n(),N=t("main"),o(T.$$.fragment),O=n(),o(R.$$.fragment),S=n(),o(A.$$.fragment),B=n(),o(C.$$.fragment),this.h()},l(e){s=c(e,"SECTION",{class:!0});var t=l(s);r=c(t,"H1",{class:!0});var a=l(r);v=f(a,"Draggable Elements Example"),a.forEach(d),I=$(t),P=c(t,"BUTTON",{class:!0});var n=l(P);k=f(n,"Reset Position"),n.forEach(d),t.forEach(d),V=$(e),N=c(e,"MAIN",{class:!0});var o=l(N);i(T.$$.fragment,o),O=$(o),i(R.$$.fragment,o),S=$(o),i(A.$$.fragment,o),B=$(o),i(C.$$.fragment,o),o.forEach(d),this.h()},h(){h(r,"class","px-2"),h(P,"class","border border-blue-700 bg-white text-blue-700 px-2 rounded-md"),h(s,"class","flex flex-row py-1 bg-blue-500 text-white items-center"),h(N,"class","w-full h-full p-2 select-none")},m(t,a){u(t,s,a),m(s,r),m(r,v),m(s,I),m(s,P),m(P,k),u(t,V,a),u(t,N,a),g(T,N,null),m(N,O),g(R,N,null),m(N,S),g(A,N,null),m(N,B),g(C,N,null),F=!0,G||(H=p(P,"click",e[4]),G=!0)},p(e,[s]){const r={};64&s&&(r.$$scope={dirty:s,ctx:e}),T.$set(r);const t={};64&s&&(t.$$scope={dirty:s,ctx:e}),R.$set(t);const a={};64&s&&(a.$$scope={dirty:s,ctx:e}),A.$set(a);const n={};64&s&&(n.$$scope={dirty:s,ctx:e}),C.$set(n)},i(e){F||(x(T.$$.fragment,e),x(R.$$.fragment,e),x(A.$$.fragment,e),x(C.$$.fragment,e),F=!0)},o(e){b(T.$$.fragment,e),b(R.$$.fragment,e),b(A.$$.fragment,e),b(C.$$.fragment,e),F=!1},d(e){e&&d(s),e&&d(V),e&&d(N),w(T),w(R),w(A),w(C),G=!1,H()}}}function P(e){e.update((()=>({x:0,y:0})))}function k(e){const s=n(),r=n(),t=n(),a=n();function n(){return v({x:0,y:0},{stiffness:.1,damping:.3})}return[s,r,t,a,function(){[s,r,t,a].forEach(P)}]}export default class extends e{constructor(e){super(),s(this,e,k,I,r,{})}}
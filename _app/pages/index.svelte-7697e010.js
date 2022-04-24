import{S as U,i as z,s as F,e as m,t as w,k as y,w as C,c as u,a as $,h as x,d as a,m as I,x as V,b as v,g as E,J as d,y as N,K as G,q as R,o as S,B as T,E as q}from"../chunks/index-91353806.js";import{D as k,s as L}from"../chunks/DragElement-0d159ee5.js";import"../chunks/index-78954055.js";function Q(l){let e,t,o;return{c(){e=m("div"),t=m("p"),o=w("Drag Me"),this.h()},l(r){e=u(r,"DIV",{class:!0});var s=$(e);t=u(s,"P",{});var c=$(t);o=x(c,"Drag Me"),c.forEach(a),s.forEach(a),this.h()},h(){v(e,"class","w-64 h-64 flex flex-row items-center justify-center bg-red-400 border border-red-600 rounded-md")},m(r,s){E(r,e,s),d(e,t),d(t,o)},p:q,d(r){r&&a(e)}}}function W(l){let e,t,o;return{c(){e=m("div"),t=m("p"),o=w("Drag Me"),this.h()},l(r){e=u(r,"DIV",{class:!0});var s=$(e);t=u(s,"P",{});var c=$(t);o=x(c,"Drag Me"),c.forEach(a),s.forEach(a),this.h()},h(){v(e,"class","w-64 h-64 flex flex-row items-center justify-center bg-green-400 border border-green-600 rounded-md")},m(r,s){E(r,e,s),d(e,t),d(t,o)},p:q,d(r){r&&a(e)}}}function X(l){let e,t,o;return{c(){e=m("div"),t=m("p"),o=w("Drag Me"),this.h()},l(r){e=u(r,"DIV",{class:!0});var s=$(e);t=u(s,"P",{});var c=$(t);o=x(c,"Drag Me"),c.forEach(a),s.forEach(a),this.h()},h(){v(e,"class","w-64 h-64 flex flex-row items-center justify-center bg-indigo-400 border border-indigo-600 rounded-md")},m(r,s){E(r,e,s),d(e,t),d(t,o)},p:q,d(r){r&&a(e)}}}function Y(l){let e,t,o;return{c(){e=m("div"),t=m("p"),o=w("Drag Me"),this.h()},l(r){e=u(r,"DIV",{class:!0});var s=$(e);t=u(s,"P",{});var c=$(t);o=x(c,"Drag Me"),c.forEach(a),s.forEach(a),this.h()},h(){v(e,"class","w-64 h-64 flex flex-row items-center justify-center bg-yellow-400 border border-yellow-600 rounded-md")},m(r,s){E(r,e,s),d(e,t),d(t,o)},p:q,d(r){r&&a(e)}}}function Z(l){let e,t,o,r,s,c,P,f,h,A,g,B,_,O,b,j,H,J;return h=new k({props:{coords:l[0],$$slots:{default:[Q]},$$scope:{ctx:l}}}),g=new k({props:{coords:l[1],$$slots:{default:[W]},$$scope:{ctx:l}}}),_=new k({props:{coords:l[2],$$slots:{default:[X]},$$scope:{ctx:l}}}),b=new k({props:{coords:l[3],$$slots:{default:[Y]},$$scope:{ctx:l}}}),{c(){e=m("section"),t=m("h1"),o=w("Draggable Elements Example"),r=y(),s=m("button"),c=w("Reset Position"),P=y(),f=m("main"),C(h.$$.fragment),A=y(),C(g.$$.fragment),B=y(),C(_.$$.fragment),O=y(),C(b.$$.fragment),this.h()},l(n){e=u(n,"SECTION",{class:!0});var i=$(e);t=u(i,"H1",{class:!0});var D=$(t);o=x(D,"Draggable Elements Example"),D.forEach(a),r=I(i),s=u(i,"BUTTON",{class:!0});var M=$(s);c=x(M,"Reset Position"),M.forEach(a),i.forEach(a),P=I(n),f=u(n,"MAIN",{class:!0});var p=$(f);V(h.$$.fragment,p),A=I(p),V(g.$$.fragment,p),B=I(p),V(_.$$.fragment,p),O=I(p),V(b.$$.fragment,p),p.forEach(a),this.h()},h(){v(t,"class","px-2"),v(s,"class","border border-blue-700 bg-white text-blue-700 px-2 rounded-md"),v(e,"class","flex flex-row py-1 bg-blue-500 text-white items-center"),v(f,"class","w-full h-full p-2 select-none")},m(n,i){E(n,e,i),d(e,t),d(t,o),d(e,r),d(e,s),d(s,c),E(n,P,i),E(n,f,i),N(h,f,null),d(f,A),N(g,f,null),d(f,B),N(_,f,null),d(f,O),N(b,f,null),j=!0,H||(J=G(s,"click",l[4]),H=!0)},p(n,[i]){const D={};i&64&&(D.$$scope={dirty:i,ctx:n}),h.$set(D);const M={};i&64&&(M.$$scope={dirty:i,ctx:n}),g.$set(M);const p={};i&64&&(p.$$scope={dirty:i,ctx:n}),_.$set(p);const K={};i&64&&(K.$$scope={dirty:i,ctx:n}),b.$set(K)},i(n){j||(R(h.$$.fragment,n),R(g.$$.fragment,n),R(_.$$.fragment,n),R(b.$$.fragment,n),j=!0)},o(n){S(h.$$.fragment,n),S(g.$$.fragment,n),S(_.$$.fragment,n),S(b.$$.fragment,n),j=!1},d(n){n&&a(e),n&&a(P),n&&a(f),T(h),T(g),T(_),T(b),H=!1,J()}}}function ee(l){l.update(()=>({x:0,y:0}))}function te(l){const e=s(),t=s(),o=s(),r=s();function s(){return L({x:0,y:0},{stiffness:.1,damping:.3})}function c(){[e,t,o,r].forEach(ee)}return[e,t,o,r,c]}class oe extends U{constructor(e){super(),z(this,e,te,Z,F,{})}}export{oe as default};

import{S as Vt,i as Rt,s as At,k as s,r as m,a as c,z as Be,l as r,m as o,u as _,h as a,c as n,A as ze,q as wt,b as Me,H as e,B as Ce,n as yt,g as Oe,d as He,C as Se,o as tl,x as ll,p as l,K as pe,L as sl,W as rl,R as il}from"../chunks/index.d49de905.js";import{P as al}from"../chunks/P5.7cf261fc.js";import{F as ol}from"../chunks/Footer.2d2bf93e.js";const ye=""+new URL("../assets/elipseBlog.5fd65aab.svg",import.meta.url).href,cl=""+new URL("../assets/arrow.0f2af259.svg",import.meta.url).href;function nl(E){let i,v,h,u,p,d;return p=new al({props:{sketch:E[1]}}),{c(){i=s("div"),v=s("h2"),h=m("Ola"),u=c(),Be(p.$$.fragment),this.h()},l(x){i=r(x,"DIV",{style:!0});var t=o(i);v=r(t,"H2",{});var I=o(v);h=_(I,"Ola"),I.forEach(a),u=n(t),ze(p.$$.fragment,t),t.forEach(a),this.h()},h(){wt(i,"width","100%"),wt(i,"max-width","600px"),wt(i,"height","500px")},m(x,t){Me(x,i,t),e(i,v),e(v,h),e(i,u),Ce(p,i,null),E[2](i),d=!0},p:yt,i(x){d||(Oe(p.$$.fragment,x),d=!0)},o(x){He(p.$$.fragment,x),d=!1},d(x){x&&a(i),Se(p),E[2](null)}}}function dl(E,i,v){let h,u={x:0,y:0},p,d=function(t){p=t,t.pause=!1;let I,y=0,M=4,C;t.setup=()=>{t.createCanvas(u.x,u.y),t.smooth(),t.pixelDensity(t.displayDensity()),I=t.min(t.width,t.height),C=I*.4975,t.width*.5,t.height*.5,t.stroke(243,217,178),t.strokeWeight(2),t.noFill(),t.background(16)},t.draw=()=>{t.pause?t.noLoop():t.loop(),t.background(16,20),y+=.02,t.translate(t.width*.5,t.height*.5),t.rotate(y);for(let $=-M;$<M;$++){const T=(t.sin(y)+2)*.25*C*$,b=t.sqrt(t.pow(C,2)-t.pow(T,2)),D=b*t.cos(0),B=-T+b*t.sin(0),K=b*t.cos(t.PI),N=-T+b*t.sin(t.PI);t.line(D,B,K,N),t.line(B,D,N,K)}t.ellipse(0,0,I*.995,I*.995)},t.windowResized=()=>{u={x:h.getBoundingClientRect().width,y:h.getBoundingClientRect().height},t.resizeCanvas(u.x,u.y),I=t.min(t.width,t.height),C=I*.4975,t.width*.5,t.height*.5,t.background(16)}};tl(()=>{u={x:h.getBoundingClientRect().width,y:h.getBoundingClientRect().height};let t={root:null,rootMargin:"0px",threshold:0},I=new IntersectionObserver(y=>{y.forEach(M=>{p&&(M.isIntersecting?(p.pause=!1,p.loop()):p.pause=!0)})},t);return I.observe(h),()=>I.unobserve(h)});function x(t){ll[t?"unshift":"push"](()=>{h=t,v(0,h)})}return[h,d,x]}class hl extends Vt{constructor(i){super(),Rt(this,i,dl,nl,At,{})}}function vl(E){let i,v,h,u,p,d,x,t,I,y,M,C,$,T,b,D,B,K,N,j,Ge,Le,J,Pe,qe,w,Q,Fe,Ue,X,Te,We,Y,Ke,Ne,V,Z,je,Je,k,Qe,Xe,ee,Ye,Ze,R,te,ke,et,le,tt,lt,se,st,rt,g,re,it,at,ie,W,ae,Bt,ot,fe,ct,O,H,zt,nt,oe,dt,ht,me,vt,S,G,Mt,gt,ce,ut,pt,_e,ft,L,P,Ct,mt,ne,_t,xt,xe,bt,q,F,Ot,It,de,Dt,Et,be,Ie,$t,Ht;return $=new hl({}),{c(){i=s("div"),v=s("div"),h=s("div"),u=m("Our Blog "),p=s("br"),d=m(" and articles"),x=c(),t=s("div"),I=m("Small description "),y=s("br"),M=m(" about this section"),C=c(),Be($.$$.fragment),T=c(),b=s("div"),D=s("div"),B=s("div"),K=m("Research"),N=c(),j=s("div"),Ge=m("Article highlight title goes here"),Le=c(),J=s("div"),Pe=m("Article or blog post description goes here. Article or blog post description goes here."),qe=c(),w=s("div"),Q=s("div"),Fe=m("Research"),Ue=c(),X=s("div"),Te=m("Article highlight title goes here"),We=c(),Y=s("div"),Ke=m("Article or blog post description goes here. Article or blog post description goes here."),Ne=c(),V=s("div"),Z=s("div"),je=m("Research"),Je=c(),k=s("div"),Qe=m("Article highlight title goes here"),Xe=c(),ee=s("div"),Ye=m("Article or blog post description goes here. Article or blog post description goes here."),Ze=c(),R=s("div"),te=s("div"),ke=m("Research"),et=c(),le=s("div"),tt=m("Article highlight title goes here"),lt=c(),se=s("div"),st=m("Article or blog post description goes here. Article or blog post description goes here."),rt=c(),g=s("div"),re=s("div"),it=m("Read by topic"),at=c(),ie=s("div"),W=s("button"),ae=s("img"),ot=c(),fe=s("hr"),ct=c(),O=s("div"),H=s("img"),nt=c(),oe=s("div"),dt=m("Research"),ht=c(),me=s("hr"),vt=c(),S=s("div"),G=s("img"),gt=c(),ce=s("div"),ut=m("Security"),pt=c(),_e=s("hr"),ft=c(),L=s("div"),P=s("img"),mt=c(),ne=s("div"),_t=m("Mobile"),xt=c(),xe=s("hr"),bt=c(),q=s("div"),F=s("img"),It=c(),de=s("div"),Dt=m("Development"),Et=c(),be=s("hr"),this.h()},l(z){i=r(z,"DIV",{class:!0});var A=o(i);v=r(A,"DIV",{class:!0});var De=o(v);h=r(De,"DIV",{class:!0});var Ee=o(h);u=_(Ee,"Our Blog "),p=r(Ee,"BR",{}),d=_(Ee," and articles"),Ee.forEach(a),x=n(De),t=r(De,"DIV",{class:!0});var $e=o(t);I=_($e,"Small description "),y=r($e,"BR",{}),M=_($e," about this section"),$e.forEach(a),De.forEach(a),C=n(A),ze($.$$.fragment,A),T=n(A),b=r(A,"DIV",{class:!0});var U=o(b);D=r(U,"DIV",{class:!0});var he=o(D);B=r(he,"DIV",{class:!0});var St=o(B);K=_(St,"Research"),St.forEach(a),N=n(he),j=r(he,"DIV",{class:!0});var Gt=o(j);Ge=_(Gt,"Article highlight title goes here"),Gt.forEach(a),Le=n(he),J=r(he,"DIV",{class:!0});var Lt=o(J);Pe=_(Lt,"Article or blog post description goes here. Article or blog post description goes here."),Lt.forEach(a),he.forEach(a),qe=n(U),w=r(U,"DIV",{class:!0});var ve=o(w);Q=r(ve,"DIV",{class:!0});var Pt=o(Q);Fe=_(Pt,"Research"),Pt.forEach(a),Ue=n(ve),X=r(ve,"DIV",{class:!0});var qt=o(X);Te=_(qt,"Article highlight title goes here"),qt.forEach(a),We=n(ve),Y=r(ve,"DIV",{class:!0});var Ft=o(Y);Ke=_(Ft,"Article or blog post description goes here. Article or blog post description goes here."),Ft.forEach(a),ve.forEach(a),Ne=n(U),V=r(U,"DIV",{class:!0});var ge=o(V);Z=r(ge,"DIV",{class:!0});var Ut=o(Z);je=_(Ut,"Research"),Ut.forEach(a),Je=n(ge),k=r(ge,"DIV",{class:!0});var Tt=o(k);Qe=_(Tt,"Article highlight title goes here"),Tt.forEach(a),Xe=n(ge),ee=r(ge,"DIV",{class:!0});var Wt=o(ee);Ye=_(Wt,"Article or blog post description goes here. Article or blog post description goes here."),Wt.forEach(a),ge.forEach(a),Ze=n(U),R=r(U,"DIV",{class:!0});var ue=o(R);te=r(ue,"DIV",{class:!0});var Kt=o(te);ke=_(Kt,"Research"),Kt.forEach(a),et=n(ue),le=r(ue,"DIV",{class:!0});var Nt=o(le);tt=_(Nt,"Article highlight title goes here"),Nt.forEach(a),lt=n(ue),se=r(ue,"DIV",{class:!0});var jt=o(se);st=_(jt,"Article or blog post description goes here. Article or blog post description goes here."),jt.forEach(a),ue.forEach(a),U.forEach(a),rt=n(A),g=r(A,"DIV",{class:!0});var f=o(g);re=r(f,"DIV",{class:!0});var Jt=o(re);it=_(Jt,"Read by topic"),Jt.forEach(a),at=n(f),ie=r(f,"DIV",{class:!0});var Qt=o(ie);W=r(Qt,"BUTTON",{class:!0});var Xt=o(W);ae=r(Xt,"IMG",{src:!0,alt:!0}),Xt.forEach(a),Qt.forEach(a),ot=n(f),fe=r(f,"HR",{class:!0}),ct=n(f),O=r(f,"DIV",{class:!0});var we=o(O);H=r(we,"IMG",{src:!0,loading:!0,alt:!0,class:!0}),nt=n(we),oe=r(we,"DIV",{class:!0});var Yt=o(oe);dt=_(Yt,"Research"),Yt.forEach(a),we.forEach(a),ht=n(f),me=r(f,"HR",{class:!0}),vt=n(f),S=r(f,"DIV",{class:!0});var Ve=o(S);G=r(Ve,"IMG",{src:!0,loading:!0,alt:!0,class:!0}),gt=n(Ve),ce=r(Ve,"DIV",{class:!0});var Zt=o(ce);ut=_(Zt,"Security"),Zt.forEach(a),Ve.forEach(a),pt=n(f),_e=r(f,"HR",{class:!0}),ft=n(f),L=r(f,"DIV",{class:!0});var Re=o(L);P=r(Re,"IMG",{src:!0,loading:!0,alt:!0,class:!0}),mt=n(Re),ne=r(Re,"DIV",{class:!0});var kt=o(ne);_t=_(kt,"Mobile"),kt.forEach(a),Re.forEach(a),xt=n(f),xe=r(f,"HR",{class:!0}),bt=n(f),q=r(f,"DIV",{class:!0});var Ae=o(q);F=r(Ae,"IMG",{src:!0,loading:!0,alt:!0,class:!0}),It=n(Ae),de=r(Ae,"DIV",{class:!0});var el=o(de);Dt=_(el,"Development"),el.forEach(a),Ae.forEach(a),Et=n(f),be=r(f,"HR",{class:!0}),f.forEach(a),A.forEach(a),this.h()},h(){l(h,"class","title text-xxl text-color-beige svelte-1lalk62"),l(t,"class","description text-m text-color-white svelte-1lalk62"),l(v,"class","grid "),l(B,"class","theme text-xxxs text-color-white svelte-1lalk62"),l(j,"class","title-article text-color-beige svelte-1lalk62"),l(J,"class","text-xxxs text-color-white"),l(D,"class","left-article svelte-1lalk62"),l(Q,"class","theme text-xxxs text-color-white svelte-1lalk62"),l(X,"class","title-article text-color-beige svelte-1lalk62"),l(Y,"class","text-xxxs text-color-white"),l(w,"class","right-article svelte-1lalk62"),l(Z,"class","theme text-xxxs text-color-white svelte-1lalk62"),l(k,"class","title-article text-color-beige svelte-1lalk62"),l(ee,"class","text-xxxs text-color-white"),l(V,"class","left-article svelte-1lalk62"),l(te,"class","theme text-xxxs text-color-white svelte-1lalk62"),l(le,"class","title-article text-color-beige svelte-1lalk62"),l(se,"class","text-xxxs text-color-white"),l(R,"class","right-article svelte-1lalk62"),l(b,"class","grid articles svelte-1lalk62"),l(re,"class","read-topic text-color-beige svelte-1lalk62"),pe(ae.src,Bt=cl)||l(ae,"src",Bt),l(ae,"alt","arrow"),l(W,"class","arrow"),l(ie,"class","icon svelte-1lalk62"),l(fe,"class","horizontal svelte-1lalk62"),pe(H.src,zt=ye)||l(H,"src",zt),l(H,"loading","lazy"),l(H,"alt","elipse"),l(H,"class","elipse svelte-1lalk62"),l(oe,"class",""),l(O,"class","text-color-beige research svelte-1lalk62"),l(me,"class","horizontal svelte-1lalk62"),pe(G.src,Mt=ye)||l(G,"src",Mt),l(G,"loading","lazy"),l(G,"alt","elipse"),l(G,"class","elipse svelte-1lalk62"),l(ce,"class",""),l(S,"class","text-color-beige research svelte-1lalk62"),l(_e,"class","horizontal svelte-1lalk62"),pe(P.src,Ct=ye)||l(P,"src",Ct),l(P,"loading","lazy"),l(P,"alt","elipse"),l(P,"class","elipse svelte-1lalk62"),l(ne,"class",""),l(L,"class","text-color-beige research svelte-1lalk62"),l(xe,"class","horizontal svelte-1lalk62"),pe(F.src,Ot=ye)||l(F,"src",Ot),l(F,"loading","lazy"),l(F,"alt","elipse"),l(F,"class","elipse svelte-1lalk62"),l(de,"class",""),l(q,"class","text-color-beige research svelte-1lalk62"),l(be,"class","horizontal last-line svelte-1lalk62"),l(g,"class","grid "),l(i,"class","container top svelte-1lalk62")},m(z,A){Me(z,i,A),e(i,v),e(v,h),e(h,u),e(h,p),e(h,d),e(v,x),e(v,t),e(t,I),e(t,y),e(t,M),e(i,C),Ce($,i,null),e(i,T),e(i,b),e(b,D),e(D,B),e(B,K),e(D,N),e(D,j),e(j,Ge),e(D,Le),e(D,J),e(J,Pe),e(b,qe),e(b,w),e(w,Q),e(Q,Fe),e(w,Ue),e(w,X),e(X,Te),e(w,We),e(w,Y),e(Y,Ke),e(b,Ne),e(b,V),e(V,Z),e(Z,je),e(V,Je),e(V,k),e(k,Qe),e(V,Xe),e(V,ee),e(ee,Ye),e(b,Ze),e(b,R),e(R,te),e(te,ke),e(R,et),e(R,le),e(le,tt),e(R,lt),e(R,se),e(se,st),e(i,rt),e(i,g),e(g,re),e(re,it),e(g,at),e(g,ie),e(ie,W),e(W,ae),e(g,ot),e(g,fe),e(g,ct),e(g,O),e(O,H),e(O,nt),e(O,oe),e(oe,dt),e(g,ht),e(g,me),e(g,vt),e(g,S),e(S,G),e(S,gt),e(S,ce),e(ce,ut),e(g,pt),e(g,_e),e(g,ft),e(g,L),e(L,P),e(L,mt),e(L,ne),e(ne,_t),e(g,xt),e(g,xe),e(g,bt),e(g,q),e(q,F),e(q,It),e(q,de),e(de,Dt),e(g,Et),e(g,be),Ie=!0,$t||(Ht=sl(W,"click{change}",E[0]),$t=!0)},p:yt,i(z){Ie||(Oe($.$$.fragment,z),Ie=!0)},o(z){He($.$$.fragment,z),Ie=!1},d(z){z&&a(i),Se($),$t=!1,Ht()}}}function gl(E){function i(v){rl.call(this,E,v)}return[i]}class ul extends Vt{constructor(i){super(),Rt(this,i,gl,vl,At,{})}}function pl(E){let i,v,h,u,p;return v=new ul({}),u=new ol({props:{color:"beige"}}),{c(){i=c(),Be(v.$$.fragment),h=c(),Be(u.$$.fragment),this.h()},l(d){il("svelte-10h7psl",document.head).forEach(a),i=n(d),ze(v.$$.fragment,d),h=n(d),ze(u.$$.fragment,d),this.h()},h(){document.title="Blog"},m(d,x){Me(d,i,x),Ce(v,d,x),Me(d,h,x),Ce(u,d,x),p=!0},p:yt,i(d){p||(Oe(v.$$.fragment,d),Oe(u.$$.fragment,d),p=!0)},o(d){He(v.$$.fragment,d),He(u.$$.fragment,d),p=!1},d(d){d&&a(i),Se(v,d),d&&a(h),Se(u,d)}}}class xl extends Vt{constructor(i){super(),Rt(this,i,null,pl,At,{})}}export{xl as default};

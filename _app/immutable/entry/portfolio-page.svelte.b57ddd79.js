import{S as jt,i as Mt,s as Pt,U as $s,z as bt,A as wt,B as $t,L as Ss,n as Be,g as St,d as At,C as zt,k as s,r as n,a as o,l,m as r,u,h as a,c as d,p as t,K as J,b as ht,H as e,R as As}from"../chunks/index.d49de905.js";import{P as zs}from"../chunks/P5.7cf261fc.js";import{F as js}from"../chunks/Footer.2d2bf93e.js";const Ms=""+new URL("../assets/artificial.6a76995b.svg",import.meta.url).href,Ps=""+new URL("../assets/all.71e4c21f.svg",import.meta.url).href,Us=""+new URL("../assets/machine.e1b97e4c.svg",import.meta.url).href,Ls=""+new URL("../assets/mobile.0cdfee5b.svg",import.meta.url).href,Gs=""+new URL("../assets/web.e3be9ccc.svg",import.meta.url).href,Rs=""+new URL("../assets/data.ef39284d.svg",import.meta.url).href,Ns=""+new URL("../assets/research.66b960b7.svg",import.meta.url).href,Cs=""+new URL("../assets/systems.c7ed6fb6.svg",import.meta.url).href,Ws=""+new URL("../assets/security.f1ebe564.svg",import.meta.url).href;function Os(me){let c,p,_,E;return $s(me[2]),c=new zs({props:{sketch:me[1]}}),{c(){bt(c.$$.fragment)},l(x){wt(c.$$.fragment,x)},m(x,V){$t(c,x,V),p=!0,_||(E=Ss(window,"resize",me[2]),_=!0)},p:Be,i(x){p||(St(c.$$.fragment,x),p=!0)},o(x){At(c.$$.fragment,x),p=!1},d(x){zt(c,x),_=!1,E()}}}let yt=2;function Ks(me,c,p){let _,E;function x(g){V={x:g*.8,y:g*.8},_&&(f=[],m=[],D=[],_.setup())}let V={x:800,y:800},h,v=0,f=[],m=[],D=[],P=function(g){_=g,g.setup=function(){g.createCanvas(V.x,V.y),g.smooth(),g.pixelDensity(g.displayDensity()),h=g.min(g.width,g.height);for(let i=0;i<=yt;i++)f.push({x:h*.7/yt*(yt-i),y:h*.7/yt*(yt-i)}),m.push({x:h*.7/yt*(yt-i),y:h*.7/yt*(yt-i)}),D.push({x:3,y:1.5});g.noFill(),g.stroke(149,204,201),g.strokeWeight(2),g.background(16)},g.draw=function(){g.background(16,20),g.translate(g.width*.5,g.height*.5),v+=.01,g.rotate(v);for(let i=0;i<=yt;i++)f[i].x>=h*.7&&(f[i].x=0,f[i].y=0),m[i].x>=h*.7&&(D[i].x=0,m[i].y>=h*.7&&(D[i].x=6,m[i].x=0,m[i].y=0)),f[i].x+=2,f[i].y+=2,m[i].x+=D[i].x,m[i].y+=D[i].y,g.ellipse(0,0,m[i].x,m[i].y),g.ellipse(0,0,m[i].y,m[i].x);g.ellipse(0,0,h*.7,h*.7)}};function y(){p(0,E=window.innerWidth)}return me.$$.update=()=>{me.$$.dirty&1&&x(E)},[E,P,y]}class Fs extends jt{constructor(c){super(),Mt(this,c,Ks,Os,Pt,{})}}function Ts(me){let c,p,_,E,x,V,h,v,f,m,D,P,y,g,i,b,F,U,rt,We,G,S,Oe,_e,be,Ke,le,Fe,fe,Te,T,R,ge,Ie,w,Q,k,A,it,we,z,L,I,$,ve,O,Je,ke,X,H,Z,De,He,ae,ee,j,re,je,K,te,ye,se,$e,M,Se,Y,N,Ve,Me,Qe,C,Ae,Ee,Pe,Xe,W,q,ze,xe,Ue,oe,ie,ut,Le,Ge,he,ce,Re,ct,tt,pe,de,st,Et,ft,xt,It,Ze,Ne,vt,Ye,ot,qe,ne,pt,lt,mt,_t,at,dt;return h=new Fs({}),{c(){c=s("div"),p=s("div"),_=s("div"),E=n("We deliver work that makes you proud"),x=o(),V=s("div"),bt(h.$$.fragment),v=o(),f=s("div"),m=s("div"),D=s("div"),P=s("div"),y=s("img"),i=o(),b=s("div"),F=n("All"),U=s("sup"),rt=n("3"),We=o(),G=s("div"),S=s("div"),Oe=s("div"),_e=s("img"),Ke=o(),le=s("div"),Fe=n("Artificial Intelligence"),fe=s("sup"),Te=n("0"),T=o(),R=s("div"),ge=s("div"),Ie=s("div"),w=s("img"),k=o(),A=s("div"),it=n("Machine Learning"),we=s("sup"),z=n("0"),L=o(),I=s("div"),$=s("div"),ve=s("div"),O=s("img"),ke=o(),X=s("div"),H=n("Research"),Z=s("sup"),De=n("1"),He=o(),ae=s("div"),ee=s("div"),j=s("div"),re=s("img"),K=o(),te=s("div"),ye=n("Security"),se=s("sup"),$e=n("3"),M=o(),Se=s("div"),Y=s("div"),N=s("div"),Ve=s("img"),Qe=o(),C=s("div"),Ae=n("Mobile"),Ee=s("sup"),Pe=n("2"),Xe=o(),W=s("div"),q=s("div"),ze=s("div"),xe=s("img"),oe=o(),ie=s("div"),ut=n("Web Development"),Le=s("sup"),Ge=n("3"),he=o(),ce=s("div"),Re=s("div"),ct=s("div"),tt=s("img"),de=o(),st=s("div"),Et=n("Data Management"),ft=s("sup"),xt=n("2"),It=o(),Ze=s("div"),Ne=s("div"),vt=s("div"),Ye=s("img"),qe=o(),ne=s("div"),pt=n("Larger Scale Systems"),lt=s("sup"),mt=n("1"),_t=o(),at=s("hr"),this.h()},l(ue){c=l(ue,"DIV",{class:!0});var Ce=r(c);p=l(Ce,"DIV",{class:!0});var Dt=r(p);_=l(Dt,"DIV",{class:!0});var et=r(_);E=u(et,"We deliver work that makes you proud"),et.forEach(a),Dt.forEach(a),x=d(Ce),V=l(Ce,"DIV",{class:!0});var nt=r(V);wt(h.$$.fragment,nt),nt.forEach(a),v=d(Ce),f=l(Ce,"DIV",{class:!0});var B=r(f);m=l(B,"DIV",{class:!0});var Vt=r(m);D=l(Vt,"DIV",{class:!0});var gt=r(D);P=l(gt,"DIV",{class:!0});var Lt=r(P);y=l(Lt,"IMG",{src:!0,alt:!0,class:!0}),Lt.forEach(a),i=d(gt),b=l(gt,"DIV",{class:!0});var Ut=r(b);F=u(Ut,"All"),U=l(Ut,"SUP",{});var Gt=r(U);rt=u(Gt,"3"),Gt.forEach(a),Ut.forEach(a),gt.forEach(a),Vt.forEach(a),We=d(B),G=l(B,"DIV",{class:!0});var ls=r(G);S=l(ls,"DIV",{class:!0});var Rt=r(S);Oe=l(Rt,"DIV",{class:!0});var as=r(Oe);_e=l(as,"IMG",{src:!0,alt:!0,class:!0}),as.forEach(a),Ke=d(Rt),le=l(Rt,"DIV",{class:!0});var kt=r(le);Fe=u(kt,"Artificial Intelligence"),fe=l(kt,"SUP",{});var rs=r(fe);Te=u(rs,"0"),rs.forEach(a),kt.forEach(a),Rt.forEach(a),ls.forEach(a),T=d(B),R=l(B,"DIV",{class:!0});var is=r(R);ge=l(is,"DIV",{class:!0});var Nt=r(ge);Ie=l(Nt,"DIV",{class:!0});var cs=r(Ie);w=l(cs,"IMG",{src:!0,alt:!0,class:!0}),cs.forEach(a),k=d(Nt),A=l(Nt,"DIV",{class:!0});var Ht=r(A);it=u(Ht,"Machine Learning"),we=l(Ht,"SUP",{});var vs=r(we);z=u(vs,"0"),vs.forEach(a),Ht.forEach(a),Nt.forEach(a),is.forEach(a),L=d(B),I=l(B,"DIV",{class:!0});var os=r(I);$=l(os,"DIV",{class:!0});var Ct=r($);ve=l(Ct,"DIV",{class:!0});var ds=r(ve);O=l(ds,"IMG",{src:!0,alt:!0,class:!0}),ds.forEach(a),ke=d(Ct),X=l(Ct,"DIV",{class:!0});var Yt=r(X);H=u(Yt,"Research"),Z=l(Yt,"SUP",{});var ns=r(Z);De=u(ns,"1"),ns.forEach(a),Yt.forEach(a),Ct.forEach(a),os.forEach(a),He=d(B),ae=l(B,"DIV",{class:!0});var us=r(ae);ee=l(us,"DIV",{class:!0});var Wt=r(ee);j=l(Wt,"DIV",{class:!0});var fs=r(j);re=l(fs,"IMG",{src:!0,alt:!0,class:!0}),fs.forEach(a),K=d(Wt),te=l(Wt,"DIV",{class:!0});var qt=r(te);ye=u(qt,"Security"),se=l(qt,"SUP",{});var gs=r(se);$e=u(gs,"3"),gs.forEach(a),qt.forEach(a),Wt.forEach(a),us.forEach(a),M=d(B),Se=l(B,"DIV",{class:!0});var hs=r(Se);Y=l(hs,"DIV",{class:!0});var Ot=r(Y);N=l(Ot,"DIV",{class:!0});var ps=r(N);Ve=l(ps,"IMG",{src:!0,alt:!0,class:!0}),ps.forEach(a),Qe=d(Ot),C=l(Ot,"DIV",{class:!0});var Bt=r(C);Ae=u(Bt,"Mobile"),Ee=l(Bt,"SUP",{});var ms=r(Ee);Pe=u(ms,"2"),ms.forEach(a),Bt.forEach(a),Ot.forEach(a),hs.forEach(a),Xe=d(B),W=l(B,"DIV",{class:!0});var _s=r(W);q=l(_s,"DIV",{class:!0});var Kt=r(q);ze=l(Kt,"DIV",{class:!0});var ys=r(ze);xe=l(ys,"IMG",{src:!0,alt:!0,class:!0}),ys.forEach(a),oe=d(Kt),ie=l(Kt,"DIV",{class:!0});var Jt=r(ie);ut=u(Jt,"Web Development"),Le=l(Jt,"SUP",{});var Es=r(Le);Ge=u(Es,"3"),Es.forEach(a),Jt.forEach(a),Kt.forEach(a),_s.forEach(a),he=d(B),ce=l(B,"DIV",{class:!0});var xs=r(ce);Re=l(xs,"DIV",{class:!0});var Ft=r(Re);ct=l(Ft,"DIV",{class:!0});var Is=r(ct);tt=l(Is,"IMG",{src:!0,alt:!0,class:!0}),Is.forEach(a),de=d(Ft),st=l(Ft,"DIV",{class:!0});var Qt=r(st);Et=u(Qt,"Data Management"),ft=l(Qt,"SUP",{});var Ds=r(ft);xt=u(Ds,"2"),Ds.forEach(a),Qt.forEach(a),Ft.forEach(a),xs.forEach(a),It=d(B),Ze=l(B,"DIV",{class:!0});var Vs=r(Ze);Ne=l(Vs,"DIV",{class:!0});var Tt=r(Ne);vt=l(Tt,"DIV",{class:!0});var bs=r(vt);Ye=l(bs,"IMG",{src:!0,alt:!0,class:!0}),bs.forEach(a),qe=d(Tt),ne=l(Tt,"DIV",{class:!0});var Xt=r(ne);pt=u(Xt,"Larger Scale Systems"),lt=l(Xt,"SUP",{});var ws=r(lt);mt=u(ws,"1"),ws.forEach(a),Xt.forEach(a),Tt.forEach(a),Vs.forEach(a),B.forEach(a),_t=d(Ce),at=l(Ce,"HR",{size:!0,width:!0,color:!0}),Ce.forEach(a),this.h()},h(){t(_,"class","title text-xxl text-color-blue  svelte-8lgg"),t(p,"class","grid svelte-8lgg"),t(V,"class","animation svelte-8lgg"),J(y.src,g=Ps)||t(y,"src",g),t(y,"alt","All"),t(y,"class","content-logo svelte-8lgg"),t(P,"class","logo"),t(b,"class","text text-xxxxs svelte-8lgg"),t(D,"class","content svelte-8lgg"),t(m,"class","all text-xxxxs svelte-8lgg"),J(_e.src,be=Ms)||t(_e,"src",be),t(_e,"alt","Artificial"),t(_e,"class","content-logo svelte-8lgg"),t(Oe,"class","logo"),t(le,"class","text text-xxxxs svelte-8lgg"),t(S,"class","content svelte-8lgg"),t(G,"class","content-artificial svelte-8lgg"),J(w.src,Q=Us)||t(w,"src",Q),t(w,"alt","Machine"),t(w,"class","content-logo svelte-8lgg"),t(Ie,"class","logo"),t(A,"class","text text-xxxxs svelte-8lgg"),t(ge,"class","content svelte-8lgg"),t(R,"class","content-machine svelte-8lgg"),J(O.src,Je=Ns)||t(O,"src",Je),t(O,"alt","Research"),t(O,"class","content-logo svelte-8lgg"),t(ve,"class","logo"),t(X,"class","text text-xxxxs svelte-8lgg"),t($,"class","content svelte-8lgg"),t(I,"class","content-research svelte-8lgg"),J(re.src,je=Ws)||t(re,"src",je),t(re,"alt","Security"),t(re,"class","content-logo svelte-8lgg"),t(j,"class","logo"),t(te,"class","text text-xxxxs svelte-8lgg"),t(ee,"class","content svelte-8lgg"),t(ae,"class","content-security svelte-8lgg"),J(Ve.src,Me=Ls)||t(Ve,"src",Me),t(Ve,"alt","Mobile"),t(Ve,"class","content-logo svelte-8lgg"),t(N,"class","logo"),t(C,"class","text text-xxxxs svelte-8lgg"),t(Y,"class","content svelte-8lgg"),t(Se,"class","content-mobile svelte-8lgg"),J(xe.src,Ue=Gs)||t(xe,"src",Ue),t(xe,"alt","Web"),t(xe,"class","content-logo svelte-8lgg"),t(ze,"class","logo"),t(ie,"class","text text-xxxxs svelte-8lgg"),t(q,"class","content svelte-8lgg"),t(W,"class","content-web svelte-8lgg"),J(tt.src,pe=Rs)||t(tt,"src",pe),t(tt,"alt","Data Management"),t(tt,"class","content-logo svelte-8lgg"),t(ct,"class","logo"),t(st,"class","text text-xxxxs svelte-8lgg"),t(Re,"class","content svelte-8lgg"),t(ce,"class","content-data svelte-8lgg"),J(Ye.src,ot=Cs)||t(Ye,"src",ot),t(Ye,"alt","Larger Scale Systems"),t(Ye,"class","content-logo svelte-8lgg"),t(vt,"class","logo"),t(ne,"class","text text-xxxxs svelte-8lgg"),t(Ne,"class","content svelte-8lgg"),t(Ze,"class","content-systems svelte-8lgg"),t(f,"class","grid gap svelte-8lgg"),t(at,"size","0"),t(at,"width","100%"),t(at,"color","white"),t(c,"class","container paddings svelte-8lgg")},m(ue,Ce){ht(ue,c,Ce),e(c,p),e(p,_),e(_,E),e(c,x),e(c,V),$t(h,V,null),e(c,v),e(c,f),e(f,m),e(m,D),e(D,P),e(P,y),e(D,i),e(D,b),e(b,F),e(b,U),e(U,rt),e(f,We),e(f,G),e(G,S),e(S,Oe),e(Oe,_e),e(S,Ke),e(S,le),e(le,Fe),e(le,fe),e(fe,Te),e(f,T),e(f,R),e(R,ge),e(ge,Ie),e(Ie,w),e(ge,k),e(ge,A),e(A,it),e(A,we),e(we,z),e(f,L),e(f,I),e(I,$),e($,ve),e(ve,O),e($,ke),e($,X),e(X,H),e(X,Z),e(Z,De),e(f,He),e(f,ae),e(ae,ee),e(ee,j),e(j,re),e(ee,K),e(ee,te),e(te,ye),e(te,se),e(se,$e),e(f,M),e(f,Se),e(Se,Y),e(Y,N),e(N,Ve),e(Y,Qe),e(Y,C),e(C,Ae),e(C,Ee),e(Ee,Pe),e(f,Xe),e(f,W),e(W,q),e(q,ze),e(ze,xe),e(q,oe),e(q,ie),e(ie,ut),e(ie,Le),e(Le,Ge),e(f,he),e(f,ce),e(ce,Re),e(Re,ct),e(ct,tt),e(Re,de),e(Re,st),e(st,Et),e(st,ft),e(ft,xt),e(f,It),e(f,Ze),e(Ze,Ne),e(Ne,vt),e(vt,Ye),e(Ne,qe),e(Ne,ne),e(ne,pt),e(ne,lt),e(lt,mt),e(c,_t),e(c,at),dt=!0},p:Be,i(ue){dt||(St(h.$$.fragment,ue),dt=!0)},o(ue){At(h.$$.fragment,ue),dt=!1},d(ue){ue&&a(c),zt(h)}}}class ks extends jt{constructor(c){super(),Mt(this,c,null,Ts,Pt,{})}}const Zt=""+new URL("../assets/first-logo.75a5863d.svg",import.meta.url).href,es=""+new URL("../assets/second-logo.91222c06.svg",import.meta.url).href,ts=""+new URL("../assets/third-logo.3e9c3f3f.svg",import.meta.url).href,ss=""+new URL("../assets/fourth-logo.2ad179eb.svg",import.meta.url).href,Hs=""+new URL("../assets/stayaway-covid.c3ed1766.png",import.meta.url).href;function Ys(me){let c,p,_,E,x,V,h,v,f,m,D,P,y,g,i,b,F,U,rt,We,G,S,Oe,_e,be,Ke,le,Fe,fe,Te,T,R,ge,Ie,w,Q,k,A,it,we,z,L,I,$,ve,O,Je,ke,X,H,Z,De,He,ae,ee,j,re,je,K,te,ye,se,$e,M,Se,Y,N,Ve,Me,Qe,C,Ae,Ee,Pe,Xe,W,q,ze,xe,Ue,oe,ie,ut,Le,Ge;return{c(){c=s("div"),p=s("div"),_=s("div"),E=s("div"),x=n("StayAway Covid"),V=o(),h=s("div"),v=s("div"),f=s("div"),m=s("img"),P=o(),y=s("div"),g=s("img"),b=o(),F=s("div"),U=s("img"),We=o(),G=s("div"),S=s("img"),_e=o(),be=s("div"),Ke=o(),le=s("div"),Fe=o(),fe=s("div"),Te=o(),T=s("div"),R=s("div"),ge=n(`STAYAWAY COVID is a mobile application that monitors potential exposures to Covid-19 in
      Portugal.`),Ie=o(),w=s("div"),Q=s("div"),k=s("div"),A=s("img"),we=o(),z=s("div"),L=s("div"),I=s("div"),$=s("div"),ve=s("span"),O=n("2.5 Million "),Je=n("downloads"),ke=o(),X=s("div"),H=n("Developed in "),Z=s("span"),De=n("6 months"),He=o(),ae=s("div"),ee=n("Software released as "),j=s("span"),re=n("Open Source"),je=o(),K=s("div"),te=s("span"),ye=n("iOS"),se=n(" and "),$e=s("span"),M=n("Android"),Se=o(),Y=s("div"),N=s("div"),Ve=n("Approved by the "),Me=s("span"),Qe=n("European "),C=n("and "),Ae=s("span"),Ee=n("National"),Pe=n(" data protection laws"),Xe=o(),W=s("div"),q=s("span"),ze=n("Self-dismantled"),xe=n(" once the pandemic is declared over"),Ue=o(),oe=s("div"),ie=s("a"),ut=n("View more"),Le=o(),Ge=s("hr"),this.h()},l(he){c=l(he,"DIV",{class:!0});var ce=r(c);p=l(ce,"DIV",{class:!0});var Re=r(p);_=l(Re,"DIV",{class:!0});var ct=r(_);E=l(ct,"DIV",{class:!0});var tt=r(E);x=u(tt,"StayAway Covid"),tt.forEach(a),ct.forEach(a),V=d(Re),h=l(Re,"DIV",{class:!0});var pe=r(h);v=l(pe,"DIV",{class:!0});var de=r(v);f=l(de,"DIV",{class:!0});var st=r(f);m=l(st,"IMG",{src:!0,alt:!0}),st.forEach(a),P=d(de),y=l(de,"DIV",{class:!0});var Et=r(y);g=l(Et,"IMG",{src:!0,alt:!0}),Et.forEach(a),b=d(de),F=l(de,"DIV",{class:!0});var ft=r(F);U=l(ft,"IMG",{src:!0,alt:!0}),ft.forEach(a),We=d(de),G=l(de,"DIV",{class:!0});var xt=r(G);S=l(xt,"IMG",{src:!0,alt:!0}),xt.forEach(a),_e=d(de),be=l(de,"DIV",{}),r(be).forEach(a),Ke=d(de),le=l(de,"DIV",{}),r(le).forEach(a),Fe=d(de),fe=l(de,"DIV",{}),r(fe).forEach(a),de.forEach(a),pe.forEach(a),Re.forEach(a),Te=d(ce),T=l(ce,"DIV",{class:!0});var It=r(T);R=l(It,"DIV",{class:!0});var Ze=r(R);ge=u(Ze,`STAYAWAY COVID is a mobile application that monitors potential exposures to Covid-19 in
      Portugal.`),Ze.forEach(a),It.forEach(a),Ie=d(ce),w=l(ce,"DIV",{class:!0});var Ne=r(w);Q=l(Ne,"DIV",{class:!0});var vt=r(Q);k=l(vt,"DIV",{class:!0});var Ye=r(k);A=l(Ye,"IMG",{src:!0,alt:!0}),Ye.forEach(a),vt.forEach(a),we=d(Ne),z=l(Ne,"DIV",{class:!0});var ot=r(z);L=l(ot,"DIV",{class:!0});var qe=r(L);I=l(qe,"DIV",{class:!0});var ne=r(I);$=l(ne,"DIV",{class:!0});var pt=r($);ve=l(pt,"SPAN",{class:!0});var lt=r(ve);O=u(lt,"2.5 Million "),lt.forEach(a),Je=u(pt,"downloads"),pt.forEach(a),ke=d(ne),X=l(ne,"DIV",{class:!0});var mt=r(X);H=u(mt,"Developed in "),Z=l(mt,"SPAN",{class:!0});var _t=r(Z);De=u(_t,"6 months"),_t.forEach(a),mt.forEach(a),He=d(ne),ae=l(ne,"DIV",{class:!0});var at=r(ae);ee=u(at,"Software released as "),j=l(at,"SPAN",{class:!0});var dt=r(j);re=u(dt,"Open Source"),dt.forEach(a),at.forEach(a),je=d(ne),K=l(ne,"DIV",{class:!0});var ue=r(K);te=l(ue,"SPAN",{class:!0});var Ce=r(te);ye=u(Ce,"iOS"),Ce.forEach(a),se=u(ue," and "),$e=l(ue,"SPAN",{class:!0});var Dt=r($e);M=u(Dt,"Android"),Dt.forEach(a),ue.forEach(a),ne.forEach(a),Se=d(qe),Y=l(qe,"DIV",{class:!0});var et=r(Y);N=l(et,"DIV",{class:!0});var nt=r(N);Ve=u(nt,"Approved by the "),Me=l(nt,"SPAN",{class:!0});var B=r(Me);Qe=u(B,"European "),B.forEach(a),C=u(nt,"and "),Ae=l(nt,"SPAN",{class:!0});var Vt=r(Ae);Ee=u(Vt,"National"),Vt.forEach(a),Pe=u(nt," data protection laws"),nt.forEach(a),Xe=d(et),W=l(et,"DIV",{class:!0});var gt=r(W);q=l(gt,"SPAN",{class:!0});var Lt=r(q);ze=u(Lt,"Self-dismantled"),Lt.forEach(a),xe=u(gt," once the pandemic is declared over"),gt.forEach(a),et.forEach(a),qe.forEach(a),Ue=d(ot),oe=l(ot,"DIV",{class:!0});var Ut=r(oe);ie=l(Ut,"A",{href:!0,class:!0});var Gt=r(ie);ut=u(Gt,"View more"),Gt.forEach(a),Ut.forEach(a),ot.forEach(a),Ne.forEach(a),Le=d(ce),Ge=l(ce,"HR",{size:!0,width:!0,color:!0}),ce.forEach(a),this.h()},h(){t(E,"class","title text-l text-color-blue svelte-1y0trov"),t(_,"class","grid-split svelte-1y0trov"),J(m.src,D=Zt)||t(m,"src",D),t(m,"alt",""),t(f,"class","first-img svelte-1y0trov"),J(g.src,i=es)||t(g,"src",i),t(g,"alt",""),t(y,"class","second-img svelte-1y0trov"),J(U.src,rt=ts)||t(U,"src",rt),t(U,"alt",""),t(F,"class","third-img svelte-1y0trov"),J(S.src,Oe=ss)||t(S,"src",Oe),t(S,"alt",""),t(G,"class","fourth-img svelte-1y0trov"),t(v,"class","split  svelte-1y0trov"),t(h,"class","grid-split svelte-1y0trov"),t(p,"class","grid stayaway svelte-1y0trov"),t(R,"class","grid-split text-xxs text-color-white  svelte-1y0trov"),t(T,"class","grid sub-title svelte-1y0trov"),J(A.src,it=Hs)||t(A,"src",it),t(A,"alt",""),t(k,"class","padded-image"),t(Q,"class","grid-split svelte-1y0trov"),t(ve,"class","svelte-1y0trov"),t($,"class","line svelte-1y0trov"),t(Z,"class","svelte-1y0trov"),t(X,"class","line svelte-1y0trov"),t(j,"class","svelte-1y0trov"),t(ae,"class","line svelte-1y0trov"),t(te,"class","svelte-1y0trov"),t($e,"class","svelte-1y0trov"),t(K,"class","line padding svelte-1y0trov"),t(I,"class","third-columns text-xxxs svelte-1y0trov"),t(Me,"class","svelte-1y0trov"),t(Ae,"class","svelte-1y0trov"),t(N,"class","line svelte-1y0trov"),t(q,"class","svelte-1y0trov"),t(W,"class","line svelte-1y0trov"),t(Y,"class","grid-fourth text-xxxs svelte-1y0trov"),t(L,"class","split svelte-1y0trov"),t(ie,"href","/portfolio/stayaway-covid"),t(ie,"class","button-view text-xxs svelte-1y0trov"),t(oe,"class","portfolio-button svelte-1y0trov"),t(z,"class","grid-split svelte-1y0trov"),t(w,"class","grid text  svelte-1y0trov"),t(Ge,"size","0"),t(Ge,"width","100%"),t(Ge,"color","white"),t(c,"class","container")},m(he,ce){ht(he,c,ce),e(c,p),e(p,_),e(_,E),e(E,x),e(p,V),e(p,h),e(h,v),e(v,f),e(f,m),e(v,P),e(v,y),e(y,g),e(v,b),e(v,F),e(F,U),e(v,We),e(v,G),e(G,S),e(v,_e),e(v,be),e(v,Ke),e(v,le),e(v,Fe),e(v,fe),e(c,Te),e(c,T),e(T,R),e(R,ge),e(c,Ie),e(c,w),e(w,Q),e(Q,k),e(k,A),e(w,we),e(w,z),e(z,L),e(L,I),e(I,$),e($,ve),e(ve,O),e($,Je),e(I,ke),e(I,X),e(X,H),e(X,Z),e(Z,De),e(I,He),e(I,ae),e(ae,ee),e(ae,j),e(j,re),e(I,je),e(I,K),e(K,te),e(te,ye),e(K,se),e(K,$e),e($e,M),e(L,Se),e(L,Y),e(Y,N),e(N,Ve),e(N,Me),e(Me,Qe),e(N,C),e(N,Ae),e(Ae,Ee),e(N,Pe),e(Y,Xe),e(Y,W),e(W,q),e(q,ze),e(W,xe),e(z,Ue),e(z,oe),e(oe,ie),e(ie,ut),e(c,Le),e(c,Ge)},p:Be,i:Be,o:Be,d(he){he&&a(c)}}}class qs extends jt{constructor(c){super(),Mt(this,c,null,Ys,Pt,{})}}const Bs=""+new URL("../assets/keyruptive-portfolio.3531ea9f.png",import.meta.url).href;function Js(me){let c,p,_,E,x,V,h,v,f,m,D,P,y,g,i,b,F,U,rt,We,G,S,Oe,_e,be,Ke,le,Fe,fe,Te,T,R,ge,Ie,w,Q,k,A,it,we,z,L,I,$,ve,O,Je,ke,X,H,Z,De,He,ae,ee,j,re,je,K,te,ye,se,$e,M,Se,Y,N,Ve,Me,Qe,C,Ae,Ee,Pe,Xe,W,q,ze,xe,Ue,oe,ie,ut,Le;return{c(){c=s("div"),p=s("div"),_=s("div"),E=s("div"),x=n("Keyruptive"),V=o(),h=s("div"),v=s("div"),f=s("div"),m=s("img"),P=o(),y=s("div"),g=s("img"),b=o(),F=s("div"),U=s("img"),We=o(),G=s("div"),S=s("img"),_e=o(),be=s("div"),Ke=o(),le=s("div"),Fe=o(),fe=s("div"),Te=o(),T=s("div"),R=s("div"),ge=n("Keyruptive is the most secure and easy to use mobile application for cryptocurrency."),Ie=o(),w=s("div"),Q=s("div"),k=s("div"),A=s("img"),we=o(),z=s("div"),L=s("div"),I=s("div"),$=s("div"),ve=n("One of Invisible Lab's "),O=s("span"),Je=n("first developed"),ke=n(" projects."),X=o(),H=s("div"),Z=n("Crypto keys saved in "),De=s("span"),He=n("reliable"),ae=n(" cloud services."),ee=o(),j=s("div"),re=s("span"),je=n("Easy to use"),K=n(" mobile application."),te=o(),ye=s("div"),se=s("div"),$e=n("Keys stored in "),M=s("span"),Se=n("separate "),Y=n("clouds, adding a layer of "),N=s("span"),Ve=n("security"),Me=n(`
            .`),Qe=o(),C=s("div"),Ae=n("One of the few Portuguese "),Ee=s("span"),Pe=n("patents"),Xe=n(" in the "),W=s("span"),q=n("US"),ze=n(" to date."),xe=o(),Ue=s("div"),oe=s("a"),ie=n("View more"),ut=o(),Le=s("hr"),this.h()},l(Ge){c=l(Ge,"DIV",{class:!0});var he=r(c);p=l(he,"DIV",{class:!0});var ce=r(p);_=l(ce,"DIV",{class:!0});var Re=r(_);E=l(Re,"DIV",{class:!0});var ct=r(E);x=u(ct,"Keyruptive"),ct.forEach(a),Re.forEach(a),V=d(ce),h=l(ce,"DIV",{class:!0});var tt=r(h);v=l(tt,"DIV",{class:!0});var pe=r(v);f=l(pe,"DIV",{class:!0});var de=r(f);m=l(de,"IMG",{src:!0,alt:!0,class:!0}),de.forEach(a),P=d(pe),y=l(pe,"DIV",{class:!0});var st=r(y);g=l(st,"IMG",{src:!0,alt:!0,class:!0}),st.forEach(a),b=d(pe),F=l(pe,"DIV",{class:!0});var Et=r(F);U=l(Et,"IMG",{src:!0,alt:!0,class:!0}),Et.forEach(a),We=d(pe),G=l(pe,"DIV",{class:!0});var ft=r(G);S=l(ft,"IMG",{src:!0,alt:!0,class:!0}),ft.forEach(a),_e=d(pe),be=l(pe,"DIV",{}),r(be).forEach(a),Ke=d(pe),le=l(pe,"DIV",{}),r(le).forEach(a),Fe=d(pe),fe=l(pe,"DIV",{}),r(fe).forEach(a),pe.forEach(a),tt.forEach(a),ce.forEach(a),Te=d(he),T=l(he,"DIV",{class:!0});var xt=r(T);R=l(xt,"DIV",{class:!0});var It=r(R);ge=u(It,"Keyruptive is the most secure and easy to use mobile application for cryptocurrency."),It.forEach(a),xt.forEach(a),Ie=d(he),w=l(he,"DIV",{class:!0});var Ze=r(w);Q=l(Ze,"DIV",{class:!0});var Ne=r(Q);k=l(Ne,"DIV",{class:!0});var vt=r(k);A=l(vt,"IMG",{src:!0,alt:!0,class:!0}),vt.forEach(a),Ne.forEach(a),we=d(Ze),z=l(Ze,"DIV",{class:!0});var Ye=r(z);L=l(Ye,"DIV",{class:!0});var ot=r(L);I=l(ot,"DIV",{class:!0});var qe=r(I);$=l(qe,"DIV",{class:!0});var ne=r($);ve=u(ne,"One of Invisible Lab's "),O=l(ne,"SPAN",{class:!0});var pt=r(O);Je=u(pt,"first developed"),pt.forEach(a),ke=u(ne," projects."),ne.forEach(a),X=d(qe),H=l(qe,"DIV",{class:!0});var lt=r(H);Z=u(lt,"Crypto keys saved in "),De=l(lt,"SPAN",{class:!0});var mt=r(De);He=u(mt,"reliable"),mt.forEach(a),ae=u(lt," cloud services."),lt.forEach(a),ee=d(qe),j=l(qe,"DIV",{class:!0});var _t=r(j);re=l(_t,"SPAN",{class:!0});var at=r(re);je=u(at,"Easy to use"),at.forEach(a),K=u(_t," mobile application."),_t.forEach(a),qe.forEach(a),te=d(ot),ye=l(ot,"DIV",{class:!0});var dt=r(ye);se=l(dt,"DIV",{class:!0});var ue=r(se);$e=u(ue,"Keys stored in "),M=l(ue,"SPAN",{class:!0});var Ce=r(M);Se=u(Ce,"separate "),Ce.forEach(a),Y=u(ue,"clouds, adding a layer of "),N=l(ue,"SPAN",{class:!0});var Dt=r(N);Ve=u(Dt,"security"),Dt.forEach(a),Me=u(ue,`
            .`),ue.forEach(a),Qe=d(dt),C=l(dt,"DIV",{class:!0});var et=r(C);Ae=u(et,"One of the few Portuguese "),Ee=l(et,"SPAN",{class:!0});var nt=r(Ee);Pe=u(nt,"patents"),nt.forEach(a),Xe=u(et," in the "),W=l(et,"SPAN",{class:!0});var B=r(W);q=u(B,"US"),B.forEach(a),ze=u(et," to date."),et.forEach(a),dt.forEach(a),ot.forEach(a),xe=d(Ye),Ue=l(Ye,"DIV",{class:!0});var Vt=r(Ue);oe=l(Vt,"A",{href:!0,class:!0});var gt=r(oe);ie=u(gt,"View more"),gt.forEach(a),Vt.forEach(a),Ye.forEach(a),Ze.forEach(a),ut=d(he),Le=l(he,"HR",{size:!0,width:!0,color:!0}),he.forEach(a),this.h()},h(){t(E,"class","title text-l text-color-blue"),t(_,"class","grid-split svelte-ye6dej"),J(m.src,D=Zt)||t(m,"src",D),t(m,"alt",""),t(m,"class","svelte-ye6dej"),t(f,"class","first-img svelte-ye6dej"),J(g.src,i=es)||t(g,"src",i),t(g,"alt",""),t(g,"class","svelte-ye6dej"),t(y,"class","second-img svelte-ye6dej"),J(U.src,rt=ts)||t(U,"src",rt),t(U,"alt",""),t(U,"class","svelte-ye6dej"),t(F,"class","third-img svelte-ye6dej"),J(S.src,Oe=ss)||t(S,"src",Oe),t(S,"alt",""),t(S,"class","svelte-ye6dej"),t(G,"class","fourth-img svelte-ye6dej"),t(v,"class","split svelte-ye6dej"),t(h,"class","grid-split logo svelte-ye6dej"),t(p,"class","grid keyruptive svelte-ye6dej"),t(R,"class","grid-split sub-title text-xxs  svelte-ye6dej"),t(T,"class","grid svelte-ye6dej"),J(A.src,it=Bs)||t(A,"src",it),t(A,"alt",""),t(A,"class","svelte-ye6dej"),t(k,"class","padded-image"),t(Q,"class","grid-split right svelte-ye6dej"),t(O,"class","svelte-ye6dej"),t($,"class","line svelte-ye6dej"),t(De,"class","svelte-ye6dej"),t(H,"class","line svelte-ye6dej"),t(re,"class","svelte-ye6dej"),t(j,"class","line svelte-ye6dej"),t(I,"class","third-columns text-xxxs svelte-ye6dej"),t(M,"class","svelte-ye6dej"),t(N,"class","svelte-ye6dej"),t(se,"class","line text-xxxs svelte-ye6dej"),t(Ee,"class","svelte-ye6dej"),t(W,"class","svelte-ye6dej"),t(C,"class","line text-xxxs svelte-ye6dej"),t(ye,"class","third-columns svelte-ye6dej"),t(L,"class","split svelte-ye6dej"),t(oe,"href","/portfolio/keyruptive"),t(oe,"class","button-view text-xxs svelte-ye6dej"),t(Ue,"class","keyruptive-button svelte-ye6dej"),t(z,"class","grid-split left svelte-ye6dej"),t(w,"class","grid text svelte-ye6dej"),t(Le,"size","0"),t(Le,"width","100%"),t(Le,"color","white"),t(c,"class","container")},m(Ge,he){ht(Ge,c,he),e(c,p),e(p,_),e(_,E),e(E,x),e(p,V),e(p,h),e(h,v),e(v,f),e(f,m),e(v,P),e(v,y),e(y,g),e(v,b),e(v,F),e(F,U),e(v,We),e(v,G),e(G,S),e(v,_e),e(v,be),e(v,Ke),e(v,le),e(v,Fe),e(v,fe),e(c,Te),e(c,T),e(T,R),e(R,ge),e(c,Ie),e(c,w),e(w,Q),e(Q,k),e(k,A),e(w,we),e(w,z),e(z,L),e(L,I),e(I,$),e($,ve),e($,O),e(O,Je),e($,ke),e(I,X),e(I,H),e(H,Z),e(H,De),e(De,He),e(H,ae),e(I,ee),e(I,j),e(j,re),e(re,je),e(j,K),e(L,te),e(L,ye),e(ye,se),e(se,$e),e(se,M),e(M,Se),e(se,Y),e(se,N),e(N,Ve),e(se,Me),e(ye,Qe),e(ye,C),e(C,Ae),e(C,Ee),e(Ee,Pe),e(C,Xe),e(C,W),e(W,q),e(C,ze),e(z,xe),e(z,Ue),e(Ue,oe),e(oe,ie),e(c,ut),e(c,Le)},p:Be,i:Be,o:Be,d(Ge){Ge&&a(c)}}}class Qs extends jt{constructor(c){super(),Mt(this,c,null,Js,Pt,{})}}const Xs=""+new URL("../assets/utrust-logo.c4042c5d.png",import.meta.url).href;function Zs(me){let c,p,_,E,x,V,h,v,f,m,D,P,y,g,i,b,F,U,rt,We,G,S,Oe,_e,be,Ke,le,Fe,fe,Te,T,R,ge,Ie,w,Q,k,A,it,we,z,L,I,$,ve,O,Je,ke,X,H,Z,De,He,ae,ee,j,re;return{c(){c=s("div"),p=s("div"),_=s("div"),E=s("div"),x=n("Utrust"),V=o(),h=s("div"),v=s("div"),f=s("div"),m=s("img"),P=o(),y=s("div"),g=s("img"),b=o(),F=s("div"),U=s("img"),We=o(),G=s("div"),S=s("img"),_e=o(),be=s("div"),Ke=o(),le=s("div"),Fe=o(),fe=s("div"),Te=o(),T=s("div"),R=s("div"),ge=n("Utrust is one of the most successful Fintech startups in Europe. We took part in their start."),Ie=o(),w=s("div"),Q=s("div"),k=s("div"),A=s("img"),we=o(),z=s("div"),L=s("div"),I=s("div"),$=s("div"),ve=n("Advisory board for "),O=s("span"),Je=n("large scale"),ke=n(" and distributed architecture."),X=o(),H=s("div"),Z=s("span"),De=n("Technical contribution"),He=n(" to wallet prototypes."),ae=o(),ee=s("div"),j=s("a"),re=n("View more"),this.h()},l(je){c=l(je,"DIV",{class:!0});var K=r(c);p=l(K,"DIV",{class:!0});var te=r(p);_=l(te,"DIV",{class:!0});var ye=r(_);E=l(ye,"DIV",{class:!0});var se=r(E);x=u(se,"Utrust"),se.forEach(a),ye.forEach(a),V=d(te),h=l(te,"DIV",{class:!0});var $e=r(h);v=l($e,"DIV",{class:!0});var M=r(v);f=l(M,"DIV",{class:!0});var Se=r(f);m=l(Se,"IMG",{src:!0,alt:!0,class:!0}),Se.forEach(a),P=d(M),y=l(M,"DIV",{class:!0});var Y=r(y);g=l(Y,"IMG",{src:!0,alt:!0,class:!0}),Y.forEach(a),b=d(M),F=l(M,"DIV",{class:!0});var N=r(F);U=l(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(a),We=d(M),G=l(M,"DIV",{class:!0});var Ve=r(G);S=l(Ve,"IMG",{src:!0,alt:!0,class:!0}),Ve.forEach(a),_e=d(M),be=l(M,"DIV",{}),r(be).forEach(a),Ke=d(M),le=l(M,"DIV",{}),r(le).forEach(a),Fe=d(M),fe=l(M,"DIV",{}),r(fe).forEach(a),M.forEach(a),$e.forEach(a),te.forEach(a),Te=d(K),T=l(K,"DIV",{class:!0});var Me=r(T);R=l(Me,"DIV",{class:!0});var Qe=r(R);ge=u(Qe,"Utrust is one of the most successful Fintech startups in Europe. We took part in their start."),Qe.forEach(a),Me.forEach(a),Ie=d(K),w=l(K,"DIV",{class:!0});var C=r(w);Q=l(C,"DIV",{class:!0});var Ae=r(Q);k=l(Ae,"DIV",{class:!0});var Ee=r(k);A=l(Ee,"IMG",{src:!0,alt:!0,class:!0}),Ee.forEach(a),Ae.forEach(a),we=d(C),z=l(C,"DIV",{class:!0});var Pe=r(z);L=l(Pe,"DIV",{class:!0});var Xe=r(L);I=l(Xe,"DIV",{class:!0});var W=r(I);$=l(W,"DIV",{class:!0});var q=r($);ve=u(q,"Advisory board for "),O=l(q,"SPAN",{class:!0});var ze=r(O);Je=u(ze,"large scale"),ze.forEach(a),ke=u(q," and distributed architecture."),q.forEach(a),X=d(W),H=l(W,"DIV",{class:!0});var xe=r(H);Z=l(xe,"SPAN",{class:!0});var Ue=r(Z);De=u(Ue,"Technical contribution"),Ue.forEach(a),He=u(xe," to wallet prototypes."),xe.forEach(a),W.forEach(a),Xe.forEach(a),ae=d(Pe),ee=l(Pe,"DIV",{class:!0});var oe=r(ee);j=l(oe,"A",{href:!0,class:!0});var ie=r(j);re=u(ie,"View more"),ie.forEach(a),oe.forEach(a),Pe.forEach(a),C.forEach(a),K.forEach(a),this.h()},h(){t(E,"class","title text-l text-color-blue"),t(_,"class","grid-split svelte-1b8z1bn"),J(m.src,D=Zt)||t(m,"src",D),t(m,"alt",""),t(m,"class","svelte-1b8z1bn"),t(f,"class","first-img svelte-1b8z1bn"),J(g.src,i=es)||t(g,"src",i),t(g,"alt",""),t(g,"class","svelte-1b8z1bn"),t(y,"class","second-img svelte-1b8z1bn"),J(U.src,rt=ts)||t(U,"src",rt),t(U,"alt",""),t(U,"class","svelte-1b8z1bn"),t(F,"class","third-img svelte-1b8z1bn"),J(S.src,Oe=ss)||t(S,"src",Oe),t(S,"alt",""),t(S,"class","svelte-1b8z1bn"),t(G,"class","fourth-img svelte-1b8z1bn"),t(v,"class","split svelte-1b8z1bn"),t(h,"class","grid-split svelte-1b8z1bn"),t(p,"class","grid utrust svelte-1b8z1bn"),t(R,"class","grid-split text-xxs  svelte-1b8z1bn"),t(T,"class","grid sub-title svelte-1b8z1bn"),J(A.src,it=Xs)||t(A,"src",it),t(A,"alt"," utrust"),t(A,"class","utrust-image svelte-1b8z1bn"),t(k,"class","padded-image"),t(Q,"class","grid-split svelte-1b8z1bn"),t(O,"class","svelte-1b8z1bn"),t($,"class","line text-xxxs svelte-1b8z1bn"),t(Z,"class","svelte-1b8z1bn"),t(H,"class","line text-xxxs  svelte-1b8z1bn"),t(I,"class","third-columns svelte-1b8z1bn"),t(L,"class","split svelte-1b8z1bn"),t(j,"href","/portfolio/utrust"),t(j,"class","button-view text-xxs text-color-blue svelte-1b8z1bn"),t(ee,"class","utrust-button svelte-1b8z1bn"),t(z,"class","grid-split svelte-1b8z1bn"),t(w,"class","grid content svelte-1b8z1bn"),t(c,"class","container")},m(je,K){ht(je,c,K),e(c,p),e(p,_),e(_,E),e(E,x),e(p,V),e(p,h),e(h,v),e(v,f),e(f,m),e(v,P),e(v,y),e(y,g),e(v,b),e(v,F),e(F,U),e(v,We),e(v,G),e(G,S),e(v,_e),e(v,be),e(v,Ke),e(v,le),e(v,Fe),e(v,fe),e(c,Te),e(c,T),e(T,R),e(R,ge),e(c,Ie),e(c,w),e(w,Q),e(Q,k),e(k,A),e(w,we),e(w,z),e(z,L),e(L,I),e(I,$),e($,ve),e($,O),e(O,Je),e($,ke),e(I,X),e(I,H),e(H,Z),e(Z,De),e(H,He),e(z,ae),e(z,ee),e(ee,j),e(j,re)},p:Be,i:Be,o:Be,d(je){je&&a(c)}}}class el extends jt{constructor(c){super(),Mt(this,c,null,Zs,Pt,{})}}function tl(me){let c,p,_,E,x,V,h,v;return{c(){c=s("div"),p=s("div"),_=s("div"),E=n("Let's make your solution visible"),x=o(),V=s("div"),h=s("a"),v=n("Contact us"),this.h()},l(f){c=l(f,"DIV",{class:!0});var m=r(c);p=l(m,"DIV",{class:!0});var D=r(p);_=l(D,"DIV",{class:!0});var P=r(_);E=u(P,"Let's make your solution visible"),P.forEach(a),x=d(D),V=l(D,"DIV",{class:!0});var y=r(V);h=l(y,"A",{href:!0,class:!0});var g=r(h);v=u(g,"Contact us"),g.forEach(a),y.forEach(a),D.forEach(a),m.forEach(a),this.h()},h(){t(_,"class","title text-xl text-color-blue  svelte-40sztr"),t(h,"href","mailto:team@invisiblelab.dev?subject=I%20have%20an%20ideia!%20Can%20we%20talk%3F"),t(h,"class","button-contact-us text-color-dark-grey text-xxs svelte-40sztr"),t(V,"class","contact-us svelte-40sztr"),t(p,"class","grid content svelte-40sztr"),t(c,"class","container")},m(f,m){ht(f,c,m),e(c,p),e(p,_),e(_,E),e(p,x),e(p,V),e(V,h),e(h,v)},p:Be,i:Be,o:Be,d(f){f&&a(c)}}}class sl extends jt{constructor(c){super(),Mt(this,c,null,tl,Pt,{})}}function ll(me){let c,p,_,E,x,V,h,v,f,m,D,P,y,g;return _=new ks({}),x=new qs({}),h=new Qs({}),f=new el({}),D=new sl({}),y=new js({props:{color:"blue"}}),{c(){c=s("meta"),p=o(),bt(_.$$.fragment),E=o(),bt(x.$$.fragment),V=o(),bt(h.$$.fragment),v=o(),bt(f.$$.fragment),m=o(),bt(D.$$.fragment),P=o(),bt(y.$$.fragment),this.h()},l(i){const b=As("svelte-1snap62",document.head);c=l(b,"META",{name:!0,content:!0}),b.forEach(a),p=d(i),wt(_.$$.fragment,i),E=d(i),wt(x.$$.fragment,i),V=d(i),wt(h.$$.fragment,i),v=d(i),wt(f.$$.fragment,i),m=d(i),wt(D.$$.fragment,i),P=d(i),wt(y.$$.fragment,i),this.h()},h(){t(c,"name","viewport"),t(c,"content","width=device-width, initial-scale=1.0"),document.title="Portfolio"},m(i,b){e(document.head,c),ht(i,p,b),$t(_,i,b),ht(i,E,b),$t(x,i,b),ht(i,V,b),$t(h,i,b),ht(i,v,b),$t(f,i,b),ht(i,m,b),$t(D,i,b),ht(i,P,b),$t(y,i,b),g=!0},p:Be,i(i){g||(St(_.$$.fragment,i),St(x.$$.fragment,i),St(h.$$.fragment,i),St(f.$$.fragment,i),St(D.$$.fragment,i),St(y.$$.fragment,i),g=!0)},o(i){At(_.$$.fragment,i),At(x.$$.fragment,i),At(h.$$.fragment,i),At(f.$$.fragment,i),At(D.$$.fragment,i),At(y.$$.fragment,i),g=!1},d(i){a(c),i&&a(p),zt(_,i),i&&a(E),zt(x,i),i&&a(V),zt(h,i),i&&a(v),zt(f,i),i&&a(m),zt(D,i),i&&a(P),zt(y,i)}}}class cl extends jt{constructor(c){super(),Mt(this,c,null,ll,Pt,{})}}export{cl as default};

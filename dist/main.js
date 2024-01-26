(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(81),i=n.n(a),r=n(645),s=n.n(r),o=n(667),d=n.n(o),c=new URL(n(541),n.b),l=new URL(n(826),n.b),m=s()(i()),p=d()(c),u=d()(l);m.push([e.id,`@font-face {\n    font-family: 'HeaderFont';\n    src: url(${p});\n}\n\n@font-face {\n    font-family: 'BodyFont';\n    src:url(${u});\n}\n\nhtml {\n    font-family: 'BodyFont', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(236, 191, 133);\n    color: rgb(2, 19, 33);\n    min-width: 750px;\n}\n\n#restaurant-name {\n    font-family: 'HeaderFont', sans-serif;\n    font-size: 75px;\n    margin-bottom: 25px;\n}\n\n.nav-list {\n    list-style: none;\n    padding-left: 10px;\n    margin-top: 0px;\n}\n\n.nav-button {\n    display: inline-block;\n    font-size: 25px;\n    margin-left: 50px;\n    margin-right: 50px;\n}\n\n#content{\n    margin-top: 50px;\n}\n\n/* Home section*/\n\n.main-img {\n    width: 28%;\n    height: auto;\n}\n\n.info-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n        "description description"\n        "hours location";\n    column-gap: 15px;\n    margin-top: 30px;\n    width: 55%;\n    height: auto;\n}\n\n.description,\n.hours,\n.location {\n    font-size: 20px;\n    color: rgb(2, 19, 33);\n}\n\n.hours,\n.location {\n    margin-top: 10px;\n}\n\n.hours-header,\n.location-header {\n    color: rgb(2, 19, 33);\n    margin-bottom: 0px;\n}\n\n.description {\n    grid-area: description;\n    padding-top: 25px;\n    padding-bottom: 25px;\n}\n\n.hrs-container {\n    grid-area: hours;\n}\n\n.loca-container {\n    grid-area: location;\n}\n\n.hrs-container,\n.loca-container {\n    white-space: pre-line;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.description,\n.hrs-container,\n.loca-container {\n    background-color: rgb(236, 191, 133);\n    border: 5px solid rgb(139, 98, 100);\n    border-radius: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n/* Menu Section */\n\n.menu-container {\n    background-color: rgb(236, 191, 133);\n    border: 5px solid rgb(139, 98, 100);\n    border-radius: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-bottom: 25px; \n    width: 60%;\n    height: auto;\n}\n\n.menu-header {\n    text-align: center;\n    border-bottom: 2px solid rgb(2, 19, 33);\n}\n\n.item-container {\n    margin: 0px 0px 20px 0px;\n}\n\n.item-header {\n    margin: 0px;\n}\n\n.item-description {\n    margin: 0px;\n}\n\n.item-price {\n    margin: 0px;\n}\n\n.small-plates {\n    grid-area: smallPlates;\n}\n\n.sushi {\n    grid-area: sushi;\n}\n\n.desserts {\n    grid-area: desserts;\n}\n\n.drinks {\n    grid-area: drinks;\n}\n\n/* Contact Section */\n\n.form-li {\n    font-size: 17px;\n}\n\ninput,\nselect,\ntextarea, {\n    \n}\n`,""]);const h=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(s[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},s=[],o=0;o<e.length;o++){var d=e[o],c=a.base?d[0]+a.base:d[0],l=r[c]||0,m="".concat(c," ").concat(l);r[c]=l+1;var p=n(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=i(u,a);a.byIndex=o,t.splice(o,0,{identifier:m,updater:h,references:1})}s.push(m)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var o=n(r[s]);t[o].references--}for(var d=a(e,i),c=0;c<r.length;c++){var l=n(r[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},541:(e,t,n)=>{e.exports=n.p+"7dd6a91c3e9e65dc0ac9.ttf"},826:(e,t,n)=>{e.exports=n.p+"3a5aa85fd60d9f3c9f39.ttf"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),i=n.n(a),r=n(569),s=n.n(r),o=n(565),d=n.n(o),c=n(216),l=n.n(c),m=n(589),p=n.n(m),u=n(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=n.p+"552d6c2a043eb4b33428.jpg",C=()=>{(new Image).src=f;const e=document.body;e.style.backgroundImage=`url(${f})`,e.style.backgroundSize="cover",e.style.backgroundPosition="center",e.style.backgroundRepeat="no-repeat",e.style.margin="0px"},x=n.p+"fc70e4ffb2ead1ac4890.jpg",E=()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("p"),a=document.createElement("div"),i=document.createElement("h2"),r=document.createElement("p"),s=document.createElement("div"),o=document.createElement("h2"),d=document.createElement("p");t.classList.add("info-container"),n.classList.add("description"),a.classList.add("hrs-container"),i.classList.add("hours-header"),r.classList.add("hours"),s.classList.add("loca-container"),o.classList.add("location-header"),d.classList.add("location"),e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.width="auto",e.appendChild(t),t.appendChild(s),t.insertBefore(a,s),t.insertBefore(n,a),a.appendChild(r),a.insertBefore(i,r),s.appendChild(d),s.insertBefore(o,d);const c=new Image;c.src=x,e.insertBefore(c,t),c.classList.add("main-img"),n.textContent="Welcome to Umami Alley, your haven for authentic Japanese izakaya delights in the heart of Toronto.\n    Experience the art of umami with our thoughtfully crafted menu, blending traditional flavors with modern flair.\n    From savory yakitori to soul-soothing ramen, each dish tells a tale of culinary mastery.\n    Join us for an intimate evening, where lantern-lit tables set the stage for shared moments and exquisite cuisine.\n    Elevate your senses at Umami Alley – a celebration of taste, culture, and the spirit of izakaya dining.",i.textContent="Hours",r.textContent="Monday to Thursday 5 pm - 11 pm\nFriday to Sunday 5 pm - 1 am",o.textContent="Location",d.textContent="123 Nippon Street, Toronto, ON M5T 1A1"},g=(()=>{C(),E(),C();const e=(()=>{const e=document.body,t=document.querySelector("#content"),n=document.createElement("header"),a=document.createElement("div"),i=document.createElement("h1"),r=document.createElement("nav"),s=document.createElement("ul"),o=document.createElement("li"),d=document.createElement("li"),c=document.createElement("li");return a.classList.add("rest-name-container"),i.setAttribute("id","restaurant-name"),s.classList.add("nav-list"),o.classList.add("nav-button"),d.classList.add("nav-button"),c.classList.add("nav-button"),e.insertBefore(n,t),n.appendChild(a),a.appendChild(i),n.appendChild(r),r.appendChild(s),s.appendChild(c),s.insertBefore(d,c),s.insertBefore(o,d),i.textContent="Umami Alley",o.textContent="Home",d.textContent="Menu",c.textContent="Contact",{liHome:o,liMenu:d,liContact:c}})(),t=document.querySelector("#content");let n=()=>t;return{headerElements:e,clickHome:()=>{n().textContent="",E()},clickMenu:()=>{n().textContent="",(()=>{const e=document.querySelector("#content");e.style.width="1000px",e.style.display="grid",e.style.boxSizing="border-box",e.style.justifyItems="center",e.style.gridTemplateColumns="1fr 1fr",e.style.gridTemplateAreas="\n        'smallPlates drinks'\n        'sushi desserts'\n    ";const t=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("div"),i=document.createElement("h4"),r=document.createElement("p"),s=document.createElement("p"),o=document.createElement("div"),d=document.createElement("h4"),c=document.createElement("p"),l=document.createElement("p"),m=document.createElement("div"),p=document.createElement("h4"),u=document.createElement("p"),h=document.createElement("p"),f=document.createElement("div"),C=document.createElement("h4"),x=document.createElement("p"),E=document.createElement("p"),g=document.createElement("div"),L=document.createElement("h4"),y=document.createElement("p"),v=document.createElement("p"),b=document.createElement("div"),B=document.createElement("h4"),k=document.createElement("p"),w=document.createElement("p"),S=document.createElement("div"),T=document.createElement("h4"),A=document.createElement("p"),M=document.createElement("p"),I=document.createElement("div"),P=document.createElement("h4"),H=document.createElement("p"),N=document.createElement("p"),j=(new Image,document.createElement("div")),z=document.createElement("h2"),U=document.createElement("div"),q=document.createElement("h4"),D=document.createElement("p"),F=document.createElement("p"),O=document.createElement("div"),$=document.createElement("h4"),_=document.createElement("p"),R=document.createElement("p"),Z=document.createElement("div"),J=document.createElement("h4"),G=document.createElement("p"),K=document.createElement("p"),W=(new Image,document.createElement("div")),Y=document.createElement("h2"),Q=document.createElement("div"),V=document.createElement("h4"),X=document.createElement("p"),ee=document.createElement("p"),te=document.createElement("div"),ne=document.createElement("h4"),ae=document.createElement("p"),ie=document.createElement("p"),re=document.createElement("div"),se=document.createElement("h4"),oe=document.createElement("p"),de=document.createElement("p"),ce=(new Image,document.createElement("div")),le=document.createElement("h2"),me=document.createElement("div"),pe=document.createElement("h4"),ue=document.createElement("p"),he=document.createElement("p"),fe=document.createElement("div"),Ce=document.createElement("h4"),xe=document.createElement("p"),Ee=document.createElement("p"),ge=document.createElement("div"),Le=document.createElement("h4"),ye=document.createElement("p"),ve=document.createElement("p"),be=document.createElement("div"),Be=document.createElement("h4"),ke=document.createElement("p"),we=document.createElement("p"),Se=document.createElement("div"),Te=document.createElement("h4"),Ae=document.createElement("p"),Me=document.createElement("p"),Ie=document.createElement("div"),Pe=document.createElement("h4"),He=document.createElement("p"),Ne=document.createElement("p"),je=document.createElement("div"),ze=document.createElement("h4"),Ue=document.createElement("p"),qe=document.createElement("p"),De=document.createElement("div"),Fe=document.createElement("h4"),Oe=document.createElement("p"),$e=document.createElement("p");new Image,t.classList.add("menu-container"),t.classList.add("small-Plates"),n.classList.add("menu-header"),a.classList.add("item-container"),i.classList.add("item-header"),r.classList.add("item-description"),s.classList.add("item-price"),o.classList.add("item-container"),d.classList.add("item-header"),c.classList.add("item-description"),l.classList.add("item-price"),m.classList.add("item-container"),p.classList.add("item-header"),u.classList.add("item-description"),h.classList.add("item-price"),f.classList.add("item-container"),C.classList.add("item-header"),x.classList.add("item-description"),E.classList.add("item-price"),g.classList.add("item-container"),L.classList.add("item-header"),y.classList.add("item-description"),v.classList.add("item-price"),b.classList.add("item-container"),B.classList.add("item-header"),k.classList.add("item-description"),w.classList.add("item-price"),S.classList.add("item-container"),T.classList.add("item-header"),A.classList.add("item-description"),M.classList.add("item-price"),I.classList.add("item-container"),P.classList.add("item-header"),H.classList.add("item-description"),N.classList.add("item-price"),j.classList.add("menu-container"),j.classList.add("sushi"),z.classList.add("menu-header"),U.classList.add("item-container"),q.classList.add("item-header"),D.classList.add("item-description"),F.classList.add("item-price"),O.classList.add("item-container"),$.classList.add("item-header"),_.classList.add("item-description"),R.classList.add("item-price"),Z.classList.add("item-container"),J.classList.add("item-header"),G.classList.add("item-description"),K.classList.add("item-price"),W.classList.add("menu-container"),W.classList.add("desserts"),Y.classList.add("menu-header"),Q.classList.add("item-container"),V.classList.add("item-header"),X.classList.add("item-description"),ee.classList.add("item-price"),te.classList.add("item-container"),ne.classList.add("item-header"),ae.classList.add("item-description"),ie.classList.add("item-price"),re.classList.add("item-container"),se.classList.add("item-header"),oe.classList.add("item-description"),de.classList.add("item-price"),ce.classList.add("menu-container"),ce.classList.add("drinks"),le.classList.add("menu-header"),me.classList.add("item-container"),pe.classList.add("item-header"),ue.classList.add("item-description"),he.classList.add("item-price"),fe.classList.add("item-container"),Ce.classList.add("item-header"),xe.classList.add("item-description"),Ee.classList.add("item-price"),ge.classList.add("item-container"),Le.classList.add("item-header"),ye.classList.add("item-description"),ve.classList.add("item-price"),be.classList.add("item-container"),Be.classList.add("item-header"),ke.classList.add("item-description"),we.classList.add("item-price"),Se.classList.add("item-container"),Te.classList.add("item-header"),Ae.classList.add("item-description"),Me.classList.add("item-price"),Ie.classList.add("item-container"),Pe.classList.add("item-header"),He.classList.add("item-description"),Ne.classList.add("item-price"),je.classList.add("item-container"),ze.classList.add("item-header"),Ue.classList.add("item-description"),qe.classList.add("item-price"),De.classList.add("item-container"),Fe.classList.add("item-header"),Oe.classList.add("item-description"),$e.classList.add("item-price"),e.appendChild(ce),e.insertBefore(W,ce),e.insertBefore(j,W),e.insertBefore(t,j),t.appendChild(I),I.appendChild(N),I.insertBefore(H,N),I.insertBefore(P,H),t.insertBefore(S,I),S.appendChild(M),S.insertBefore(A,M),S.insertBefore(T,A),t.insertBefore(b,S),b.appendChild(w),b.insertBefore(k,w),b.insertBefore(B,k),t.insertBefore(g,b),g.appendChild(v),g.insertBefore(y,v),g.insertBefore(L,y),t.insertBefore(f,g),f.appendChild(E),f.insertBefore(x,E),f.insertBefore(C,x),t.insertBefore(m,f),m.appendChild(h),m.insertBefore(u,h),m.insertBefore(p,u),t.insertBefore(o,m),o.appendChild(l),o.insertBefore(c,l),o.insertBefore(d,c),t.insertBefore(a,o),a.appendChild(s),a.insertBefore(r,s),a.insertBefore(i,r),t.insertBefore(n,a),j.appendChild(Z),Z.appendChild(K),Z.insertBefore(G,K),Z.insertBefore(J,G),j.insertBefore(O,Z),O.appendChild(R),O.insertBefore(_,R),O.insertBefore($,_),j.insertBefore(U,O),U.appendChild(F),U.insertBefore(D,F),U.insertBefore(q,D),j.insertBefore(z,U),W.appendChild(re),re.appendChild(de),re.insertBefore(oe,de),re.insertBefore(se,oe),W.insertBefore(te,re),te.appendChild(ie),te.insertBefore(ae,ie),te.insertBefore(ne,ae),W.insertBefore(Q,te),Q.appendChild(ee),Q.insertBefore(X,ee),Q.insertBefore(V,X),W.insertBefore(Y,Q),ce.appendChild(De),De.appendChild($e),De.insertBefore(Oe,$e),De.insertBefore(Fe,Oe),ce.insertBefore(je,De),je.appendChild(qe),je.insertBefore(Ue,qe),je.insertBefore(ze,Ue),ce.insertBefore(Ie,je),Ie.appendChild(Ne),Ie.insertBefore(He,Ne),Ie.insertBefore(Pe,He),ce.insertBefore(Se,Ie),Se.appendChild(Me),Se.insertBefore(Ae,Me),Se.insertBefore(Te,Ae),ce.insertBefore(be,Se),be.appendChild(we),be.insertBefore(ke,we),be.insertBefore(Be,ke),ce.insertBefore(ge,be),ge.appendChild(ve),ge.insertBefore(ye,ve),ge.insertBefore(Le,ye),ce.insertBefore(fe,ge),fe.appendChild(Ee),fe.insertBefore(xe,Ee),fe.insertBefore(Ce,xe),ce.insertBefore(me,fe),me.appendChild(he),me.insertBefore(ue,he),me.insertBefore(pe,ue),ce.insertBefore(le,me),n.textContent="Small Plates",z.textContent="Sushi and Sashimi",Y.textContent="Desserts",le.textContent="Drinks",i.textContent="Edamame",r.textContent="boiled soy bean + sea salt",s.textContent="5.50",d.textContent="Kale Salad",c.textContent="blanched kale + black sesame sauce",l.textContent="6.50",p.textContent="Nasu Nibitashi",u.textContent="eggplant + dashi broth + ginger",h.textContent="6.50",C.textContent="Yakitori",x.textContent="chicken + variety of sauces",E.textContent="8.50",L.textContent="Karaage",y.textContent="boneless fried chicken + garlic mayo",v.textContent="9.50",B.textContent="Okonomiyaki",k.textContent="okonomi sauce + japanese mayo + seaweed + bonito flakes",w.textContent="10.90",T.textContent="Gyoza",A.textContent="pork + vegetable + sweet-chili mayo",M.textContent="5.50",P.textContent="Tofu",H.textContent="fried tofu + dashi broth",N.textContent="6.90",q.textContent="Sushi Selection",D.textContent="chef's selection nigiri + maki rolls",F.textContent="14.90",$.textContent="Sashimi Selection",_.textContent="chef's selection fresh seafood",R.textContent="25.90",J.textContent="Aburi Oshi",G.textContent="seared assorted sashimi + pressed sushi rice",K.textContent="19.90",V.textContent="Dorayaki",X.textContent="sweet pancakes + red bean paste",ee.textContent="3.90",ne.textContent="Matcha Cheesecake",ae.textContent="rare cheesecake + matcha",ie.textContent="7.90",se.textContent="Matcha Ice Cream",oe.textContent="soft serve + matcha + shiratama",de.textContent="5.50",pe.textContent="Asahi Super Dry",ue.textContent="",he.textContent="13/620ml",Ce.textContent="Asahi Black",xe.textContent="",Ee.textContent="11.50/334ml",Le.textContent="Sapporo Draft",ye.textContent="pint or pitcher",ve.textContent="7/473ml, 25/1800ml",Be.textContent="Hakushika Kasen Chokara Junmai",ke.textContent="sake",we.textContent="8/90ml, 22/300ml",Te.textContent="Takara Umeshu",Ae.textContent="60 ml + rocks",Me.textContent="7",Pe.textContent="Nama Lemon Sour",He.textContent="takara sugar cane shochu (1.5 oz) + full lemon",Ne.textContent="10",ze.textContent="Pops",Ue.textContent="regular or diet + club soda/coke/ginger ale/sprite",qe.textContent="3",Fe.textContent="Matcha Green Tea",Oe.textContent="hot or cold",$e.textContent="5"})()},clickContact:()=>{n().textContent="",(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("p"),i=document.createElement("div"),r=document.createElement("form"),s=document.createElement("ul"),o=document.createElement("li"),d=document.createElement("li"),c=document.createElement("li"),l=document.createElement("li"),m=document.createElement("li"),p=document.createElement("button"),u=document.createElement("label");u.setAttribute("for","name"),u.textContent="Name*";const h=document.createElement("input");h.type="text",h.id="name",h.name="user_name";const f=document.createElement("label");f.setAttribute("for","mail"),f.textContent="Email*";const C=document.createElement("input");C.type="email",C.id="mail",C.name="user_email";const x=document.createElement("label");x.setAttribute("for","phone"),x.textContent="Phone Number";const E=document.createElement("input");E.type="tel",E.id="phone",E.name="user_phone";const g=document.createElement("label");g.setAttribute("for","category"),g.textContent="What are you getting in touch about?";const L=document.createElement("select");L.id="category",L.name="category";const y=document.createElement("label");y.setAttribute("for","msg"),y.textContent="Your Message*";const v=document.createElement("textarea");v.cols="50",v.rows="10",t.classList.add("description"),n.classList.add("contact-header"),a.classList.add("contact-para"),i.classList.add("form-cont"),o.classList.add("form-li"),d.classList.add("form-li"),c.classList.add("form-li"),l.classList.add("form-li"),m.classList.add("form-li"),e.style.display="flex",e.style.flexDirection="column",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",n.style.textAlign="center",n.style.margin="0",a.style.margin="0",i.style.marginTop="30px",s.style.listStyleType="none",e.appendChild(t),t.appendChild(n),t.appendChild(a),t.appendChild(i),i.appendChild(r),r.appendChild(s),s.appendChild(o),o.appendChild(u),o.appendChild(h),s.appendChild(d),d.appendChild(f),d.appendChild(C),s.appendChild(c),c.appendChild(x),c.appendChild(E),s.appendChild(l),l.appendChild(g),l.appendChild(L),["General Inquiry","Press Inquiry","Suggestions"].forEach((e=>{const t=document.createElement("option");t.value=e.toLowerCase().replace(" ",""),t.textContent=e,L.appendChild(t)})),s.appendChild(m),m.appendChild(y),m.appendChild(v),s.appendChild(p),n.textContent="Contact Us",a.textContent="We would love to hear from you. Send us a message and we will get back to you.",p.textContent="Submit"})()}}})();g.headerElements.liHome.addEventListener("click",g.clickHome),g.headerElements.liMenu.addEventListener("click",g.clickMenu),g.headerElements.liContact.addEventListener("click",g.clickContact)})()})();
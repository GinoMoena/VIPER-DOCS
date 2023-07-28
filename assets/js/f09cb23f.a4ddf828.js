"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2837],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const o={},r="Physics",l={unversionedId:"Engine/physics",id:"Engine/physics",title:"Physics",description:"Aqui se agregan componentes que utilizan l\xf3gica matem\xe1tica para el movimiento como se realiza en juegos por ejemplo de tipo plataforma2D.",source:"@site/docs/Engine/physics.md",sourceDirName:"Engine",slug:"/Engine/physics",permalink:"/VIPER-DOCS/docs/Engine/physics",draft:!1,editUrl:"https://github.com/GinoMoena/VIPER-DOCS/docs/Engine/physics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Input",permalink:"/VIPER-DOCS/docs/Engine/input"},next:{title:"Screen",permalink:"/VIPER-DOCS/docs/Engine/screen"}},c={},s=[{value:"MovePhysics",id:"movephysics",level:2},{value:"Atributos",id:"atributos",level:3},{value:"M\xe9todos",id:"m\xe9todos",level:3},{value:"Move(Vector2 direction)",id:"movevector2-direction",level:4}],p={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"physics"},"Physics"),(0,i.kt)("p",null,"Aqui se agregan componentes que utilizan l\xf3gica matem\xe1tica para el movimiento como se realiza en juegos por ejemplo de tipo plataforma2D."),(0,i.kt)("p",null,"Al momento que se escribe la documentaci\xf3n s\xf3lo se ha implementado el MovePhysics que es en realidad la implementaci\xf3n de f\xedsicas plataformeras 2D con el uso de slopes."),(0,i.kt)("h2",{id:"movephysics"},"MovePhysics"),(0,i.kt)("p",null,"Componente con fisicas para un plataformero 2D. Utiliza un mapa del tipo TileMap."),(0,i.kt)("h3",{id:"atributos"},"Atributos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gravity ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (gravedad sobre el eje Y en caso de estar en el aire)."),(0,i.kt)("li",{parentName:"ul"},"topSpeed ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (m\xe1xima velocidad aplicable, se aplica para el eje Y)."),(0,i.kt)("li",{parentName:"ul"},"velocity ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (delta de velocidad acumulada en el eje Y)."),(0,i.kt)("li",{parentName:"ul"},"jump ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (fuerza de salto en eje Y)."),(0,i.kt)("li",{parentName:"ul"},"xVelocity ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (delta de velocidad acumulada en el eje X)."),(0,i.kt)("li",{parentName:"ul"},"topSpeedX ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (m\xe1xima velocidad posible en eje X)."),(0,i.kt)("li",{parentName:"ul"},"acc ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (cuanto acumula de velocidad por frame)."),(0,i.kt)("li",{parentName:"ul"},"airAcc ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (cuanto acumula de velocidad por frame en el aire)."),(0,i.kt)("li",{parentName:"ul"},"deacc ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (deaceleraci\xf3n en caso de que x sea mayor o menor a 0)."),(0,i.kt)("li",{parentName:"ul"},"friction ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (desaceleraci\xf3n en el eje x por fricci\xf3n con suelo)."),(0,i.kt)("li",{parentName:"ul"},"airFriction ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," (desaceleraci\xf3n en el eje x por fricci\xf3n con el aire).")),(0,i.kt)("h3",{id:"m\xe9todos"},"M\xe9todos"),(0,i.kt)("h4",{id:"movevector2-direction"},"Move(Vector2 direction)"),(0,i.kt)("p",null,"Este m\xe9todo se encarga de actualizar las f\xedsicas de acuerdo a los valores de ",(0,i.kt)("inlineCode",{parentName:"p"},"velocity")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"xVelocity")," aplicando la influencia de direcci\xf3n pasada por par\xe1metros y aplicando tambi\xe9n la l\xf3gica de f\xedsicas ya sean colisiones con el mapa o factores como desaceleraci\xf3n o fricci\xf3n con el suelo/aire, etc."),(0,i.kt)("p",null,"En caso de no ejecutarse las f\xedsicas no se actualizar\xe1n, esto podr\xeda ser de utilidad en alg\xfan caso donde se deba detener en el aire el personaje, o quiz\xe1 en caso de implementar un nuevo modo de movimiento se puede suspender la ejecuci\xf3n del move para utilizar otro tipo de movimiento en su lugar, como movimiento volador, etc."))}u.isMDXComponent=!0}}]);
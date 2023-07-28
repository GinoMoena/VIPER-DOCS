"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8155],{3905:(e,r,a)=>{a.d(r,{Zo:()=>s,kt:()=>g});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=t.createContext({}),u=function(e){var r=t.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},s=function(e){var r=u(e.components);return t.createElement(d.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return a?t.createElement(g,l(l({ref:r},s),{},{components:a})):t.createElement(g,l({ref:r},s))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6730:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=a(7462),n=(a(7294),a(3905));const i={},l="Graphics",o={unversionedId:"Engine/graphics",id:"Engine/graphics",title:"Graphics",description:"Esta secci\xf3n est\xe1 dedicada a utilidades para dibujar en pantalla diversas formas, o con diversas transformaciones.",source:"@site/docs/Engine/graphics.md",sourceDirName:"Engine",slug:"/Engine/graphics",permalink:"/VIPER-DOCS/docs/Engine/graphics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Engine/graphics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Game Manager (Singleton)",permalink:"/VIPER-DOCS/docs/Engine/game_manager"},next:{title:"Input",permalink:"/VIPER-DOCS/docs/Engine/input"}},d={},u=[{value:"DrawFigures",id:"drawfigures",level:2},{value:"DrawRect",id:"drawrect",level:3},{value:"DrawRectFilled",id:"drawrectfilled",level:3},{value:"DrawFormTile",id:"drawformtile",level:3},{value:"DrawFlatTile",id:"drawflattile",level:3},{value:"DrawLine",id:"drawline",level:3},{value:"DrawTriangle",id:"drawtriangle",level:3},{value:"DrawUtils",id:"drawutils",level:2},{value:"Draw",id:"draw",level:3},{value:"DrawHD",id:"drawhd",level:3},{value:"DrawHUD",id:"drawhud",level:3},{value:"DrawToRectangle",id:"drawtorectangle",level:3},{value:"DrawGrid",id:"drawgrid",level:3}],s={toc:u},c="wrapper";function p(e){let{components:r,...a}=e;return(0,n.kt)(c,(0,t.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"graphics"},"Graphics"),(0,n.kt)("p",null,"Esta secci\xf3n est\xe1 dedicada a utilidades para dibujar en pantalla diversas formas, o con diversas transformaciones."),(0,n.kt)("h2",{id:"drawfigures"},"DrawFigures"),(0,n.kt)("h3",{id:"drawrect"},"DrawRect"),(0,n.kt)("p",null,"Permite dibujar el rect\xe1ngulo indicado en par\xe1metros (se dibuja como un rect\xe1ngulo vac\xedo sin relleno). "),(0,n.kt)("h3",{id:"drawrectfilled"},"DrawRectFilled"),(0,n.kt)("p",null,"Permite dibujar el rect\xe1ngulo indicado en par\xe1metros."),(0,n.kt)("h3",{id:"drawformtile"},"DrawFormTile"),(0,n.kt)("p",null,"Dibuja un tile en la pantalla considerando que los tiles sean definidos por ejemplo como 16x16 y uno de estos est\xe1 ubicado en el tile map (1, 0) se dibujar\xe1 en las coordenadas (16, 0) con un width, height de 16x16."),(0,n.kt)("h3",{id:"drawflattile"},"DrawFlatTile"),(0,n.kt)("p",null,"Siguiendo la l\xf3gica anterior se dibujar\xe1 solo una l\xednea sobre el tile indicado. Funciona como una especie de l\xednea recta que marca el piso por donde se est\xe1 pasando."),(0,n.kt)("h3",{id:"drawline"},"DrawLine"),(0,n.kt)("p",null,"Permite dibujar una l\xednea entre un punto A(x,y) y un punto B(x,y)."),(0,n.kt)("h3",{id:"drawtriangle"},"DrawTriangle"),(0,n.kt)("p",null,"Permite dibujar un tri\xe1ngulo con un \xe1ngulo recto, parecido a DrawLine, pero dibujar el tri\xe1ngulo correspondiente a esa l\xednea."),(0,n.kt)("h2",{id:"drawutils"},"DrawUtils"),(0,n.kt)("h3",{id:"draw"},"Draw"),(0,n.kt)("p",null,"Permite dibujar una textura en la posici\xf3n indicada. "),(0,n.kt)("h3",{id:"drawhd"},"DrawHD"),(0,n.kt)("p",null,"Permite dibujar una textura en modo HD, este m\xe9todo se deber\xe1 utilizar en el m\xe9todo DrawHD de alguna entidad o escena que lo requiera."),(0,n.kt)("h3",{id:"drawhud"},"DrawHUD"),(0,n.kt)("p",null,"Este m\xe9todo permite dibujar en pantalla y que los elementos dibujados ignoren el sistema de c\xe1mara, por lo que siempre se mostrar\xe1n a pesar del desplazamiento generado por el componente de Camera2D. Idealmente especial para dibujar HUD, elementos que necesiten estar est\xe1ticos en pantalla como estado del personaje."),(0,n.kt)("h3",{id:"drawtorectangle"},"DrawToRectangle"),(0,n.kt)("p",null,"Parecido al m\xe9todo original para dibujar en pantalla. La adici\xf3n es que en este m\xe9todo se puede transformar el rect\xe1ngulo dibujado a uno nuevo y este ser\xe1 el resultante. Esto permite escalar una imagen en el eje x o y."),(0,n.kt)("h3",{id:"drawgrid"},"DrawGrid"),(0,n.kt)("p",null,"Permite dibujar una grilla en pantalla. Este m\xe9todo se puede utilzar, o se utiliza en el modo debug, es muy \xfatil para dimensionar las distancias entre cada tile."))}p.isMDXComponent=!0}}]);
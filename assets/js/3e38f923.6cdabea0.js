"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Input",l={unversionedId:"Engine/input",id:"Engine/input",title:"Input",description:"Este clase almacena todos los registros de inputs registrados desde el teclado y mouse. Si bien Monogame ya incluye una clase Input esta versi\xf3n agrega m\xe9todos \xfatiles para el flujo del juego, estos m\xe9todos se describen a continuaci\xf3n.",source:"@site/docs/Engine/input.md",sourceDirName:"Engine",slug:"/Engine/input",permalink:"/VIPER-DOCS/docs/Engine/input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Engine/input.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Graphics",permalink:"/VIPER-DOCS/docs/Engine/graphics"},next:{title:"Physics",permalink:"/VIPER-DOCS/docs/Engine/physics"}},s={},c=[{value:"GetKeyDown(Keys key)",id:"getkeydownkeys-key",level:3},{value:"GetKeyUp(Keys key)",id:"getkeyupkeys-key",level:3},{value:"GetKey(Keys key)",id:"getkeykeys-key",level:3},{value:"LeftClick",id:"leftclick",level:3},{value:"RightClick",id:"rightclick",level:3},{value:"MousePosition",id:"mouseposition",level:3},{value:"GameInput <code>class</code>",id:"gameinput-class",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"input"},"Input"),(0,r.kt)("p",null,"Este clase almacena todos los registros de inputs registrados desde el teclado y mouse. Si bien Monogame ya incluye una clase Input esta versi\xf3n agrega m\xe9todos \xfatiles para el flujo del juego, estos m\xe9todos se describen a continuaci\xf3n."),(0,r.kt)("h3",{id:"getkeydownkeys-key"},"GetKeyDown(Keys key)"),(0,r.kt)("p",null,"Retorna ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," si la tecla indicada fue presionada en el frame actual."),(0,r.kt)("h3",{id:"getkeyupkeys-key"},"GetKeyUp(Keys key)"),(0,r.kt)("p",null,"Retorna ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," si la tecla indicada fue levantada en el frame actual."),(0,r.kt)("h3",{id:"getkeykeys-key"},"GetKey(Keys key)"),(0,r.kt)("p",null,"Al igual que el m\xe9todo cl\xe1sico verifica si la tecla actual est\xe1 siendo presionada."),(0,r.kt)("h3",{id:"leftclick"},"LeftClick"),(0,r.kt)("p",null,"Retorna ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," si el click izquierdo fue presionado durante ese frame."),(0,r.kt)("h3",{id:"rightclick"},"RightClick"),(0,r.kt)("p",null,"Retorna ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," si el click derecho fue presionado durante ese frame."),(0,r.kt)("h3",{id:"mouseposition"},"MousePosition"),(0,r.kt)("p",null,"Retorna un objeto de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector2")," con las coordenadas x e y del mouse."),(0,r.kt)("h2",{id:"gameinput-class"},"GameInput ",(0,r.kt)("inlineCode",{parentName:"h2"},"class")),(0,r.kt)("p",null,"esta clase funciona como una m\xe1scara para las acciones del juego, contiene los siguientes botones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Left"),(0,r.kt)("li",{parentName:"ul"},"Right"),(0,r.kt)("li",{parentName:"ul"},"Up"),(0,r.kt)("li",{parentName:"ul"},"Down"),(0,r.kt)("li",{parentName:"ul"},"A"),(0,r.kt)("li",{parentName:"ul"},"B"),(0,r.kt)("li",{parentName:"ul"},"Start"),(0,r.kt)("li",{parentName:"ul"},"Select")),(0,r.kt)("p",null,"Esto permite que en lugar de asociar una acci\xf3n a una tecla espec\xedfica se puede mapear a uno de estos botones y al iniciar el juego se realizar\xe1 la acci\xf3n haciendo referencia a los botones del GameInput."),(0,r.kt)("p",null,"Los valores de las teclas asociadas a estos gameInputs son indicados en un archivo dentro de la carpeta Content en la ruta ",(0,r.kt)("inlineCode",{parentName:"p"},"Content/Text/input.properties")," Si se modifican estos valores esas asignaciones funcionar\xe1n como las teclas indicadas anteriormente."))}d.isMDXComponent=!0}}]);
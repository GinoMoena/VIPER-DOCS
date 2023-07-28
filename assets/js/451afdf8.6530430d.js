"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8486],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},i="Screen",c={unversionedId:"Engine/screen",id:"Engine/screen",title:"Screen",description:"Screen es un componente que funciona como un RenderTarget. La idea es simplificar este proceso de creaci\xf3n de render Target funcionando simplemente como un lienzo que uno activa a trav\xe9s de screen.Set() dibuja y luego desactiva el lienzo con screen.UnSet(). Finalmente al momento de pintar elementos se puede utilizar screen como si fuera una textura, esto permite escalar, rotar, transformar el lienzo original, adem\xe1s de otros tratamientos que se aplican al dibujo a trav\xe9s de SpriteBatch.",source:"@site/docs/Engine/screen.md",sourceDirName:"Engine",slug:"/Engine/screen",permalink:"/VIPER-DOCS/docs/Engine/screen",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Engine/screen.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Physics",permalink:"/VIPER-DOCS/docs/Engine/physics"},next:{title:"UI",permalink:"/VIPER-DOCS/docs/Engine/ui"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"screen"},"Screen"),(0,a.kt)("p",null,"Screen es un componente que funciona como un RenderTarget. La idea es simplificar este proceso de creaci\xf3n de render Target funcionando simplemente como un lienzo que uno activa a trav\xe9s de ",(0,a.kt)("inlineCode",{parentName:"p"},"screen.Set()")," dibuja y luego desactiva el lienzo con ",(0,a.kt)("inlineCode",{parentName:"p"},"screen.UnSet()"),". Finalmente al momento de pintar elementos se puede utilizar screen como si fuera una textura, esto permite escalar, rotar, transformar el lienzo original, adem\xe1s de otros tratamientos que se aplican al dibujo a trav\xe9s de SpriteBatch."),(0,a.kt)("p",null,"Este componente se utiliza cuando se renderiza la pantalla virtual a pantalla en lugar de su versi\xf3n HD. Lo que se hace en este caso es pintar en un lienzo con el tama\xf1o original y luego se escala al tama\xf1o de la pantalla."))}m.isMDXComponent=!0}}]);
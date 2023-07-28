"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5336],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?t.createElement(g,i(i({ref:a},u),{},{components:n})):t.createElement(g,i({ref:a},u))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9651:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const l={},i="Game Manager (Singleton)",o={unversionedId:"Engine/game_manager",id:"Engine/game_manager",title:"Game Manager (Singleton)",description:"Atributos",source:"@site/docs/Engine/game_manager.md",sourceDirName:"Engine",slug:"/Engine/game_manager",permalink:"/VIPER-DOCS/docs/Engine/game_manager",draft:!1,editUrl:"https://github.com/GinoMoena/VIPER-DOCS/docs/Engine/game_manager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fullscreen",permalink:"/VIPER-DOCS/docs/Engine/fullscreen"},next:{title:"Graphics",permalink:"/VIPER-DOCS/docs/Engine/graphics"}},c={},s=[{value:"Atributos",id:"atributos",level:2},{value:"Modificables",id:"modificables",level:3},{value:"const INTERNAL_RES INTERNAL_RESOLUTION",id:"const-internal_res-internal_resolution",level:4},{value:"const RES RESOLUTION",id:"const-res-resolution",level:4},{value:"const bool HD_MODE",id:"const-bool-hd_mode",level:4},{value:"bool Debug",id:"bool-debug",level:4},{value:"bool Pause",id:"bool-pause",level:4},{value:"Scene",id:"scene",level:4},{value:"Camera",id:"camera",level:4},{value:"Window",id:"window",level:4},{value:"GraphicsDevice",id:"graphicsdevice",level:4},{value:"GraphicsDeviceManager",id:"graphicsdevicemanager",level:4},{value:"Content",id:"content",level:4},{value:"FullScreen FullScreenManager",id:"fullscreen-fullscreenmanager",level:4},{value:"Input",id:"input",level:4},{value:"IGameParameters GameParameters",id:"igameparameters-gameparameters",level:4},{value:"DialogBox",id:"dialogbox",level:4},{value:"Read only",id:"read-only",level:3},{value:"GameManager Instance",id:"gamemanager-instance",level:4},{value:"SCALE",id:"scale",level:4},{value:"ResolutionScale",id:"resolutionscale",level:4},{value:"DefaultFont",id:"defaultfont",level:4},{value:"M\xe9todos",id:"m\xe9todos",level:2},{value:"Update(GameTime)",id:"updategametime",level:3}],u={toc:s},d="wrapper";function p(e){let{components:a,...n}=e;return(0,r.kt)(d,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"game-manager-singleton"},"Game Manager (Singleton)"),(0,r.kt)("h2",{id:"atributos"},"Atributos"),(0,r.kt)("h3",{id:"modificables"},"Modificables"),(0,r.kt)("h4",{id:"const-internal_res-internal_resolution"},"const INTERNAL_RES INTERNAL_RESOLUTION"),(0,r.kt)("p",null,"Indica la resoluci\xf3n virtual. La idea de este motor es poder realizar c\xe1lculos en una resoluci\xf3n virtual m\xe1s baja y luego mostrar gr\xe1ficos en alta resoluci\xf3n. Por ejemplo trabajar con tiles de 16x16 en una resoluci\xf3n interna de 640x360 y escalar a 48x48 con resoluci\xf3n 1920x1080 (x3)."),(0,r.kt)("h4",{id:"const-res-resolution"},"const RES RESOLUTION"),(0,r.kt)("p",null,"Indica la resoluci\xf3n de la pantalla. La resoluci\xf3n real que ser\xe1 visualizada por el usuario."),(0,r.kt)("h4",{id:"const-bool-hd_mode"},"const bool HD_MODE"),(0,r.kt)("p",null,"Indica si la visualizaci\xf3n est\xe1 en modo HD o en modo no escalada. Esto permite agilizar el desarrollo visualizando directamente la resoluci\xf3n virtual. Luego al alternar a modo HD se podr\xe1 ver la resoluci\xf3n final."),(0,r.kt)("h4",{id:"bool-debug"},"bool Debug"),(0,r.kt)("p",null,"Indicar si la ejecuci\xf3n est\xe1 en modo debug. Esta variable ser\xe1 utilizada por otras clases a modo de realizar pruebas, para habilitar/deshabilitar elementos debug."),(0,r.kt)("h4",{id:"bool-pause"},"bool Pause"),(0,r.kt)("p",null,"Permite pausar el juego. Si esta variable est\xe1 activa los m\xe9todos update de escenas entidad componentes no se ejecutar\xe1n."),(0,r.kt)("h4",{id:"scene"},"Scene"),(0,r.kt)("p",null,"La escena activa actual. Se puede cambiar por una nueva escena."),(0,r.kt)("h4",{id:"camera"},"Camera"),(0,r.kt)("p",null,"La c\xe1mara utilizada actualmente. Se puede reemplazar por otra c\xe1mara en caso de necesitar crear una c\xe1mara nueva."),(0,r.kt)("h4",{id:"window"},"Window"),(0,r.kt)("p",null,"Permite el acceso a variables de configuraci\xf3n del objeto Window"),(0,r.kt)("h4",{id:"graphicsdevice"},"GraphicsDevice"),(0,r.kt)("p",null,"Permite acceder a graphicsDevice para configuraci\xf3n."),(0,r.kt)("h4",{id:"graphicsdevicemanager"},"GraphicsDeviceManager"),(0,r.kt)("p",null,"Permite acceder o utilizar el graphicDeviceManager para configuraci\xf3n."),(0,r.kt)("h4",{id:"content"},"Content"),(0,r.kt)("p",null,"Permite acceder al contenido almacenado, ser\xe1 utilizado por elementos que necesiten cargar datos."),(0,r.kt)("h4",{id:"fullscreen-fullscreenmanager"},"FullScreen FullScreenManager"),(0,r.kt)("p",null,"Instancia de FullScreen, esta ser\xe1 utilizable por Manager para cambios en la visualizaci\xf3n."),(0,r.kt)("h4",{id:"input"},"Input"),(0,r.kt)("p",null,"Instancia de input \xfanica para el manejo de inputs de usuario."),(0,r.kt)("h4",{id:"igameparameters-gameparameters"},"IGameParameters GameParameters"),(0,r.kt)("p",null,"Permite Indicar variables iniciales para el juego. Definiciones como el nombre del juego, datos de usuario, etc."),(0,r.kt)("h4",{id:"dialogbox"},"DialogBox"),(0,r.kt)("p",null,"Instancia de dialogbox utilizable para mostrar texto en pantalla (Ideal para rpg)."),(0,r.kt)("h3",{id:"read-only"},"Read only"),(0,r.kt)("h4",{id:"gamemanager-instance"},"GameManager Instance"),(0,r.kt)("p",null,"La instancia del gamemanager. Esta ser\xeda el punto de entrada al game manager para acceder a cada uno de sus atributos y m\xe9todos."),(0,r.kt)("h4",{id:"scale"},"SCALE"),(0,r.kt)("p",null,"Entrega la proporci\xf3n de escala entre la resoluci\xf3n interna (virtual) y la resoluci\xf3n de la pantalla. "),(0,r.kt)("h4",{id:"resolutionscale"},"ResolutionScale"),(0,r.kt)("p",null,"Entrega la proporci\xf3n inversa de escala entre la resoluci\xf3n interna (virtual) y la resoluci\xf3n de la pantalla."),(0,r.kt)("h4",{id:"defaultfont"},"DefaultFont"),(0,r.kt)("p",null,"Entrega una fuente de texto por defecto, esta se puede utilizar para mostrar texto en pantalla."),(0,r.kt)("h2",{id:"m\xe9todos"},"M\xe9todos"),(0,r.kt)("h3",{id:"updategametime"},"Update(GameTime)"),(0,r.kt)("p",null,"Se maneja la l\xf3gica que debe actualizar cuadro a cuadro. Este m\xe9todo es ideal para agregar funciones globales que afectan a toda la aplicaci\xf3n, por ejemplo el control de pantalla completa o alternar entre modo debug y normal o modo hd/low res."))}p.isMDXComponent=!0}}]);
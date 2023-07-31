"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2597],{3905:(e,o,n)=>{n.d(o,{Zo:()=>l,kt:()=>f});var a=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function d(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=a.createContext({}),s=function(e){var o=a.useContext(u),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},l=function(e){var o=s(e.components);return a.createElement(u.Provider,{value:o},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},p=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,u=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=s(n),p=t,f=c["".concat(u,".").concat(p)]||c[p]||m[p]||r;return n?a.createElement(f,i(i({ref:o},l),{},{components:n})):a.createElement(f,i({ref:o},l))}));function f(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=p;var d={};for(var u in o)hasOwnProperty.call(o,u)&&(d[u]=o[u]);d.originalType=e,d[c]="string"==typeof e?e:t,i[1]=d;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3842:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(7462),t=(n(7294),n(3905));const r={},i="CommandBuffer",d={unversionedId:"ECS/Components/CommandBuffer",id:"ECS/Components/CommandBuffer",title:"CommandBuffer",description:'CommandBuffer es un componente que almacena una serie de comandos en una cola de un tama\xf1o determinado por el usuario (por defecto es 10). La idea de este componente es que sirva de ayuda para tener acciones buffereadas en el juego como por ejemplo al caer de un salto y presionar la tecla de salto nuevamente prevenir que el input de salto sea "comido" por el estado de aire y se pueda agendar para cuando toque el suelo en un tiempo de espera m\xe1ximo de 10 frames.',source:"@site/docs/ECS/Components/CommandBuffer.md",sourceDirName:"ECS/Components",slug:"/ECS/Components/CommandBuffer",permalink:"/VIPER-DOCS/docs/ECS/Components/CommandBuffer",draft:!1,editUrl:"https://github.com/GinoMoena/VIPER-DOCS/tree/main/docs/ECS/Components/CommandBuffer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/VIPER-DOCS/docs/ECS/Components/Command"},next:{title:"Extras",permalink:"/VIPER-DOCS/docs/category/extras"}},u={},s=[{value:"Atributos",id:"atributos",level:3},{value:"BufferSize",id:"buffersize",level:4},{value:"M\xe9todos",id:"m\xe9todos",level:3},{value:"Update()",id:"update",level:4},{value:"GetCommand() <code>T</code>",id:"getcommand-t",level:4},{value:"Contains (Type type) <code>bool</code>",id:"contains-type-type-bool",level:4},{value:"Enqueue (Command command) <code>void</code>",id:"enqueue-command-command-void",level:4}],l={toc:s},c="wrapper";function m(e){let{components:o,...n}=e;return(0,t.kt)(c,(0,a.Z)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"commandbuffer"},"CommandBuffer"),(0,t.kt)("p",null,'CommandBuffer es un componente que almacena una serie de comandos en una cola de un tama\xf1o determinado por el usuario (por defecto es 10). La idea de este componente es que sirva de ayuda para tener acciones buffereadas en el juego como por ejemplo al caer de un salto y presionar la tecla de salto nuevamente prevenir que el input de salto sea "comido" por el estado de aire y se pueda agendar para cuando toque el suelo en un tiempo de espera m\xe1ximo de 10 frames.'),(0,t.kt)("h3",{id:"atributos"},"Atributos"),(0,t.kt)("h4",{id:"buffersize"},"BufferSize"),(0,t.kt)("h3",{id:"m\xe9todos"},"M\xe9todos"),(0,t.kt)("h4",{id:"update"},"Update()"),(0,t.kt)("p",null,"El m\xe9todo update actualiza la cola ingresando continuamente nuevos comandos vac\xedos, en caso de que la cola supere el tama\xf1o m\xe1ximo se quitar\xe1 el elemento m\xe1s antiguo de la cola para que pueda ingresar uno nuevo."),(0,t.kt)("p",null,"Este proceso es importante ya que si no se limpian comandos antiguos con el tiempo se pueden producir acciones involuntarias"),(0,t.kt)("h4",{id:"getcommand-t"},"GetCommand() ",(0,t.kt)("inlineCode",{parentName:"h4"},"T")),(0,t.kt)("p",null,"Retorna un comando del tipo T si es que existe. Esto es \xfatil si se necesita implementar otro tipo de comando por ejemplo PhysicsCommand donde al ejecutar este tipo de comando se pasa por par\xe1metro un objeto de tipo MovePhysics."),(0,t.kt)("p",null,"Este es un m\xe9todo recursivo que retornar\xe1 la acci\xf3n si es que existe pasando eliminando todo lo que este en prioridad a esta acci\xf3n. En caso de que no exista la acci\xf3n retornar\xe1 una nulo."),(0,t.kt)("h4",{id:"contains-type-type-bool"},"Contains (Type type) ",(0,t.kt)("inlineCode",{parentName:"h4"},"bool")),(0,t.kt)("p",null,"Retorna verdadero si el tipo de comando est\xe1 contenido en la cola, es \xfatil para echar un vistazo antes de obtener un comando para asegurar de que exista y no retorne un nulo."),(0,t.kt)("h4",{id:"enqueue-command-command-void"},"Enqueue (Command command) ",(0,t.kt)("inlineCode",{parentName:"h4"},"void")),(0,t.kt)("p",null,"Agrega un valor a la cola, aunque el m\xe9todo update se encarga de agregar valores por si solo este m\xe9todo es \xfatil para agregar nuevos comandos. Idealmente se deber\xe1 usar cuando el usuario presione un bot\xf3n para realizar una acci\xf3n, en luagr de realizar la acci\xf3n directamente se ingresa a esta cola de comandos."))}m.isMDXComponent=!0}}]);
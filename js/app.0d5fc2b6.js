(function(e){function a(a){for(var o,t,c=a[0],s=a[1],u=a[2],l=0,d=[];l<c.length;l++)t=c[l],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&d.push(r[t][0]),r[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==r[c]&&(o=!1)}o&&(i.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},t={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"ce14e158","chunk-0206bfa0":"db848401","chunk-110f1f0b":"61a4ed11","chunk-13a6037e":"0dbe5c65","chunk-179248a2":"d6cf2861","chunk-18f95272":"9d8cf629","chunk-2a9fce91":"0ecc359b","chunk-2c06842c":"6cae5bfb","chunk-2d0c5615":"75151c9d","chunk-2d0e96ec":"a0992f3a","chunk-2d208d90":"7ca99724","chunk-2d21d0e2":"662065e2","chunk-2d22c123":"3ab92924","chunk-2e80bb9a":"84e37d65","chunk-319206de":"0748c1e6","chunk-36769079":"db07006a","chunk-4cdd78c0":"0277c010","chunk-515a8379":"5df7d778","chunk-53ccb27e":"cc458c56","chunk-55d286b8":"f370762b","chunk-59974754":"12fa6331","chunk-5d1ce150":"6ee84259","chunk-60cbc06b":"c331d9c0","chunk-623f2040":"dfc3159f","chunk-659152b8":"592218b5","chunk-6a43ec24":"c4a1c2ef","chunk-6e1e538a":"0a30a368","chunk-6e613899":"042dd297","chunk-766a929b":"cee86727","chunk-7794bb60":"280b6865","chunk-c796899c":"d7fc5ff3","chunk-e8a7823a":"8074120d","chunk-fde47172":"53c5fbd8",comple:"0a913297",creditos:"2d37fb69",glosario:"dabeabd4",intro:"cd4092af",referencias:"56cefa3c",sintesis:"8d341521",tema1:"bef04913",tema2:"c039740e",tema3:"e4ec00c3",tema4:"c9e51f77"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"5db19745","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"e5c61dde","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"b5f74e78","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"24b3ea3b",creditos:"71e32e17",glosario:"74674aa5",intro:"31d6cfe0",referencias:"17ba18fc",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===o||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete t[e],m.parentNode.removeChild(m),n(i)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",d.name="ChunkLoadError",d.type=o,d.request=t,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,s=(n("cf25"),n("2877")),u=Object(s["a"])(c,t,r,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");d["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Conceptos de diseño del videojuego",descripcionCurso:"Breve reseña de la historia de los videojuegos en la que se dará a conocer los tipos de videojuegos. Se desarrollará la idea base del videojuego, realizando el guion narrativo y técnico, con el <em>storyboard</em>, las mecánicas de juego y los niveles de juego.",imagenBannerPrincipal:n("d756"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")},{clases:["banner-principal-decorativo-4"],imagen:n("f53d")},{clases:["banner-principal-decorativo-5"],imagen:n("b400")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Historia e Introducción a los videojuegos",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Historia del Video Juego",hash:"t_1_1"},{numero:"1.2",titulo:"Antecedentes del videojuego en Colombia",hash:"t_1_2"},{numero:"1.3",titulo:"Tipos de videojuegos y plataformas",hash:"t_1_3"},{numero:"1.4",titulo:"Pipeline del videojuego",hash:"t_1_4"}]},{nombreRuta:"tema2",numero:"2",titulo:"Herramientas de gestión de proyectos",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Cronograma y Diagramas de Gantt",hash:"t_2_1"},{numero:"2.2",titulo:"Scrum",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Idea general del videojuego",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Personajes",hash:"t_3_1"},{numero:"3.2",titulo:"Narración",hash:"t_3_2"},{numero:"3.3",titulo:"Teoría básica luces y sombras",hash:"t_3_3"},{numero:"3.4",titulo:"Guion técnico",hash:"t_3_4"},{numero:"3.5",titulo:"<em>Storyboard</em>",hash:"t_3_5"},{numero:"3.6",titulo:"Objetivos del videojuego",hash:"t_3_6"},{numero:"3.7",titulo:"<em>Game Document Design</em>",hash:"t_3_7"}]},{nombreRuta:"tema4",numero:"4",titulo:"<em>Pitch document</em>",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF02_217326_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Diagrama de Gantt",referencia:"Saber Programas. (2017, julio 31). Cómo crear un DIAGRAMA de GANTT en Excel [ Cronograma usando los gráficos ].",tipo:"Video",link:"https://www.youtube.com/watch?v=chR6kx4btDQ"},{tema:"<em>Game Document</em>",referencia:"D Green Game (2022, junio 16). ¿Cómo CREAR tu propio GDD? + plantillas GRATIS | Game Design Document.",tipo:"Video",link:"https://www.youtube.com/watch?v=GYChRCrj2dk"},{tema:"<em>Pitch Document</em>",referencia:"Laporta, A. (2020, diciembre 29). Elevator pitch: qué es y claves para elaborarlo paso a paso. APD España; APD.",tipo:"Página Web",link:"https://www.apd.es/que-es-elevator-pitch-y-como-elaborarlo/"},{tema:"<em>Pitch</em>",referencia:"Benjamin Cox. (2016, junio 9). Como Hacer Un Pitch.",tipo:"Video",link:"https://www.youtube.com/watch?v=554Fwv7jQMI"},{tema:"Scrum",referencia:"Planeta Buhoos. (2021, julio 17). Curso SCRUM desde CERO | Sesión 01 | Buhoos.",tipo:"Video",link:"https://www.youtube.com/watch?v=4UuIE--pspo"}],glosario:[{termino:"Cronograma",significado:"calendario de trabajo o representación gráfica de las distintas actividades de un proyecto."},{termino:"Diagrama de Gantt",significado:"representación gráfica generalmente con barras horizontales de la evolución de un proyecto. Describe las actividades con su fecha de inicio, fecha de finalización y duración."},{termino:"<em>Game Design Document</em>",significado:"síntesis de lo que va a ser el videojuego en sí (concepto, historia, género, número de plataformas, equipo de producción…) y la base de su futuro desarrollo."},{termino:"Guion literario",significado:"documento en el que se expone una narración que ha sido pensada para ser filmada. En él se especifican las acciones y diálogos de los personajes, se da información sobre los escenarios y se incluyen acotaciones para los actores."},{termino:"Guion técnico",significado:"documento que describe de forma detallada las secuencias de imágenes y sonidos que se tienen que capturar en la producción de proyectos como documentales, cortometrajes, películas o anuncios publicitarios entre otros muchos."},{termino:"Monetización",significado:"es el proceso por el que, al entregar un bien o un servicio se recibe una contraprestación, principalmente de carácter económico."},{termino:"Pipeline",significado:"se encarga de administrar el proceso, establecer diferentes fases y adjudicar cargos a los trabajadores o grupos dentro del estudio. Un Pipeline se ejecuta con el fin de organizar todo el proyecto y evitar problemas en cualquier momento de la producción."},{termino:"<em>Pitch document</em>",significado:"es el documento que resume toda la información sobre un juego que se quiera crear. El documento debe contener toda la información importante, de modo que incluso si no se está presente para explicarlo todo, se entienda con claridad."},{termino:"Scrum",significado:"es un marco de gestión de proyectos de metodología ágil que ayuda a los equipos a estructurar y gestionar el trabajo mediante un conjunto de valores, principios y prácticas."},{termino:"<em>Storyboard</em>",significado:"es un conjunto de ilustraciones presentadas de forma secuencial con el objetivo de servir de guía para entender una historia, previsualizar una animación o planificar la estructura de una película."},{termino:"Videojuego",significado:"es una aplicación interactiva orientada al entretenimiento que, a través de ciertos mandos o controles, permite simular experiencias en la pantalla de un televisor, una computadora u otro dispositivo electrónico."}],referencias:[{referencia:"Kramarzewski, A. y De Nucci, E. (2018) <em>Practical Game Design</em>. 1a edición. Packt Publishing."},{referencia:"Donovan. (2018). <em>Replay: la historia de los videojuegos</em>. Héroes de papel."},{referencia:"Schell, J. (2018). <em>The art of game design: a book of lenses</em>. Amsterdam ; Boston: Elsevier/Morgan Kaufmann."},{referencia:"Sutherland Jeff (2013). <em>Scrum. El Arte de Hacer el Doble de Trabajo en la Mitad de Tiempo</em>. Editorial Océano."}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de Línea de Producción",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Carlos Andrés Cortes",cargo:"Instructor",centro:"Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda"},{nombre:"Paola Alexandra Moya Peralta",cargo:"Diseñadora Instruccional",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Daniela Muñoz Bedoya",cargo:"Animador y Productor Multimedia",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Storyboard e Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Blanca Flor Tinoco Torres",cargo:"Diseñador de Contenidos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollador Full-stack",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Emilsen Alfonso Bautista",cargo:"Actividad Didáctica",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Gabriel Urueta Álvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.a73b828a.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.2a9a6ba6.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.f8c1fcf2.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},b400:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-5.0c309cc7.svg"},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.4efff6b5.png"},cf25:function(e,a,n){"use strict";n("fea6")},d756:function(e,a,n){e.exports=n.p+"img/banner-principal.f8a5f3a9.svg"},f53d:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-4.1ccbbebe.svg"},fea6:function(e,a,n){}});
//# sourceMappingURL=app.0d5fc2b6.js.map
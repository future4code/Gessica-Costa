(this.webpackJsonpfutureforms=this.webpackJsonpfutureforms||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(1)),u=n(2),i=n(4),s=n(3),m=(n(13),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.props.pergunta))}}]),n}(r.a.Component)),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"ETAPA 2 - Informa\xe7\xf5es do Ensino Superior"),r.a.createElement(m,{pergunta:"1. Qual o curso?"}),r.a.createElement("input",null),r.a.createElement(m,{pergunta:"2. Qual a unidade de ensino?"}),r.a.createElement("input",null))}}]),n}(r.a.Component),E=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.opcoes.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e)}));return console.log(e[0].key),r.a.createElement("div",null,r.a.createElement("p",null,this.props.pergunta),r.a.createElement("div",null,r.a.createElement("select",null,e)))}}]),n}(r.a.Component),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"ETAPA 1 - Dados gerais"),r.a.createElement("form",null,r.a.createElement(m,{pergunta:"1. Qual o seu nome?"}),r.a.createElement("input",null),r.a.createElement(m,{pergunta:"2. Qual sua idade?"}),r.a.createElement("input",null),r.a.createElement(m,{pergunta:"3. Qual seu email?"}),r.a.createElement("input",null),r.a.createElement(E,{pergunta:"4. Qual a sua escolaridade?",opcoes:["Ensino m\xe9dio incompleto","Ensino m\xe9dio completo","Ensino superior incompleto","Ensino superior completo"]})))}}]),n}(r.a.Component),f=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"ETAPA 3 - Informa\xe7\xf5es gerais de ensino"),r.a.createElement(m,{pergunta:"1. Por que voc\xea n\xe3o terminou um curso de gradua\xe7\xe3o?"}),r.a.createElement("input",null),r.a.createElement(E,{pergunta:"2. Voc\xea fez algum curso complementar?",opcoes:["Curso T\xe9cnico","Curso de Ingl\xeas","Curso de T\xe9cnico e Ingl\xeas","N\xe3o fiz curso complementar"]}))}}]),n}(r.a.Component),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"O formul\xe1rio acabou"),r.a.createElement("p",null,"Obrigada por participar."))}}]),n}(r.a.Component),b=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={secao:1},e.botaoEscolhas=function(){var t=e.state.secao+1;e.setState({secao:t})},e.secaoEscolhida=function(){switch(e.state.secao){case 1:return r.a.createElement(d,null);case 2:return r.a.createElement(p,null);case 3:return r.a.createElement(f,null);case 4:return r.a.createElement(h,null);default:return r.a.createElement("div",null,"Escolha uma Etapa")}},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.secaoEscolhida(),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.botaoEscolhas},"Pr\xf3xima etapa"))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2ba6dcad.chunk.js.map
(this.webpackJsonpinsta4=this.webpackJsonpinsta4||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/favorite-white.042aa417.svg"},function(t,e,a){t.exports=a.p+"static/media/favorite.4c67d875.svg"},function(t,e,a){t.exports=a.p+"static/media/comment_icon.de299b47.svg"},function(t,e,a){t.exports=a.p+"static/media/favoritoBranco.4c218d03.png"},function(t,e,a){t.exports=a.p+"static/media/favoritoPreto.9c1eea50.png"},function(t,e,a){t.exports=a.p+"static/media/share.668fd02c.webp"},function(t,e,a){t.exports=a.p+"static/media/facebook.1c22d02e.png"},function(t,e,a){t.exports=a.p+"static/media/twitter.f1799b91.png"},function(t,e,a){t.exports=a.p+"static/media/instagram.044582a8.png"},,,,,function(t,e,a){t.exports=a(39)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},,,function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(13),i=a.n(r),s=(a(32),a(26)),c=a(3),l=a(4),u=a(6),m=a(5),p=a(7),h=a(1);a(33),a(34);function v(t){return n.a.createElement("div",{className:"icon-container"},n.a.createElement("img",{alt:"Icone",src:t.icone,onClick:t.onClickIcone}),n.a.createElement("p",null,t.valorContador))}var f=a(14),d=a.n(f),C=a(15),g=a.n(C),b=a(16),k=a.n(b),E=a(17),j=a.n(E),I=a(18),O=a.n(I),x=a(19),P=a.n(x),w=(a(35),function(t){function e(){var t,a;Object(c.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={valorComentario:""},a.onChangeComentario=function(t){a.setState({valorComentario:t.target.value})},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(t){return console.log(this.state.valorComentario),n.a.createElement("div",{className:"comment-container"},n.a.createElement("input",{className:"input-comentario",placeholder:"Coment\xe1rio",value:this.state.valorComentario,onChange:this.onChangeComentario}),n.a.createElement("button",{onClick:this.props.aoEnviar},"Enviar"))}}]),e}(o.Component)),y=a(8),U=(a(36),a(20)),F=a.n(U),S=a(21),N=a.n(S),z=a(22),A=a.n(z),T=function(t){function e(){var t,a;Object(c.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).mensagem="Post compartilhado no",a.mensagem2="com a mensagem:",a.state={valorComentario:""},a.onChangeComentario=function(t){a.setState({valorComentario:t.target.value})},a.limpaComentario=function(){a.setState({valorComentario:""})},a.onClickInstagram=function(){console.log(a.mensagem,"Instagram",a.mensagem2,a.state.valorComentario),a.limpaComentario(Object(y.a)(a))},a.onClickFacebook=function(){console.log(a.mensagem,"Facebook",a.mensagem2,a.state.valorComentario),a.limpaComentario(Object(y.a)(a))},a.onClickTwitter=function(){console.log(a.mensagem,"Twitter",a.mensagem2,a.state.valorComentario),a.limpaComentario(Object(y.a)(a))},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"share-container"},n.a.createElement("input",{type:"text",onChange:this.onChangeComentario,value:this.state.valorComentario,placeholder:"Coment\xe1rio"}),n.a.createElement("div",{className:"share-img"},n.a.createElement("img",{onClick:this.onClickInstagram,src:A.a,alt:"\xcdcone do Instagram"}),n.a.createElement("img",{onClick:this.onClickFacebook,src:F.a,alt:"\xcdcone do Facebook"}),n.a.createElement("img",{onClick:this.onClickTwitter,src:N.a,alt:"\xcdcone do Twitter"})))}}]),e}(o.Component),B=a(2);function J(){var t=Object(h.a)(["\n  width: ","\n"]);return J=function(){return t},t}function L(){var t=Object(h.a)(["\n  height: 30px;\n  width: 30px;\n  margin-right: 10px;\n  border-radius: 50%;\n"]);return L=function(){return t},t}function W(){var t=Object(h.a)(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  justify-content: space-between;\n"]);return W=function(){return t},t}function $(){var t=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 10px;\n"]);return $=function(){return t},t}function _(){var t=Object(h.a)(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n"]);return _=function(){return t},t}function q(){var t=Object(h.a)(["\n  border: 1px solid gray;\n  width: 300px;\n  margin-bottom: 10px;\n"]);return q=function(){return t},t}var D=B.a.div(q()),G=B.a.div(_()),H=B.a.div($()),K=B.a.div(W()),M=B.a.img(L()),Q=B.a.img(J(),(function(t){return"big"===t.size?"100%":"small"===t.size?"25px":void 0})),R=function(t){function e(){var t,a;Object(c.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={curtido:!1,numeroCurtidas:0,comentando:!1,numeroComentarios:0,save:!1,compartilhar:!1},a.onClickCurtida=function(){console.log("Curtiu!"),a.setState({curtido:!a.state.curtido}),console.log("this.state.curtido",!a.state.curtido),a.state.curtido?a.setState({numeroCurtidas:a.state.numeroCurtidas-1}):a.setState({numeroCurtidas:a.state.numeroCurtidas+1})},a.onClickComentario=function(){a.setState({comentando:!a.state.comentando})},a.aoEnviarComentario=function(){a.setState({comentando:!1,numeroComentarios:a.state.numeroComentarios+1})},a.onClickSalvo=function(){a.setState({save:!a.state.save})},a.onCLickCompartilhar=function(){a.setState({compartilhar:!a.state.compartilhar})},a.aoCompartilhar=function(){a.setState({compartilhar:!1})},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t,e,a,o;return t=this.state.curtido?g.a:d.a,e=this.state.save?O.a:j.a,this.state.comentando&&(a=n.a.createElement(w,{aoEnviar:this.aoEnviarComentario})),this.state.compartilhar&&(o=n.a.createElement(T,{aoCompartilhar:this.aoCompartilhar})),n.a.createElement(D,null,n.a.createElement(H,null,n.a.createElement(G,null,n.a.createElement(M,{src:this.props.fotoUsuario,alt:"Imagem do usuario"}),n.a.createElement("p",null,this.props.nomeUsuario)),n.a.createElement(M,{onClick:this.onClickSalvo,src:e,alt:"\xcdcone de Salvo"})),n.a.createElement(Q,{size:"big",src:this.props.fotoPost,alt:"Imagem do post"}),n.a.createElement(K,null,n.a.createElement(v,{icone:t,onClickIcone:this.onClickCurtida,valorContador:this.state.numeroCurtidas}),n.a.createElement(Q,{size:"small",onClick:this.onCLickCompartilhar,src:P.a,alt:"\xcdcone de Compartilhamento"}),n.a.createElement(v,{icone:k.a,onClickIcone:this.onClickComentario,valorContador:this.state.numeroComentarios})),o,a)}}]),e}(n.a.Component);function V(){var t=Object(h.a)(["\n  width: 100px;\n  height: 30px;\n  margin-bottom: 10px;\n"]);return V=function(){return t},t}function X(){var t=Object(h.a)(["\n  width: 200px;\n  margin: 5px 0;\n"]);return X=function(){return t},t}var Y=B.a.input(X()),Z=B.a.button(V()),tt=function(t){function e(){var t,a;Object(c.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={pessoas:[{nomeUsuario:"paulinha",fotoUsuario:"https://picsum.photos/50/50?a=1",fotoPost:"https://picsum.photos/200/150?a=2"},{nomeUsuario:"joao",fotoUsuario:"https://picsum.photos/50/50?a=3",fotoPost:"https://picsum.photos/200/150?a=4"},{nomeUsuario:"pedro",fotoUsuario:"https://picsum.photos/50/50?a=5",fotoPost:"https://picsum.photos/200/150?a=6"}],valorInputPessoa:"",valorInputFotoUsuario:"",valorInputFotoPost:""},a.adicionaPessoa=function(){var t=[{nomeUsuario:a.state.valorInputPessoa,fotoUsuario:a.state.valorInputFotoUsuario,fotoPost:a.state.valorInputFotoPost}].concat(Object(s.a)(a.state.pessoas));a.setState({pessoas:t,valorInputPessoa:"",valorInputFotoUsuario:"",valorInputFotoPost:""})},a.onChangeInputPessoa=function(t){a.setState({valorInputPessoa:t.target.value})},a.onChangeInputFotoUsuario=function(t){a.setState({valorInputFotoUsuario:t.target.value})},a.onChangeInputFotoPost=function(t){a.setState({valorInputFotoPost:t.target.value})},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state.pessoas.map((function(t,e){return n.a.createElement(R,{key:e,nomeUsuario:t.nomeUsuario,fotoUsuario:t.fotoUsuario,fotoPost:t.fotoPost})}));return n.a.createElement("div",{className:"app-container"},n.a.createElement(Y,{value:this.state.valorInputPessoa,onChange:this.onChangeInputPessoa,placeholder:"Nome"}),n.a.createElement(Y,{value:this.state.valorInputFotoUsuario,onChange:this.onChangeInputFotoUsuario,placeholder:"Foto Usu\xe1rio"}),n.a.createElement(Y,{value:this.state.valorInputFotoPost,onChange:this.onChangeInputFotoPost,placeholder:"Foto Post"}),n.a.createElement(Z,{onClick:this.adicionaPessoa},"Postar"),n.a.createElement("div",null,t))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[27,1,2]]]);
//# sourceMappingURL=main.fca6eca6.chunk.js.map
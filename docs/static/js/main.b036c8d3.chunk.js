(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),u=(a(20),a(2)),i=a(3),s=a(5),l=a(4),d=a(12),p=a(6),m=a(1),h=a.n(m),f=a(7),v=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.categoria.name,a=e.funk;return r.a.createElement("button",{type:"button","data-testid":"category",onClick:a},t)}}]),a}(r.a.Component),E=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.onClick,n=t.thumbnail,c=t.price,o=t.title,u=t.id;return r.a.createElement("div",{className:"card","data-testid":"product"},r.a.createElement("img",{src:n,alt:o}),r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,o),r.a.createElement("p",null,"R$:"," ",c),r.a.createElement(d.b,{to:"/produto/".concat(u),"data-testid":"product-detail-link"},"Ver Mais"),r.a.createElement("button",{type:"button","data-testid":"product-add-to-cart",onClick:a},"Comprar")))}}]),a}(r.a.Component),b=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"paiFooter"})}}]),a}(r.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"esquerdaContainer"},r.a.createElement("img",{src:"/cart.png",alt:"logo",width:"50px"})),r.a.createElement("div",{className:"direitaContainer"},r.a.createElement(d.b,{"data-testid":"shopping-cart-button",to:"/cart"},"Meu Carrinho de Compras")))}}]),a}(r.a.Component),y="https://api.mercadolibre.com/sites/MLB/categories",j="https://api.mercadolibre.com/sites/MLB/search?",O="https://api.mercadolibre.com/items/";function k(){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"category=").concat(t,"&q=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return q.apply(this,arguments)}function q(){return(q=Object(f.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"category=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return P.apply(this,arguments)}function P(){return(P=Object(f.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"q=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return I.apply(this,arguments)}function I(){return(I=Object(f.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O).concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=a(15);function B(e){var t=e.title,a=e.id,n=e.price,r=localStorage.getItem("cartItems"),c=r?JSON.parse(r):[];if(!c.find((function(e){return e.id===a}))){var o={title:t,id:a,price:n,quantity:1},u=[].concat(Object(M.a)(c),[o]);localStorage.setItem("cartItems",JSON.stringify(u))}}function D(){var e=localStorage.getItem("cartItems");return e?JSON.parse(e):[]}function Q(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]}a(38);var A=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSearch=function(e){var t=e.target.value;n.setState({itemPesquisado:t})},n.selecionarCategoria=function(e){n.setState({categoriaSelecionada:e},(function(){n.setProductByCat()}))},n.searchQuery=function(){n.state.categoriaSelecionada?n.setProductsByCatQuery():n.setProductsByQuery()},n.setProductsByCatQuery=Object(f.a)(h.a.mark((function e(){var t,a,r,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.categoriaSelecionada,r=t.itemPesquisado,e.next=3,S(a,r);case 3:c=e.sent,o=c.results,n.setState({itensEncontrados:o});case 6:case"end":return e.stop()}}),e)}))),n.setProductByCat=Object(f.a)(h.a.mark((function e(){var t,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.categoriaSelecionada,e.next=3,w(t);case 3:a=e.sent,r=a.results,n.setState({itensEncontrados:r});case 6:case"end":return e.stop()}}),e)}))),n.setProductsByQuery=Object(f.a)(h.a.mark((function e(){var t,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.itemPesquisado,e.next=3,N(t);case 3:a=e.sent,r=a.results,n.setState({itensEncontrados:r});case 6:case"end":return e.stop()}}),e)}))),n.state={carregando:!0,categorias:[],categoriaSelecionada:"",itemPesquisado:"",itensEncontrados:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({carregando:!0},Object(f.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:a=t.sent,e.setState({categorias:a,carregando:!1});case 4:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var e=this,t=this.state,a=t.carregando,n=t.categorias,c=t.itensEncontrados;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("div",{className:"paiHome borda"},r.a.createElement("div",{className:"lateralEsquerda filtros borda"},!a&&n.map((function(t){return r.a.createElement(v,{key:t.id,categoria:t,funk:function(){return e.selecionarCategoria(t.id)}})}))),r.a.createElement("div",{className:"centro borda"},r.a.createElement("div",{className:"pesquisa"},r.a.createElement("input",{type:"text","data-testid":"query-input",onChange:function(t){return e.handleSearch(t)}}),r.a.createElement("button",{type:"button","data-testid":"query-button",onClick:function(){return e.searchQuery()}},"Pesquisar")),r.a.createElement("div",{className:"produtos"},c.length?c.map((function(e,t){return r.a.createElement(E,{key:t,item:e,onClick:function(){return B(e)}})})):r.a.createElement("p",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria."))),r.a.createElement("div",{className:"lateralDireita borda"})),r.a.createElement(b,null))}}]),a}(r.a.Component),F=a(16),J=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).plusQtn=function(){n.setState((function(e){return Object(F.a)(Object(F.a)({},e),{},{qtn:e.qtn+1})}))},n.minusQtn=function(){0===n.state.qtn?n.setState({qtn:0}):n.setState((function(e){return Object(F.a)(Object(F.a)({},e),{},{qtn:e.qtn-1})}))},n.state={carregando:!0,produto:{},qtn:1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({carregando:!0},Object(f.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.props.produto,n=a.quantity,e.setState({produto:a,qtn:n,carregando:!1});case 3:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var e=this,t=this.state,a=t.carregando,n=t.produto,c=t.qtn;return r.a.createElement("div",null,a?r.a.createElement("p",null,"Carregando..."):r.a.createElement("div",null,r.a.createElement("p",{"data-testid":"shopping-cart-product-name"},"".concat(n.title," | R$").concat(n.price)),r.a.createElement("button",{type:"button","data-testid":"product-decrease-quantity",onClick:function(){return e.minusQtn()}},"-"),r.a.createElement("p",{"data-testid":"shopping-cart-product-quantity"},c),r.a.createElement("button",{type:"button","data-testid":"product-increase-quantity",onClick:function(){return e.plusQtn()}},"+")))}}]),a}(r.a.Component),$=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={carregando:!0,produtos:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({carregando:!0},Object(f.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D();case 2:a=t.sent,e.setState({produtos:a,carregando:!1});case 4:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var e=this.state,t=e.carregando,a=e.produtos;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"),t?r.a.createElement("p",null,"Carregando..."):r.a.createElement("div",null,a.length?r.a.createElement("div",null,r.a.createElement("h1",null,"Produtos"),a.map((function(e,t){return r.a.createElement(J,{key:t,produto:e})}))):r.a.createElement("p",null,"Seu carrinho est\xe1 vazio")),r.a.createElement(d.b,{"data-testid":"checkout-products",to:"/checkout"},"Finalizar Compra")),r.a.createElement(b,null))}}]),a}(r.a.Component),z=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={carregando:!0,produto:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({carregando:!0},(function(){var t=e.props.produto;e.setState({produto:t,carregando:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.carregando,a=e.produto;return r.a.createElement("div",{key:a.id},t?r.a.createElement("p",null,"Carregando..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("strong",null,a.title)),r.a.createElement("p",null,"Valor Unit\xe1rio: R$",a.price)))}}]),a}(r.a.Component),L=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={carregando:!0,produtos:[],total:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({carregando:!0},Object(f.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D();case 2:a=t.sent,e.setState({produtos:a,carregando:!1},(function(){e.somarProdutos()}));case 4:case"end":return t.stop()}}),t)}))))}},{key:"somarProdutos",value:function(){var e=this.state.produtos.reduce((function(e,t){return e+t.price}),0);this.setState({total:e})}},{key:"render",value:function(){var e=this.state,t=e.carregando,a=e.produtos,n=e.total;return r.a.createElement("div",null,r.a.createElement("h2",null,"Produtos"),t&&r.a.createElement("p",null,"Carregando..."),a.map((function(e,t){return r.a.createElement(z,{key:t,produto:e})})),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Total"),r.a.createElement("p",null,"R$",n)),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Dados Cadastrais"),r.a.createElement("form",{className:"form-horizontal"},r.a.createElement("input",{type:"text",placeholder:"nome completo","data-testid":"checkout-fullname"}),r.a.createElement("input",{type:"text",placeholder:"email","data-testid":"checkout-email"}),r.a.createElement("input",{type:"text",placeholder:"CPF","data-testid":"checkout-cpf"}),r.a.createElement("input",{type:"text",placeholder:"telefone","data-testid":"checkout-phone"}),r.a.createElement("input",{type:"text",placeholder:"CEP","data-testid":"checkout-cep"}),r.a.createElement("input",{type:"text",placeholder:"endere\xe7o","data-testid":"checkout-address"}))))}}]),a}(r.a.Component),V=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).submitReview=function(){var e=n.state,t=e.email,a=e.selectedRate,r=e.textArea,c=e.avaliacoes,o={email:t,selectedRate:a,textArea:r,productId:n.props.match.params.id};!function(e){var t=e.email,a=e.selectedRate,n=e.textArea,r=e.productId,c=localStorage.getItem(r),o=c?JSON.parse(c):[],u={email:t,selectedRate:a,textArea:n},i=[].concat(Object(M.a)(o),[u]);localStorage.setItem(r,JSON.stringify(i))}(o),n.setState({avaliacoes:[].concat(Object(M.a)(c),[o])})},n.state={carregando:!0,rate:["1","2","3","4","5"],selectedRate:"1",produto:{},email:"",textArea:"",avaliacoes:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({carregando:!0},Object(f.a)(h.a.mark((function t(){var a,n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,t.next=3,R(a);case 3:n=t.sent,r=Q(a),e.setState({carregando:!1,produto:n,avaliacoes:r});case 6:case"end":return t.stop()}}),t)}))))}},{key:"render",value:function(){var e=this,t=this.state,a=t.carregando,n=t.produto,c=t.rate,o=t.avaliacoes;return r.a.createElement("div",{className:"pagina-produto"},r.a.createElement(g,null),a?r.a.createElement("h2",null,"Carregando..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"product-detail-name"},n.title),r.a.createElement("h2",null,"R$ ".concat(n.price)),r.a.createElement("img",{src:n.thumbnail,alt:n.title}),r.a.createElement("p",null,n.description),r.a.createElement("p",null,"ID: ".concat(n.id)),r.a.createElement("button",{type:"button","data-testid":"product-detail-add-to-cart",onClick:function(){return B(n)}},"Comprar")),r.a.createElement("div",{className:"formAvaliacao"},r.a.createElement("h2",null,"Avalie o produto"),r.a.createElement("form",null,r.a.createElement("input",{"data-testid":"product-detail-email",type:"email",placeholder:"Email",onChange:function(t){var a=t.target;return e.setState({email:a.value})}}),c.map((function(t,a){return r.a.createElement("label",{key:a,htmlFor:t},t,r.a.createElement("input",{key:a,"data-testid":"".concat(t,"-rating"),type:"radio",id:t,name:"avaliacao",value:t,onChange:function(t){var a=t.target;return e.setState({selectedRate:a.value})}}))})),r.a.createElement("textarea",{"data-testid":"product-detail-evaluation",rows:"5",cols:"33",placeholder:"Comentarios",onChange:function(t){var a=t.target;return e.setState({textArea:a.value})}}),r.a.createElement("button",{"data-testid":"submit-review-btn",type:"button",onClick:function(){return e.submitReview()}},"Enviar"))),r.a.createElement("div",{className:"avaliacoes"},o.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h3",null,e.email),r.a.createElement("p",{key:t},e.textArea),r.a.createElement("p",null,"Nota: ".concat(e.selectedRate)))})))),r.a.createElement(b,null))}}]),a}(r.a.Component),W=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/produto/:id",component:V}),r.a.createElement(p.a,{exact:!0,path:"/cart",component:$}),r.a.createElement(p.a,{exact:!0,path:"/checkout",component:L}),r.a.createElement(p.a,{exact:!0,path:"/",component:A}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b036c8d3.chunk.js.map
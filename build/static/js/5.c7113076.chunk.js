(this.webpackJsonponlineshopdemo=this.webpackJsonponlineshopdemo||[]).push([[5],{124:function(e,t,a){},125:function(e,t,a){"use strict";var r=a(48);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(49)).default)(n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle");t.default=c},126:function(e,t,a){"use strict";var r=a(48);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),c=(0,r(a(49)).default)(n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");t.default=c},168:function(e,t,a){"use strict";a.r(t);var r=a(18),n=a(19),c=a(21),l=a(20),o=a(0),s=a.n(o),i=a(2),m=a(24),u=a(159),d=a(161),p=a(162),f=a(173),h=a(163),E=a(158),g=a(126),y=a.n(g),v=a(125),b=a.n(v),C=a(61),x=a(65),N=(a(124),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).removeItemFromCart=function(e){var t=n.props.products.cart.filter((function(t){return t.name===e.name}));t.length>0&&(t[t.length-1].qty=t[t.length-1].qty-1,e.qty=t[t.length-1].qty,n.props.addItemToCart(e))},n.removeProduct=function(e){var t=n.props.products.cart.filter((function(t){return t.name===e.name}));t.length>0&&(t[t.length-1].qty=t[t.length-1].qty-1,e.qty=0,n.props.addItemToCart(e))},n.addItemFromCart=function(e){var t=n.props.products.cart.filter((function(t){return t.name===e.name}));t.length>0&&(t[t.length-1].qty=t[t.length-1].qty+1,e.qty=t[t.length-1].qty,n.props.addItemToCart(e))},n.displayCart=function(){return n.props.products.cart.map((function(e,t){var a=e.price.actual/e.price.display*100;return s.a.createElement("div",{className:"product-grid",key:e.name},s.a.createElement(u.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start"},s.a.createElement(u.a,{item:!0,xs:12,md:12,lg:12},s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(u.a,{container:!0},s.a.createElement(u.a,{item:!0,xs:6,md:3,lg:3},s.a.createElement("img",{alt:e.name,src:e.image,className:"product-img"})),s.a.createElement(u.a,{item:!0,xs:6,md:3,lg:4},e.name,s.a.createElement("br",null),"\u20b9  ",e.price.actual," ",s.a.createElement("strike",null,e.price.display),s.a.createElement("span",{className:"discount"},Math.round(a),"% off"),s.a.createElement("br",null),s.a.createElement(f.a,{only:["lg"]},s.a.createElement(b.a,{className:"remove-qty",onClick:function(){return n.removeItemFromCart(e)}}),"\xa0",s.a.createElement("span",{className:"prod-qty"},e.qty),"\xa0",s.a.createElement(y.a,{className:"add-qty",onClick:function(){return n.addItemFromCart(e)}}),s.a.createElement("br",null),s.a.createElement(h.a,{onClick:function(){return n.removeProduct(e)}},"REMOVE"))),s.a.createElement(f.a,{only:["xs"]},s.a.createElement(u.a,{item:!0,lg:2,className:"align-middle"},s.a.createElement(b.a,{className:"remove-qty",onClick:function(){return n.removeItemFromCart(e)}}),"\xa0",s.a.createElement("span",{className:"prod-qty"},e.qty),"\xa0",s.a.createElement(y.a,{className:"add-qty",onClick:function(){return n.addItemFromCart(e)}}),s.a.createElement("br",null)),s.a.createElement(u.a,{item:!0,lg:3,className:"align-middle"},s.a.createElement(h.a,{onClick:function(){return n.removeProduct(e)}},"REMOVE")))))))),s.a.createElement("br",null))}))},n.searchProducts=function(e){var t=n.props.products.cart.filter((function(t){return t.name.toLowerCase().includes(e)}));console.log("searchResults: ",t)},n.getTotalPrice=function(e){var t=0,a=0,r=0;return n.props.products.cart.forEach((function(e){t+=e.price.actual*e.qty,a+=e.qty,r+=e.price.display*e.qty})),s.a.createElement("div",{className:"product-grid"},s.a.createElement(u.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start"},s.a.createElement(u.a,{item:!0,xs:12,md:12,lg:12},s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(u.a,{container:!0},s.a.createElement(u.a,{item:!0,xs:12,md:12,lg:12,className:"price-details-label"},"PRICE DETAILS"),s.a.createElement(u.a,{container:!0,className:"total-products-label"},s.a.createElement(u.a,{item:!0,xs:8,md:8,lg:8},"Price (",a,"  items) :"),s.a.createElement(u.a,{item:!0,xs:4,md:4,lg:4},"\u20b9 ",r)),s.a.createElement(u.a,{container:!0,className:"total-discount-label"},s.a.createElement(u.a,{item:!0,xs:8,md:8,lg:8},"Discount  :"),s.a.createElement(u.a,{item:!0,xs:4,md:4,lg:4},"\u20b9 ",r-t)),s.a.createElement(u.a,{container:!0},s.a.createElement(u.a,{item:!0,xs:8,md:8,lg:8,className:"total-payable-label"},"Total Payable"),s.a.createElement(u.a,{item:!0,xs:4,md:4,lg:4},"\u20b9 ",t))))))),s.a.createElement("br",null))},n.addProduct=function(e){n.props.history.push("/")},n.state={errors:{}},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(o.Fragment,null,s.a.createElement(C.a,{cart:this.props.cart,searchProducts:this.searchProducts}),s.a.createElement("div",{className:"main-container"},s.a.createElement(E.a,{className:"cart-container",variant:"h6",style:{flexGrow:1}},s.a.createElement(u.a,{container:!0},s.a.createElement(u.a,{item:!0,xs:12,md:8,className:"cart-list"},this.props.products.cart&&this.displayCart()),s.a.createElement(u.a,{item:!0,md:4},this.props.products.cart.length>0&&this.getTotalPrice())),0===this.props.products.cart.length&&s.a.createElement(u.a,{container:!0},s.a.createElement(u.a,{item:!0,xs:12,md:12,lg:12,className:"empty-cart"},"Cart is empty"),s.a.createElement(u.a,{item:!0,xs:12,md:12,lg:12,className:"add-product"},s.a.createElement(h.a,{onClick:function(){return e.addProduct()}},"Click here to add Product"))))))}}]),a}(o.Component)),P={addItemToCart:x.a,dispatchErrors:x.b,resetCart:x.d};t.default=Object(i.g)(Object(m.b)((function(e){return{errors:e.errors,products:e.products,cart:e.products.cart}}),P)(N))},61:function(e,t,a){"use strict";var r=a(23),n=a(18),c=a(19),l=a(21),o=a(20),s=a(0),i=a.n(s),m=a(2),u=a(153),d=a(158),p=a(159),f=a(160),h=a(171),E=a(81),g=a.n(E),y=a(80),v=a.n(y),b=a(76),C=a.n(b),x=(a(62),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).toggleDrawer=function(){c.props.history.push("/home")},c.getProductCount=function(){var e=0;return c.props.cart.forEach((function(t){e+=t.qty})),e},c.onChange=function(e){c.setState(Object(r.a)({},e.target.name,e.target.value),(function(){return c._searchProducts()}))},c._searchProducts=function(e){var t=c.state.searchText;c.props.searchProducts(t)},c.state={searchText:""},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.searchText;return i.a.createElement(u.a,{className:"header-container"},i.a.createElement(d.a,{variant:"h6",style:{flexGrow:1}},i.a.createElement(p.a,{container:!0},i.a.createElement(p.a,{item:!0,xs:2,md:1},i.a.createElement(f.a,{className:"icon-btn",onClick:this.toggleDrawer,edge:"start",color:"inherit","aria-label":"Menu"},i.a.createElement(C.a,null))),i.a.createElement(p.a,{item:!0,xs:1,md:8,className:"site-name"},"\xa0"),i.a.createElement(p.a,{item:!0,xs:9,md:3,className:"right-btns"},i.a.createElement(h.a,{placeholder:"Search",disableUnderline:!0,name:"searchText",onChange:this.onChange,value:t,inputProps:{"aria-label":"search"}}),i.a.createElement(v.a,{className:"icon-spacing",onClick:this._searchProducts}),i.a.createElement(g.a,{onClick:function(){return e.props.history.push("./cart")},className:"icon-spacing"}),this.props.cart.length>0&&i.a.createElement("span",{className:"cart-items-cnt"},this.getProductCount())))))}}]),a}(s.Component));t.a=Object(m.g)(x)},62:function(e,t,a){},65:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return m}));var r=a(82),n=a.n(r),c=a(11),l=function(){return function(e){e({type:c.d,payload:!0});n.a.get("https://api.jsonbin.io/b/5f6b6cd665b18913fc51f71f").then((function(t){e({type:c.c,payload:t.data.items}),e({type:c.d,payload:!1})})).catch((function(t){var a;a={message:"Products fetching error"},e({type:c.b,payload:a}),e({type:c.d,payload:!1})}))}},o=function(e){return function(t){t({type:c.a,payload:e})}},s=function(e){return function(t){t({type:c.c,payload:e})}},i=function(){return function(e){e({type:c.e,payload:[]})}},m=function(e){return{type:c.b,payload:e}}}}]);
//# sourceMappingURL=5.c7113076.chunk.js.map
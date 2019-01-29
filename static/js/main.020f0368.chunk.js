(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(46)},23:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n,s=a(0),o=a.n(s),l=a(15),c=a.n(l),i=a(2),r=a(3),m=a(5),u=a(4),d=a(6),f=(a(23),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onScroll=function(){var e=a.state.smallNav,t=window.scrollY>=100;e!==t&&a.setState({smallNav:t})},a.state={smallNav:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar is-dark is-fixed-top",role:"navigation","aria-label":"main navigation",style:{boxShadow:"1px 1px 6px #ababab"}},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("a",{className:"navbar-item alq-navbar__logo ".concat(this.state.smallNav?"alq-navbar__logo_small":""),href:"#"},"A-La Quote!")),o.a.createElement("div",{className:"navbar-end"},o.a.createElement("div",{className:"navbar-item"},o.a.createElement("div",{className:"control has-icons-left has-icons-right"},o.a.createElement("input",{className:"input ".concat(this.state.smallNav?"is-small":""),type:"text"}),o.a.createElement("span",{className:"icon is-small is-left"},o.a.createElement("i",{className:"fas fa-search"}))))))}}]),t}(o.a.Component)),v=a(8),h=a(16),p=a.n(h);a(44);function E(e){switch(e.source){case n.BOOK:return"fa-book";case n.TV:return"fa-tv";case n.MOVIE:return"fa-film"}}!function(e){e.BOOK="BOOK",e.TV="TV",e.MOVIE="MOVIE"}(n||(n={}));var g=function(e){var t=e.quote;return t?o.a.createElement("div",{className:"card alq-quote__container",style:{marginBottom:"16px"}},t.image&&o.a.createElement("div",{className:"card-image"},o.a.createElement("figure",{className:"image is-2by1"},o.a.createElement("img",{src:t.image,alt:"quote image"}))),o.a.createElement("div",{className:"card-content"},o.a.createElement("p",{className:"title alq-quote__content"},'"',t.content,'"'),o.a.createElement("small",{className:"subtitle alq-quote__author"},t.author,t.author?", ":null,t.appearsIn),"\xa0",o.a.createElement("span",{className:"icon is-small"},o.a.createElement("i",{className:"fas "+E(t)})))):o.a.createElement("div",null,"Bad prop received")},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).axiosGQL=void 0,a.pageSize=3,a.onScroll=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight&&a.loadQuotes()},a.state={loading:!1,noMore:!1,quotes:[]},a.axiosGQL=p.a.create({baseURL:"http://localhost:4000/graphql"}),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll),this.loadQuotes()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"loadQuotes",value:function(){var e=this,t=this.state.loading,a=this.state.noMore;t||a||(this.setState({loading:!0}),this.axiosGQL.post("",{query:this.getQuoteQuery()}).then(function(t){var a=t.data.data.paginatedQuotes;e.setState({loading:!1,quotes:[].concat(Object(v.a)(e.state.quotes),Object(v.a)(a.quotes)),noMore:e.state.quotes.length>=a.total})},function(){e.setState({loading:!1})}))}},{key:"getQuoteQuery",value:function(){return"\n        {\n            paginatedQuotes(first: ".concat(this.pageSize,", \n                offset: ").concat(this.state.quotes.length,"\n            ) {\n            total\n            quotes {\n                appearsIn\n                author\n                content\n                image\n                source\n                }\n            }\n        }")}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.quotes.map(function(e){return o.a.createElement(g,{key:e.content,quote:e})}),this.state.loading&&o.a.createElement("span",{className:"icon is-large",style:{margin:"0 auto",display:"block"}},o.a.createElement("i",{className:"fas fa-spinner fa-spin fa-3x"})),this.state.noMore&&o.a.createElement("article",{className:"message is-info"},o.a.createElement("div",{className:"message-header"},o.a.createElement("p",null,"This is the end")),o.a.createElement("div",{className:"message-body"},"Oh jeez! You've reached the end for today, Morty!")))}}]),t}(o.a.Component);c.a.render(o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("section",{className:"container",style:{marginTop:"100px"}},o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column is-three-fifths is-offset-one-fifth"},o.a.createElement(b,null)))))},null),document.querySelector("#root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.020f0368.chunk.js.map
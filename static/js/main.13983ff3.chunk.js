(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),l=a(2),o=a(13),s=a.n(o);function m(e){var t,a=e.title,n=e.poster_path,c=e.overview,i=e.vote_average;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:n?"https://image.tmdb.org/t/p/w1280"+n:"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80} alt={title}",alt:a}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h3",null,a),r.a.createElement("span",{className:(t=i,t>=8?"green":t>=6?"orange":"red")},i)),r.a.createElement("div",{className:"overview"},r.a.createElement("h2",null,"Overview"),r.a.createElement("p",null,c)))}a(36);var u=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),u=o[0],p=o[1];Object(n.useEffect)((function(){v("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")}),[]);var v=function(e){s.a.get(e).then((function(e){c(e.data.results)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p&&(v("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+u),p(""))}},r.a.createElement("input",{className:"search",type:"text",placeholder:"Search...",value:u,onChange:function(e){p(e.target.value)}}))),r.a.createElement("div",{className:"movie-container"},a.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.13983ff3.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[347],{4845:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(885),i=n(2791),c=n(2944),r=n(6871),s={article:"MovieDetails_article__-aoPZ",img:"MovieDetails_img__D3WH9",movieTitle:"MovieDetails_movieTitle__qwoTW",tittle:"MovieDetails_tittle__CL9ix",text:"MovieDetails_text__uG5Tv"},o=n(184);function l(e){var t=e.movie,n=t.release_date,a=t.original_title,i=t.overview,c=t.genres,r=t.vote_average,l=t.poster_path;return(0,o.jsxs)("article",{className:s.article,children:[(0,o.jsx)("img",{className:s.img,src:"https://image.tmdb.org/t/p/w500/".concat(l),alt:"poster ".concat(a),width:"300"}),(0,o.jsxs)("div",{className:s.wrap,children:[(0,o.jsxs)("h2",{className:s.movieTitle,children:[a," (",new Date(n).getFullYear(),")"]}),(0,o.jsx)("p",{className:s.text,children:"User Score: ".concat(10*r,"%")}),(0,o.jsx)("span",{className:s.tittle,children:"Overview"}),(0,o.jsx)("p",{className:s.text,children:i}),(0,o.jsx)("span",{className:s.tittle,children:"Genres"}),(0,o.jsx)("p",{className:s.text,children:c.map((function(e){return e.name})).join(", ")})]})]})}var u=n(501),d="Additional_wrap__IGH-8",_="Additional_tittle__naqnR",m="Additional_list__rTj+p",v="Additional_item__HS-ND",h="Additional_link__nJqCk";function f(){return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("h3",{className:_,children:"Additional information"}),(0,o.jsxs)("ul",{className:m,children:[(0,o.jsx)("li",{className:v,children:(0,o.jsx)(u.rU,{className:h,to:"cast",children:"Cast"})}),(0,o.jsx)("li",{className:v,children:(0,o.jsx)(u.rU,{className:h,to:"reviews",children:"Reviews"})})]}),(0,o.jsx)(r.j3,{})]})}var p="GoBackBtn_btn__S5ROr";function x(){var e,t=(0,r.s0)(),n=(0,r.TH)(),a=(0,i.useRef)(null===(e=n.state)||void 0===e?void 0:e.from);return(0,o.jsx)("button",{className:p,type:"button",onClick:function(){t("".concat(a.current),{replace:!1})},children:"\u2190 Go back"})}function j(){var e=(0,r.UO)().id,t=(0,i.useState)(null),n=(0,a.Z)(t,2),s=n[0],u=n[1];if((0,i.useEffect)((function(){(0,c.Y5)(e).then((function(e){return u(e)}))}),[e]),s)return(0,o.jsxs)("main",{children:[(0,o.jsx)(x,{}),(0,o.jsx)(l,{movie:s}),(0,o.jsx)(f,{})]})}},2944:function(e,t,n){n.d(t,{Hx:function(){return u},I2:function(){return d},Y5:function(){return o},uV:function(){return l},zR:function(){return s}});var a=n(4569),i=n.n(a),c="164eadb7baae3a4c5cb507a1aca52aae",r="https://api.themoviedb.org/3/";function s(){return i()("".concat(r,"trending/movie/day?api_key=").concat(c)).then((function(e){return e.data.results}))}function o(e){return i()("".concat(r,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US")).then((function(e){return e.data}))}function l(e){return i()("".concat(r,"movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US")).then((function(e){return e.data.cast}))}function u(e){return i()("".concat(r,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(e){return e.data.results}))}var d=function(e){return i()("".concat(r,"search/movie?api_key=").concat(c,"&language=en-US&query=").concat(e)).then((function(e){return e.data.results}))}}}]);
//# sourceMappingURL=movie-details-page.4406d438.chunk.js.map
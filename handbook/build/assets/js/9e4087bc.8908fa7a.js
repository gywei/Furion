"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3608,613],{3012:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var a=r(7294),l=r(4328),n=r(6742),o=r(4973);function c(e){var t=e.year,r=e.posts;return a.createElement(a.Fragment,null,a.createElement("h3",null,t),a.createElement("ul",null,r.map((function(e){return a.createElement("li",{key:e.metadata.date},a.createElement(n.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function m(e){var t=e.years;return a.createElement("section",{className:"margin-vert--lg"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},a.createElement(c,e))})))))}function i(e){var t,r,n=e.archive,c=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),i=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=(t=n.blogPosts,r=t.reduceRight((function(e,t){var r=t.metadata.date.split("-")[0],a=e.get(r)||[];return e.set(r,[t].concat(a))}),new Map),Array.from(r,(function(e){return{year:e[0],posts:e[1]}})));return a.createElement(l.Z,{title:c,description:i},a.createElement("header",{className:"hero hero--primary"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},c),a.createElement("p",{className:"hero__subtitle"},i))),a.createElement("main",null,s.length>0&&a.createElement(m,{years:s})))}},546:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(7462),l=r(3366),n=r(7294),o=r(6010),c=r(6742),m=r(941),i=r(4996),s="footerLogoLink_qW4Z",u=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,r=e.href,o=e.label,m=e.prependBaseUrlToHref,s=(0,l.Z)(e,u),f=(0,i.Z)(t),h=(0,i.Z)(r,{forcePrependBaseUrl:!0});return n.createElement(c.Z,(0,a.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:m?h:r}:{to:f},s),o)}var h=function(e){var t=e.url,r=e.alt;return n.createElement("img",{className:"footer__logo",alt:r,src:t,style:{background:"#fff",padding:"5px 10px"}})};var d=function(){var e=(0,m.LU)().footer,t=e||{},r=t.copyright,a=t.links,l=void 0===a?[]:a,c=t.logo,u=void 0===c?{}:c,d=(0,i.Z)(u.src);return e?n.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(f,e))}))):null)}))),(u||r)&&n.createElement("div",{className:"footer__bottom text--center"},u&&u.src&&n.createElement("div",{className:"margin-bottom--sm"},u.href?n.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:s},n.createElement(h,{alt:u.alt,url:d})):n.createElement(h,{alt:u.alt,url:d})),r?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null))):null}}}]);
(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1689],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,x=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?t.createElement(x,s(s({ref:n},c),{},{components:r})):t.createElement(x,s({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4528:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var t=r(4034),o=r(9973),i=(r(7294),r(3905)),s={id:"linqexpression",title:"5. LinqExpression \u9759\u6001\u7c7b",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b"},a=void 0,p={unversionedId:"global/linqexpression",id:"global/linqexpression",isDocsHomePage:!1,title:"5. LinqExpression \u9759\u6001\u7c7b",description:"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",source:"@site/docs/global/linqexpression.mdx",sourceDirName:"global",slug:"/global/linqexpression",permalink:"/furion/docs/global/linqexpression",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/linqexpression.mdx",version:"current",lastUpdatedBy:"\u82df\u5229\u56fd",lastUpdatedAt:1617873907,formattedLastUpdatedAt:"4/8/2021",frontMatter:{id:"linqexpression",title:"5. LinqExpression \u9759\u6001\u7c7b",sidebar_label:"5. LinqExpression \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"4. Oops \u9759\u6001\u7c7b",permalink:"/furion/docs/global/oops"},next:{title:"6. Http \u9759\u6001\u7c7b",permalink:"/furion/docs/global/shttp"}},l=[{value:"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",id:"51-\u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f",children:[]},{value:"5.2 \u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f",id:"52-\u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f",children:[]}],c={toc:l};function u(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"51-\u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f"},"5.1 \u521b\u5efa\u4e00\u4e2a\u8868\u8fbe\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var expression = LinqExpression.Create<T>(u => u.Id == 1);\nvar expression2 = LinqExpression.Create<T>((u,i) => u.Id == 1 && i > 0);\n")),(0,i.kt)("h2",{id:"52-\u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f"},"5.2 \u62fc\u63a5\u4e24\u4e2a\u8868\u8fbe\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u521b\u5efa\u4e00\u4e2a\u521d\u59cb\u5316\u7684\u8868\u8fbe\u5f0f\nvar expression = LinqExpression.And();\nvar expression2 = LinqExpression.IndexAnd();\nvar expression3 = LinqExpression.Or();\nvar expression4 = LinqExpression.IndexOr();\n\n// \u62fc\u63a5\u8868\u8fbe\u5f0f\nvar expression5 = expression.And(expression2);\nvar expression6 = expression.AndIf(age > 18, expression2);\nvar expression7 = expression.Or(expression2);\nvar expression8 = expression.OrIf(age > 18, expression2);\n\n// \u83b7\u53d6\u8868\u8fbe\u5f0f\u5c5e\u6027\u540d\nvar properyName = expression.GetExpressionPropertyName(u => u.Name);    // Name\n")))}u.isMDXComponent=!0}}]);
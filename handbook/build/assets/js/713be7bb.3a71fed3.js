(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6696],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,y=c["".concat(l,".").concat(p)]||c[p]||d[p]||i;return t?a.createElement(y,o(o({ref:n},m),{},{components:t})):a.createElement(y,o({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(7294),r=t(944),i=t(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var m=function(e){var n=e.lazy,t=e.block,m=e.defaultValue,d=e.values,c=e.groupId,p=e.className,y=(0,r.Z)(),g=y.tabGroupChoices,v=y.setTabGroupChoices,k=(0,a.useState)(m),h=k[0],N=k[1],b=a.Children.toArray(e.children),f=[];if(null!=c){var C=g[c];null!=C&&C!==h&&d.some((function(e){return e.value===C}))&&N(C)}var I=function(e){var n=e.currentTarget,t=f.indexOf(n),a=d[t].value;N(a),null!=c&&(v(c,a),setTimeout((function(){var e,t,a,r,i,o,l,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,t>=0&&i<=u&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},D=function(e){var n,t;switch(e.keyCode){case u:var a=f.indexOf(e.target)+1;t=f[a]||f[0];break;case l:var r=f.indexOf(e.target)-1;t=f[r]||f[f.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===n}),key:n,ref:function(e){return f.push(e)},onKeyDown:D,onFocus:I,onClick:I},t)}))),n?(0,a.cloneElement)(b.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},9443:function(e,n,t){"use strict";var a=(0,t(7294).createContext)(void 0);n.Z=a},944:function(e,n,t){"use strict";var a=t(7294),r=t(9443);n.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},2369:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var a=t(4034),r=t(9973),i=(t(7294),t(3905)),o=(t(4996),t(1395)),s=t(8215),l={id:"dbcontext-hight-query",title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c"},u=void 0,m={unversionedId:"dbcontext-hight-query",id:"dbcontext-hight-query",isDocsHomePage:!1,title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",description:"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b",source:"@site/docs/dbcontext-high-query.mdx",sourceDirName:".",slug:"/dbcontext-hight-query",permalink:"/furion/docs/dbcontext-hight-query",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext-high-query.mdx",version:"current",lastUpdatedBy:"Wogoo",lastUpdatedAt:1625800467,formattedLastUpdatedAt:"7/9/2021",frontMatter:{id:"dbcontext-hight-query",title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.10 \u67e5\u8be2\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-query"},next:{title:"9.12 \u89c6\u56fe\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-view"}},d=[{value:"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b",id:"9111-\u5173\u8054\u6570\u636e\u6a21\u578b",children:[]},{value:"9.11.2 \u4e00\u5bf9\u4e00\u67e5\u8be2",id:"9112-\u4e00\u5bf9\u4e00\u67e5\u8be2",children:[]},{value:"9.11.3 \u4e00\u5bf9\u591a\u67e5\u8be2",id:"9113-\u4e00\u5bf9\u591a\u67e5\u8be2",children:[]},{value:"9.11.4 \u591a\u5bf9\u591a\u67e5\u8be2",id:"9114-\u591a\u5bf9\u591a\u67e5\u8be2",children:[]},{value:"9.11.5 \u8054\u8868\u67e5\u8be2",id:"9115-\u8054\u8868\u67e5\u8be2",children:[{value:"9.11.5.1 \u5185\u8fde\u63a5 <code>Inner Join</code>",id:"91151-\u5185\u8fde\u63a5-inner-join",children:[]},{value:"9.11.5.2 \u5de6\u8fde\u63a5 <code>Left Join</code>",id:"91152-\u5de6\u8fde\u63a5-left-join",children:[]},{value:"9.11.5.3 \u53f3\u8fde\u63a5 <code>Right Join</code>",id:"91153-\u53f3\u8fde\u63a5-right-join",children:[]}]},{value:"9.11.6 \u5206\u7ec4\u67e5\u8be2",id:"9116-\u5206\u7ec4\u67e5\u8be2",children:[]},{value:"9.11.7 \u5408\u5e76\u7ed3\u679c\u96c6",id:"9117-\u5408\u5e76\u7ed3\u679c\u96c6",children:[]},{value:"9.11.8 \u67e5\u8be2\u6392\u5e8f",id:"9118-\u67e5\u8be2\u6392\u5e8f",children:[{value:"9.11.8.1 \u6b63\u5e8f",id:"91181-\u6b63\u5e8f",children:[]},{value:"9.11.8.2 \u5012\u5e8f",id:"91182-\u5012\u5e8f",children:[]},{value:"9.11.8.3 \u6df7\u5408\u5012\u5e8f",id:"91183-\u6df7\u5408\u5012\u5e8f",children:[]}]},{value:"9.11.9 \u9012\u5f52\u67e5\u8be2",id:"9119-\u9012\u5f52\u67e5\u8be2",children:[]},{value:"9.11.10 \u52a8\u6001 <code>Sql</code> \u67e5\u8be2",id:"91110-\u52a8\u6001-sql-\u67e5\u8be2",children:[{value:"9.11.10.1 \u52a8\u6001 <code>Sql</code>",id:"911101-\u52a8\u6001-sql",children:[]},{value:"9.11.10.2 \u52a8\u6001 <code>Lambda</code>",id:"911102-\u52a8\u6001-lambda",children:[]}]},{value:"9.11.11 \u65f6\u6001\u67e5\u8be2",id:"91111-\u65f6\u6001\u67e5\u8be2",children:[]},{value:"9.11.12 \u6027\u80fd\u4f18\u5316",id:"91112-\u6027\u80fd\u4f18\u5316",children:[]},{value:"9.11.13 \u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",id:"91113-\u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",children:[]},{value:"9.11.14 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"91114-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],c={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"9111-\u5173\u8054\u6570\u636e\u6a21\u578b"},"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b"),(0,i.kt)(o.Z,{defaultValue:"person",values:[{label:"Person",value:"person"},{label:"PersonDetail",value:"person-detail"},{label:"Children",value:"children"},{label:"Post",value:"post"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"person",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{38,43,48}","{38,43,48}":!0},"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace Furion.Core\n{\n    public class Person : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [MaxLength(32)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n\n        /// <summary>\n        /// \u4ece\u8868\n        /// </summary>\n        public PersonDetail PersonDetail { get; set; }\n\n        /// <summary>\n        /// \u4e00\u5bf9\u591a\n        /// </summary>\n        public ICollection<Children> Childrens { get; set; }\n\n        /// <summary>\n        /// \u591a\u5bf9\u591a\n        /// </summary>\n        public ICollection<Post> Posts { get; set; }\n    }\n}\n"))),(0,i.kt)(s.Z,{value:"person-detail",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{25}","{25}":!0},"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class PersonDetail : EntityBase\n    {\n        /// <summary>\n        /// \u7535\u8bdd\u53f7\u7801\n        /// </summary>\n        public string PhoneNumber { get; set; }\n\n        /// <summary>\n        /// QQ \u53f7\u7801\n        /// </summary>\n        public string QQ { get; set; }\n\n        /// <summary>\n        /// \u5916\u952e\n        /// </summary>\n        public int PersonId { get; set; }\n\n        /// <summary>\n        /// \u4e3b\u8868\n        /// </summary>\n        public Person Person { get; set; }\n    }\n}\n"))),(0,i.kt)(s.Z,{value:"children",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{35}","{35}":!0},"using Furion.DatabaseAccessor;\nusing System;\n\nnamespace Furion.Core\n{\n    public class Children : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Children()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u6027\u522b\n        /// </summary>\n        public Gender Gender { get; set; }\n\n        /// <summary>\n        /// \u5916\u952e\n        /// </summary>\n        public int PersonId { get; set; }\n\n        /// <summary>\n        /// \u4e3b\u8868\n        /// </summary>\n        public Person Person { get; set; }\n    }\n}\n"))),(0,i.kt)(s.Z,{value:"post",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{26}","{26}":!0},"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Post : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Post()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// Person \u96c6\u5408\n        /// </summary>\n        public ICollection<Person> Persons { get; set; }\n    }\n}\n")))),(0,i.kt)("h2",{id:"9112-\u4e00\u5bf9\u4e00\u67e5\u8be2"},"9.11.2 \u4e00\u5bf9\u4e00\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Detail);\n\n// \u793a\u4f8b\u4e8c\nvar person = repository.Include(u => u.Detail)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u4e09\nvar person = repository.Include(u => u.Detail)\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u56db\nvar person = repository.Include(u => u.Detail.Where(d => d.Id > 10).OrderBy(d => d.Name))\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u4e94\nvar person = repository.Include(!string.IsNullOrEmpty(keyword), u => u.Detail);\n\n// \u793a\u4f8b\u516d\nvar person = repository.Include(!string.IsNullOrEmpty(keyword), u => u.Detail)\n                       .Include(age > 18, u => u.Detail.Where(d => d.Id > 10).OrderBy(d => d.Name))\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n")),(0,i.kt)("h2",{id:"9113-\u4e00\u5bf9\u591a\u67e5\u8be2"},"9.11.3 \u4e00\u5bf9\u591a\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Childrens);\n\n// \u53c2\u8003 \u4e00\u5bf9\u4e00 \u4f8b\u5b50\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u4e00")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u591a")," \u67e5\u8be2\u65b9\u6cd5\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u591a")," \u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICollection<TEntity>")," \u5b9a\u4e49\u5c5e\u6027\u3002"))),(0,i.kt)("h2",{id:"9114-\u591a\u5bf9\u591a\u67e5\u8be2"},"9.11.4 \u591a\u5bf9\u591a\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Posts);\n\n// \u53c2\u8003 \u4e00\u5bf9\u4e00 \u4f8b\u5b50\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u4e00")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u591a\u5bf9\u591a")," \u67e5\u8be2\u65b9\u6cd5\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"\u591a\u5bf9\u591a")," \u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICollection<TEntity>")," \u5b9a\u4e49\u5c5e\u6027\u3002"))),(0,i.kt)("h2",{id:"9115-\u8054\u8868\u67e5\u8be2"},"9.11.5 \u8054\u8868\u67e5\u8be2"),(0,i.kt)("h3",{id:"91151-\u5185\u8fde\u63a5-inner-join"},"9.11.5.1 \u5185\u8fde\u63a5 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Inner Join")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var query = from p in _personRepository.AsQueryable()\n            join d in _personDetailRepository.AsQueryable() on p.Id equals d.PersonId\n            select new PersonDto\n            {\n                PhoneNumber = p.PersonDetail.PhoneNumber,\n                Address = p.Address,\n                Age = p.Age,\n                Name = p.Name,\n                Id = p.Id,\n                QQ = p.PersonDetail.QQ\n            };\n")),(0,i.kt)("h3",{id:"91152-\u5de6\u8fde\u63a5-left-join"},"9.11.5.2 \u5de6\u8fde\u63a5 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Left Join")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,3}","{2,3}":!0},"var query = from p in _personRepository.AsQueryable()\n            join d in _personDetailRepository.AsQueryable() on p.Id equals d.PersonId into results\n            from d in results.DefaultIfEmpty()\n            select new PersonDto\n            {\n                PhoneNumber = p.PersonDetail.PhoneNumber,\n                Address = p.Address,\n                Age = p.Age,\n                Name = p.Name,\n                Id = p.Id,\n                QQ = p.PersonDetail.QQ\n            };\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5c0f\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Left Join"))," \u548c ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Inner Join"))," \u4e0d\u540c\u7684\u662f\uff0c",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Left Join"))," \u4f1a\u5148\u5c06\u7ed3\u679c ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"into"))," \u5230\u65b0\u7684\u7ed3\u679c\u96c6\u7136\u540e\u518d\u67e5\u8be2\uff0c\u5e76\u8c03\u7528 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"DefaultIfEmpty()"))," \u65b9\u6cd5\u3002"))),(0,i.kt)("h3",{id:"91153-\u53f3\u8fde\u63a5-right-join"},"9.11.5.3 \u53f3\u8fde\u63a5 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Right Join")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Right Join")," \u53ea\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Left Join")," \u4e3b\u4ece\u8868\u4f4d\u7f6e\u66f4\u6362\u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"9116-\u5206\u7ec4\u67e5\u8be2"},"9.11.6 \u5206\u7ec4\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable().GroupBy(x => new { x.Column1, x.Column2 });\n\n// \u793a\u4f8b\u4e8c\nvar query = from student in repository.AsQueryable()\n            group student by repository2.AsQueryable() into dateGroup\n            select new ResultData()\n            {\n                Key = dateGroup.Key,\n                Value = dateGroup.Count()\n            };\n\n// \u793a\u4f8b\u4e09\nvar query = from a in repository.AsQueryable()\n            join b in repository2.AsQueryable() on a.Id equals b.Aid\n            join c in repository3.AsQueryable() on c.id equals b.Bid\n            group emp by new { emp.Age, emp.Sex } into g\n            select new {\n                Peo = g.Key,\n                Count = g.Count()\n            };\n")),(0,i.kt)("h2",{id:"9117-\u5408\u5e76\u7ed3\u679c\u96c6"},"9.11.7 \u5408\u5e76\u7ed3\u679c\u96c6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var query = repository.AsQueryable(u => u.Id > 10)\n                      .Union(\n                          repository2.AsQueryable(u => u.Id <= 10)\n                      );\n")),(0,i.kt)("h2",{id:"9118-\u67e5\u8be2\u6392\u5e8f"},"9.11.8 \u67e5\u8be2\u6392\u5e8f"),(0,i.kt)("h3",{id:"91181-\u6b63\u5e8f"},"9.11.8.1 \u6b63\u5e8f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderBy(u => u.Id);\n\n// \u793a\u4f8b\u4e8c\nvar query =repository.AsQueryable()\n                     .OrderBy(u => u.Id)\n                     .ThenBy(u => u.Name);\n")),(0,i.kt)("h3",{id:"91182-\u5012\u5e8f"},"9.11.8.2 \u5012\u5e8f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderByDescending(u => u.Id);\n\n// \u793a\u4f8b\u4e8c\nvar query =repository.AsQueryable()\n                     .OrderByDescending(u => u.Id)\n                     .ThenByDescending(u => u.Name);\n")),(0,i.kt)("h3",{id:"91183-\u6df7\u5408\u5012\u5e8f"},"9.11.8.3 \u6df7\u5408\u5012\u5e8f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderBy(u => u.Id)\n                      .OrderByDescending(u => u.Name)\n                      .ThenBy(u => u.Age);\n")),(0,i.kt)("h2",{id:"9119-\u9012\u5f52\u67e5\u8be2"},"9.11.9 \u9012\u5f52\u67e5\u8be2"),(0,i.kt)(o.Z,{defaultValue:"city",values:[{label:"City",value:"city"},{label:"CityDto",value:"citydto"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"city",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{12,36,41,49-55}","{12,36,41,49-55}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// \u57ce\u5e02\n    /// </summary>\n    public class City : Entity, IEntityTypeBuilder<City>, IEntitySeedData<City>\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public City()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u4e0a\u7ea7Id\n        /// </summary>\n        public int? ParentId { get; set; }\n\n        /// <summary>\n        /// \u4e0a\u7ea7\n        /// </summary>\n        public virtual City Parent { get; set; }\n\n        /// <summary>\n        /// \u5b50\u96c6\n        /// </summary>\n        public virtual ICollection<City> Childrens { get; set; }\n\n        /// <summary>\n        /// \u914d\u7f6e\u5b9e\u4f53\u5173\u7cfb\n        /// </summary>\n        /// <param name="entityBuilder"></param>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        public void Configure(EntityTypeBuilder<City> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder\n                .HasMany(x => x.Childrens)\n                .WithOne(x => x.Parent)\n                .HasForeignKey(x => x.ParentId)\n                .OnDelete(DeleteBehavior.ClientSetNull); // \u5fc5\u987b\u8bbe\u7f6e\u8fd9\u4e00\u884c\n        }\n\n        /// <summary>\n        /// \u79cd\u5b50\u6570\u636e\n        /// </summary>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        /// <returns></returns>\n        public IEnumerable<City> HasData(DbContext dbContext, Type dbContextLocator)\n        {\n            return new List<City>\n            {\n                new City { Id=1,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u4e2d\u56fd" },\n                new City { Id=2,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u5e7f\u4e1c\u7701",ParentId=1 },\n                new City { Id=3,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u4e2d\u5c71\u5e02",ParentId=2 },\n                new City { Id=4,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u73e0\u6d77\u5e02",ParentId=2 },\n                new City { Id=5,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u6d59\u6c5f\u7701",ParentId=1 },\n            };\n        }\n    }\n}\n'))),(0,i.kt)(s.Z,{value:"citydto",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using System.Collections.Generic;\n\nnamespace Furion.Application.Persons\n{\n    public class CityDto\n    {\n        /// <summary>\n        /// \u9010\u6e10\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5b50\u96c6\n        /// </summary>\n        public ICollection<CityDto> Childrens { get; set; }\n    }\n}\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var cities = await repository.AsQueryable()\n                             .Include(u => u.Childrens)\n                             .Where(u => u.Id == 1)\n                             .ToListAsync();\n\nvar dtos = cities.Adapt<List<CityDto>>();\n")),(0,i.kt)("h2",{id:"91110-\u52a8\u6001-sql-\u67e5\u8be2"},"9.11.10 \u52a8\u6001 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Sql")," \u67e5\u8be2"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u9ed8\u8ba4\u4e0d\u652f\u6301 \u52a8\u6001 ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql")," \u67e5\u8be2\u529f\u80fd\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e09\u65b9\u5b9e\u73b0\uff1a"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u9879\u76ee\u5c42\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Linq.Dynamic.Core")," \u5305 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zzzprojects/System.Linq.Dynamic.Core"},"https://github.com/zzzprojects/System.Linq.Dynamic.Core")),(0,i.kt)("h3",{id:"911101-\u52a8\u6001-sql"},"9.11.10.1 \u52a8\u6001 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Sql")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .Where("City == @0 and Orders.Count >= @1", "China", 10)\n                      .OrderBy("CompanyName")\n                      .Select("new(CompanyName as Name, Phone)");\n\n// \u793a\u4f8b\u4e8c\nvar list = repository.AsQueryable()\n                     .Where("Name.Contains(@0)","Furion")\n                     .ToList();\n\n// \u793a\u4f8b\u4e09\uff0c\u652f\u6301 ? \u8bed\u6cd5\nvar customers = repository.AsQueryable()\n                          .Include(c => c.Location)\n                          .Where(c => c.Location?.Name == "test") // \u6ce8\u610f Location?.Name\n                          .ToList();\n')),(0,i.kt)("h3",{id:"911102-\u52a8\u6001-lambda"},"9.11.10.2 \u52a8\u6001 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Lambda")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// \u793a\u4f8b\u4e00\nvar x = Expression.Parameter(typeof(int), "x");\nvar y = Expression.Parameter(typeof(int), "y");\nvar e = DynamicExpressionParser\n            .ParseLambda(new ParameterExpression[] { x, y }, null, "(x + y) * 2");\n\n// \u793a\u4f8b\u4e8c\nvar e = DynamicExpressionParser.ParseLambda(\n        typeof(Customer), typeof(bool),\n        "City = @0 and Orders.Count >= @1",\n        "London", 10);\n')),(0,i.kt)("h2",{id:"91111-\u65f6\u6001\u67e5\u8be2"},"9.11.11 \u65f6\u6001\u67e5\u8be2"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u8fd8\u63d0\u4f9b\u4e86\u65f6\u6001\u67e5\u8be2\u529f\u80fd\uff0c\u53ef\u4ee5\u67e5\u8be2\u7279\u5b9a\u65f6\u95f4\u7684\u6570\u636e\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'var result = rep.Entities\n    .AsTemporalOf(DateTime.UtcNow.AddDays(-1))\n    .Include(i=> i.Company)\n    .FirstOrDefault(i => i.Name == "Furion");\n')),(0,i.kt)("p",null,"\u53e6\u5916\u63d0\u4f9b\u4e86\u591a\u4e2a\u65f6\u6001\u67e5\u8be2\u65b9\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AsTemporalAll()"),(0,i.kt)("li",{parentName:"ul"},"AsTemporalAsOf(date)"),(0,i.kt)("li",{parentName:"ul"},"AsTemporalFrom(startDate, endDate)"),(0,i.kt)("li",{parentName:"ul"},"AsTemporalBetween(startDate, endDate)"),(0,i.kt)("li",{parentName:"ul"},"AsTemporalContained(startDate, endDate)")),(0,i.kt)("h2",{id:"91112-\u6027\u80fd\u4f18\u5316"},"9.11.12 \u6027\u80fd\u4f18\u5316"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"EF Core")," \u4f1a\u8ddf\u8e2a\u6240\u6709\u5b9e\u4f53\uff0c\u4e5f\u5c31\u662f\u4efb\u4f55\u6570\u636e\u6539\u53d8\u90fd\u4f1a\u5f15\u8d77\u6570\u636e\u68c0\u67e5\uff0c\u6240\u4ee5\u5982\u679c\u53ea\u505a\u67e5\u8be2\u64cd\u4f5c\uff0c\u5efa\u8bae\u5173\u95ed\u5b9e\u4f53\u8ddf\u8e2a\u529f\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u9ad8\u6027\u80fd\u5b9e\u4f53\u96c6\u5408\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DetachedEntities"),"\uff1a\u8131\u8f68/\u4e0d\u8ffd\u8e2a\u5b9e\u4f53"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AsQueryable(false)"),"\uff1a\u4e0d\u8ffd\u8e2a\u5b9e\u4f53"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Entities.AsNoTracking()"),"\uff1a\u624b\u52a8\u5173\u95ed\u5b9e\u4f53\u8ffd\u8e2a")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"EF Core")," \u4e2d\uff0c\u590d\u6742\u67e5\u8be2\u603b\u662f\u4f1a\u751f\u6210\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),"\uff0c\u4e5f\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"AsSingleQuery()"),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"AsSplitQuery()")," \u5207\u5272\u6210\u591a\u4e2a\u67e5\u8be2\u3002"),(0,i.kt)("h2",{id:"91113-\u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50"},"9.11.13 \u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Person : Entity, IEntityTypeBuilder<Person>\n    {\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u914d\u7f6e\u5b9e\u4f53\u5173\u7cfb\n        /// </summary>\n        /// <param name="entityBuilder"></param>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        public void Configure(EntityTypeBuilder<City> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.ToSqlQuery(\n              @"select * from dbo.person.2020-09-19\n                union all\n                select * from dbo.person.2020-09-20");\n        }\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var posts = repository.Where(u => u.Id > 10).ToList();\n")),(0,i.kt)("h2",{id:"91114-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.11.14 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}p.isMDXComponent=!0},6010:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);
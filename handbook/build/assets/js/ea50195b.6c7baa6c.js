"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5434],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return N}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),N=r,k=d["".concat(l,".").concat(N)]||d[N]||u[N]||o;return t?i.createElement(k,a(a({ref:n},m),{},{components:t})):i.createElement(k,a({ref:n},m))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5875:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return N},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=t(3117),r=t(102),o=(t(7294),t(3905)),a=["components"],s={id:"json-serialization",title:"23. JSON \u5e8f\u5217\u5316",sidebar_label:"23. JSON \u5e8f\u5217\u5316"},l=void 0,p={unversionedId:"json-serialization",id:"json-serialization",title:"23. JSON \u5e8f\u5217\u5316",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 1.16.0 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/json-serialization.mdx",sourceDirName:".",slug:"/json-serialization",permalink:"/furion/docs/json-serialization",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/json-serialization.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1653976383,formattedLastUpdatedAt:"May 31, 2022",frontMatter:{id:"json-serialization",title:"23. JSON \u5e8f\u5217\u5316",sidebar_label:"23. JSON \u5e8f\u5217\u5316"},sidebar:"docs",previous:{title:"22. \u4e8b\u4ef6\u603b\u7ebf\uff08New\uff09",permalink:"/furion/docs/event-bus"},next:{title:"24. \u5373\u65f6\u901a\u8baf",permalink:"/furion/docs/signalr"}},m={},u=[{value:"23.1 \u4ec0\u4e48\u662f <code>JSON</code>",id:"231-\u4ec0\u4e48\u662f-json",level:2},{value:"23.2 \u5173\u4e8e\u5e8f\u5217\u5316\u5e93",id:"232-\u5173\u4e8e\u5e8f\u5217\u5316\u5e93",level:2},{value:"23.3 <code>IJsonSerializerProvider</code> \u63a5\u53e3",id:"233-ijsonserializerprovider-\u63a5\u53e3",level:2},{value:"23.4 \u5982\u4f55\u4f7f\u7528",id:"234-\u5982\u4f55\u4f7f\u7528",level:2},{value:"23.4.1 \u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61",id:"2341-\u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61",level:3},{value:"23.4.2 \u5e8f\u5217\u5316\u5bf9\u8c61",id:"2342-\u5e8f\u5217\u5316\u5bf9\u8c61",level:3},{value:"23.4.3 \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32",id:"2343-\u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32",level:3},{value:"23.4.4 \u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e",id:"2344-\u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e",level:3},{value:"23.5 \u9ad8\u7ea7\u7528\u6cd5",id:"235-\u9ad8\u7ea7\u7528\u6cd5",level:2},{value:"23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",id:"2351-\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",level:3},{value:"23.5.2 \u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199\uff08\u5c5e\u6027\u539f\u6837\u8f93\u51fa\uff09",id:"2352-\u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199\u5c5e\u6027\u539f\u6837\u8f93\u51fa",level:3},{value:"23.5.3 \u65f6\u95f4\u683c\u5f0f\u5316",id:"2353-\u65f6\u95f4\u683c\u5f0f\u5316",level:3},{value:"23.5.4 \u5ffd\u7565\u5faa\u73af\u5f15\u7528",id:"2354-\u5ffd\u7565\u5faa\u73af\u5f15\u7528",level:3},{value:"23.5.5 \u5305\u542b\u6210\u5458\u5b57\u6bb5\u5e8f\u5217\u5316",id:"2355-\u5305\u542b\u6210\u5458\u5b57\u6bb5\u5e8f\u5217\u5316",level:3},{value:"23.5.6 \u5141\u8bb8\u5c3e\u968f\u9017\u53f7",id:"2356-\u5141\u8bb8\u5c3e\u968f\u9017\u53f7",level:3},{value:"23.5.7 \u5141\u8bb8\u6ce8\u91ca",id:"2357-\u5141\u8bb8\u6ce8\u91ca",level:3},{value:"23.5.8 \u5904\u7406\u4e71\u7801\u95ee\u9898",id:"2358-\u5904\u7406\u4e71\u7801\u95ee\u9898",level:3},{value:"23.5.9 \u4e0d\u533a\u5206\u5927\u5c0f\u5199",id:"2359-\u4e0d\u533a\u5206\u5927\u5c0f\u5199",level:3},{value:"23.5.10 \u5ffd\u7565\u7279\u5b9a\u5c5e\u6027\u5e8f\u5217\u5316",id:"23510-\u5ffd\u7565\u7279\u5b9a\u5c5e\u6027\u5e8f\u5217\u5316",level:3},{value:"23.5.11 \u52a8\u6001\u5bf9\u8c61\u5c5e\u6027\u540d\u5927\u5199\u95ee\u9898",id:"23511-\u52a8\u6001\u5bf9\u8c61\u5c5e\u6027\u540d\u5927\u5199\u95ee\u9898",level:3},{value:"23.6 <code>DataTable</code>\u3001<code>DataSet</code>\u3001<code>Tuple</code> \u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898",id:"236-datatabledatasettuple-\u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898",level:2},{value:"23.7 <code>System.Text.Json</code> \u548c <code>Newtonsoft.Json</code> \u5b8c\u6574\u5dee\u5f02\u5316\u5bf9\u6bd4",id:"237-systemtextjson-\u548c-newtonsoftjson-\u5b8c\u6574\u5dee\u5f02\u5316\u5bf9\u6bd4",level:2},{value:"23.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"238-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:u};function N(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion 1.16.0 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"231-\u4ec0\u4e48\u662f-json"},"23.1 \u4ec0\u4e48\u662f ",(0,o.kt)("inlineCode",{parentName:"h2"},"JSON")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"JSON (JavaScript Object Notation, JS \u5bf9\u8c61\u6807\u8bb0) \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u5b83\u57fa\u4e8e ECMAScript (w3c \u5236\u5b9a\u7684 js \u89c4\u8303)\u7684\u4e00\u4e2a\u5b50\u96c6\uff0c\u91c7\u7528\u5b8c\u5168\u72ec\u7acb\u4e8e\u7f16\u7a0b\u8bed\u8a00\u7684\u6587\u672c\u683c\u5f0f\u6765\u5b58\u50a8\u548c\u8868\u793a\u6570\u636e\u3002\u7b80\u6d01\u548c\u6e05\u6670\u7684\u5c42\u6b21\u7ed3\u6784\u4f7f\u5f97 JSON \u6210\u4e3a\u7406\u60f3\u7684\u6570\u636e\u4ea4\u6362\u8bed\u8a00\u3002 \u6613\u4e8e\u4eba\u9605\u8bfb\u548c\u7f16\u5199\uff0c\u540c\u65f6\u4e5f\u6613\u4e8e\u673a\u5668\u89e3\u6790\u548c\u751f\u6210\uff0c\u5e76\u6709\u6548\u5730\u63d0\u5347\u7f51\u7edc\u4f20\u8f93\u6548\u7387\u3002")),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0cJSON\uff0c\u662f\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u5728\u4e0e\u540e\u7aef\u7684\u6570\u636e\u4ea4\u4e92\u4e2d\u6709\u8f83\u4e3a\u5e7f\u6cdb\u7684\u5e94\u7528\u3002"),(0,o.kt)("h2",{id:"232-\u5173\u4e8e\u5e8f\u5217\u5316\u5e93"},"23.2 \u5173\u4e8e\u5e8f\u5217\u5316\u5e93"),(0,o.kt)("p",null,"\u76ee\u524d\u5728 C# \u8bed\u8a00\u4e2d\u6709\u4e24\u4e2a\u4e3b\u6d41\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," \u5e8f\u5217\u5316\u64cd\u4f5c\u5e93\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},".NET Core")," \u5185\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON")," \u5e8f\u5217\u5316\u5e93\uff0c\u4e5f\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"Furion")," \u6846\u67b6\u9ed8\u8ba4\u5b9e\u73b0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json"),"\uff1a\u76ee\u524d\u4f7f\u7528\u4eba\u6570\u6700\u591a\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON")," \u5e8f\u5217\u5316\u5e93\uff0c\u9700\u8981\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.AspNetCore.Mvc.NewtonsoftJson")," \u62d3\u5c55\u5305")),(0,o.kt)("p",null,"\u7531\u4e8e\u76ee\u524d ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u76f8\u6bd4 ",(0,o.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," \u529f\u80fd\u548c\u7a33\u5b9a\u6027\u6709\u8bb8\u591a\u4e0d\u8db3\u4e4b\u5904\uff0c\u6bd4\u5982\u5faa\u73af\u5f15\u7528\u95ee\u9898\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u65e0\u89e3\u3002\u4f46\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".NET 6")," \u4e4b\u540e\u5f97\u5230\u89e3\u51b3\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e3a\u4e86\u89e3\u51b3\u591a\u79cd\u5e8f\u5217\u5316\u5de5\u5177\u914d\u7f6e\u548c\u7528\u6cd5\u4e0a\u7684\u5dee\u5f02\u95ee\u9898\uff0c\u62bd\u8c61\u51fa\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u3002"),(0,o.kt)("h2",{id:"233-ijsonserializerprovider-\u63a5\u53e3"},"23.3 ",(0,o.kt)("inlineCode",{parentName:"h2"},"IJsonSerializerProvider")," \u63a5\u53e3"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u89c4\u8303\uff0c\u540c\u65f6",(0,o.kt)("strong",{parentName:"p"},"\u8981\u6c42\u5b9e\u73b0\u8be5\u63a5\u53e3\u7684\u5b9e\u4f53\u90fd\u5fc5\u987b\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f"),"\uff0c\u8be5\u63a5\u53e3\u5b9a\u4e49\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'namespace Furion.JsonSerialization\n{\n    /// <summary>\n    /// Json \u5e8f\u5217\u5316\u63d0\u4f9b\u5668\n    /// </summary>\n    public interface IJsonSerializerProvider\n    {\n        /// <summary>\n        /// \u5e8f\u5217\u5316\u5bf9\u8c61\n        /// </summary>\n        /// <param name="value"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <returns></returns>\n        string Serialize(object value, object jsonSerializerOptions = default);\n\n        /// <summary>\n        /// \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32\n        /// </summary>\n        /// <typeparam name="T"></typeparam>\n        /// <param name="json"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <returns></returns>\n        T Deserialize<T>(string json, object jsonSerializerOptions = default);\n\n        /// <summary>\n        /// \u8fd4\u56de\u8bfb\u53d6\u5168\u5c40\u914d\u7f6e\u7684 JSON \u9009\u9879\n        /// </summary>\n        /// <returns></returns>\n        object GetSerializerOptions();\n    }\n}\n')),(0,o.kt)("admonition",{title:"\u9ed8\u8ba4\u5b9e\u73b0",type:"important"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"SystemTextJsonSerializerProvider")," \u7c7b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u7684\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u5728\u5e94\u7528\u542f\u52a8\u65f6\u5df2\u9ed8\u8ba4\u6ce8\u518c\u3002")),(0,o.kt)("h2",{id:"234-\u5982\u4f55\u4f7f\u7528"},"23.4 \u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h3",{id:"2341-\u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61"},"23.4.1 \u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u5b9e\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"li"},"IJsonSerializerProvider")),(0,o.kt)("li",{parentName:"ul"},"\u9759\u6001\u7c7b ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON.GetJsonSerializer()")," \u65b9\u5f0f\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u67e5\u770b ",(0,o.kt)("a",{parentName:"strong",href:"/furion/docs/global/json"},"JSON \u9759\u6001\u7c7b")))),(0,o.kt)("p",null,"\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {10,13}",showLineNumbers:!0,"":!0,"{10,13}":!0},"using Furion.DynamicApiController;\nusing Furion.JsonSerialization;\n\nnamespace Furion.Application\n{\n    public class JsonDemo : IDynamicApiController\n    {\n        private readonly IJsonSerializerProvider _jsonSerializer;\n        private readonly IJsonSerializerProvider _jsonSerializer2;\n        public JsonDemo(IJsonSerializerProvider jsonSerializer)\n        {\n            _jsonSerializer = jsonSerializer;\n            _jsonSerializer2 = JSON.GetJsonSerializer();\n        }\n    }\n}\n")),(0,o.kt)("h3",{id:"2342-\u5e8f\u5217\u5316\u5bf9\u8c61"},"23.4.2 \u5e8f\u5217\u5316\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'public string GetText()\n{\n    return _jsonSerializer.Serialize(new\n    {\n        Id = 1,\n        Name = "Furion"\n    });\n}\n')),(0,o.kt)("h3",{id:"2343-\u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32"},"23.4.3 \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'public object GetObject()\n{\n    var json = "{\\"Id\\":1,\\"Name\\":\\"Furion\\"}";\n    var obj = _jsonSerializer.Deserialize<object>(json);\n    return obj;\n}\n')),(0,o.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"important"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u9ed8\u8ba4\u53cd\u5e8f\u5217\u5316\u5927\u5c0f\u5199\u654f\u611f\uff0c\u4e5f\u5c31\u662f\u4e0d\u5b8c\u5168\u5339\u914d\u7684\u5c5e\u6027\u540d\u79f0\u4e0d\u4f1a\u81ea\u52a8\u8d4b\u503c\u3002\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u5168\u5c40\u914d\u7f6e\u6216\u5355\u72ec\u914d\u7f6e\u3002"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u5168\u5c40\u914d\u7f6e")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;\n        });\n")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u5355\u72ec\u914d\u7f6e")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var obj = _jsonSerializer.Deserialize<object>(json, new JsonSerializerOptions\n   {\n       PropertyNameCaseInsensitive = true\n   });\n"))),(0,o.kt)("h3",{id:"2344-\u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e"},"23.4.4 \u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e0d\u63a8\u8350\u4e00\u4e2a\u6846\u67b6\u4e2d\u6709\u591a\u79cd\u5e8f\u5217\u5316\u5b9e\u73b0\u7c7b\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5c31\u4e0d\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json"),"\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u914d\u7f6e\u66f4\u591a\u9009\u9879\uff0c\u53ea\u9700\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonSerializerOptions")," \u914d\u7f6e\u5bf9\u8c61\u5373\u53ef\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {5}",showLineNumbers:!0,"":!0,"{5}":!0},'var json =  _jsonSerializer.Serialize(new\n            {\n                Id = 1,\n                Name = "Furion"\n            }, new JsonSerializerOptions {\n                WriteIndented = true\n            });\n')),(0,o.kt)("h2",{id:"235-\u9ad8\u7ea7\u7528\u6cd5"},"23.5 \u9ad8\u7ea7\u7528\u6cd5"),(0,o.kt)("h3",{id:"2351-\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"},"23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"),(0,o.kt)("p",null,"\u6b63\u5982\u4e0a\u6587\u6240\u8bf4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u9ed8\u8ba4\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u5b9e\u73b0\u65b9\u5f0f\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5e93\uff0c\u5982\u9700\u66ff\u6362\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json"),"\uff0c\u53ea\u9700\u4ee5\u4e0b\u6b65\u9aa4\u5373\u53ef\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.AspNetCore.Mvc.NewtonsoftJson")," \u62d3\u5c55\uff0c\u5e76\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d\u6ce8\u518c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2}",showLineNumbers:!0,"":!0,"{2}":!0},"services.AddControllersWithViews()\n        .AddNewtonsoftJson();\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"li"},"IJsonSerializerProvider")," \u63d0\u4f9b\u5668")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {10}",showLineNumbers:!0,"":!0,"{10}":!0},'using Furion.DependencyInjection;\nusing Furion.JsonSerialization;\nusing Newtonsoft.Json;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// Newtonsoft.Json \u5b9e\u73b0\n    /// </summary>\n    public class NewtonsoftJsonSerializerProvider : IJsonSerializerProvider, ISingleton\n    {\n        /// <summary>\n        /// \u5e8f\u5217\u5316\u5bf9\u8c61\n        /// </summary>\n        /// <param name="value"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <returns></returns>\n        public string Serialize(object value, object jsonSerializerOptions = null)\n        {\n            return JsonConvert.SerializeObject(value, (jsonSerializerOptions ?? GetSerializerOptions()) as JsonSerializerSettings);\n        }\n\n        /// <summary>\n        /// \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32\n        /// </summary>\n        /// <typeparam name="T"></typeparam>\n        /// <param name="json"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <returns></returns>\n        public T Deserialize<T>(string json, object jsonSerializerOptions = null)\n        {\n            return JsonConvert.DeserializeObject<T>(json, (jsonSerializerOptions ?? GetSerializerOptions()) as JsonSerializerSettings);\n        }\n\n        /// <summary>\n        /// \u8fd4\u56de\u8bfb\u53d6\u5168\u5c40\u914d\u7f6e\u7684 JSON \u9009\u9879\n        /// </summary>\n        /// <returns></returns>\n        public object GetSerializerOptions()\n        {\n            return App.GetOptions<MvcNewtonsoftJsonOptions>()?.SerializerSettings;\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"2352-\u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199\u5c5e\u6027\u539f\u6837\u8f93\u51fa"},"23.5.2 \u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199\uff08\u5c5e\u6027\u539f\u6837\u8f93\u51fa\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNamingPolicy = null;\n            // options.JsonSerializerOptions.DictionaryKeyPolicy = null;    // \u914d\u7f6e Dictionary \u7c7b\u578b\u5e8f\u5217\u5316\u8f93\u51fa\n        });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.ContractResolver = new DefaultContractResolver();\n        });\n")),(0,o.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u91c7\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," \u65b9\u5f0f\u63a5\u53e3\u8fd4\u56de\u503c\u80fd\u591f\u6b63\u5e38\u8f93\u51fa\uff0c\u4f46\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Swagger")," \u754c\u9762\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Example Values")," \u4f9d\u7136\u663e\u793a\u5c0f\u5199\u5b57\u6bcd\u5f00\u5934\u7684\u5c5e\u6027\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u518d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u914d\u7f6e\u5373\u53ef\uff0c\u5982\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},".AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNamingPolicy = null;\n        });\n")),(0,o.kt)("p",{parentName:"admonition"},"\u4e3b\u8981\u539f\u56e0\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Swagger")," \u62d3\u5c55\u5305\u5e95\u5c42\u4f9d\u8d56\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json"),"\u3002")),(0,o.kt)("h3",{id:"2353-\u65f6\u95f4\u683c\u5f0f\u5316"},"23.5.3 \u65f6\u95f4\u683c\u5f0f\u5316"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.Converters.AddDateFormatString("yyyy-MM-dd HH:mm:ss");\n        });\n')),(0,o.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTimeOffset")," \u7c7b\u578b\uff0c\u90a3\u4e48\u53ef\u4ee5\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},'.AddDateFormatString("yyyy-MM-dd HH:mm:ss", true)')," \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u81ea\u52a8\u8f6c\u6362\u6210\u672c\u5730\u65f6\u95f4\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Mysql")," \u6570\u636e\u5e93\uff0c\u4e14\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Pomelo.EntityFrameworkCore.MySql")," \u5305\uff0c\u90a3\u4e48\u4f1a\u51fa\u73b0\u65f6\u533a\u95ee\u9898\uff0c\u6bd4\u5982\u5c11 8 \u5c0f\u65f6\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u914d\u7f6e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u3002")),(0,o.kt)("p",null,"\u9700\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss";\n        });\n')),(0,o.kt)("h3",{id:"2354-\u5ffd\u7565\u5faa\u73af\u5f15\u7528"},"23.5.4 \u5ffd\u7565\u5faa\u73af\u5f15\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;\n        });\n")),(0,o.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".NET 5")," \u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5e76\u4e0d\u652f\u6301\u5904\u7406\u5faa\u73af\u5f15\u7528\u95ee\u9898\uff0c\u4ee5\u4e0a\u7684\u89e3\u51b3\u65b9\u6848\u4ec5\u9650\u7528\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},".NET 6 Preview 2+"),"\u3002\ud83d\ude02")),(0,o.kt)("p",null,"\u9700\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;\n        });\n")),(0,o.kt)("h3",{id:"2355-\u5305\u542b\u6210\u5458\u5b57\u6bb5\u5e8f\u5217\u5316"},"23.5.5 \u5305\u542b\u6210\u5458\u5b57\u6bb5\u5e8f\u5217\u5316"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.IncludeFields = true;\n        });\n")),(0,o.kt)("p",null,"\u9700\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,o.kt)("p",null,"\u65e0\u9700\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"2356-\u5141\u8bb8\u5c3e\u968f\u9017\u53f7"},"23.5.6 \u5141\u8bb8\u5c3e\u968f\u9017\u53f7"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.AllowTrailingCommas = true;\n        });\n")),(0,o.kt)("p",null,"\u9700\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,o.kt)("p",null,"\u65e0\u9700\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"2357-\u5141\u8bb8\u6ce8\u91ca"},"23.5.7 \u5141\u8bb8\u6ce8\u91ca"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.ReadCommentHandling = JsonCommentHandling.Skip;\n        });\n")),(0,o.kt)("p",null,"\u9700\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,o.kt)("p",null,"\u65e0\u9700\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"2358-\u5904\u7406\u4e71\u7801\u95ee\u9898"},"23.5.8 \u5904\u7406\u4e71\u7801\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping;\n        });\n")),(0,o.kt)("p",null,"\u9700\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,o.kt)("p",null,"\u65e0\u9700\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"2359-\u4e0d\u533a\u5206\u5927\u5c0f\u5199"},"23.5.9 \u4e0d\u533a\u5206\u5927\u5c0f\u5199"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;\n        });\n")),(0,o.kt)("p",null,"\u9700\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),(0,o.kt)("admonition",{title:"\u66f4\u591a\u5e8f\u5217\u5316\u914d\u7f6e",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u53ea\u5217\u4e3e\u5e38\u7528\u89c1\u7684\u5e8f\u5217\u5316\u914d\u7f6e\uff0c\u5982\u9700\u67e5\u770b\u66f4\u591a\u914d\u7f6e\uff0c\u53ef\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/standard/serialization/system-text-json-configure-options?pivots=dotnet-5-0"},"System.Text.Json \u6587\u6863"))),(0,o.kt)("h3",{id:"23510-\u5ffd\u7565\u7279\u5b9a\u5c5e\u6027\u5e8f\u5217\u5316"},"23.5.10 \u5ffd\u7565\u7279\u5b9a\u5c5e\u6027\u5e8f\u5217\u5316"),(0,o.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u4e0d\u5e0c\u671b\u5bf9\u8c61\u4e2d\u67d0\u4e2a\u5bf9\u8c61\u88ab\u5e8f\u5217\u5316\u51fa\u6765\u6216\u8005\u4e0d\u60f3\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Swagger")," \u4e2d\u663e\u793a\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u5728\u5c5e\u6027\u8d34\u8be5\u7279\u6027\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"[Newtonsoft.Json.JsonIgnore]    // \u9488\u5bf9 Newtonsoft\n[System.Text.Json.Serialization.JsonIgnore] // \u9488\u5bf9 System.Text.Json\npublic string PropertyName {get; set;}\n")),(0,o.kt)("h3",{id:"23511-\u52a8\u6001\u5bf9\u8c61\u5c5e\u6027\u540d\u5927\u5199\u95ee\u9898"},"23.5.11 \u52a8\u6001\u5bf9\u8c61\u5c5e\u6027\u540d\u5927\u5199\u95ee\u9898"),(0,o.kt)("p",null,"\u6709\u65f6\u5019\u4f7f\u7528\u4e86\u52a8\u6001\u5bf9\u8c61\u540e\u53d1\u73b0\u5c5e\u6027\u540d\u51fa\u73b0\u4e86\u5927\u5199\u60c5\u51b5\uff08\u9996\u5b57\u6bcd\uff09\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u89e3\u51b3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},".AddNewtonsoftJson(options =>\n{\n    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();\n})\n")),(0,o.kt)("h2",{id:"236-datatabledatasettuple-\u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898"},"23.6 ",(0,o.kt)("inlineCode",{parentName:"h2"},"DataTable"),"\u3001",(0,o.kt)("inlineCode",{parentName:"h2"},"DataSet"),"\u3001",(0,o.kt)("inlineCode",{parentName:"h2"},"Tuple")," \u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898"),(0,o.kt)("p",null,"\u7531\u4e8e\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u91c7\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Text.Json")," \u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u4f46\u662f\u4e0d\u652f\u6301\u590d\u6742\u7c7b\u578b\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"DataTable")," \u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSet"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Tuple")," \u5143\u7ec4\uff0c\u6240\u4ee5\u9700\u8981\u66f4\u6362\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"NewtonsoftJson")," \u5373\u53ef\uff0c\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"./json-serialization#2351-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BA%8F%E5%88%97%E5%8C%96%E6%8F%90%E4%BE%9B%E5%99%A8"},"JSON \u5e8f\u5217\u5316 - 23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668")),(0,o.kt)("h2",{id:"237-systemtextjson-\u548c-newtonsoftjson-\u5b8c\u6574\u5dee\u5f02\u5316\u5bf9\u6bd4"},"23.7 ",(0,o.kt)("inlineCode",{parentName:"h2"},"System.Text.Json")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h2"},"Newtonsoft.Json")," \u5b8c\u6574\u5dee\u5f02\u5316\u5bf9\u6bd4"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/standard/serialization/system-text-json-migrate-from-newtonsoft-how-to?pivots=dotnet-5-0"},"https://docs.microsoft.com/zh-cn/dotnet/standard/serialization/system-text-json-migrate-from-newtonsoft-how-to?pivots=dotnet-5-0")),(0,o.kt)("h2",{id:"238-\u53cd\u9988\u4e0e\u5efa\u8bae"},"23.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}N.isMDXComponent=!0}}]);
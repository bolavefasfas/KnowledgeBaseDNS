"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[7],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,m=k["".concat(p,".").concat(c)]||k[c]||u[c]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(4137)),o=["components"],l={title:"API",sidebar_position:2},p="AdGuard DNS API",d={unversionedId:"private-dns/api",id:"private-dns/api",title:"API",description:"AdGuard DNS \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 REST API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/private-dns/api.md",sourceDirName:"private-dns",slug:"/private-dns/api",permalink:"/KnowledgeBaseDNS/ru/private-dns/api",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"API",sidebar_position:2},sidebar:"sidebar",previous:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/KnowledgeBaseDNS/ru/private-dns/overview"},next:{title:"\u0411\u0435\u0442\u0430-\u0442\u0435\u0441\u0442 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e AdGuard DNS",permalink:"/KnowledgeBaseDNS/ru/miscellaneous/beta-testing"}},s={},u=[{value:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",id:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",level:2},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0442\u043e\u043a\u0435\u043d\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430",level:4},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0447\u0435\u0440\u0435\u0437 Refresh Token",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0442\u043e\u043a\u0435\u043d\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u0447\u0435\u0440\u0435\u0437-refresh-token",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-1",level:4},{value:"\u0421\u0431\u0440\u043e\u0441 Refresh-\u0442\u043e\u043a\u0435\u043d\u0430",id:"\u0441\u0431\u0440\u043e\u0441-refresh-\u0442\u043e\u043a\u0435\u043d\u0430",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-2",level:4},{value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a API",id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u043a-api",level:3},{value:"API",id:"api",level:2},{value:"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f OpenAPI",id:"\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-openapi",level:3},{value:"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",id:"\u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f-\u0441\u0432\u044f\u0437\u044c",level:2}],k={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adguard-dns-api"},"AdGuard DNS API"),(0,i.kt)("p",null,"AdGuard DNS \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 REST API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445."),(0,i.kt)("h2",{id:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"},"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"),(0,i.kt)("h3",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0442\u043e\u043a\u0435\u043d\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"),(0,i.kt)("p",null,"\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 POST-\u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u043f\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 URL, \u0447\u0442\u043e\u0431\u044b \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account email")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mfa_token"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Two-Factor authentication token (if enabled in account settings)")))),(0,i.kt)("p",null,"\u0412 \u043e\u0442\u0432\u0435\u0442 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434 (\u0441\u0440\u043e\u043a \u0443\u043a\u0430\u0437\u0430\u043d \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"expires_in"),"). \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," (\u0421\u043c.: ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0447\u0435\u0440\u0435\u0437 Refresh Token"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0438 \u0437\u0430\u0442\u0435\u043c \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f. \u0427\u0442\u043e\u0431\u044b \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),", \u0441\u043c.: ",(0,i.kt)("inlineCode",{parentName:"p"},"\u0421\u0431\u0440\u043e\u0441 Refresh-\u0442\u043e\u043a\u0435\u043d\u0430"),"."))),(0,i.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'username=user%40adguard.com' \\\n    -d 'password=********' \\\n    -d 'mfa_token=727810'\n")),(0,i.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2620978\n}\n')),(0,i.kt)("h3",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u0442\u043e\u043a\u0435\u043d\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u0447\u0435\u0440\u0435\u0437-refresh-token"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0447\u0435\u0440\u0435\u0437 Refresh Token"),(0,i.kt)("p",null,"\u0422\u043e\u043a\u0435\u043d\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438\u043c\u0435\u044e\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041f\u043e\u0441\u043b\u0435 \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0440\u043e\u043a\u0430 \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh-\u0442\u043e\u043a\u0435\u043d")," \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u043e\u0433\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"access token"),"."),(0,i.kt)("p",null,"\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 POST-\u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"refresh_token")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"REFRESH TOKEN")," using which a new access token has to be generated.")))),(0,i.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,i.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0442\u0432\u0435\u0442\u0430-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2627999\n}\n')),(0,i.kt)("h3",{id:"\u0441\u0431\u0440\u043e\u0441-refresh-\u0442\u043e\u043a\u0435\u043d\u0430"},"\u0421\u0431\u0440\u043e\u0441 Refresh-\u0442\u043e\u043a\u0435\u043d\u0430"),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c refresh-\u0442\u043e\u043a\u0435\u043d, \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 POST-\u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/revoke_token")),(0,i.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0440\u043e\u0441\u0430-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \\\n    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"refresh_token")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"REFRESH TOKEN")," which is to be revoked")))),(0,i.kt)("h3",{id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u043a-api"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a API"),(0,i.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438 refresh-\u0442\u043e\u043a\u0435\u043d \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b, \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a API \u043c\u043e\u0436\u043d\u043e, \u0443\u043a\u0430\u0437\u0430\u0432 \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0435."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0418\u043c\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")),(0,i.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"Bearer {access_token}"))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-openapi"},"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f OpenAPI"),(0,i.kt)("p",null,"\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f OpenAPI \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.kt)("a",{parentName:"p",href:"https://api.adguard-dns.io/static/swagger/openapi.json"},"https://api.adguard-dns.io/static/swagger/openapi.json"),"."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 API. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0432 ",(0,i.kt)("a",{parentName:"p",href:"https://editor.swagger.io/"},"https://editor.swagger.io/"),"."),(0,i.kt)("h2",{id:"\u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f-\u0441\u0432\u044f\u0437\u044c"},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u044d\u0442\u043e\u0442 API, \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"devteam@adguard.com")," \u0438 \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435, \u0447\u0442\u043e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c."))}c.isMDXComponent=!0}}]);
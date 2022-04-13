"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[194],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4826:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(4137)),s=["components"],i={title:"How to flush DNS cache",sidebar_position:1},l="How to flush DNS cache",c={unversionedId:"public-dns/solving-problems/how-to-flush-dns-cache",id:"public-dns/solving-problems/how-to-flush-dns-cache",isDocsHomePage:!1,title:"How to flush DNS cache",description:"What is DNS cache?",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/public-dns/solving-problems/how-to-flush-dns-cache.md",sourceDirName:"public-dns/solving-problems",slug:"/public-dns/solving-problems/how-to-flush-dns-cache",permalink:"/KnowledgeBaseDNS/ru/public-dns/solving-problems/how-to-flush-dns-cache",editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",version:"current",sidebarPosition:1,frontMatter:{title:"How to flush DNS cache",sidebar_position:1},sidebar:"sidebar",previous:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/KnowledgeBaseDNS/ru/public-dns/overview"},next:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/KnowledgeBaseDNS/ru/private-dns/overview"}},d=[{value:"What is DNS cache?",id:"what-is-dns-cache",children:[]},{value:"When you might need to clear the cache",id:"when-you-might-need-to-clear-the-cache",children:[]},{value:"How to flush DNS cache on different OSs",id:"how-to-flush-dns-cache-on-different-oss",children:[{value:"macOS",id:"macos",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-flush-dns-cache"},"How to flush DNS cache"),(0,a.kt)("h2",{id:"what-is-dns-cache"},"What is DNS cache?"),(0,a.kt)("p",null,"DNS cache stores the IP addresses of visited sites on the local computer so that they load faster next time. Instead of doing a long DNS lookup, the system answers the queries with DNS records from the temporary DNS cache."),(0,a.kt)("p",null,"The DNS cache contains so-called ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records"},"resource records (RRs)"),", which are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resource data (or rdata)"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Record type"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Record name"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TTL (time to live)"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Class"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resource data length"),".")),(0,a.kt)("h2",{id:"when-you-might-need-to-clear-the-cache"},"When you might need to clear the cache"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You regularly get a 404 error.")," For example, the website was transferred to another server, and its IP address has changed. To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You want to improve your privacy.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You want to protect yourself from hacker attacks and viruses.")," When the DNS cache is corrupted, your browser may redirect you to an IP address of a malicious website that an attacker inserted in your computer\u2019s DNS records."),(0,a.kt)("h2",{id:"how-to-flush-dns-cache-on-different-oss"},"How to flush DNS cache on different OSs"),(0,a.kt)("h3",{id:"macos"},"macOS"),(0,a.kt)("p",null,"To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search \u2014 to do that, press Command+Space and type ",(0,a.kt)("em",{parentName:"p"},"Terminal"),") and enter the following command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")),(0,a.kt)("p",null,"On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")),(0,a.kt)("p",null,"After that, enter your administrator password to complete the process."),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"To flush DNS cache on your Windows device, do the following:"),(0,a.kt)("p",null,"Load the Command Prompt as an administrator. You can find it in the Start Menu by typing ",(0,a.kt)("em",{parentName:"p"},"command prompt")," or ",(0,a.kt)("em",{parentName:"p"},"cmd"),". Then type ",(0,a.kt)("inlineCode",{parentName:"p"},"ipconfig/flushdns")," and press Enter."),(0,a.kt)("p",null,"You will see the line ",(0,a.kt)("em",{parentName:"p"},"Successfully flushed the DNS Resolver Cache"),". Done!"),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Linux does not have OS-level DNS caching unless a caching service such as Systemd Resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used."),(0,a.kt)("p",null,"For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running."),(0,a.kt)("p",null,"To find out which DNS resolver you're using, command ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo lsof -i :53 -S"),"."),(0,a.kt)("h4",{id:"systemd-resolved"},"Systemd Resolved"),(0,a.kt)("p",null,"To clear the ",(0,a.kt)("strong",{parentName:"p"},"Systemd Resolved")," DNS cache, type:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemd-resolve --flush-caches")),(0,a.kt)("p",null,"On success, the command doesn\u2019t return any message."),(0,a.kt)("h4",{id:"dnsmasq"},"DNSMasq"),(0,a.kt)("p",null,"To clear the ",(0,a.kt)("strong",{parentName:"p"},"DNSMasq")," cache, you need to restart it:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo service dnsmasq restart")),(0,a.kt)("h4",{id:"nscd"},"Nscd"),(0,a.kt)("p",null,"To clear the ",(0,a.kt)("strong",{parentName:"p"},"Nscd")," cache, you also need to restart the service:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo service nscd restart")),(0,a.kt)("h4",{id:"bind"},"BIND"),(0,a.kt)("p",null,"To flush the ",(0,a.kt)("strong",{parentName:"p"},"BIND")," DNS cache, run the command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rndc flush")),(0,a.kt)("p",null,"Then you will need to reload BIND:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rndc reload")),(0,a.kt)("p",null,"You will get the message that the server has been successfully reloaded."),(0,a.kt)("h3",{id:"android"},"Android"),(0,a.kt)("p",null,"The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane."),(0,a.kt)("p",null,"A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared."),(0,a.kt)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,a.kt)("em",{parentName:"p"},"Settings > System > Advanced > Reset options > Reset network settings")," and tap ",(0,a.kt)("em",{parentName:"p"},"Reset Settings")," to confirm."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")),(0,a.kt)("h3",{id:"ios"},"iOS"),(0,a.kt)("p",null,"There are different ways to clear the DNS cache on your iPad or iPhone."),(0,a.kt)("p",null,"The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed."),(0,a.kt)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,a.kt)("em",{parentName:"p"},"General"),", scroll down, find ",(0,a.kt)("em",{parentName:"p"},"Reset")," and tap on ",(0,a.kt)("em",{parentName:"p"},"Reset Network Settings"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")))}p.isMDXComponent=!0}}]);
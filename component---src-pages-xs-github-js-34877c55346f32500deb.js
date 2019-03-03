(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{139:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(167),s=a(155),i=a(154),l=a(168);e.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"OSS",keywords:["open-source","github","repos"]}),r.a.createElement(l.a,null),r.a.createElement(o.a,null))}},151:function(t,e,a){var n;t.exports=(n=a(157))&&n.default||n},152:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return m}),a.d(e,"StaticQuery",function(){return d}),a.d(e,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(148),l=a.n(i);a.d(e,"Link",function(){return l.a}),a.d(e,"withPrefix",function(){return i.withPrefix}),a.d(e,"navigate",function(){return i.navigate}),a.d(e,"push",function(){return i.push}),a.d(e,"replace",function(){return i.replace}),a.d(e,"navigateTo",function(){return i.navigateTo});var u=a(151),c=a.n(u);a.d(e,"PageRenderer",function(){return c.a});var g=a(33);a.d(e,"parsePath",function(){return g.a});var m=r.a.createContext({}),d=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(t){r.a.useContext;var e=r.a.useContext(m);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(t,e,a){"use strict";var n=a(156),r=a(0),o=a.n(r),s=a(4),i=a.n(s),l=a(174),u=a.n(l),c=a(152);function g(t){var e=t.description,a=t.lang,r=t.meta,s=t.keywords,i=t.title;return o.a.createElement(c.StaticQuery,{query:m,render:function(t){var n=e||t.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Ubuntu",rel:"stylesheet"}),o.a.createElement("link",{href:"https://unpkg.com/normalize.css@8.0.1/normalize.css",rel:"stylesheet"}),o.a.createElement("style",null,"\n\t\t\t\t\t\thtml, body {\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t"))},data:n})}g.defaultProps={lang:"en",meta:[],keywords:[]},g.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=g;var m="2515784693"},155:function(t,e,a){"use strict";a(32);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(149),l=a(161),u=a(150),c={breakpoints:["40em","52em","64em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{sans:"Ubuntu, system-ui, sans-serif",mono:"Ubuntu, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},g=Object(i.default)(u.Flex).withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["min-height:100vh;",""],l.fontFamily),m=function(t){return r.a.createElement(i.ThemeProvider,{theme:c},r.a.createElement(g,Object.assign({mx:"auto",px:[4,4,0],py:[6,6,0],fontFamily:"sans"},t)))};m.propTypes={children:s.a.node.isRequired};e.a=m},156:function(t){t.exports={data:{site:{siteMetadata:{title:"Herman Starikov's home page",description:"Hi! My name is Herman Starikov. I live in Toronto and make apps on the internet.",author:"@hermanya"}}}}},157:function(t,e,a){"use strict";a.r(e);a(32);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(52),l=a(2),u=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=u},159:function(t,e){t.exports=function(t,e){return e||(e=t.slice(0)),t.raw=e,t}},167:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(152),s=a(150),i=a(153),l=a(149),u=Object(l.default)(s.Flex).withConfig({displayName:"mobile-nav__MobileNav",componentId:"sc-1akr694-0"})(["position:fixed;justify-content:space-around;bottom:0;left:0;right:0;z-index:1;background:#ffffffee;min-height:3.5rem;padding-bottom:env(safe-area-inset-bottom);"]),c=Object(l.default)(o.Link).withConfig({displayName:"mobile-nav__NavLink",componentId:"sc-1akr694-1"})(["border-radius:2px;font-size:0.70711rem;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;line-height:1;width:64px;padding:0.2625rem 0.2625rem 0;-webkit-text-decoration:none;text-decoration:none;text-align:center;svg{display:block;height:32px;margin:0 auto;}"]);e.a=function(){return r.a.createElement(u,null,r.a.createElement(c,{to:"/"},r.a.createElement(i.User,null),r.a.createElement(s.Text,null,"Bio")),r.a.createElement(c,{to:"/links"},r.a.createElement(i.Compass,null),r.a.createElement(s.Text,null,"Links")),r.a.createElement(c,{to:"/github"},r.a.createElement(i.GitHub,null),r.a.createElement(s.Text,null,"OSS")),r.a.createElement(c,{as:"a",href:"https://medium.com/@hermanhasawish"},r.a.createElement(i.Feather,null),r.a.createElement(s.Text,null,"Blog")))}},168:function(t,e,a){"use strict";var n=a(159),r=a.n(n),o=(a(32),a(149)),s=(a(34),a(169),a(158)),i=a.n(s),l=a(175),u=a(0),c=a.n(u),g=a(173),m=a(153),d=a(150);function p(){var t=r()(["opacity:0.6;"]);return p=function(){return t},t}function f(){var t=r()([""]);return f=function(){return t},t}var h=function t(e){var a=e.repo,n=i()(e,["repo"]);return c.a.createElement(t.Body,n,c.a.createElement(d.Flex,{flexDirection:"column",mr:[3,4]},c.a.createElement(t.Emoji,{fontSize:["46px","46px","80px"]},a.description.substr(0,2)),c.a.createElement(t.Language,{mt:2},a.primaryLanguage.name)),c.a.createElement(z,{flexDirection:"column",width:1},c.a.createElement(t.Heading,{my:3},c.a.createElement(d.Text,{lineHeight:1.25},a.name.replace(/-/g," ")),c.a.createElement(d.Link,{href:a.url,ml:[3,4],target:"_blank"},c.a.createElement(m.ExternalLink,null))),c.a.createElement(C,{mb:3,fontSize:1,lineHeight:1.75},a.description.substr(2)),c.a.createElement(d.Flex,{justifyContent:"space-between",alignItems:"center",mt:"auto"},c.a.createElement(d.Flex,{alignItems:"center"},c.a.createElement(m.Star,{color:"goldenrod",size:"1em"}),c.a.createElement(d.Text,{ml:2},a.stargazers.totalCount)))))};h.Body=Object(o.default)(d.Flex).withConfig({displayName:"github__Body",componentId:"dmhvfy-0"})(["border-radius:0.5em;"]),h.Heading=o.default.h3.withConfig({displayName:"github__Heading",componentId:"dmhvfy-1"})(["text-transform:capitalize;display:flex;justify-content:space-between;align-items:center;width:100%;font-weight:normal;"]),h.Emoji=Object(o.default)(d.Text).withConfig({displayName:"github__Emoji",componentId:"dmhvfy-2"})(["height:80px;width:80px;vertical-align:middle;text-align:center;line-height:80px;"]),h.Language=Object(o.default)(d.Box).withConfig({displayName:"github__Language",componentId:"dmhvfy-3"})(["font-weight:600;font-size:12px;line-height:1;border-radius:2px;padding:3px 4px;text-align:center;",""],function(t){switch(t.children){case"JavaScript":return Object(o.css)(["background:#fcdf00;color:black;"]);case"TypeScript":return Object(o.css)(["background:#0076cd;color:white;"])}});e.a=function(t){var e=l.data.github.user,a=e.bio,n=e.pinnedRepositories,r=e.repositories.nodes.reduce(function(t,e){return e.stargazers.totalCount+t},0),o=Object(g.c)(n.nodes.length,{config:{mass:5,tension:2e3,friction:200},opacity:1,x:0,from:{opacity:0,x:20}});return c.a.createElement(d.Box,Object.assign({style:{position:"relative"}},t),c.a.createElement(m.GitHub,{size:"100px",color:"#00000011",strokeWidth:2,style:{position:"absolute",zIndex:-1,top:"-2em",left:"50%",transform:"rotate(-10deg) translateX(-50%)"}}),c.a.createElement(d.Text,{as:"h2",fontWeight:"normal",mt:4,mb:5,textAlign:["center","left"]},a),c.a.createElement(d.Flex,{flexWrap:"wrap",alignItems:"stretch",m:-4},o.map(function(t,e){var a=t.x,r=i()(t,["x"]),o=n.nodes[e];return c.a.createElement(d.Flex,{key:o.id,p:3,width:[1,1,.5]},c.a.createElement(g.a.div,{className:"trails-text",style:Object.assign({},r,{transform:a.interpolate(function(t){return"translate3d(0,"+t+"px,0)"}),display:"flex",width:"100%"})},c.a.createElement(h,{repo:o,px:[2,3],py:[1,2],width:1})))})),c.a.createElement(d.Text,{textAlign:"right",fontSize:0,color:"#888",mb:4,mt:5},"In total, I have received ",r," stars."))};var z=Object(o.default)(d.Flex)(f()),C=Object(o.default)(d.Text)(p())},175:function(t){t.exports={data:{github:{user:{bio:"Making things with React and other fun tech.",pinnedRepositories:{nodes:[{id:"MDEwOlJlcG9zaXRvcnkxNTg4OTg5MzY=",name:"classnamed-components",url:"https://github.com/Hermanya/classnamed-components",description:"💋Creating React components using your favorite CSS framework just got easier",stargazers:{totalCount:29},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxMzg4MjcwODY=",name:"friendly-github",url:"https://github.com/Hermanya/friendly-github",description:"🐶Browser extension that makes GitHub a better Social Network",stargazers:{totalCount:28},primaryLanguage:{name:"JavaScript"},licenseInfo:{name:"MIT License"}},{id:"MDEwOlJlcG9zaXRvcnkxNjc4NzkzODE=",name:"create-react-hook",url:"https://github.com/Hermanya/create-react-hook",description:"🎣CLI for easily creating reusable react hooks.",stargazers:{totalCount:18},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxNjg3Njc3OTY=",name:"use-scroll-to-reveal",url:"https://github.com/Hermanya/use-scroll-to-reveal",description:"🎩 React hook for using scroll to reveal components",stargazers:{totalCount:5},primaryLanguage:{name:"JavaScript"},licenseInfo:null},{id:"MDEwOlJlcG9zaXRvcnkxNjkwMjUyODY=",name:"use-interval",url:"https://github.com/Hermanya/use-interval",description:"⏲ Dan Abramov's interval hook",stargazers:{totalCount:3},primaryLanguage:{name:"TypeScript"},licenseInfo:{name:"MIT License"}},{id:"MDEwOlJlcG9zaXRvcnkxNjc2NDM5MDY=",name:"use-typing-effect",url:"https://github.com/Hermanya/use-typing-effect",description:"⌨️ React hook for the “human typing” effect; great for landing pages, input placeholders and more!",stargazers:{totalCount:17},primaryLanguage:{name:"JavaScript"},licenseInfo:null}]},repositories:{nodes:[{stargazers:{totalCount:0}},{stargazers:{totalCount:10}},{stargazers:{totalCount:3}},{stargazers:{totalCount:4}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:1}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:4}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:2}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:184}},{stargazers:{totalCount:6}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:8}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:28}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:8}},{stargazers:{totalCount:54}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:0}},{stargazers:{totalCount:38}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:29}},{stargazers:{totalCount:4}},{stargazers:{totalCount:12}},{stargazers:{totalCount:0}},{stargazers:{totalCount:17}},{stargazers:{totalCount:18}},{stargazers:{totalCount:5}},{stargazers:{totalCount:0}},{stargazers:{totalCount:3}},{stargazers:{totalCount:0}},{stargazers:{totalCount:1}},{stargazers:{totalCount:0}}]}}}}}}}]);
//# sourceMappingURL=component---src-pages-xs-github-js-34877c55346f32500deb.js.map
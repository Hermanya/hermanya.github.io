(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(526),o=n.n(i),s=n(632),c=n.n(s),u=n(152),l=n(157),p=n(156);t.default=function(){return r.a.createElement(l.a,{px:4,py:4},r.a.createElement(p.a,{title:"Resume",keywords:["resume","herman","starikov"]}),r.a.createElement(u.Flex,{flexDirection:"column"},o()().use(c.a).processSync("\n# Herman Starikov's résumé\n\n## Experience\n\n### Front End / React Native / Node Developer @ Rangle.io\nMarch 2018 - Present\n\n- Developed and supported several React Native mobile apps for diabetics\n  - Photo-based nutrition analysis\n  - Mobile app paired with an Insulin Pump\n  - Photo-based blood glucose analysis\n- Maintained a React portal for Healthcare Professionals\n\n### Front End / Mobile SDK Developer @ UXP Systems\nAugust 2014 – March 2018 ( 3.5+ years)\n\n- Developed production ready React, Angular and Backbone apps\n- Acted as a lead developer on Flow ID, a mobile-first web app with native integration\n- Supported a mobile C++ library used by native mobile apps on multiple platforms\n- Automated testing and optimized processes within the organization\n- Integrated support for Lambdas into Djinni, a tool for generating typed interfaces\n\n## Pet Projects\n\n- Lean Analytics <https://leananalytics.io> - A/B testing for React\n- UI1 <https://ui1.io> - UI kit builder\n- Chat with Strangers Messenger Bot <https://facebook.com/wouldbe.friend> the project was highly popular over the summer of 2017 reaching over 50, 000 MAU.\n- React Native Chart Kit <https://github.com/indiespirit/react-native-chart-kit> an open source charting library for React Native based on react-native-SVG\n\n## Achievements\n\n- Sheridan College Hackathon – 1st place, goo.gl/YKRqvD\n- Break Poverty Hackathon – top 4 teams, Community Voice Portal goo.gl/JM68UU\n- Author of Objects chapter in Learn Javascript book, goo.gl/rE8eje\n\n## Education\n\n- Sheridan College 2014, Software Engineering, 2-year program, Ontario diploma with high honors\n- Coursera, Machine Learning and DeepLearning.ai courses\n\n").contents))}},153:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m}),n.d(t,"useStaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(150),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(153),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,n){"use strict";var a=n(158),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(176),u=n.n(c),l=n(154);function p(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Ubuntu",rel:"stylesheet"}),i.a.createElement("link",{href:"https://unpkg.com/normalize.css@8.0.1/normalize.css",rel:"stylesheet"}),i.a.createElement("style",null,"\n\t\t\t\t\t\thtml, body {\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t"))},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=p;var d="2515784693"},157:function(e,t,n){"use strict";n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(151),c=n(163),u=n(152),l={breakpoints:["40em","52em","64em"],fontSizes:[12,14,16,20,24,32,48,64],colors:{blue:"#07c",lightgray:"#f6f6ff"},space:[0,4,8,16,32,64,128,256],fonts:{sans:"Ubuntu, system-ui, sans-serif",mono:"Ubuntu, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}},p=Object(s.default)(u.Flex).withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["min-height:100vh;",""],c.fontFamily),d=function(e){return r.a.createElement(s.ThemeProvider,{theme:l},r.a.createElement(p,Object.assign({mx:"auto",px:[4,4,0],py:[6,6,0],fontFamily:"sans"},e)))};d.propTypes={children:o.a.node.isRequired};t.a=d},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Herman Starikov's home page",description:"Hi! My name is Herman Starikov. I live in Toronto and make apps on the internet.",author:"@hermanya"}}}}},159:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(52),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-pages-resume-js-29e5822969cd2cb182fe.js.map
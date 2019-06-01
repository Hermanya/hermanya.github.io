// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-template-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/templates/blog-post-template.js" /* webpackChunkName: "component---src-templates-blog-post-template-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-github-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/pages/github.js" /* webpackChunkName: "component---src-pages-github-js" */),
  "component---src-pages-index-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-links-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/pages/links.js" /* webpackChunkName: "component---src-pages-links-js" */),
  "component---src-pages-resume-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/pages/resume.js" /* webpackChunkName: "component---src-pages-resume-js" */),
  "component---src-pages-til-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/pages/TIL.js" /* webpackChunkName: "component---src-pages-til-js" */),
  "component---src-pages-uses-js": () => import("/Users/hermanstarikov/Projects/starikov.dev/src/pages/uses.js" /* webpackChunkName: "component---src-pages-uses-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/hermanstarikov/Projects/starikov.dev/.cache/data.json")


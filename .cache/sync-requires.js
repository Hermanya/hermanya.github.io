const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-template-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/templates/blog-post-template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/pages/blog.js"))),
  "component---src-pages-github-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/pages/github.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/pages/index.js"))),
  "component---src-pages-links-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/pages/links.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/pages/resume.js"))),
  "component---src-pages-til-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/pages/TIL.js"))),
  "component---src-pages-uses-js": hot(preferDefault(require("/Users/hermanstarikov/Projects/starikov.dev/src/pages/uses.js")))
}


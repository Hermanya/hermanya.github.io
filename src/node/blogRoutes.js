const fs = require("fs");
const { getMeta } = require("./util");

const files = fs.readdirSync(__dirname + "/../reviews");

const posts = files.map(file =>
  fs.readFileSync(`${__dirname}/../reviews/${file}`, "utf8")
);

fs.writeFileSync(
  `${__dirname}/../__generated__/blogRoutes.tsx`,
  `
import React from 'react'
import {Route} from 'react-router-dom'
import BlogPage from "../pages/BlogPage";

${posts
  .map((post, index) => {
    const componentName = `BlogPost${index}`;
    return `import ${componentName} from '../components/__generated__/${componentName}'`;
  })
  .join("\n")}

const blogRoutes = [${posts
    .map((post, index) => {
      const metadata = getMeta(post);
      const componentName = `BlogPost${index}`;

      return `<Route path="${metadata.path}" key="${metadata.path}" render={() => <BlogPage 
          postComponent={${componentName}}
          postPath={"${metadata.path}"}
          />} 
          
          />,`;
    })
    .join("\n")}
]
export default blogRoutes;
`,
  "utf8"
);

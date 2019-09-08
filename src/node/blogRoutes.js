const fs = require("fs");
const { getMeta } = require("./util");

const files = fs.readdirSync(__dirname + "/../reviews");

const posts = files.map(file =>
  fs.readFileSync(`${__dirname}/../reviews/${file}`, "utf8")
);

fs.writeFileSync(
  `${__dirname}/../__generated__/blogRoutes.tsx`,
  `
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import BlogPage from "../pages/BlogPage";

${posts
  .map((post, index) => {
    const componentName = `BlogPost${index}`;
    const parts = post.split("---\n")[2].split("\n#");
    return parts
      .map(
        (part, index) =>
          `import ${componentName}Part${index} from '../components/__generated__/${componentName}Part${index}'`
      )
      .join("\n");
  })
  .join("\n")}

const blogRoutes = [${posts
    .map((post, index) => {
      const metadata = getMeta(post);
      const componentName = `BlogPost${index}`;
      const parts = post.split("---\n")[2].split("\n#");

      return `
        <Redirect exact from="${metadata.path}" to="${metadata.path}/part-0"/>,
        <Route path="${metadata.path}" key="${
        metadata.path
      }" render={() => <BlogPage 
          postComponents={[${parts
            .map((part, partIndex) => `${componentName}Part${partIndex}`)
            .join(",\n")}]}
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

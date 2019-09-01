const fs = require("fs");
const { getMeta } = require("./util");
const files = fs.readdirSync(__dirname + "/../reviews");

const posts = files.map(file =>
  fs.readFileSync(`${__dirname}/../reviews/${file}`, "utf8")
);

posts.forEach((post, index) => {
  const componentName = `BlogPost${index}Links`;
  fs.writeFileSync(
    `${__dirname}/../components/__generated__/${componentName}Links.js`,
    `
import React from 'react';
import BlogPostMeta from '../components/BlogPostMeta';
import Container from '../Container';

export default () => {
    return (<BlogPostMeta {...${JSON.stringify(getMeta(post))}} />)
}
    `,
    "utf8"
  );
});

fs.writeFileSync(
  `${__dirname}/../__generated__/blogPosts.ts`,
  `
export default ${JSON.stringify(
    posts.map(post => {
      return getMeta(post);
    }),
    undefined,
    2
  )}
    `,
  "utf8"
);

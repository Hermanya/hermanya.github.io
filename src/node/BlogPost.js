const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ReactMarkdown = require("react-markdown");
const fs = require("fs");
const files = fs.readdirSync(__dirname + "/../reviews");

const posts = files.map(file =>
  fs.readFileSync(`${__dirname}/../reviews/${file}`, "utf8")
);

posts.forEach((post, index) => {
  const parts = post.split("---\n");
  const componentName = `BlogPost${index}`;
  fs.writeFileSync(
    `${__dirname}/../components/__generated__/${componentName}.js`,
    `
import React from 'react';
import Container from '../Container';
export default () => {
    return (<Container>
        ${ReactDOMServer.renderToString(
          <ReactMarkdown source={parts[2]} />
        ).replace(/\{|\}/g, match => `{'${match}'}`)}
    </Container>)
}
    `,
    "utf8"
  );
});

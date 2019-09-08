const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ReactMarkdown = require("react-markdown");
const fs = require("fs");
const { getMeta } = require("./util");
const files = fs.readdirSync(__dirname + "/../reviews");

const posts = files.map(file =>
  fs.readFileSync(`${__dirname}/../reviews/${file}`, "utf8")
);

posts.forEach((post, index) => {
  const componentName = `BlogPost${index}`;
  const meta = getMeta(post);
  const content = post.split("---\n")[2];
  const parts = content.split("\n#");
  parts.forEach((part, index) => {
    fs.writeFileSync(
      `${__dirname}/../components/__generated__/${componentName}Part${index}.js`,
      `
import React from 'react';
import Container from '../Container';
export default () => {
    return (<Container>
        ${ReactDOMServer.renderToString(
          <ReactMarkdown
            source={(index === 0 ? `# ${meta.title}\n` : "#") + part}
          />
        ).replace(/\{|\}/g, match => `{'${match}'}`)}
    </Container>)
}
    `,
      "utf8"
    );
  });
});

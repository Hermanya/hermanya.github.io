// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import ReactMarkdown from "react-markdown";
// import fs from "fs";

const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ReactMarkdown = require("react-markdown");
const fs = require("fs");

const input = "# This is a header\n\nAnd this is a paragraph";
const output = ReactDOMServer.renderToString(<ReactMarkdown source={input} />);

fs.mkdirSync(__dirname + "../components/");
fs.mkdirSync(__dirname + "../components/__generated__");
fs.writeFile(
  __dirname + "../components/__generated__/PostAboutBlah.js",
  output,
  "utf8",
  (...args) => {
    console.log(...args);
  }
);

// React


module.exports = ({
  html = '',
  css = '',
  scripts,
  publicPath,
  title = 'x0',
  meta = [],
  links = []
}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<title>Herman Starikov</title>
<meta property="og:image" content="./images/avatar.jpeg">
<link rel="shortcut icon" href="./images/favicon.png">
${meta.map(({ name, content }) => `<meta name='${name}' content='${content}'>`).join('\n')}
${links.map(({ rel, href }) => `<link rel='${rel}' href='${href}' />`).join('\n')}
<style>*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}</style>
<meta name='description' content='Herman Starikov personal internet page'>
<link href="https://fonts.googleapis.com/css?family=Asap:400,600" rel="stylesheet">
${css}
</head>
<div id=root>${html}</div>
${scripts}
</html>
`

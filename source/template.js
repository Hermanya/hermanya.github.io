
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
<meta property="og:image" content="./images/avatar.png?">
<link rel="shortcut icon" href="./images/avatar.png?">
${meta.map(({ name, content }) => `<meta name='${name}' content='${content}'>`).join('\n')}
${links.map(({ rel, href }) => `<link rel='${rel}' href='${href}' />`).join('\n')}
<style>*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}</style>
<meta name='description' content='Herman Starikov personal internet page'>
<link href="https://fonts.googleapis.com/css?family=Asap:400,600" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
${css}
</head>
<div id=root>${html}</div>
${scripts}
</html>
`

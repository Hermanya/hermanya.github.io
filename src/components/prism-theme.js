import {createGlobalStyle} from 'styled-components';

export const createPrismTheme = colors => createGlobalStyle`
code[class*="language-"],
pre[class*="language-"] {
	color: ${colors.gray[1]};
	background: none;
	/* text-shadow: 0 1px ${colors.gray[5]}; */
	text-shadow: none;
	font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre-wrap;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;
	tab-size: 4;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: ${colors.gray[7]};
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: 0em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: ${colors.gray[4]};
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: ${colors.magenta[5]};
}

.token.boolean,
.token.number {
	color: ${colors.purple[5]};
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
    color: ${colors.lime[5]};
    /* text-shadow: 0 0 2px ${colors.gray[5]}, 0 0 5px${
	colors.lime[7]
}, 0 0 10px #fff3; */
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: ${colors.gray[4]};
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
	color: ${colors.orange[5]};
}

.token.keyword {
	color: ${colors.cyan[5]};
}

.token.regex,
.token.important {
	color: ${colors.red[5]};
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`;

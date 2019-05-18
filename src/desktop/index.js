import {useStaticQuery, graphql} from 'gatsby';

export const indexData = () =>
	useStaticQuery(graphql`
		query IndexQuery {
			site {
				siteMetadata {
					description
					bio
					misspelledWords
					keyWords
				}
			}
			meSmilingDown: file(relativePath: {eq: "me-smiling-down.png"}) {
				childImageSharp {
					fixed(width: 125, height: 125) {
						...GatsbyImageSharpFixed_tracedSVG
					}
				}
			}
			meLookingRight: file(relativePath: {eq: "me-looking-right.png"}) {
				childImageSharp {
					fluid(maxWidth: 250) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
		}
	`);

export const indexTemplates = [
	`
	"links banner"
	"links blog"
	"links repos"
`,
	`
	"links banner ."
	"links blog  ."
	"links repos  ."
`
];

export const indexRows = ['auto auto', 'auto auto'];
export const indexColumns = ['18em auto', '18em auto 18em'];
export const indexGaps = [0];

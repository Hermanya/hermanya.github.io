import {useStaticQuery, graphql} from 'gatsby';

export const indexData = (name = 'IndexQuery') =>
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

const templateMd = `
	links banner
	links repos
`;

const templateLg = `
	links banner .
	links repos  .
`;

export const indexProps = {
	paddingMd: 0,
	gutterMd: 2,
	templateColsMd: '18em auto',
	templateRowsMd: 'auto auto',
	templateMd,
	paddingXl: 0,
	gutterXl: 2,
	templateColsXl: '18em auto 18em',
	templateRowsXl: 'auto auto',
	templateXl: templateLg
};

import {useStaticQuery, graphql} from 'gatsby';
import theme from '../theme';

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

export const indexTemplateMd = `
	"links banner"
	"links repos"
`;

export const indexTemplateLg = `
	"links banner ."
	"links repos  ."
`;

export const indexRowsMd = 'auto auto';
export const indexColumnsMd = '18em auto';
export const indexGapMd = 0;

export const indexRowsLg = 'auto auto';
export const indexColumnsLg = '18em auto 18em';

export const indexProps = {
	paddingMd: 0,
	gutterMd: theme.space[0],
	templateColsMd: '18em auto',
	templateRowsMd: 'auto auto',
	paddingXl: 0,
	gutterXl: theme.space[0],
	templateColsXl: '18em auto 18em',
	templateRowsXl: 'auto auto'
};

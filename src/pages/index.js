import React from 'react';
import {Composition} from 'atomic-layout';
import {useStaticQuery, graphql} from 'gatsby';
import indexComponents from '../components';
import Root from '../components/root';

const template = `
	portrait
	bio
	nav
`;

const templateMd = `
	navMd banner
	navMd repos
`;

const templateLg = `
	navMd banner .
	navMd repos  .
`;

const BioPage = () => {
	const data = useStaticQuery(graphql`
		query SiteInfoQuery {
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

	return (
		<Root bg={['gray.9', 'gray.9', 'gray.8']}>
			<Composition
				padding={16}
				gutter={16}
				template={template}
				templateCols="auto"
				templateRows="125px auto 0"
				paddingMd={0}
				gutterMd={2}
				templateColsMd="18em auto"
				templateRowsMd="auto auto"
				templateMd={templateMd}
				paddingXl={0}
				gutterXl={2}
				templateColsXl="18em auto 18em"
				templateRowsXl="auto auto"
				templateXl={templateLg}
			>
				{indexComponents(data)}
			</Composition>
		</Root>
	);
};

export default BioPage;

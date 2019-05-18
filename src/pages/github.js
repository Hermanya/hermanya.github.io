import React from 'react';
import indexComponents from '../components';
import Root from '../components/root';
import Seo from '../components/seo';
import Grid from '../components/grid';
import {
	indexData,
	indexTemplates,
	indexRows,
	indexColumns,
	indexGaps
} from '../desktop';

const template = `
	"repos"
	"mobileNav"
`;

const GithubPage = () => {
	const data = indexData();
	return (
		<Root bg={['gray.9', 'gray.8']}>
			<Seo title="Links" keywords={['open source', 'repos', 'github']} />
			<Grid
				p={[4, 0]}
				pb={[5, 0]}
				gridGap={[2, ...indexGaps]}
				gridTemplateAreas={[template, ...indexTemplates]}
				gridTemplateColumns={['100%', ...indexColumns]}
				gridTemplateRows={['auto 0', ...indexRows]}
			>
				{indexComponents({data, gitHubDisplay: 'grid'})}
			</Grid>
		</Root>
	);
};

export default GithubPage;

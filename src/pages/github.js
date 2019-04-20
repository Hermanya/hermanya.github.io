import React from 'react';
import indexComponents from '../components';
import Root from '../components/root';
import Seo from '../components/seo';
import Grid from '../components/grid';
import {
	indexData,
	indexTemplateMd,
	indexTemplateLg,
	indexColumnsMd,
	indexColumnsLg,
	indexRowsMd,
	indexRowsLg,
	indexGapMd
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
				gridGap={[2, indexGapMd]}
				gridTemplateAreas={[
					template,
					indexTemplateMd,
					indexTemplateMd,
					indexTemplateLg
				]}
				gridTemplateColumns={[
					'100%',
					indexColumnsMd,
					indexColumnsMd,
					indexColumnsLg
				]}
				gridTemplateRows={['auto 0', indexRowsMd, indexRowsMd, indexRowsLg]}
			>
				{indexComponents({data, gitHubDisplay: 'grid'})}
			</Grid>
		</Root>
	);
};

export default GithubPage;

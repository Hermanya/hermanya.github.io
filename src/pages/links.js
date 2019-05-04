import React from 'react';
import indexComponents from '../components';
import Root from '../components/root';
import Seo from '../components/seo';
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
import Grid from '../components/grid';

const template = `
	"links"
	"nav"
`;

const LinksPage = () => {
	const data = indexData();
	return (
		<Root bg={['gray.9', 'gray.8']}>
			<Seo title="Links" keywords={['social', 'navigation']} />
			<Grid
				p={[4, 0]}
				pt={[6, 0]}
				gridGap={[2, indexGapMd]}
				gridTemplateAreas={[
					template,
					indexTemplateMd,
					indexTemplateMd,
					indexTemplateMd,
					indexTemplateLg
				]}
				gridTemplateColumns={[
					'auto',
					indexColumnsMd,
					indexColumnsMd,
					indexColumnsMd,
					indexColumnsLg
				]}
				gridTemplateRows={[
					'auto 0',
					indexRowsMd,
					indexRowsMd,
					indexRowsMd,
					indexRowsLg
				]}
			>
				{indexComponents({data, linksDisplay: 'block'})}
			</Grid>
		</Root>
	);
};

export default LinksPage;

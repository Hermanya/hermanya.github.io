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

const BioPage = () => {
	const data = indexData();
	return (
		<Root bg={['gray.9', 'gray.8']}>
			<Seo title="Home" keywords={['home']} />
			<Grid
				p={[4, 0]}
				pt={[6, 0]}
				gridGap={[2, indexGapMd]}
				gridTemplateAreas={[
					`
						"bio"
						"mobileNav"
					`,
					indexTemplateMd,
					indexTemplateMd,
					indexTemplateMd,
					indexTemplateLg
				]}
				gridTemplateColumns={[
					'100%',
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
				{indexComponents({data, bioDisplay: ['flex', 'none']})}
			</Grid>
		</Root>
	);
};

export default BioPage;

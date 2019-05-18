import React from 'react';
import indexComponents from '../components';
import Root from '../components/root';
import Seo from '../components/seo';
import {
	indexData,
	indexTemplates,
	indexColumns,
	indexRows,
	indexGaps
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
				gridGap={[2, ...indexGaps]}
				gridTemplateAreas={[
					`
						"bio"
						"mobileNav"
					`,
					...indexTemplates
				]}
				gridTemplateColumns={['100%', ...indexColumns]}
				gridTemplateRows={['auto 0', ...indexRows]}
			>
				{indexComponents({data, bioDisplay: ['flex', 'none']})}
			</Grid>
		</Root>
	);
};

export default BioPage;

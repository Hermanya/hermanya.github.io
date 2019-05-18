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
	"blog"
	"mobileNav"
`;

const BlogPage = () => {
	const data = indexData();
	return (
		<Root bg={['gray.9', 'gray.8']}>
			<Seo title="Links" keywords={['blog', 'posts', 'reviews']} />
			<Grid
				p={[4, 0]}
				pb={[5, 0]}
				gridGap={[2, ...indexGaps]}
				gridTemplateAreas={[template, ...indexTemplates]}
				gridTemplateColumns={['100%', ...indexColumns]}
				gridTemplateRows={['auto 0', ...indexRows]}
			>
				{indexComponents({data, blogDisplay: 'grid'})}
			</Grid>
		</Root>
	);
};

export default BlogPage;

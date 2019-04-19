import React from 'react';
import {Composition} from 'atomic-layout';
import indexComponents from '../components';
import Root from '../components/root';
import theme from '../theme';
import Seo from '../components/seo';
import {indexData, indexProps} from '../desktop';

const template = `
	repos
	nav
`;

const GithubPage = () => {
	const data = indexData();
	return (
		<Root bg={['gray.9', 'gray.9', 'gray.9', 'gray.8']}>
			<Seo title="Links" keywords={['open source', 'repos', 'github']} />
			<Composition
				padding={theme.space[4]}
				gutter={theme.space[2]}
				template={template}
				templateCols="auto"
				templateRows="125px auto 0"
				{...indexProps}
			>
				{indexComponents(data)}
			</Composition>
		</Root>
	);
};

export default GithubPage;

import React from 'react';
import {Composition} from 'atomic-layout';
import indexComponents from '../components';
import Root from '../components/root';
import theme from '../theme';
import {indexData, indexProps} from './desktop';

const template = `
	links
	nav
`;

const LinksPage = () => {
	const data = indexData();
	return (
		<Root
			// bg={{sm: 'gray.9', xl: 'gray.8'}}
			bg={['gray.9', 'gray.9', 'gray.9', 'gray.8']}
		>
			<Composition
				padding={theme.space[4]}
				gutter={theme.space[2]}
				template={template}
				templateCols="auto"
				templateRows="auto 0"
				{...indexProps}
			>
				{indexComponents(data)}
			</Composition>
		</Root>
	);
};

export default LinksPage;

import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import {fontFamily, fontSize} from 'styled-system';
import {Box} from 'rebass';
import {useColorSystem} from 'use-color-system';
import useMedia from 'use-media';
import theme from '../theme';

import {createPrismTheme} from './prism-theme';

const Container = styled(Box)`
	min-height: 100vh;
	${fontFamily}
	${fontSize}
`;

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}
body, html {
  padding: 0; 
  margin: 0;
  background: ${props => props.theme.colors.gray[9]};
  color: ${props => props.theme.colors.gray[0]};
}
a {
	text-decoration: none;
	text-align: center;
	color: ${props => props.theme.colors.blue[2]};
}
a:hover {
	color: ${props => props.theme.colors.blue[3]};
}
a:visited {
	color: ${props => props.theme.colors.purple[2]};
}
a:hover:visited {
	color: ${props => props.theme.colors.purple[3]};
}
`;

const Root = props => {
	const systemDark = useMedia('(prefers-color-scheme: dark)');
	const scaleLength = 10;
	const colors = useColorSystem({
		hueOffset: 0,
		colorSchemePreference: systemDark ? 'inverted' : 'light',
		luminanceRange: 100,
		scaleLength
		// getChroma: () => 80 // - ((Math.sin(((Math.PI / 2) * x) / scaleLength) + 1) / 2) * 100 * 0.25
	});
	const PrismTheme = createPrismTheme(colors);
	return (
		<ThemeProvider
			theme={{
				...theme,
				colors
			}}
		>
			<>
				<GlobalStyle />
				<PrismTheme />
				<Container fontFamily="sans" color="gray.0" bg="gray.9" {...props} />
			</>
		</ThemeProvider>
	);
};

Root.propTypes = {
	children: PropTypes.node.isRequired
};

export default Root;

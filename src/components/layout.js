import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import {fontFamily} from 'styled-system';
import {Flex} from 'rebass';
import {useColorSystem} from 'use-color-system';
import useMedia from 'use-media';
import theme from '../theme';

const Container = styled(Flex)`
	min-height: 100vh;
	${fontFamily}
`;

const GlobalStyle = createGlobalStyle`
body, html {
  padding: 0; 
  margin: 0;
  background: ${props => props.theme.colors.gray[9]};
  color: ${props => props.theme.colors.gray[0]};
}
`;

const Layout = props => {
	const systemDark = useMedia('(prefers-color-scheme: dark)');
	const colors = useColorSystem({
		hueOffset: 0,
		colorSchemePreference: systemDark ? 'inverted' : 'light',
		luminanceRange: 100
	});
	return (
		<ThemeProvider
			theme={{
				...theme,
				colors
			}}
		>
			<>
				<GlobalStyle />
				<Container
					mx="auto"
					px={[4, 4, 0]}
					py={[6, 6, 0]}
					fontFamily="sans"
					color="gray.0"
					bg="gray.9"
					{...props}
				/>
			</>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

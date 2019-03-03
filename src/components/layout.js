import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import {fontFamily} from 'styled-system';
import {Flex} from 'rebass';
import theme from '../theme';

const Container = styled(Flex)`
	min-height: 100vh;
	${fontFamily}
`;

const Layout = props => (
	<ThemeProvider theme={theme}>
		<Container
			mx="auto"
			px={[4, 4, 0]}
			py={[6, 6, 0]}
			fontFamily="sans"
			{...props}
		/>
	</ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

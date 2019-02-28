import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import {fontFamily, display} from 'styled-system';
import {Flex, Box} from 'rebass';
import theme from '../theme';
import IndexLg from '../pages/lg';

const Container = styled(Flex)`
	min-height: 100vh;
	${fontFamily}
`;

const DisplayBox = styled(Box)`
	${display}
`;

const Layout = ({children}) => (
	<ThemeProvider theme={theme}>
		<Container mx="auto" px={[4, 4, 0]} py={[6, 6, 0]} fontFamily="sans">
			<DisplayBox display={['none', 'none', 'flex']}>
				<IndexLg />
			</DisplayBox>
			<DisplayBox display={['flex', 'flex', 'none']}>{children}</DisplayBox>
		</Container>
	</ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

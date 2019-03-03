import React from 'react';
import styled from 'styled-components';
import {display} from 'styled-system';
import {Box} from 'rebass';

const DisplayBox = styled(Box)`
	${display}
`;

const ResponsivePage = ({
	xs: XsPage,
	sm: SmPage = XsPage,
	md: MdPage = SmPage
	// Lg: LgPage = MdPage
}) => (
	<>
		<DisplayBox display={['flex', 'flex', 'none']}>
			<XsPage />
		</DisplayBox>
		{/* <DisplayBox display={['none', 'flex', 'none']}>
			<SmPage />
		</DisplayBox> */}
		<DisplayBox display={['none', 'none', 'flex']}>
			<MdPage />
		</DisplayBox>
		{/* <DisplayBox display={['none', 'none', 'none', 'flex']}>
			<LgPage />
		</DisplayBox> */}
	</>
);

ResponsivePage.propTypes = {};

export default ResponsivePage;

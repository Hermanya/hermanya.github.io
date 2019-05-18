import React from 'react';
import {Link} from 'gatsby';

import {Flex, Text} from 'rebass';
import {User, GitHub, Feather, Compass} from 'react-feather';
import styled from 'styled-components';
import {gridArea, display, color} from 'styled-system';

const MobileNavContainer = styled(Flex)`
	position: fixed;
	justify-content: space-around;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	background: ${props => props.theme.colors.gray[9]}ee;
	min-height: 3.5rem;
	padding-bottom: env(safe-area-inset-bottom);
	backdrop-filter: blur(1px);
	${gridArea}
	${display}
`;

const NavLink = styled(Link)`
	border-radius: 2px;
	font-size: 0.70711rem;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	line-height: 1;
	width: 64px;
	padding: 0.2625rem 0.2625rem 0;
	-webkit-text-decoration: none;
	text-decoration: none;
	text-align: center;
	background: none;
	border: 0;
	color: ${props => props.theme.colors.blue[3]};
	:hover {
		color: ${props => props.theme.colors.blue[4]};
	}
	:visited {
		color: ${props => props.theme.colors.purple[3]};
	}
	:hover:visited {
		color: ${props => props.theme.colors.purple[4]};
	}
	svg {
		display: block;
		height: 32px;
		margin: 0 auto;
	}
	${color}
`;

const MobileNav = props => (
	<MobileNavContainer {...props}>
		<NavLink to="/">
			<User />
			<Text>About</Text>
		</NavLink>
		<NavLink to="/links">
			<Compass />
			<Text>Links</Text>
		</NavLink>
		<NavLink to="/github">
			<GitHub />
			<Text>OSS</Text>
		</NavLink>
		<NavLink to="/blog">
			<Feather />
			<Text>Blog</Text>
		</NavLink>
	</MobileNavContainer>
);

export default MobileNav;

export const BlogMobileNav = ({linksShown, setLinksShown, ...props}) => (
	<MobileNavContainer {...props}>
		<NavLink as="button" onClick={() => setLinksShown(!linksShown)}>
			<Compass />
			<Text>{linksShown ? 'Hide' : 'Links'}</Text>
		</NavLink>
	</MobileNavContainer>
);

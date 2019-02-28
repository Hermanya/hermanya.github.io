import React from 'react';
import {Link} from 'gatsby';

import {Flex, Text} from 'rebass';
import {User, GitHub, Feather, Compass} from 'react-feather';
import styled from 'styled-components';

const MobileNav = styled(Flex)`
	position: fixed;
	justify-content: space-around;

	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	// border-top: 1px solid #eee;
	background: #ffffffee;
	min-height: 3.5rem;
	padding-bottom: env(safe-area-inset-bottom);
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

	svg {
		display: block;
		height: 32px;
		margin: 0 auto;
	}
`;

export default () => (
	<MobileNav>
		<NavLink to="/">
			<User />
			<Text>Bio</Text>
		</NavLink>
		<NavLink to="/links">
			<Compass />
			<Text>Links</Text>
		</NavLink>
		<NavLink to="/github">
			<GitHub />
			<Text>OSS</Text>
		</NavLink>
		<NavLink as="a" href="https://medium.com/@hermanhasawish">
			<Feather />
			<Text>Blog</Text>
		</NavLink>
	</MobileNav>
);

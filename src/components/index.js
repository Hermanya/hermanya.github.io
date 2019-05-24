import React from 'react';
import {Flex, Box, Text} from 'rebass';
import Img from 'gatsby-image';
import {gridArea, space, display} from 'styled-system';
import styled, {css} from 'styled-components';

import {ThreeD} from './thee-d';
import hightlightEnglish from './highlight-english';
import GitHub from './github';
import MobileNav from './mobile-nav';
import SidebarNav from './sidebar-nav';

import Blog from './blog';
import MyExternalLinks from './my-external-links';

export const Copy = styled(Box)`
	max-width: 40em;
	border-radius: 0.5em 0.5em 0 0;
	transition: 0.5s;
	:hover {
		border-radius: 0.5em;
		/* box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4); */
		transform: translateY(-2em);
	}
`;

export const Banner = styled(Flex)`
	background-color: ${props => props.theme.colors.blue[7]};
	background-image: linear-gradient(
		62deg,
		${props => props.theme.colors.blue[7]} 0%,
		${props => props.theme.colors.purple[5]} 100%
	);
	${gridArea}
	${display}
`;

const DescriptionAndBio = ({data}) => (
	<>
		<Text lineHeight={1.25} fontWeight="normal">
			<Flex as="h1" flexWrap="wrap">
				{hightlightEnglish(
					data.site.siteMetadata.description,
					data.site.siteMetadata.misspelledWords,
					data.site.siteMetadata.keyWords
				)}
			</Flex>
		</Text>
		<Text lineHeight={1.75} fontWeight="normal">
			<Flex as="p" flexWrap="wrap">
				{hightlightEnglish(
					data.site.siteMetadata.bio,
					data.site.siteMetadata.misspelledWords,
					data.site.siteMetadata.keyWords
				)}
			</Flex>
		</Text>
	</>
);

export const Header = ({data, ...props}) => (
	<Banner {...props}>
		<Box width={[0, 1 / 4, 1 / 4]} alignSelf="flex-end" mr={4}>
			<Img
				fluid={data.meLookingRight.childImageSharp.fluid}
				css={css`
					filter: saturate(0.8);
				`}
			/>
		</Box>

		<ThreeD>
			<Copy p={4} bg="gray.7" color="gray.1">
				<DescriptionAndBio data={data} />
			</Copy>
		</ThreeD>
	</Banner>
);

export const Avatar = styled(Img)`
	border-radius: 4px;
	${gridArea}
	${space}
	${display}
`;

const Bio = styled(Flex)`
	${gridArea}
	${display}
`;

export default ({
	data,
	bioDisplay = 'none !important',
	gitHubDisplay = ['none', 'grid'],
	linksDisplay = ['none', 'block'],
	blogDisplay = ['none', 'grid']
}) => (
	<>
		<Bio
			gridArea="bio"
			display={bioDisplay}
			flexDirection="column"
			alignItems="center"
			px={3}
			pb={3}
		>
			<Avatar fixed={data.meSmilingDown.childImageSharp.fixed} m="auto" />
			<DescriptionAndBio data={data} />
		</Bio>
		<MobileNav gridArea="mobileNav" display={['flex', 'none']} />
		<Header
			gridArea="banner"
			px={[0, 4]}
			pt={[0, 4, 5]}
			color="gray.0"
			bg="gray.8"
			data={data}
			display={['none', 'flex']}
		/>
		<GitHub
			gridArea="repos"
			px={[0, 4]}
			py={[0, 4]}
			color="gray.0"
			bg={['gray.9', 'gray.9', 'gray.9', 'gray.8']}
			display={gitHubDisplay}
		/>
		<SidebarNav
			gridArea="links"
			display={linksDisplay}
			links={MyExternalLinks}
		/>
		<Blog
			gridArea="blog"
			gridGap={4}
			px={[0, 4]}
			py={[0, 4]}
			gridAutoRows="min-content"
			display={blogDisplay}
		/>
	</>
);

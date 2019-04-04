import React from 'react';
import {Flex, Box, Text} from 'rebass';
import Img from 'gatsby-image';
import {space} from 'styled-system';
import styled, {css} from 'styled-components';

import ExternalLinks from './external-links';
import {ThreeD} from './spring';
import hightlightEnglish from './highlight-english';
import {ExternalLink} from './external-link';
import GitHub from './github';
import MobileNav from './mobile-nav';

export const Sidebar = props => (
	<Flex {...props}>
		<ExternalLinks
			css={css`
				position: sticky;
				top: ${props => props.theme.space[6]}px;
			`}
		/>
		<ExternalLink
			href="https://github.com/Hermanya/hermanya.github.io/tree/develop"
			css={css`
				opacity: 0.5;
			`}
		>
			View Page Source
		</ExternalLink>
	</Flex>
);
export const Copy = styled(Box)`
	max-width: 32em;
	border-radius: 0.5em 0.5em 0 0;
	transition: 0.5s;
	// box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
	:hover {
		border-radius: 0.5em;
		box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
		transform: translateY(-2em);
	}
`;

export const Banner = styled(Flex)`
	background-color: ${props =>
		console.log(props) || props.theme.colors.blue[7]};
	background-image: linear-gradient(
		62deg,
		${props => props.theme.colors.blue[6]} 0%,
		${props => props.theme.colors.purple[6]} 100%
	);
`;
// #8ec5fc

export const Header = ({data, ...props}) => (
	<Banner {...props}>
		<Box width={[0, 0, 1 / 3, 1 / 4]} alignSelf="flex-end" mr={4}>
			<Img fluid={data.meLookingRight.childImageSharp.fluid} />
		</Box>

		<ThreeD>
			<Copy p={4} bg="gray.1" color="gray.9">
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
					<Flex flexWrap="wrap" mt={4}>
						{hightlightEnglish(
							data.site.siteMetadata.bio,
							data.site.siteMetadata.misspelledWords,
							data.site.siteMetadata.keyWords
						)}
					</Flex>
				</Text>
			</Copy>
		</ThreeD>
	</Banner>
);

export const Avatar = styled(Img)`
	border-radius: 1rem;
	${space}
`;

export default data => ({Portrait, Bio, Nav, NavMd, Banner, Repos}) => (
	<>
		<Portrait
			as={Avatar}
			fixed={data.meSmilingDown.childImageSharp.fixed}
			m="auto"
		/>
		<Bio as={Flex} flexDirection="column" alignItems="center">
			<Text lineHeight={1.25} fontWeight="normal">
				<Flex as="h1" mt={4} flexWrap="wrap">
					{hightlightEnglish(
						data.site.siteMetadata.description,
						data.site.siteMetadata.misspelledWords,
						data.site.siteMetadata.keyWords
					)}
				</Flex>
			</Text>
			<Text lineHeight={1.75} fontWeight="normal">
				<Flex as="p" mt={4} flexWrap="wrap">
					{hightlightEnglish(
						data.site.siteMetadata.bio,
						data.site.siteMetadata.misspelledWords,
						data.site.siteMetadata.keyWords
					)}
				</Flex>
			</Text>
		</Bio>
		<Nav as={MobileNav} />
		<NavMd
			as={Sidebar}
			pt={6}
			pb={4}
			px={4}
			bg="gray.9"
			flexDirection="column"
			justifyContent="space-between"
		/>
		<Banner as={Header} px={4} pt={5} color="gray.0" bg="gray.8" data={data} />
		<Repos as={GitHub} pl={4} pr={[4, 4, 4, 0]} color="gray.0" bg="gray.8" />
	</>
);

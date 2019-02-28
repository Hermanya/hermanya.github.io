import React from 'react';
import {Flex, Box, Text} from 'rebass';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Github from '../../components/github';
import ExternalLinks from '../../components/external-links';
import {ThreeD} from '../../components/spring';
import hightlightEnglish from '../../components/highlight-english';

const Sidebar = styled(Flex)``;
const Copy = styled(Box)`
	max-width: 32em;
	border-radius: 0.5em 0.5em 0 0;
	transition: 0.5s;
	// box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
	:hover {
		border-radius: 0.5em;
		box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
	}
`;

const Header = styled(Flex)`
	background-color: #8ec5fc;
	background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
`;

const IntroPage = () => {
	const data = useStaticQuery(graphql`
		query SiteInfoQueryLg {
			site {
				siteMetadata {
					description
					bio
					misspelledWords
					keyWords
				}
			}
			placeholderImage: file(relativePath: {eq: "me-looking-right.png"}) {
				childImageSharp {
					fluid(maxWidth: 250) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
		}
	`);

	return (
		<Flex width={1}>
			<Sidebar pt={6} px={4} width={1 / 4}>
				<ExternalLinks />
			</Sidebar>
			<Flex width={1} flexDirection="column" bg="#fafafa">
				<Header color="white" px={4} pt={5}>
					<Box width={[0, 0, 1 / 3, 1 / 4]} alignSelf="flex-end" mr={4}>
						<Img fluid={data.placeholderImage.childImageSharp.fluid} />
					</Box>

					<ThreeD>
						<Copy p={4} bg="black">
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
				</Header>

				<Github pl={4} pr={[4, 4, 4, 0]} />
			</Flex>
			<Box width={[0, 0, 0, 1 / 4]} bg="#fafafa" />
		</Flex>
	);
};

export default IntroPage;

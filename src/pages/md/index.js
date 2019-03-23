import React from 'react';
import {Flex, Box, Text} from 'rebass';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled, {css} from 'styled-components';
import Github from '../../components/github';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import ExternalLinks from '../../components/external-links';
import {ThreeD} from '../../components/spring';
import hightlightEnglish from '../../components/highlight-english';
import {ExternalLink} from '../../components/external-link';

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
	background-color: ${props => props.theme.colors.blue[7]};
	background-image: linear-gradient(
		62deg,
		${props => props.theme.colors.blue[5]} 0%,
		${props => props.theme.colors.purple[6]} 100%
	);
`;
// #8ec5fc

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
		<>
			<Seo title="Home" keywords={[]} />
			<Layout>
				<Flex width={1}>
					<Sidebar
						pt={6}
						pb={4}
						px={4}
						width={1 / 4}
						flexDirection="column"
						justifyContent="space-between"
					>
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
					</Sidebar>
					<Flex width={1} flexDirection="column" color="gray.0" bg="gray.8">
						<Header color="white" px={4} pt={5}>
							<Box width={[0, 0, 1 / 3, 1 / 4]} alignSelf="flex-end" mr={4}>
								<Img fluid={data.placeholderImage.childImageSharp.fluid} />
							</Box>

							<ThreeD>
								<Copy p={4} bg="gray.0" color="gray.9">
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
					<Box width={[0, 0, 0, 1 / 4]} bg="gray.8" />
				</Flex>
			</Layout>
		</>
	);
};

export default IntroPage;

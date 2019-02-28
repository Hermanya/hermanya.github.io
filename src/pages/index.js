import React from 'react';
import {Text, Flex} from 'rebass';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import MobileNav from '../components/mobile-nav';
import Layout from '../components/layout';
import Seo from '../components/seo';
import hightlightEnglish from '../components/highlight-english';

const Avatar = styled(Img)`
	border-radius: 1rem;
`;

const IntroPage = () => (
	<>
		<Seo title="Home" keywords={['gatsby', 'application', 'react']} />
		<Layout>
			<Flex flexDirection="column" alignItems="center">
				<StaticQuery
					query={graphql`
						query SiteInfoQuery {
							site {
								siteMetadata {
									description
									bio
									misspelledWords
									keyWords
								}
							}
							placeholderImage: file(
								relativePath: {eq: "me-smiling-down.png"}
							) {
								childImageSharp {
									fixed(width: 125, height: 125) {
										...GatsbyImageSharpFixed_tracedSVG
									}
								}
							}
						}
					`}
					render={data => (
						<>
							<Avatar fixed={data.placeholderImage.childImageSharp.fixed} />
							<Text lineHeight={1.25} fontWeight="normal">
								<Flex as="h1" mt={4} flexWrap="wrap">
									{hightlightEnglish(data.site.siteMetadata.description,
										data.site.siteMetadata.misspelledWords,
										data.site.siteMetadata.keyWords)}
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
						</>
					)}
				/>
			</Flex>
			<MobileNav />
		</Layout>
	</>
);

export default IntroPage;

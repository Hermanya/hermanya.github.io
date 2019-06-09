import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { space, gridArea } from 'styled-system';
import { Text } from 'rebass';
import Grid from './grid';
import NavLink from './nav-link';

const Container = styled(Grid)`
	grid-area: blog;
	max-width: 100%;
	line-height: 1.5;
	${space};
`;

const Post = styled('div')`
	line-height: 1.5;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	${space};
`;

const pageQuery = graphql`
	{
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___created] }
			limit: 1000
		) {
			edges {
				node {
					frontmatter {
						created(formatString: "MMMM DD, YYYY")
						updated(formatString: "MMMM DD, YYYY")
						path
						title
						description
						unpublished
					}
				}
			}
		}
	}
`;

const Heading = styled.h3`
	text-transform: capitalize;
	font-weight: normal;
	margin: 0;
	display: flex;
	align-items: center;
	${gridArea}
`;

const Description = styled.p`
	margin: 0;
	font-size: ${props => props.theme.fontSizes[1]};
	line-height: 1.75;
	opacity: 0.6;
	${gridArea}
`;

const Blog = props => {
	const data = useStaticQuery(pageQuery);

	return (
		<Container {...props}>
			<Text as="h2" fontWeight="normal" m={0} textAlign={['center', 'left']}>
				I review projects that I found on GitHub.
			</Text>
			{data.allMarkdownRemark.edges
				.map(edge => edge.node)
				.filter(node => !node.frontmatter.unpublished)
				.map(node => {
					return (
						<Post key={node.frontmatter.path}>
							<NavLink as={Link} to={node.frontmatter.path}>
								<Heading>{node.frontmatter.title}</Heading>
							</NavLink>
							{node.frontmatter.published}
							<div>{node.frontmatter.created}</div>
							{/* <div>{node.frontmatter.updated}</div> */}
							<Description>{node.frontmatter.description}</Description>
						</Post>
					);
				})}
		</Container>
	);
};

export default Blog;

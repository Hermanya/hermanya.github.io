import React from 'react';
import styled from 'styled-components';
import { Title, Heading, Description } from './Typography';

const Post = styled.div`
	line-height: 1.5;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 1rem;
`;

const Blog = props => {
	const data = useStaticQuery(pageQuery);

	return (
		<>
			<Title>Blog</Title>
			{/* {data.allMarkdownRemark.edges
				.map(edge => edge.node)
				.filter(node => !node.frontmatter.unpublished)
				.map(node => {
					return (
						<Post key={node.frontmatter.path}>
							<Link to={node.frontmatter.path}>
								<Heading>{node.frontmatter.title}</Heading>
							</Link>
							{node.frontmatter.published}
							<div>{node.frontmatter.created}</div>
							<Description>{node.frontmatter.description}</Description>
						</Post>
					);
				})} */}
		</>
	);
};

export default Blog;

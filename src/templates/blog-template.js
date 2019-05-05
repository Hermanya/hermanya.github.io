import React from 'react';
import {graphql} from 'gatsby';
import indexComponents from '../components';
import Root from '../components/root';
import Seo from '../components/seo';

import Grid from '../components/grid';
import MobileNav from '../components/mobile-nav';
import ExternalLinks from '../components/external-links';

const BlogPage = ({frontmatter, html}) => {
	return (
		<Root bg={['gray.9', 'gray.8']}>
			<Seo title="Home" keywords={['home']} />
			<Grid>
				<MobileNav />
				<ExternalLinks />
			</Grid>
			<h1>{frontmatter.title}</h1>
			<h2>{frontmatter.date}</h2>
			<div
				dangerouslySetInnerHTML={{__html: html}} // eslint-disable-line react/no-danger
				className="blog-post-content"
			/>
		</Root>
	);
};

export default function Template({
	data // this prop will be injected by the GraphQL query below.
}) {
	const {markdownRemark} = data; // data.markdownRemark holds our post data
	const {frontmatter, html} = markdownRemark;
	return <BlogPage frontmatter={frontmatter} html={html} />;
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: {path: {eq: $path}}) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;

import React, {useState} from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import {space, display, color} from 'styled-system';

import {ArrowRight} from 'react-feather';
import Root from '../components/root';
import Seo from '../components/seo';

import {BlogMobileNav} from '../components/mobile-nav';
import SidebarNav from '../components/sidebar-nav';
import BlogLinks from '../components/blog-external-links';

const Article = styled('article')`
	grid-area: article;
	max-width: 100%;
	overflow-x: auto;
	line-height: 1.5;
	@media only screen and (min-width: ${props => props.theme.breakpoints[0]}) {
		column-width: 36ch;
	}
	text-align: justify;
	column-gap: ${props => props.theme.space[5]}px;
	max-height: 100vh;
	${space};
`;

Article.Title = styled.h1`
	margin: 0;
	border-bottom: 0.1em solid ${props => props.theme.colors.orange[5]};
	text-align: left;
	${space};
`;

const Placeholder = styled.div`
	width: 3px;
	height: 100vh;
	${display}
`;

const Tip = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${color}
	${display}
`;

export default function BlogPostTemplate({
	data // this prop will be injected by the GraphQL query below.
}) {
	const {markdownRemark} = data; // data.markdownRemark holds our post data
	const {frontmatter, html} = markdownRemark;
	const [linksShown, setLinksShown] = useState(false);
	return (
		<Root bg={['gray.9', 'gray.8']}>
			<Seo title="Home" keywords={['home']} />

			<BlogMobileNav
				gridArea="mobileNav"
				display={['flex', 'none']}
				setLinksShown={setLinksShown}
				linksShown={linksShown}
			/>
			{/* // replace with about author/ discuss/ related links */}
			<SidebarNav
				gridArea="sidebar"
				display={[linksShown ? 'flex' : 'none', 'flex']}
				position="fixed"
				right={0}
				width={['100%', '18em']}
				alignItems={['center', 'initial']}
				justifyContent={['center', 'space-between']}
				links={props => (
					<BlogLinks
						discussions={Object.keys(frontmatter)
							.filter(key => key.startsWith('discuss_'))
							.map(key => frontmatter[key])}
						next={
							frontmatter.next_post && {
								link: frontmatter.next_post,
								title: frontmatter.next_post_title
							}
						}
						previous={
							frontmatter.previous_post && {
								link: frontmatter.previous_post,
								title: frontmatter.previous_post_title
							}
						}
						{...props}
					/>
				)}
			>
				<Tip color="gray.5" display={['none', 'flex']}>
					Scroll horizontally <ArrowRight />
				</Tip>
			</SidebarNav>
			<Article pr={[4, '22em']} pl={[4, 4, 5]} py={[4, 4, 3]}>
				<Article.Title>{frontmatter.title}</Article.Title>
				<p>
					Posted on <time>{frontmatter.created}</time>.
					{frontmatter.updated && (
						<span>
							&nbsp; Edited on <time>{frontmatter.updated}</time>.
						</span>
					)}
				</p>
				<div
					dangerouslySetInnerHTML={{__html: html}} // eslint-disable-line react/no-danger
					className="blog-post-content"
				/>
				<Placeholder display={['none', 'flex']} />
			</Article>
		</Root>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: {path: {eq: $path}}) {
			html
			frontmatter {
				created(formatString: "MMMM DD, YYYY")
				updated(formatString: "MMMM DD, YYYY")
				path
				title
				discuss_on_github
				next_post
				next_post_title
				previous_post
				previous_post_title
			}
		}
	}
`;

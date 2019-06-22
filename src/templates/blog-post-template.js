import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import { space, display, color } from 'styled-system';

import { ArrowRight } from 'react-feather';
import Root from '../components/root';
import Seo from '../components/seo';

import { BlogMobileNav } from '../components/mobile-nav';
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
	/* text-align: justify; */
	/* text-justify: inter-word; */
	/* text-justify: distribute; */
	column-gap: ${props => props.theme.space[5]}px;
	max-height: 100vh;
	text-rendering: optimizeLegibility;
	${space};
`;

Article.Title = styled.h1`
	margin: 0;
	padding-bottom: 0.5em;
	border-bottom: 0.1em solid ${props => props.theme.colors.orange[5]};
	text-align: left;
	line-height: 1.5;
	color: ${props => props.theme.colors.red[3]};
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
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark;
	const [linksShown, setLinksShown] = useState(false);
	return (
		<Root bg={['gray.9']} color="gray.2">
			<Seo title={frontmatter.title} keywords={[]} />

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
				linksShown={linksShown}
				bg="gray.8"
				links={props => (
					<BlogLinks
						path={frontmatter.path}
						discussions={Object.keys(frontmatter)
							.filter(key => key.startsWith('discuss_on_'))
							.map(
								key =>
									frontmatter[key] && {
										text: key.slice('discuss_on_'.length),
										url: frontmatter[key]
									}
							)}
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
				<Tip color="teal.3" display={['none', 'flex']}>
					<div>
						Scroll horizontally
						<br />
						<small>Possibly holding [Shift]</small>
					</div>
					<ArrowRight />
				</Tip>
			</SidebarNav>
			<Article
				pr={[4, '22em']}
				pl={[4, 5]}
				py={[4, 4, 3]}
				css={css`
					${!linksShown &&
						`
				overflow: scroll;
				-webkit-overflow-scrolling: touch;
				`}
					line-height: 1.85em;
				`}
			>
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
					dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
					className="blog-post-content"
				/>
				<Placeholder display={['none', 'flex']} />
			</Article>
		</Root>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				created(formatString: "MMMM DD, YYYY")
				updated(formatString: "MMMM DD, YYYY")
				path
				title
				discuss_on_github
				discuss_on_reddit
				discuss_on_spectrum
				next_post
				next_post_title
				previous_post
				previous_post_title
			}
		}
	}
`;

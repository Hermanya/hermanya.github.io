import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled, {css} from 'styled-components';
import {useTrail, animated} from 'react-spring';
import {Star as StarIcon} from 'react-feather';
import {Box, Text} from 'rebass';
import {useTypingEffect} from 'use-typing-effect';
import {gridArea} from 'styled-system';
import NavLink from './nav-link';
import Grid from './grid';

const Repo = ({repo, ...props}) => {
	return (
		<Grid
			gridTemplateAreas={`
				"pic title"
				"pic description"
				"pic links"
			`}
			gridGap="1em"
			{...props}
		>
			<Repo.Emoji gridArea="pic" fontSize={['46px', '46px', '80px']}>
				{repo.description.substr(0, 2)}
			</Repo.Emoji>
			<Repo.Heading gridArea="title" alignItems="center">
				<NavLink href={repo.url} color="gray.0">
					{repo.name.replace(/-/g, ' ')}
				</NavLink>
				<Repo.Language ml={2}>{repo.primaryLanguage.name}</Repo.Language>
			</Repo.Heading>
			<Repo.Description gridArea="description">
				{repo.description.substr(2)}
			</Repo.Description>
			<Repo.Links gridArea="links">
				<NavLink
					href={repo.url + '/stargazers'}
					alignItems="center"
					color="orange.5"
				>
					<StarIcon size="1em" />
					<Text ml={2} color="gray.0">
						{repo.stargazers.totalCount}
					</Text>
				</NavLink>
			</Repo.Links>
		</Grid>
	);
};

Repo.Heading = styled.h3`
	text-transform: capitalize;
	font-weight: normal;
	margin: 0;
	display: flex;
	align-items: center;
	${gridArea}
`;

Repo.Description = styled.p`
	margin: 0;
	font-size: ${props => props.theme.fontSizes[1]};
	line-height: 1.75;
	opacity: 0.6;
	${gridArea}
`;

Repo.Emoji = styled(Text)`
	height: 80px;
	width: 80px;
	vertical-align: middle;
	text-align: center;
	line-height: 80px;
	filter: saturate(0.5);
	${gridArea}
`;

Repo.Links = styled.div`
	${gridArea}
`;

const getLanguageColors = props => {
	switch (props.children) {
		case 'JavaScript':
			return css`
				background: ${props => props.theme.colors.orange[7]};
				color: ${props => props.theme.colors.gray[0]};
			`;
		case 'TypeScript':
			return css`
				background: ${props => props.theme.colors.blue[3]};
				color: ${props => props.theme.colors.gray[9]};
			`;
		case 'HTML':
			return css`
				background: ${props => props.theme.colors.red[4]};
				color: ${props => props.theme.colors.gray[9]};
			`;
		default:
			break;
	}
};

Repo.Language = styled(Box)`
	font-weight: 600;
	font-size: 12px;
	line-height: 1;
	border-radius: 2px;
	padding: 3px 4px;
	text-align: center;
	font-weight: normal;
	letter-spacing: 1px;
	${getLanguageColors}
`;

const githubAreas = `
	"bio"
	"repos"
	"more"
	"totalStars"
`;
const githubAreasMd = `
	"bio   bio   bio"
	"repos repos repos"
	"more  .     totalStars"
`;

const GitHub = props => {
	const data = useStaticQuery(graphql`
		query {
			github {
				user(login: "hermanya") {
					login
					bio
					pinnedRepositories(first: 10) {
						nodes {
							id
							name
							url
							description
							stargazers {
								totalCount
							}
							primaryLanguage {
								name
							}
							licenseInfo {
								name
							}
						}
					}
					repositories(last: 100) {
						nodes {
							stargazers {
								totalCount
							}
						}
					}
				}
			}
		}
	`);

	const {
		github: {
			user: {login, bio, pinnedRepositories, repositories}
		}
	} = data;
	const totalStars = repositories.nodes.reduce(
		(acc, {stargazers: {totalCount}}) => totalCount + acc,
		0
	);

	const config = {mass: 5, tension: 2000, friction: 200};
	const revealed = true;
	const pinnedRepoTrail = useTrail(pinnedRepositories.nodes.length, {
		config,
		opacity: revealed ? 1 : 0,
		x: revealed ? 0 : 20,
		from: {opacity: 0, x: 20}
	});

	const typedBio = useTypingEffect([bio], {playbackRate: 0.5});

	return (
		<Grid
			gridGap={[4]}
			gridTemplateAreas={[githubAreas, githubAreasMd]}
			{...props}
		>
			<GitHub.Bio
				gridArea="bio"
				as="h2"
				fontWeight="normal"
				m={0}
				textAlign={['center', 'left']}
			>
				{typedBio}
			</GitHub.Bio>
			<GitHub.Repos
				gridAutoRows
				gridArea="repos"
				gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))"
				gridGap={[4]}
			>
				{pinnedRepoTrail.map(({x, ...rest}, index) => {
					const repo = pinnedRepositories.nodes[index];
					return (
						<animated.div
							key={repo.id}
							className="trails-text"
							style={{
								...rest,
								transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
								display: 'flex',
								width: '100%'
							}}
						>
							<Repo repo={repo} />
						</animated.div>
					);
				})}
			</GitHub.Repos>
			<GitHub.More
				gridArea="more"
				href={`https://github.com/${login}/repositories`}
			>
				More repositories
			</GitHub.More>
			<GitHub.TotalStars gridArea="totalStars" fontSize={0} color="gray.5">
				In total, I have received {totalStars} stars.
			</GitHub.TotalStars>
		</Grid>
	);
};

GitHub.Bio = styled(Text)`
	${gridArea}
`;

GitHub.Repos = styled(Grid)`
	${gridArea}
`;

GitHub.More = styled(NavLink)`
	${gridArea}
`;

GitHub.TotalStars = styled(Text)`
	text-align: right;
	${gridArea}
`;

export default GitHub;

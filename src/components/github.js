import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled, {css} from 'styled-components';
import {useTrail, animated} from 'react-spring';
import {Star as StarIcon} from 'react-feather';
import {Box, Flex, Text} from 'rebass';
import {useTypingEffect} from 'use-typing-effect';
import {Composition} from 'atomic-layout';
import theme from '../theme';
import {ExternalLink} from './external-link';

const repoTemplate = `
	pic title       
	pic description 
	pic links       
`;
const Repo = ({repo, ...props}) => {
	return (
		<Flex {...props}>
			<Composition template={repoTemplate} gutter="1em">
				{({Pic, Title, Description, Links}) => (
					<>
						<Pic as={Repo.Emoji} fontSize={['46px', '46px', '80px']}>
							{repo.description.substr(0, 2)}
						</Pic>
						<Title>
							<Flex alignItems="center">
								<ExternalLink as={Repo.Heading} href={repo.url} color="gray.0">
									{repo.name.replace(/-/g, ' ')}
								</ExternalLink>
								<Repo.Language ml={2}>
									{repo.primaryLanguage.name}
								</Repo.Language>
							</Flex>
						</Title>
						<Description>
							<Text
								css={css`
									opacity: 0.6;
								`}
								fontSize={1}
								lineHeight={1.75}
								my="-0.25em"
							>
								{repo.description.substr(2)}
							</Text>
						</Description>
						<Links as={Flex}>
							<ExternalLink
								href={repo.url + '/stargazers'}
								alignItems="center"
								color="orange.5"
							>
								<StarIcon size="1em" />
								<Text ml={2} color="gray.0">
									{repo.stargazers.totalCount}
								</Text>
							</ExternalLink>
						</Links>
					</>
				)}
			</Composition>
		</Flex>
	);
};

Repo.Heading = styled.h3`
	text-transform: capitalize;
	font-weight: normal;
	margin: 0;
`;
Repo.Emoji = styled(Text)`
	height: 80px;
	width: 80px;
	vertical-align: middle;
	text-align: center;
	line-height: 80px;
	filter: saturate(0.5);
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
	${getLanguageColors}
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
		<Box style={{position: 'relative'}} {...props}>
			{/* <GitHubIcon
				size="100px"
				color="#00000011"
				strokeWidth={2}
				style={{
					position: 'absolute',
					zIndex: 0,
					top: '10px',
					left: '0px',
					transform: 'rotate(-10deg) translateZ(-1px)'
				}}
			/> */}
			<Text
				as="h2"
				fontWeight="normal"
				mt={4}
				mb={5}
				textAlign={['center', 'left']}
			>
				{typedBio}
			</Text>

			<Composition
				autoRows
				areas="area"
				areasMd="area area"
				areasLg="area area"
				gutter={theme.space[2]}
				gutterSm={theme.space[3]}
				gutterMd={theme.space[4]}
				gutterLg={theme.space[5]}
			>
				{() => {
					return pinnedRepoTrail.map(({x, ...rest}, index) => {
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
								<Repo repo={repo} width={1} />
							</animated.div>
						);
					});
				}}
			</Composition>
			<Flex flexWrap="wrap" alignItems="stretch" />
			<Flex justifyContent="space-between" alignItems="center" mb={[4]}>
				<ExternalLink href={`https://github.com/${login}/repositories`}>
					More repositories
				</ExternalLink>
				<Text fontSize={0} color="#888">
					In total, I have received {totalStars} stars.
				</Text>
			</Flex>
		</Box>
	);
};

export default GitHub;

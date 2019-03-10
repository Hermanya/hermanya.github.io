import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled, {css} from 'styled-components';
import {useTrail, animated} from 'react-spring';
import {
	ExternalLink as ExternalLinkIcon,
	GitHub as GitHubIcon,
	Star as StarIcon
} from 'react-feather';
import {Box, Flex, Text} from 'rebass';
import {useTypingEffect} from 'use-typing-effect';
import {ExternalLink} from './external-link';

const Repo = ({repo, ...props}) => {
	return (
		<Repo.Body {...props}>
			<Flex flexDirection="column" mr={[3, 4]}>
				<Repo.Emoji fontSize={['46px', '46px', '80px']}>
					{repo.description.substr(0, 2)}
				</Repo.Emoji>
				<Repo.Language mt={2}>{repo.primaryLanguage.name}</Repo.Language>
			</Flex>
			<Flex
				flexDirection="column"
				width={1}
				css={css`
					// border-bottom: solid 1px #d0d0d0;
				`}
			>
				<Repo.Heading my={3}>
					<Text lineHeight={1.25}>{repo.name.replace(/-/g, ' ')}</Text>
					<ExternalLink href={repo.url} ml={[3, 4]}>
						<ExternalLinkIcon />
					</ExternalLink>
				</Repo.Heading>
				<Text
					css={css`
						opacity: 0.6;
					`}
					mb={3}
					fontSize={1}
					lineHeight={1.75}
				>
					{repo.description.substr(2)}
				</Text>
				<Flex justifyContent="space-between" alignItems="center" mt="auto">
					{/* <Text>{repo.licenseInfo && repo.licenseInfo.name}</Text> */}

					<Flex alignItems="center">
						<StarIcon color="goldenrod" size="1em" />
						<Text ml={2}>{repo.stargazers.totalCount}</Text>
					</Flex>
				</Flex>
			</Flex>
		</Repo.Body>
	);
};

Repo.Body = styled(Flex)`
	// clip-path: polygon(
	// 	0% 15%,
	// 	15% 15%,
	// 	15% 0%,
	// 	85% 0%,
	// 	85% 15%,
	// 	100% 15%,
	// 	100% 85%,
	// 	85% 85%,
	// 	85% 100%,
	// 	15% 100%,
	// 	15% 85%,
	// 	0% 85%
	// );
	// box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
	// :hover {
	// 	box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
	// }
	border-radius: 0.5em;
`;

Repo.Heading = styled.h3`
	text-transform: capitalize;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-weight: normal;
`;
Repo.Emoji = styled(Text)`
	height: 80px;
	width: 80px;
	vertical-align: middle;
	text-align: center;
	line-height: 80px;
`;
Repo.Language = styled(Box)`
	font-weight: 600;
	font-size: 12px;
	line-height: 1;
	border-radius: 2px;
	padding: 3px 4px;
	text-align: center;
	// font-family: monospace;
	${props => {
		switch (props.children) {
			case 'JavaScript':
				return css`
					background: #fcdf00;
					color: black;
				`;
			case 'TypeScript':
				return css`
					background: #0076cd;
					color: white;
				`;
			default:
				break;
		}
	}}
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

	const typedBio = useTypingEffect([bio]);

	return (
		<Box style={{position: 'relative'}} {...props}>
			<GitHubIcon
				size="100px"
				color="#00000011"
				strokeWidth={2}
				style={{
					position: 'absolute',
					zIndex: -1,
					top: '-2em',
					left: '50%',
					transform: 'rotate(-10deg) translateX(-50%)'
				}}
			/>
			<Text
				as="h2"
				fontWeight="normal"
				mt={4}
				mb={5}
				textAlign={['center', 'left']}
			>
				{typedBio}
			</Text>
			<Flex flexWrap="wrap" alignItems="stretch" m={-4}>
				{pinnedRepoTrail.map(({x, ...rest}, index) => {
					const repo = pinnedRepositories.nodes[index];
					return (
						<Flex key={repo.id} p={3} width={[1, 1, 1 / 2]}>
							<animated.div
								className="trails-text"
								style={{
									...rest,
									transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
									display: 'flex',
									width: '100%'
								}}
							>
								<Repo
									repo={repo}
									// Bg="#f0f0f0"
									px={[2, 3]}
									py={[1, 2]}
									width={1}
								/>
							</animated.div>
						</Flex>
					);
				})}
			</Flex>
			<Flex justifyContent="space-between" alignItems="center" mb={4} mt={5}>
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

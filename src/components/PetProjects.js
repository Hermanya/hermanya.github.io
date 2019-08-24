import React from 'react';
import styled from 'styled-components';
import { Title, Heading, Description } from './Typography';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Project = styled.div`
	line-height: 1.5;
	/* display: flex;
	flex-direction: column;
	align-items: flex-start; */

	display: grid;
	grid-template:
		'pic link' auto
		'pic desc' auto
		'pic .' 1fr / auto 1fr;
	grid-column-gap: 1rem;
	margin-bottom: 1rem;
`;

const Screenshot = styled(Image)`
	max-width: 100%;
	grid-area: pic;
`;

const query = graphql`
	query {
		leananalytics: file(relativePath: { eq: "screenshots/leananalytics.png" }) {
			childImageSharp {
				# fixed(width: 375, height: 288) {
				# fixed(width: 187, height: 144) {
				fixed(width: 93, height: 72) {
					...GatsbyImageSharpFixed_tracedSVG
				}
			}
		}
		ui1: file(relativePath: { eq: "screenshots/ui1.png" }) {
			childImageSharp {
				fixed(width: 93, height: 72) {
					...GatsbyImageSharpFixed_tracedSVG
				}
			}
		}
	}
`;

const PetProjects = () => {
	const { leananalytics, ui1 } = useStaticQuery(query);
	return (
		<>
			<Title>Pet Projects</Title>
			<Project>
				<Screenshot fixed={leananalytics.childImageSharp.fixed} />
				<a href="https://leananalytics.io">
					<Heading>LeanAnalytics.io</Heading>
				</a>
				<Description>A/B testing React apps made easy</Description>
			</Project>
			<Project>
				<Screenshot fixed={ui1.childImageSharp.fixed} />
				<a href="https://ui1.io">
					<Heading>ui1.io</Heading>
				</a>
				<Description>UI Kit Generator (Bootstrap + Sketch export)</Description>
			</Project>
		</>
	);
};

export default PetProjects;

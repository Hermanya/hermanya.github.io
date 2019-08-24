import React from 'react';
import styled from 'styled-components';
import { Title } from './Typography';

const ReactHighlight = styled.strong`
	color: #47d6fd;
`;

const NameHighlight = styled.em`
	color: #888888;
	font-style: normal;
`;

const CanadaHighlight = styled.em`
	color: #da4747; // #d52d1f;
	font-style: normal;
`;

const JavascriptHighlight = styled.em`
	color: #dac747; // #ebd74d;
	font-style: normal;
`;

const About = () => {
	return (
		<>
			<Title as="h1">
				Hi, I'm <NameHighlight>Herman Starikov</NameHighlight>, a{' '}
				<ReactHighlight>React</ReactHighlight> Dev in Toronto,{' '}
				<CanadaHighlight>Canada</CanadaHighlight> . If you are into React,{' '}
				<JavascriptHighlight>Javascript</JavascriptHighlight>, Web, Programming,
				or just want to know what life is like in Toronto, follow me.
			</Title>
		</>
	);
};

export default About;

import React from 'react';
import remark from 'remark';
import remark2react from 'remark-react';
import {Flex} from 'rebass';
import Layout from '../components/root';
import Seo from '../components/seo';

const resume = `
# Herman Starikov's résumé

## Experience

### Front End / React Native / Node Developer @ Rangle.io
March 2018 - Present

- Developed and supported several React Native mobile apps for diabetics
  - Photo-based nutrition analysis
  - Mobile app paired with an Insulin Pump
  - Photo-based blood glucose analysis
- Maintained a React portal for Healthcare Professionals

### Front End / Mobile SDK Developer @ UXP Systems
August 2014 – March 2018 ( 3.5+ years)

- Developed production ready React, Angular and Backbone apps
- Acted as a lead developer on Flow ID, a mobile-first web app with native integration
- Supported a mobile C++ library used by native mobile apps on multiple platforms
- Automated testing and optimized processes within the organization
- Integrated support for Lambdas into Djinni, a tool for generating typed interfaces

## Pet Projects

- Lean Analytics <https://leananalytics.io> - A/B testing for React
- UI1 <https://ui1.io> - UI kit builder
- Chat with Strangers Messenger Bot <https://facebook.com/wouldbe.friend> the project was highly popular over the summer of 2017 reaching over 50, 000 MAU.
- React Native Chart Kit <https://github.com/indiespirit/react-native-chart-kit> an open source charting library for React Native based on react-native-SVG

## Achievements

- Sheridan College Hackathon – 1st place, goo.gl/YKRqvD
- Break Poverty Hackathon – top 4 teams, Community Voice Portal goo.gl/JM68UU
- Author of Objects chapter in Learn Javascript book, goo.gl/rE8eje

## Education

- Sheridan College 2014, Software Engineering, 2-year program, Ontario diploma with high honors
- Coursera, Machine Learning and DeepLearning.ai courses

`;

const ResumePage = () => (
	<Layout px={4} py={4}>
		<Seo title="Resume" keywords={['resume', 'herman', 'starikov']} />
		<Flex flexDirection="column">
			{
				remark()
					.use(remark2react)
					.processSync(resume).contents
			}
		</Flex>
	</Layout>
);

export default ResumePage;

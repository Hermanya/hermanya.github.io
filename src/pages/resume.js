import React from 'react';
import remark from 'remark';
import remark2react from 'remark-react';
import Layout from '../components/root';
import Seo from '../components/seo';

const resume = `
# Herman Starikov's résumé

## Experience

### Senior Front End Developer @ Eblock.ca
April 2019 - Present

### Front End / React Native / Node Developer @ Rangle.io
March 2018 - April 2019

- Developed and supported several React Native mobile apps for diabetics
  - Photo-based nutrition analysis
  - Mobile app paired with an Insulin Pump
  - Photo-based blood glucose analysis
- Maintained a React portal for Healthcare Professionals

### Front End / Mobile SDK Developer @ UXP Systems
August 2014 – March 2018 ( 3.5+ years)

- Developed production ready React, Angular and Backbone apps
  - Flow ID, a mobile-first OpenID identity management and various webportals for Telcos
- Supported a mobile C++ library used by native mobile apps on multiple platforms
  - Integrated support for Lambdas into Djinni, a tool for generating typed interfaces
- Automated testing and optimized processes within the organization

## Pet Projects

- Lean Analytics <https://leananalytics.io> - A/B testing for React
- UI1 <https://ui1.io> - UI kit builder
- Chat with Strangers Messenger Bot <https://facebook.com/wouldbe.friend>
- React Native Chart Kit <https://github.com/indiespirit/react-native-chart-kit>

## Achievements

- Sheridan College Hackathon – 1st place, goo.gl/YKRqvD
- Break Poverty Hackathon – top 4 teams, Community Voice Portal goo.gl/JM68UU

## Education

- Sheridan College 2014, Software Engineering, 2-year program, Ontario diploma with high honors
- Coursera, Machine Learning and DeepLearning.ai courses

`;

const ResumePage = () => (
	<Layout px={4} py={4} fontSize={1}>
		<Seo title="Resume" keywords={['resume', 'herman', 'starikov']} />
		{
			remark()
				.use(remark2react)
				.processSync(resume).contents
		}
	</Layout>
);

export default ResumePage;

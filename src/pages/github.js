import React from 'react';
import MobileNav from '../components/mobile-nav';
import Layout from '../components/layout';
import Seo from '../components/seo';
import GitHub from '../components/github';

const IntroPage = () => (
	<Layout>
		<Seo title="Home" keywords={['gatsby', 'application', 'react']} />
		<GitHub />
		<MobileNav />
	</Layout>
);

export default IntroPage;

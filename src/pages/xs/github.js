import React from 'react';
import MobileNav from '../../components/mobile-nav';
import Layout from '../../components/root';
import Seo from '../../components/seo';
import GitHub from '../../components/github';

const IntroPage = () => (
	<Layout>
		<Seo title="OSS" keywords={['open-source', 'github', 'repos']} />
		<GitHub />
		<MobileNav />
	</Layout>
);

export default IntroPage;

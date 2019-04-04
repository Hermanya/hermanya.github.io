import React from 'react';
import MobileNav from '../../components/mobile-nav';
import Layout from '../../components/root';
import Seo from '../../components/seo';
import ExternalLinks from '../../components/external-links';

const LinksPage = () => (
	<Layout flexDirection="column" width={1}>
		<Seo title="Links" keywords={['social', 'navigation']} />
		<ExternalLinks fontSize={4} ml={4} />
		<MobileNav />
	</Layout>
);

export default LinksPage;

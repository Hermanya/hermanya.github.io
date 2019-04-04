import React from 'react';

import Root from '../components/root';
import Seo from '../components/seo';

const NotFoundPage = () => (
	<Root>
		<Seo title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Root>
);

export default NotFoundPage;

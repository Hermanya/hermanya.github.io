require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		siteUrl: 'https://hermanya.github.io',
		title: "Herman Starikov's website",
		description: `Hi! I'm a Web Developer in Toronto and these days I specialize in React.`,
		author: '@hermanya',
		bio: `If you are into React or modern JavaScript things, or just want to know what a Web Developer's life in Tronno is like, follow me on the social platform of your choice.`,
		misspelledWords: ['Tronno'],
		keyWords: ['React', 'cool', 'internet', 'apps']
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `reviews`,
				path: `${__dirname}/src/reviews`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prettier`,
						options: {
							// Look for local .prettierrc file.
							// The same as `prettier.resolveConfig(process.cwd())`
							// usePrettierrc: true,
							// Overwrite prettier options, check out https://prettier.io/docs/en/options.html
							prettierOptions: {
								printWidth: 30
							}
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					'gatsby-remark-autolink-headers',
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							inlineCodeMarker: '÷'
						}
					},
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank'
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Herman's webpage`,
				short_name: `Herman`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffffff`,
				display: `standalone`,
				icon: `src/images/icon.png` // This path is relative to the root of the site.
			}
		},
		// This (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GitHub',
				fieldName: 'github',
				// Url to query from
				url: 'https://api.github.com/graphql',
				// HTTP headers
				headers: {
					// Learn about environment variables: https://gatsby.app/env-vars
					Authorization: `bearer ${process.env.GITHUB_TOKEN}`
				},
				// Additional options to pass to node-fetch
				fetchOptions: {}
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		},
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-sitemap'
	]
};

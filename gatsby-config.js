require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		siteUrl: 'https://starikov.dev',
		title: 'Herman Starikov',
		description: `Hi! I'm a React Developer in Toronto.`,
		author: '@hermanya',
		bio: `If you are into React, Javascript, Web, Programming, or just want to know what life is like in Toronto, follow me on the social platform of your choice.`,
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
						resolve: `@raae/gatsby-remark-oembed`,
						options: {
							// defaults to false
							usePrefix: true,
							providers: {
								// Important to exclude providers
								// that adds js to the page.
								// If you do not need them.
								exclude: ['Reddit']
							}
						}
					},
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
							maxWidth: 300
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
		'gatsby-plugin-sitemap',

		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-89032606-2',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true
				// Avoids sending pageview hits from custom paths
				// exclude: ['/preview/**', '/do-not-track/me/too/'],
				// Enables Google Optimize using your container Id
				// optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
				// Enables Google Optimize Experiment ID
				// experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
				// Set Variation ID. 0 for original 1,2,3....
				// variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
				// Any additional create only fields (optional)
				// sampleRate: 5,
				// siteSpeedSampleRate: 10,
				// cookieDomain: 'example.com'
			}
		}
	]
};

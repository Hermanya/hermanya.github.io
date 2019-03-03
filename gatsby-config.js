module.exports = {
	siteMetadata: {
		title: "Herman Starikov's home page",
		description: `Hi! My name is Herman Starikov. I live in Toronto and make apps on the internet.`,
		author: '@hermanya',
		bio: `If you are into cool internet apps, or just want to know what Software Developer's life in Tronno is like, follow me on the social platform of your choice.`,
		misspelledWords: ['Tronno'],
		keyWords: ['follow', 'cool', 'internet', 'apps']
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
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
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffffff`,
				display: `minimal-ui`,
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
					Authorization: `bearer ${'c79d61ef5f75dbb583601b605408c6a6512c8656' ||
						process.env.GITHUB_TOKEN}`
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
		}
	]
};

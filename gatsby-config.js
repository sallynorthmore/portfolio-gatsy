module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/projects`,
				name: 'markdown-pages',
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-netlify-cms`,
	],
};

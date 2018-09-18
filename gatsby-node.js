const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;

	const project = path.resolve(`src/templates/project.js`);

	return graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
		}

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: project,
				context: {}, // additional data can be passed via context
			});
		});
	});
};
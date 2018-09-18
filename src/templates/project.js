import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark;
	return (
		<div className="Project">
			<div className="Project-title">
				<h1>
					{frontmatter.title}, <small>{frontmatter.date}</small>
				</h1>
				<div
					className="Project-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</div>
	);
}

Template.propTypes = {
	data: PropTypes.shape,
};

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "YYYY")
				path
				title
			}
		}
	}
`;

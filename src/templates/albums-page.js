import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Albums from "../components/Albums";

export const AlbumsPageTemplate = ({ title, albums }) => {
  return (
    <Layout>
      <main>
        <PageHeading title={title} />
        <div className="site-gutters site-gutters--offset-header site-gutters--push-footer">
          <Albums albums={albums} />
        </div>
      </main>
    </Layout>
  );
};

AlbumsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
  // content: PropTypes.string,
  // contentComponent: PropTypes.func,
};

const AlbumsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AlbumsPageTemplate
      // contentComponent={HTMLContent}
      title={post.frontmatter.title}
      // content={post.html}
    />
  );
};

AlbumsPage.propTypes = {
  //data: PropTypes.object.isRequired,
};

export default AlbumsPage;

export const albumsPageQuery = graphql`
  query AlbumsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

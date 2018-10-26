import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
  title,
  content,
  image,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Layout>
      <main>
        <PageHeading title={title} />
        <div className="site-gutters site-gutters--offset-header site-gutters--push-footer">
          <div className="bio-content">
            <div className="bio-content__img">
              <img
                src={image}
                className="c-image-bio"
                alt="Photograph of harpist Emmanuel Padilla Holguin"
              />
            </div>
            <div className="bio-content__text">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`;

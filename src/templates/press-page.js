import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import PressItems from "../components/PressItems";
import PageHeadig from "../components/PageHeading";

export const PressPageTemplate = ({ title, pressItems }) => {
  return (
    <Layout>
      <main>
        <PageHeadig title={title} />

        <div className="site-gutters site-gutters--offset-header site-gutters--push-footer">
          <div className="container-wide">
            <PressItems pressItems={pressItems} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

PressPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  pressItems: PropTypes.array
};

const PressPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <PressPageTemplate
      title={frontmatter.title}
      pressItems={frontmatter.pressItems}
    />
  );
};

PressPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default PressPage;

export const pressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        pressItems {
          image {
            imageFile
            imageDesc
          }
          title
          date
          source
          description
          link {
            address
            text
          }
          tags
          language
        }
      }
    }
  }
`;

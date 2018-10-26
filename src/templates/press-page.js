import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import PressItems from "../components/PressItems";
import PageHeadig from "../components/PageHeading";

export const PressPageTemplate = ({ title, main }) => {
  return (
    <Layout>
      <main>
        <PageHeadig title={title} />

        <div className="site-gutters site-gutters--offset-header site-gutters--push-footer">
          <div className="container-wide">
            <PressItems pressItems={main.pressItems} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

PressPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.shape({
    pressItems: PropTypes.array
  })
};

const PressPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <PressPageTemplate title={frontmatter.title} main={frontmatter.main} />
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
        main {
          pressItems {
            image {
              imageFile
              imageDesc
            }
            title
            date(formatString: "DD MMM YYYY")
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
  }
`;

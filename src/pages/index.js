import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <div className="c-hero">
            <img
              src="/img/Emmanuel-Padilla-Holguin-Harp.jpg"
              alt="Harpist Emmanuel Padilla Holguín seating in front of his harp"
            />
            <div className="hero-text">
              <h1 className="zzzpage-title">
                Emmanuel Padilla Holguín
                <span className="hero-subtitle"> Harpist</span>
              </h1>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

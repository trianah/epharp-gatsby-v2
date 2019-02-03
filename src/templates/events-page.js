import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Events from "../components/Events";

export const EventsPageTemplate = ({ title, events }) => (
  <Layout>
    <main>
      <PageHeading title={title} />
      <div className="site-gutters site-gutters--offset-header site-gutters--push-footer">
        <div className="text-container">
          <Events events={events} />
        </div>
      </div>
    </main>
  </Layout>
);

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  events: PropTypes.array
};

const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <EventsPageTemplate title={frontmatter.title} events={frontmatter.events} />
  );
};

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default EventsPage;

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        events {
          title
          dateTime
          venue
          country
          description
        }
      }
    }
  }
`;

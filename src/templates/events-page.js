import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Events from "../components/Events";

export const EventsPageTemplate = ({ title, main }) => (
  <Layout>
    <main>
      <PageHeading title={title} />
      <div className="site-gutters site-gutters--offset-header site-gutters--push-footer">
        <div className="text-container">
          <Events events={main.events} />

          {/* <h2 className="h2-title">Upcoming events</h2> */}
          {/* <div className="c-info-banner">
        <p className="c-info-banner__text">
          Upcoming events will be announced soon
        </p>
      </div> */}

          {/* <h2 className="h2-title">Past events</h2>

      <ul>
        <li className="c-event">
          <p className="c-event__title">Harp recital</p>

          <div className="c-event__meta">
            <p>
              <time dateTime="2017-10-21 15:00">21 Oct 17 &ndash; 3:00pm</time>
            </p>
            <p>Queen Sofia Museum</p>
            <p>Madrid, Spain</p>
          </div>
        </li>
        <li className="c-event">
          <p className="c-event__title">Harp recital</p>

          <div className="c-event__meta">
            <p>
              <time dateTime="2017-07-08 16:15">08 Jul 17 &ndash; 4:15pm</time>
            </p>
            <p>Hong Kong Academy for Performing Arts</p>
            <p>Hong Kong</p>
          </div>
        </li>

        <li className="c-event">
          <p className="c-event__title">Dutch Harp Competition</p>
          <div className="c-event__meta">
            <p>
              <time dateTime="2016-10-16 20:00">16 Oct 16 &ndash; 8:00pm</time>
            </p>
            <p>Grote Zaal, TivoliVredenburg</p>
            <p>Utrecht, Netherlands</p>
          </div>
          <p className="c-event__desc">
            Finals of the Dutch Harp Competition 2016. Works by Händel, Frerichs
            and Soler.
          </p>
        </li>
      </ul> */}
        </div>
      </div>
    </main>
  </Layout>
);

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  main: PropTypes.shape({
    title: PropTypes.string,
    dateTime: PropTypes.string,
    venue: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string
  })
};

const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <EventsPageTemplate title={frontmatter.title} main={frontmatter.main} />
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
        main {
          events {
            title
            dateTime(formatString: "DD MMM YYYY – hh:mm a")
            venue
            country
            description
          }
        }
      }
    }
  }
`;

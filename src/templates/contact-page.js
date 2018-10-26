import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Content, { HTMLContent } from "../components/Content";
import Icon from "../components/Icon";
import { ICONS } from "../components/constants";
import Facebook from "../components/Facebook";
import Instagram from "../components/Instagram";
import youtubeLogo from "../img/youtube-logo.svg";
import sylvia from "../img/sylvia.jpg";
import negra from "../img/negra.jpg";
import ginastera from "../img/ginastera.jpg";

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  // const iframeStyle = {
  //   width: "100%",
  //   height: "100%",
  //   border: "0",
  //   maxWidth: "800px",
  //   overflow: "hidden",
  //   marginLeft: "auto",
  //   marginRight: "auto"
  // };

  return (
    <Layout>
      <main>
        <PageHeading title={title} />

        <div className="site-gutters site-gutters--offset-header site-gutters--push-footer">
          <PageContent
            className="content c-contact-message"
            content={content}
          />

          <div className="c-contact-social-wrap">
            <div className="c-contact-social c-contact-social__youtube">
              <div className="c-contact-social__link-wrap c-contact-social__link-wrap--youtube">
                <a
                  className="c-contact-social__link"
                  href="https://www.youtube.com/user/1993eph/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={ICONS.YOUTUBE} width={40} height={40} />
                  <span> 1993eph</span>
                </a>
              </div>
              <div className="c-contact-social__items c-contact-social__items--youtube">
                <div className="c-contact-social__item-wrap--youtube">
                  <a
                    href="https://www.youtube.com/watch?v=2nfwU5Fe_RA"
                    className="youtube-overlay"
                  >
                    <img src={negra} alt="" />
                    <img
                      className="youtube-overlay__logo"
                      src={youtubeLogo}
                      alt=""
                    />
                  </a>
                  <p className="video-title">Bilongo - La Negra Tomasa</p>
                </div>
                <div className="c-contact-social__item-wrap--youtube">
                  <a
                    href="https://www.youtube.com/watch?v=BQq0WW9zqYc"
                    className="youtube-overlay"
                  >
                    <img src={sylvia} alt="" />
                    <img
                      className="youtube-overlay__logo"
                      src={youtubeLogo}
                      alt=""
                    />
                  </a>
                  <p className="video-title">Sylvia - Mario Ruiz Armengol</p>
                </div>
                <div className="c-contact-social__item-wrap--youtube">
                  <a
                    href="https://www.youtube.com/watch?v=5VFx5m7Hwa0&t=413s"
                    className="youtube-overlay"
                  >
                    <img src={ginastera} alt="" />
                    <img
                      className="youtube-overlay__logo"
                      src={youtubeLogo}
                      alt=""
                    />
                  </a>
                  <p className="video-title">Ginastera Harp Concerto</p>
                </div>
              </div>
            </div>
            <div className="c-contact-social c-contact-social__facebook">
              <div className="c-contact-social__link-wrap c-contact-social__link-wrap--facebook">
                <a
                  className="c-contact-social__link"
                  href="https://www.facebook.com/epharp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={ICONS.FACEBOOK} width={40} height={40} />
                  <span> epharp</span>
                </a>
              </div>
              <div className="c-contact-social__items c-contact-social__items--facebook">
                <div className="c-contact-social__item-wrap--facebook">
                  <Facebook />
                </div>
              </div>
            </div>
            <div className="c-contact-social c-contact-social__instagram">
              <div className="c-contact-social__link-wrap c-contact-social__link-wrap--instagram">
                <a
                  className="c-contact-social__link"
                  href="https://www.instagram.com/emmanuelph1993/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={ICONS.INSTAGRAM} width={40} height={40} />
                  <span> emmanuelph1993</span>
                </a>
              </div>
              <div className="c-contact-social__items c-contact-social__items--instagram">
                <Instagram />

                <div className="c-contact-social__item-wrap--instagram">
                  <div className="c-contact-social__item--instagram" />
                </div>
                <div className="c-contact-social__item-wrap--instagram">
                  <div className="c-contact-social__item--instagram" />
                </div>
                <div className="c-contact-social__item-wrap--instagram">
                  <div className="c-contact-social__item--instagram" />
                </div>
                <div className="c-contact-social__item-wrap--instagram">
                  <div className="c-contact-social__item--instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

import React from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types";
//import Features from '../components/Features'
//import Testimonials from '../components/Testimonials'
//import Pricing from '../components/Pricing'

export const ScoresPageTemplate = ({
  //image,
  title
  //heading,
  //description,
  //intro,
  //main,
  //testimonials,
  //fullImage,
  //pricing,
}) => (
  // <section className="section section--gradient">
  //   <div className="container">
  //     <div className="section">
  //       <div className="columns">
  //         <div className="column is-10 is-offset-1">
  //           <div className="content">
  //             <div
  //               className="full-width-image-container margin-top-0"
  //               style={{ backgroundImage: `url(${image})` }}
  //             >
  //               <h2
  //                 className="has-text-weight-bold is-size-1"
  //                 style={{
  //                   boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
  //                   backgroundColor: '#f40',
  //                   color: 'white',
  //                   padding: '1rem',
  //                 }}
  //               >
  //                 {title}
  //               </h2>
  //             </div>
  //             <div className="columns">
  //               <div className="column is-7">
  //                 <h3 className="has-text-weight-semibold is-size-2">
  //                   {heading}
  //                 </h3>
  //                 <p>{description}</p>
  //               </div>
  //             </div>
  //             <Features gridItems={intro.blurbs} />
  //             <div className="columns">
  //               <div className="column is-7">
  //                 <h3 className="has-text-weight-semibold is-size-3">
  //                   {main.heading}
  //                 </h3>
  //                 <p>{main.description}</p>
  //               </div>
  //             </div>
  //             <div className="tile is-ancestor">
  //               <div className="tile is-vertical">
  //                 <div className="tile">
  //                   <div className="tile is-parent is-vertical">
  //                     <article className="tile is-child">
  //                       <img
  //                         style={{ borderRadius: '5px' }}
  //                         src={main.image1.image}
  //                         alt={main.image1.alt}
  //                       />
  //                     </article>
  //                   </div>
  //                   <div className="tile is-parent">
  //                     <article className="tile is-child">
  //                       <img
  //                         style={{ borderRadius: '5px' }}
  //                         src={main.image2.image}
  //                         alt={main.image2.alt}
  //                       />
  //                     </article>
  //                   </div>
  //                 </div>
  //                 <div className="tile is-parent">
  //                   <article className="tile is-child">
  //                     <img
  //                       style={{ borderRadius: '5px' }}
  //                       src={main.image3.image}
  //                       alt={main.image3.alt}
  //                     />
  //                   </article>
  //                 </div>
  //               </div>
  //             </div>
  //             <Testimonials testimonials={testimonials} />
  //             <div
  //               className="full-width-image-container"
  //               style={{ backgroundImage: `url(${fullImage})` }}
  //             />
  //             <h2 className="has-text-weight-semibold is-size-2">
  //               {pricing.heading}
  //             </h2>
  //             <p className="is-size-5">{pricing.description}</p>
  //             <Pricing data={pricing.plans} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  <div>
    <h1>{title}</h1>
    <p>These are some scores. Feel free to download and play them.</p>
    <ul>
      <li>
        <p>Danzón No. 2</p>
        <p>Adaptation by Emmanuel Padilla Holguín</p>
        <p>2016</p>
        <p>
          <a href="#0" target="_blank">
            Download PDF
          </a>
        </p>
      </li>
      <li>
        <p>This is not a sad song</p>
        <p>Adaptation by Emmanuel Padilla Holguín</p>
        <p>2015</p>
        <p>
          <a href="#0" target="_blank">
            Download PDF
          </a>
        </p>
      </li>
    </ul>
  </div>
);

ScoresPageTemplate.propTypes = {
  // image: PropTypes.string,
  title: PropTypes.string
  // heading: PropTypes.string,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // main: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   image1: PropTypes.object,
  //   image2: PropTypes.object,
  //   image3: PropTypes.object,
  // }),
  // testimonials: PropTypes.array,
  // fullImage: PropTypes.string,
  // pricing: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   plans: PropTypes.array,
  // }),
};

const ScoresPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <ScoresPageTemplate
      //image={frontmatter.image}
      title={frontmatter.title}
      // heading={frontmatter.heading}
      // description={frontmatter.description}
      // intro={frontmatter.intro}
      // main={frontmatter.main}
      // testimonials={frontmatter.testimonials}
      // fullImage={frontmatter.full_image}
      // pricing={frontmatter.pricing}
    />
  );
};

ScoresPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ScoresPage;

export const scoresPageQuery = graphql`
  query ScoresPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

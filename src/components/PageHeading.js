import React from "react";
import PropTypes from "prop-types";

const PageHeading = ({ title }) => (
  <div className="c-page-heading">
    <img src="/img/harp-bw.jpg" alt="" />
    <h1 className="has-text-weight-bold is-bold-light page-title">{title}</h1>
  </div>
);

PageHeading.propTypes = {
  title: PropTypes.string
};

export default PageHeading;

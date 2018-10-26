import React from "react";
import PropTypes from "prop-types";
import { PressPageTemplate } from "../../templates/press-page";

const PressPagePreview = ({ entry }) => {
  const entryPressItems = entry.getIn(["data", "main", "pressItems"]);
  const pressItems = entryPressItems ? entryPressItems.toJS() : [];

  return (
    <PressPageTemplate
      title={entry.getIn(["data", "title"])}
      main={{ pressItems }}
    />
  );
};

PressPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default PressPagePreview;

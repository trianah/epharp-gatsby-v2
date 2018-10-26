import React from "react";
import PropTypes from "prop-types";

const Icon = props => {
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle"
    },
    path: {
      fill: props.color
    }
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.width}px`}
      height={`${props.height}px`}
      //viewBox="0 0 1024 1024"
      viewBox={`0 0 ${props.viewBoxW} ${props.viewBoxH}`}
    >
      {props.icon}
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBoxW: PropTypes.number,
  viewBoxH: PropTypes.number,
  color: PropTypes.string
};

Icon.defaultProps = {
  width: 16,
  height: 16,
  viewBoxW: 1024,
  viewBoxH: 1024
};

export default Icon;

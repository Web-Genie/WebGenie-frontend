import PropTypes from "prop-types";
import React from "react";

function SubtoolbarTitle({ title }) {
  return (
    <div className="category">
      <p>{title}</p>
    </div>
  );
}

SubtoolbarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubtoolbarTitle;

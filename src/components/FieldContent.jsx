import React from "react";
import PropTypes from "prop-types";

const FieldContent = props => {
  const { show, number, flag } = props;
  return (
    (show &&
      ((number === -1 && <img src="./mine.jpeg" alt="*" />) ||
        (number > 0 && number))) ||
    (flag && <img src="./redflag.jpg" alt="F" />) ||
    null
  );
};
// class FieldContent extends Component {
// }

FieldContent.propTypes = {
  show: PropTypes.bool.isRequired,
  number: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired
};

export default FieldContent;

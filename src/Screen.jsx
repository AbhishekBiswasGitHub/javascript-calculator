import PropTypes from "prop-types";

import "./Screen.css";

const Screen = ({ equation, display }) => {
  return (
    <div id="screen">
      <div id="equation">
        <p>
          {`${equation.join("")}${display}` ||
            "0"}
        </p>
      </div>
      <div id="display">{display || "0"}</div>
    </div>
  );
};

Screen.propTypes = {
  equation: PropTypes.array.isRequired,
  display: PropTypes.string.isRequired,
};

export default Screen;

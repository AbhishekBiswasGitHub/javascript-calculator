import PropTypes from "prop-types";

import "./Button.css";

const Button = ({
  name,
  content,
  handleClick,
  requireData,
  style,
}) => {
  return (
    <div
      id={name}
      className="button"
      onClick={
        requireData
          ? () => handleClick(content)
          : handleClick
      }
      style={{ gridArea: name, ...style }}
    >
      {content}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  requireData: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
};

export default Button;

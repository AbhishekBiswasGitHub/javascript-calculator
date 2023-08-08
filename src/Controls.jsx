import PropTypes from "prop-types";

import calculate from "./calculate";

import "./Controls.css";
import Button from "./Button";

const Controls = ({
  equation,
  setEquation,
  display,
  setDisplay,
}) => {
  const handleNumber = (num) => {
    if (
      equation.length &&
      equation[equation.length - 1] === "="
    ) {
      setEquation(() => []);
      setDisplay(() => num);
    } else if (
      display &&
      !Number(display[display.length - 1]) &&
      !(display[display.length - 1] === "0") &&
      !(display[display.length - 1] === ".")
    ) {
      setEquation(() => [...equation, display]);
      setDisplay(() => num);
    } else if (
      display.length <= 12 &&
      !(
        display.length === 1 &&
        display[0] === "0" &&
        num === "0"
      )
    ) {
      setDisplay(() => display + num);
    }
  };

  const handleDecimal = () => {
    if (
      equation.length &&
      equation[equation.length - 1] === "="
    ) {
      setEquation(() => []);
      setDisplay(() => "0.");
    } else if (!display.includes(".")) {
      if (!display) {
        setDisplay(() => display + "0.");
      } else if (
        display === "0" ||
        Number(display)
      ) {
        setDisplay(() => display + ".");
      } else {
        setEquation(() => [...equation, display]);
        setDisplay(() => "0.");
      }
    }
  };

  const handleSign = (sign) => {
    if (
      equation.length &&
      equation[equation.length - 1] === "="
    ) {
      setEquation(() => [display]);
      setDisplay(() => sign);
    } else if (!display) {
      if (sign === "-") {
        setDisplay(() => sign);
      }
    } else if (
      display === "0" ||
      display === "0." ||
      Number(display)
    ) {
      setEquation(() => [...equation, display]);
      setDisplay(() => sign);
    } else if (
      !Number(display) &&
      display.length === 1
    ) {
      if (equation.length > 0) {
        if (sign === "-") {
          setDisplay(() => display + sign);
        } else {
          setDisplay(() => sign);
        }
      }
    } else {
      setDisplay(() => sign);
    }
  };

  const handleEquals = () => {
    if (Number(display)) {
      setDisplay(() =>
        calculate([
          ...equation,
          display,
        ]).toString()
      );
      setEquation(() => [
        ...equation,
        display,
        "=",
      ]);
    } else {
      setDisplay(() =>
        calculate([...equation]).toString()
      );
      setEquation(() => [...equation, "="]);
    }
  };
  const handleClear = () => {
    setEquation(() => []);
    setDisplay(() => "");
  };

  const buttons = [
    {
      name: "zero",
      content: "0",
      handleClick: handleNumber,
      requireData: true,
      style: {
        borderRadius: "0 0 0 1rem",
      },
    },
    {
      name: "one",
      content: "1",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "two",
      content: "2",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "three",
      content: "3",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "four",
      content: "4",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "five",
      content: "5",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "six",
      content: "6",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "seven",
      content: "7",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "eight",
      content: "8",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "nine",
      content: "9",
      handleClick: handleNumber,
      requireData: true,
      style: {},
    },
    {
      name: "decimal",
      content: ".",
      handleClick: handleDecimal,
      requireData: false,
      style: {},
    },
    {
      name: "add",
      content: "+",
      handleClick: handleSign,
      requireData: true,
      style: {
        backgroundColor: "#222",
      },
    },
    {
      name: "subtract",
      content: "-",
      handleClick: handleSign,
      requireData: true,
      style: {
        backgroundColor: "#222",
      },
    },
    {
      name: "multiply",
      content: "x",
      handleClick: handleSign,
      requireData: true,
      style: {
        borderRadius: "0 1rem 0 0",
        backgroundColor: "#222",
      },
    },
    {
      name: "divide",
      content: "/",
      handleClick: handleSign,
      requireData: true,
      style: {
        backgroundColor: "#222",
      },
    },
    {
      name: "equals",
      content: "=",
      handleClick: handleEquals,
      requireData: false,
      style: {
        borderRadius: "0 0 1rem 0",
        backgroundColor: "#284089",
      },
    },
    {
      name: "clear",
      content: "AC",
      handleClick: handleClear,
      requireData: false,
      style: {
        borderRadius: "1rem 0 0 0",
        backgroundColor: "#b02f00",
      },
    },
  ];

  return (
    <div id="controls">
      {buttons.map(
        ({
          name,
          content,
          handleClick,
          requireData,
          style,
        }) => (
          <Button
            key={name}
            name={name}
            content={content}
            handleClick={handleClick}
            requireData={requireData}
            style={style}
          />
        )
      )}
    </div>
  );
};

Controls.propTypes = {
  equation: PropTypes.array.isRequired,
  setEquation: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
  setDisplay: PropTypes.func.isRequired,
};

export default Controls;

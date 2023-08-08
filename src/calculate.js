export default (equation) => {
  const clone = equation.map((item) =>
    item === "--"
      ? "+"
      : item === "+-"
      ? "-"
      : item
  );

  const divide = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes("/")) {
        const result = (
          Number(arr[i - 1]) /
          (Number(arr[i + 1]) *
            (arr[i].includes("-") ? -1 : 1))
        ).toFixed(4);
        return divide([
          ...arr.slice(0, i - 1),
          result,
          ...arr.slice(i + 2, arr.length),
        ]);
      }
    }

    return arr;
  };

  const multiply = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes("x")) {
        const result = (
          Number(arr[i - 1]) *
          (Number(arr[i + 1]) *
            (arr[i].includes("-") ? -1 : 1))
        ).toFixed(4);
        return multiply([
          ...arr.slice(0, i - 1),
          result,
          ...arr.slice(i + 2, arr.length),
        ]);
      }
    }

    return arr;
  };

  const addSubtract = (arr = []) => {
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "-") {
        negative += Number(arr[i + 1]);
        i++;
      } else if (arr[i] === "+") {
        positive += Number(arr[i + 1]);
        i++;
      } else {
        positive += Number(arr[i]);
      }
    }

    return positive - negative;
  };

  return Number(
    addSubtract(multiply(divide(clone)))
  );
};

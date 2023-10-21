import isNumber from "./isNumber";

const checkRange = (number) => {
  if (number.length != 3) {
    return false;
  }
  const set = new Set(number);

  const newNumber = [...set];

  if (newNumber.length < 3) {
    return false;
  }

  return isNumber(number);
};

export default checkRange;

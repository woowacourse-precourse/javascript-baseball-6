import isNumber from "./isNumber";

const checkRange = (number) => {
  try {
    if (number.length != 3) {
      throw new Error("[ERROR] 잘못된 숫자 형식입니다.");
    }
    const set = new Set(number.split(""));

    const newNumber = [...set];

    if (newNumber.length < 3) {
      throw new Error("[ERROR] 잘못된 숫자 형식입니다.");
    }
  } catch (e) {
    throw e;
  }

  return isNumber(number);
};

export default checkRange;

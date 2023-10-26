import { Rules } from "../constants";

export const isBaseballGameInput = (value, { size = Rules.DIGIT_COUNT } = {}) => {
  const regExp = new RegExp(`^[1-9]{${size}}$`, 'g');
  return regExp.test(value);
}


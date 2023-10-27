import { RULES } from "../constants";

export const isBaseballGameInput = (value, { size = RULES.digitCount } = {}) => {
  const regExp = new RegExp(`^[1-9]{${size}}$`, 'g');
  return regExp.test(value);
}


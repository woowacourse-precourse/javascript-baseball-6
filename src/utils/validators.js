import { MAGIC_NUM } from "../constants/magicNum.js";

export const validateIsNum = (value) => {
  if (typeof value !== "number") return false;
  else if (Number.isNaN(value)) return false;
  return true;
};

export const validateIncludeSpecificNumber = (value, specificNumArr) => {
  if (specificNumArr.length === 1) {
    return value.includes(`${String(specificNumArr[0])}`);
  }
  return specificNumArr.includes(Number(value));
};

export const validateIsLengthNotCorrect = (value, length) => {
  return value.length !== length;
};

export const validateIsNumDuplicated = (value) => {
  let set = new Set([...value]);
  return set.size !== MAGIC_NUM.MAX_BASEBALL_NUM;
};

export const validateOneOrTwo = (value) => {};

import { MAGIC_NUM } from "../constants/magicNum.js";

export const validateIsNum = (value) => {
  if (typeof value !== "number") return false;
  else if (Number.isNaN(value)) return false;
  return true;
};

export const validateIncludeZero = (value) => {
  return value.includes(`${MAGIC_NUM.NUM_NOT_INCLUDED}`);
};

export const validateIsLengthNotThree = (value) => {
  return value.length !== MAGIC_NUM.MAX_BASEBALL_NUM;
};

export const validateIsNumDuplicated = (value) => {
  let set = new Set([...value]);
  return set.size !== MAGIC_NUM.MAX_BASEBALL_NUM;
};

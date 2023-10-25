import { ERROR } from "./constant.js";

export function error(number) {
  const numberArr = number.split("");
  const isDuplicate = number
    .split("")
    .some((x) => numberArr.indexOf(x) !== numberArr.lastIndexOf(x));

  if (isDuplicate) {
    throw new Error(ERROR.DUPLICATE);
  }

  if (number < 0) {
    throw new Error(ERROR.NEGATIVE);
  }

  if (number.length !== 3) {
    throw new Error(ERROR.THREE_LENGTH);
  }

  if (!/^\d{3}$/.test(number)) {
    throw new Error(ERROR.IS_NAN);
  }
}

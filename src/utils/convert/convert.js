import IncorrectFormatError from "../../error/IncorrectFormatError.js";

// string을 number[] 로 바꿔주는 함수
const stringToNumberArray = (str) => {
  // 입력값이 올바르지 않으면 IncorrectFormatError 던지기
  if (typeof str !== "string") {
    throw new IncorrectFormatError();
  }

  const charArr = str.split("");

  // 입력값이 올바르지 않으면 IncorrectFormatError 던지기
  if (charArr.some((elm) => isNaN(elm))) {
    throw new IncorrectFormatError();
  }

  return charArr.map((c) => Number(c));
};

export { stringToNumberArray };

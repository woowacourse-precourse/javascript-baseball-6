import constants from "./constants.js";
import Message from "./message.js";

const ExceptionHandler = {
  // 입력이 숫자인지 확인
  checkIsNum(inputArr) {
    for (const element of inputArr) {
      if (isNaN(element)) {
        throw new Error(Message.INPUT_IS_NUMBER);
      }
    }
  },
  // 입력이 세자리인지 확인
  checkIsThreeDigit(inputArr) {
    if (inputArr.length !== constants.NUM_COUNT) {
      throw new Error(Message.INPUT_IS_THREE_DIGIT);
    }
  },
  // 입력이 서로 중복되지 않는지 확인
  checkIsUnique(inputArr) {
    const set = new Set(inputArr);
    if (set.size !== constants.NUM_COUNT) {
      throw new Error(Message.INPUT_IS_UNIQUE);
    }
  },
};

export default ExceptionHandler;

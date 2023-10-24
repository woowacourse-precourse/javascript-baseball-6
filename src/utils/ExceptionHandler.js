import constants from "./constants.js";
import Message from "./message.js";

const ExceptionHandler = {
  // 입력이 숫자 실수인지 확인
  checkIsNum(inputArr) {
    for (const element of inputArr) {
      // 소수일때
      if (element % 1 !== 0) {
        throw Message.INPUT_IS_THREE_DIGIT;
      }
      if (isNaN(element)) {
        throw Message.INPUT_IS_NUMBER;
      }
    }
  },
  // 0을 포함하는지
  checkIsNonzero(inputArr) {
    if (inputArr.includes(0)) {
      throw Message.INPUT_IS_NONZERO;
    }
  },
  // 입력이 세자리인지 확인
  checkIsThreeDigit(inputArr) {
    if (inputArr.length !== constants.NUM_COUNT) {
      throw Message.INPUT_IS_THREE_DIGIT;
    }
  },
  // 입력이 서로 중복되지 않는지 확인
  checkIsUnique(inputArr) {
    const set = new Set(inputArr);
    if (set.size !== constants.NUM_COUNT) {
      throw Message.INPUT_IS_UNIQUE;
    }
  },
  // 리플레이 질문에 입력이 1나 2가 아닌지 확인
  checkRestartOrQuitAnswer(inputStr) {
    if (inputStr !== constants.RESTART && inputStr !== constants.QUIT) {
      throw Message.ANSWER_MUST_BE_ONE_OR_TWO;
    }
  },
};

export default ExceptionHandler;

import { MissionUtils } from "@woowacourse/mission-utils";
import { BaseBall } from "../../constants/status.js";
import IncorrectFormatError from "../../error/IncorrectFormatError.js";
import NumberOutOfRangeError from "../../error/NumberOutOfRangeError.js";

// parameter의 크기만큼의 랜덤 숫자를 배열에 넣어 리턴
const pickNumbersInRange = (len) => {
  const numbers = [];
  while (numbers.length < len) {
    const number = MissionUtils.Random.pickNumberInRange(BaseBall.START, BaseBall.END);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
};

// 입력값으로 받은 len의 크기만큼의 랜덤 숫자를 배열에 넣어 리턴합니다.
const getRandomNumbers = (len) => {
  // parameter가 숫자가 아니면 IncorrectFormatError
  if (isNaN(Number(len))) {
    throw new IncorrectFormatError();
  }

  // parameter의 값이 너무 크면 NumberOutOfRangeError
  if (len > BaseBall.MAX_LENGTH) {
    throw new NumberOutOfRangeError(BaseBall.MAX_LENGTH);
  }

  // parameter의 크기만큼의 랜덤 숫자를 배열에 넣어 리턴
  return pickNumbersInRange(len);
};

export { getRandomNumbers };

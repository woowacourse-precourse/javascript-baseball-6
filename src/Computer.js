import { Random } from "@woowacourse/mission-utils";

const COMPUTER_ERROR_MESSAGE = {
  ARRAY: "[ERROR] state는 배열이어야 합니다.",
  LENGTH: "[ERROR] 세 자리 숫자만 입력 가능 합니다.",
  RANGE: "[ERROR] state의 모든 요소는 1과 9 사이의 숫자여야 합니다.",
  UNIQUE: "[ERROR] state의 각 숫자는 서로 달라야합니다.",
};
export default class Computer {
  constructor({ initialState }) {
    this.validationState(initialState);
    this.state = initialState;
  }

  setState(nextState) {
    this.validationState(nextState);
    this.state = nextState;
  }

  validationState(state) {
    if (!Array.isArray(state)) {
      throw new Error(COMPUTER_ERROR_MESSAGE.ARRAY);
    }

    if (this.state === undefined && state.length === 0) {
      return;
    }

    if (state.length !== 3) {
      throw new Error(COMPUTER_ERROR_MESSAGE.LENGTH);
    }

    for (const item of state) {
      if (typeof item !== "number" || item < 1 || item > 9) {
        throw new Error(COMPUTER_ERROR_MESSAGE.RANGE);
      }

      const uniqueDigits = [...new Set(state)];

      if (uniqueDigits.length !== state.length) {
        throw new Error(COMPUTER_ERROR_MESSAGE.UNIQUE);
      }
    }
  }

  generateAndSetRandomNumbers() {
    const numberArr = [];

    while (numberArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) numberArr.push(number);
    }

    this.setState([...numberArr]);
  }
}

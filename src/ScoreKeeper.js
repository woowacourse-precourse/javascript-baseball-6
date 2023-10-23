import { Console } from "@woowacourse/mission-utils";

const SCOREKEEPER_ERROR_MESSAGE = {
  OBJECT: "[ERROR] 입력값은 객체여야 합니다.",
  PROPERTY_STRIKES: "[ERROR] 'strikes'는 음수가 아닌 숫자여야 합니다.",
  PROPERTY_BALLS: "[ERROR] 'balls'는 음수가 아닌 숫자여야 합니다.",
  ARRAY: "[ERROR] 값은 배열이어야 합니다.",
  LENGTH: "[ERROR] 값은 정확히 세 개의 요소를 가져야 합니다.",
  RANGE: "[ERROR] 값의 모든 요소는 1과 9 사이의 숫자여야 합니다.",
};

const SCOREKEEPER_PRINT_MESSAGE = {
  NOTHING: "낫싱",
  BALLS: (balls) => `${balls}볼`,
  STRIKES: (strikes) => `${strikes}스트라이크`,
};
export default class ScoreKeeper {
  constructor({ initialState }) {
    this.validationState(initialState);
    this.state = initialState;
  }

  setState(nextState) {
    this.validationState(nextState);
    this.state = { ...nextState };
  }

  validationState(state) {
    if (typeof state !== "object") {
      throw new Error(SCOREKEEPER_ERROR_MESSAGE.OBJECT);
    }

    if (
      !state.hasOwnProperty("strikes") ||
      typeof state.strikes !== "number" ||
      state.strikes < 0
    ) {
      throw new Error(SCOREKEEPER_ERROR_MESSAGE.PROPERTY_STRIKES);
    }

    if (
      !state.hasOwnProperty("balls") ||
      typeof state.balls !== "number" ||
      state.balls < 0
    ) {
      throw new Error(SCOREKEEPER_ERROR_MESSAGE.PROPERTY_BALLS);
    }
  }

  printResult() {
    const { strikes, balls } = this.state;

    if (strikes === 0 && balls === 0) {
      Console.print(SCOREKEEPER_PRINT_MESSAGE.NOTHING);
    } else {
      let result = "";
      if (balls > 0) {
        result += SCOREKEEPER_PRINT_MESSAGE.BALLS(balls);
      }
      if (strikes > 0) {
        if (result.length > 0) result += " ";
        result += SCOREKEEPER_PRINT_MESSAGE.STRIKES(strikes);
      }
      Console.print(result);
    }
  }

  calculate(AValue, BValue) {
    this.calculateValidation([...AValue], [...BValue]);
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (AValue[i] === BValue[i]) {
        strikes++;
      } else if (BValue.includes(AValue[i])) {
        balls++;
      }
    }

    this.setState({ strikes, balls });
  }

  calculateValidation(AValue, BValue) {
    [(AValue, BValue)].forEach((value) => {
      if (!Array.isArray(value)) {
        throw new Error(SCOREKEEPER_ERROR_MESSAGE.ARRAY);
      }

      if (value.length !== 3) {
        throw new Error(SCOREKEEPER_ERROR_MESSAGE.LENGTH);
      }

      for (const item of value) {
        if (typeof item !== "number" || item < 1 || item > 9) {
          throw new Error(SCOREKEEPER_ERROR_MESSAGE.RANGE);
        }
      }
    });
  }
}

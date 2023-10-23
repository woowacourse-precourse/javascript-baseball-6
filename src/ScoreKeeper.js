import { Console } from "@woowacourse/mission-utils";

const SCOREKEEPER_ERROR_MESSAGE = {
  OBJECT: "[ERROR] 입력값은 객체여야 합니다.",
  PROPERTY_STRIKES: "[ERROR] 'strikes'는 음수가 아닌 숫자여야 합니다.",
  PROPERTY_BALLS: "[ERROR] 'balls'는 음수가 아닌 숫자여야 합니다.",
  ARRAY: "[ERROR] state는 배열이어야 합니다.",
  LENGTH: "[ERROR] 세 자리 숫자만 입력 가능 합니다.",
  RANGE: "[ERROR] state의 모든 요소는 1과 9 사이의 숫자여야 합니다.",
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

  calculate(userInput, computerInput) {
    this.validateInputs(userInput, computerInput);

    const { strikes, balls } = this.calculateStrikesAndBalls(
      userInput,
      computerInput
    );

    this.setState({ strikes, balls });
  }

  validateInputs(userInput, computerInput) {
    [userInput, computerInput].forEach((input) => {
      if (!Array.isArray(input)) {
        throw new Error(SCOREKEEPER_ERROR_MESSAGE.ARRAY);
      }

      if (input.length !== 3) {
        throw new Error(SCOREKEEPER_ERROR_MESSAGE.LENGTH);
      }

      input.forEach((item) => {
        if (typeof item !== "number" || item < 1 || item > 9) {
          throw new Error(SCOREKEEPER_ERROR_MESSAGE.RANGE);
        }
      });

      const uniqueDigits = [...new Set(input)];

      if (uniqueDigits.length !== input.length) {
        throw new Error(SCOREKEEPER_ERROR_MESSAGE.UNIQUE);
      }
    });
  }

  calculateStrikesAndBalls(userInput, computerInput) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] === computerInput[i]) {
        strikes++;
      } else if (computerInput.includes(userInput[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }
}

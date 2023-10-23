import { Console } from "@woowacourse/mission-utils";
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
      throw new Error("Input must be an object");
    }

    if (
      !state.hasOwnProperty("strikes") ||
      typeof state.strikes !== "number" ||
      state.strikes < 0
    ) {
      throw new Error("'strikes' must be a non-negative number");
    }

    if (
      !state.hasOwnProperty("balls") ||
      typeof state.balls !== "number" ||
      state.balls < 0
    ) {
      throw new Error("'balls' must be a non-negative number");
    }
  }

  printResult() {
    const { strikes, balls } = this.state;

    if (strikes === 0 && balls === 0) {
      Console.print("낫싱");
    } else {
      let result = "";
      if (balls > 0) {
        result += `${balls}볼`;
      }
      if (strikes > 0) {
        if (result.length > 0) result += " ";
        result += `${strikes}스트라이크`;
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

    return { strikes, balls };
  }

  calculateValidation(AValue, BValue) {
    [AValue, BValue].forEach((value) => {
      if (!Array.isArray(value)) {
        throw new Error("value must be an array");
      }

      if (value.length !== 3) {
        throw new Error("value must have exactly three items");
      }

      for (const item of value) {
        if (typeof item !== "number" || item < 1 || item > 9) {
          throw new Error("All items in value must be numbers between 1 and 9");
        }
      }
    });
  }
}

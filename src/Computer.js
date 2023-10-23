import { Random } from "@woowacourse/mission-utils";

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
      console.error("state must be an array");
      throw new Error("[ERROR]");
    }

    if (this.state === undefined && state.length === 0) {
      return;
    }

    if (state.length !== 3) {
      console.error("state must have exactly three items");
      throw new Error("[ERROR]");
    }

    for (const item of state) {
      if (typeof item !== "number" || item < 1 || item > 9) {
        console.error("All items in state must be numbers between 1 and 9");
        throw new Error("[ERROR]");
      }
    }
  }

  chooseRandomly() {
    const numberArr = [];

    while (numberArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) numberArr.push(number);
    }

    this.setState([...numberArr]);
  }
}

import { Random } from "@woowacourse/mission-utils";

export default class Computer {
  constructor({ initialState }) {
    this.state = initialState;
    this.chooseRandomly();
  }

  setState(nextState) {
    this.validationState(nextState);
    this.state = nextState;
  }

  validationState(state) {
    if (!Array.isArray(state)) {
      throw new Error("state must be an array");
    }

    if (state.length !== 3) {
      throw new Error("state must have exactly three items");
    }

    for (const item of state) {
      if (typeof item !== "number" || item < 1 || item > 9) {
        throw new Error("All items in state must be numbers between 1 and 9");
      }
    }
  }

  chooseRandomly() {
    const randomArray = Random.pickUniqueNumbersInRange(1, 9, 3);
    this.setState([...randomArray]);
  }
}

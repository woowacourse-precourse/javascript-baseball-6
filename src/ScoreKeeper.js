export default class ScoreKeeper {
  constructor({ initialState }) {
    this.state = initialState;
  }

  setState(AState, BState) {
    this.validationState([...AState], [...BState]);
    this.state = this.calculate([...AState], [...BState]);
  }

  validationState(AState, BState) {
    [AState, BState].forEach((state) => {
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
    });
  }

  calculate(AState, BState) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (AState[i] === BState[i]) {
        strikes++;
      } else if (BState.includes(AState[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }
}

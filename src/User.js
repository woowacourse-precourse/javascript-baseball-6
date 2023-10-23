export default class User {
  constructor({ initialState }) {
    this.validationState(initialState);
    this.state = initialState;
  }

  validationState(state) {
    if (typeof state !== "object") {
      throw new Error("State must be an object");
    }

    if (state.hasOwnProperty("replay")) {
      if (typeof state.replay !== "boolean") {
        throw new Error("'replay' must be a boolean");
      }
    }

    if (state.hasOwnProperty("userInput")) {
      if (this.state === undefined && state.userInput === "") {
        return;
      }

      const inputString = String(state.userInput);

      if (inputString.length !== 3) {
        throw new Error("User input must be exactly three digits.");
      }

      const uniqueDigits = [...new Set(inputString.split(""))];

      if (uniqueDigits.length !== inputString.length) {
        throw new Error("All digits in the user input must be unique.");
      }

      for (const digit of state.userInput) {
        if (typeof digit !== "number") {
          throw new Error("User input should contain only numbers.");
        }
      }
    }
  }

  setState(nextState) {
    this.validationState(nextState);

    if (nextState.hasOwnProperty("userInput")) {
      nextState.userInput = this.stringToNumberArray(
        String(nextState.userInput)
      );
    }

    this.state = { ...this.state, ...nextState };
  }

  stringToNumberArray(nextState) {
    return nextState.split("").map(Number);
  }
}

export default class User {
  constructor({ initialState }) {
    this.validationState(initialState);
    this.state = initialState;
  }

  validationState(state) {
    if (this.state === undefined && state === "") {
      return;
    }

    const inputString = String(state);

    if (inputString.length !== 3) {
      throw new Error("[ERROR] User input must be exactly three digits.");
    }

    const uniqueDigits = [...new Set(inputString.split(""))];

    if (uniqueDigits.length !== inputString.length) {
      console.error("All digits in the user input must be unique.");
      throw new Error("[ERROR]");
    }
  }

  setState(nextState) {
    this.validationState(nextState);
    nextState = this.stringToNumberArray(nextState);
    this.state = [...nextState];
  }

  stringToNumberArray(nextState) {
    return nextState.split("").map(Number);
  }
}

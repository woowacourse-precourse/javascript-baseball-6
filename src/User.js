export default class User {
  constructor({ initialState }) {
    this.state = initialState;
  }

  setState(nextState) {
    this.state = [...this.validationState(nextState)];
  }

  validationState(state) {
    const inputString = String(state);

    if (inputString.length !== 3) {
      throw new Error("Input must be exactly three digits.");
    }

    const uniqueDigits = [...new Set(inputString.split(""))];

    if (uniqueDigits.length !== inputString.length) {
      throw new Error("All digits in the input must be unique.");
    }

    return uniqueDigits;
  }
}

import { MESSAGE } from "../constants/messages";

export class Validation {
  #errorMessage = "";

  constructor(input) {
    this.input = input;
  }

  get errorMessage() {
    return this.#errorMessage;
  }

  get invalidConditions() {
    const inputArray = this.input.split("");
    const { NOT_NUMBER, OVER_OR_UNDER_LIMIT, DUPLICATED } = MESSAGE.ERROR;
    return new Map([
      [Number.isNaN(parseInt(this.input)), NOT_NUMBER],
      [this.input.length !== 3, OVER_OR_UNDER_LIMIT],
      [
        parseInt(this.input) &&
          inputArray.findIndex(
            (item) => inputArray.indexOf(item) !== inputArray.lastIndexOf(item)
          ) !== -1,
        DUPLICATED,
      ],
    ]);
  }

  validate() {
    if (this.invalidConditions.has(true)) {
      this.setErrorMessage(this.invalidConditions.get(true));
      return false;
    }

    return true;
  }

  setErrorMessage(error) {
    this.#errorMessage = `[ERROR] ${error} 서로 다른 3 자리 의 숫자를 입력해주세요.`;
  }
}

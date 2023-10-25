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
    return new Map([
      [Number.isNaN(parseInt(this.input)), "문자를 입력했습니다."],
      [this.input.length !== 3, "입력된 숫자의 개수가 초과/미달 입니다."],
      [
        parseInt(this.input) &&
          inputArray.findIndex(
            (item) => inputArray.indexOf(item) !== inputArray.lastIndexOf(item)
          ) !== -1,
        "중복된 입력이 있습니다.",
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

const USER_ERROR_MESSAGE = {
  LENGTH: "[ERROR] 세 자리 숫자만 입력 가능 합니다.",
  UNIQUE: "[ERROR] state의 각 숫자는 서로 달라야합니다.",
};
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
      throw new Error(USER_ERROR_MESSAGE.LENGTH);
    }

    const uniqueDigits = [...new Set(inputString.split(""))];

    if (uniqueDigits.length !== inputString.length) {
      throw new Error(USER_ERROR_MESSAGE.UNIQUE);
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

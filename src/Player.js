import Message from "./Message.js";

class Player {
  constructor() {
    this.number = "111";
  }

  get number() {
    return this._number;
  }

  set number(value) {
    const regex = new RegExp(/[1-9]/);

    Message.logIf(
      value.length !== 3 || !regex.test(value),
      "1부터 9까지 서로 다른 숫자 3개를 입력하세요."
    );
    this._number = value;
  }
}

export default Player;

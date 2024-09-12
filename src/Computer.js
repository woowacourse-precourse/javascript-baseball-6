import { Random } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.number = this.pickNumber();
  }

  /* 서로 다른 숫자 3개를 뽑아서 문자로 반환한다. */
  pickNumber() {
    let arr = [];

    while (arr.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!arr.includes(num)) {
        arr.push(num);
      }
    }

    return arr.join("");
  }
}

export default Computer;

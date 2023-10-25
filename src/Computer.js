import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
  #answer;

  constructor() {
    this.#answer = [];
    this.#setAnswer();
  }

  #setAnswer() {
    while (this.#answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  #isNumberInAnswer(number) {
    return this.#answer.includes(number);
  }

  #isSamePosition(number, index) {
    return this.#answer.indexOf(number) === index;
  }

  resetAnswer() {
    this.#answer = [];
    this.#setAnswer();
  }

  compareNumber(playerNumber) {
    let strike = 0;
    let ball = 0;

    playerNumber.forEach((number, index) => {
      if (!this.#isNumberInAnswer(number)) {
        return;
      }

      if (!this.#isSamePosition(number, index)) {
        ball += 1;
      } else {
        strike += 1;
      }
    });

    return [strike, ball];
  }
}

export default Computer;

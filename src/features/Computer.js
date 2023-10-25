import { Console, Random } from "@woowacourse/mission-utils";
import { player } from "./Player.js";

const COMPUTER_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  COMPLETED: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

export class Computer {
  #answer = [];
  #count = { ball: 0, strike: 0 };

  printStart() {
    Console.print(COMPUTER_MESSAGE.START);
  }

  makeAnswer() {
    while (this.#answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  async compareAnswerRepeatedly() {
    while (this.#count.strike !== 3) {
      this.#initializeCount();
      this.#compareAnswer(await player.input());
      this.#printResult();
    }
    return true;
  }

  #initializeCount() {
    this.#count = { ...this.#count, strike: 0, ball: 0 };
  }

  #compareAnswer(input) {
    this.#answer.map((answer, index) => {
      if (input.includes(answer)) {
        let key = "ball";
        if (index === input.indexOf(answer)) {
          key = "strike";
        }
        this.#count = { ...this.#count, [key]: this.#count[key] + 1 };
      }
    });
  }

  #printResult() {
    const { strike, ball } = this.#count;
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
      return;
    }

    Console.print(
      `${ball > 0 ? `${ball}볼 ` : ""}${
        strike > 0 ? `${strike}스트라이크` : ""
      }`
    );

    if (strike === 3) {
      Console.print(COMPUTER_MESSAGE.COMPLETED);
    }
  }
}

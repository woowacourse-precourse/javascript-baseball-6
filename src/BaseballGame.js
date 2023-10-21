import { Console, Random } from "@woowacourse/mission-utils";

// 하나의 숫자 야구 게임 클래스
export default class BaseballGame {
  constructor() {
    this.computer = [];
    this.correct = false;
  }

  async startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");

    // Computer random number 생성
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }

    Console.print(this.computer);

    while (!this.correct) await this.getUserInput();
    this.correct
      ? Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      : null;
  }

  async getUserInput() {
    try {
      const guess = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.validateGuess(guess);
    } catch (error) {
      Console.print(error);
    }
  }

  validateGuess(guess) {
    const guessArr = guess.trim().split("").map(Number);

    let strikes = 0;
    let balls = 0;

    this.computer.forEach((computerNum, idx) => {
      if (computerNum === guessArr[idx]) strikes++;
      else if (guessArr.includes(computerNum)) balls++;
    });

    const output =
      (balls === 0 ? "" : `${balls}볼 `) +
      (strikes === 0 ? "" : `${strikes}스트라이크`);
    Console.print(output || "낫싱");

    strikes === 3 ? (this.correct = true) : null;
  }

  checkError() {}
}

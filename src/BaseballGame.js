import { Console, Random } from "@woowacourse/mission-utils";

class BaseballGame {
  constructor() {
    this.computer = [];
    this.correct = false;
  }

  async startGame() {
    this.computer = this.generateRandomNumbers();

    while (!this.correct) {
      const guess = await this.getUserGuess();

      try {
        this.validateGuess(guess);
      } catch (error) {
        throw new Error(error.message);
      }

      this.getHint(guess);
    }

    if (this.correct) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }

  generateRandomNumbers() {
    const RANDOM_MIN = 1;
    const RANDOM_MAX = 9;

    const numbers = [];
    while (numbers.length < 3) {
      const randomNumber = Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return [...numbers];
  }

  async getUserGuess() {
    const guess = await Console.readLineAsync("숫자를 입력해주세요 : ");

    return guess;
  }

  validateGuess(guess) {
    const threeDigitsPattern = /^\d{3}$/;
    const oneToNinePattern = /^[1-9]+$/;
    const hasDuplicatePattern = /(.)\1/;

    if (!threeDigitsPattern.test(guess)) {
      throw new Error("[ERROR] 세 자리 수를 입력하세요.");
    }

    if (!oneToNinePattern.test(guess)) {
      throw new Error("[ERROR] 1에서 9 사이의 숫자만 입력하세요.");
    }

    if (hasDuplicatePattern.test(guess)) {
      throw new Error("[ERROR] 중복된 숫자는 사용할 수 없습니다.");
    }
  }

  getHint(guess) {
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
}

export default BaseballGame;

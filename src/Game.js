import { MissionUtils } from "@woowacourse/mission-utils";
import isInputValid from "./InputCheck.js";
import print from "./utils.js";

class Game {
  constructor() {
    this.computer = [];
    this.isUserGuessRight = false;

    while (this.computer.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(NUMBER)) {
        this.computer.push(NUMBER);
      }
    }
    print(this.computer);
  }

  guessCorrect() {
    this.isUserGuessRight = true;
  }

  compare(guesses) {
    const RESULT = { strike: 0, ball: 0 };

    for (let i = 0; i < 3; i++) {
      const INDEX = this.computer.indexOf(guesses[i]);
      if (INDEX === -1) continue;
      if (INDEX === i) RESULT.strike++;
      else RESULT.ball++;
    }

    return RESULT;
  }

  printResult(result) {
    if (result.strike === 3) {
      print("3스트라이크");
      this.guessCorrect();
      return;
    }

    if (result.strike > 0 && result.ball > 0) {
      print(`${result.ball}볼 ${result.strike}스트라이크`);
      return;
    }

    if (result.strike > 0) {
      print(`${result.strike}스트라이크`);
      return;
    }

    if (result.ball > 0) {
      print(`${result.ball}볼`);
      return;
    }

    print("낫싱");
  }

  async start() {
    while (!this.isUserGuessRight) {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      isInputValid(INPUT);
      const GUESSES = INPUT.split("").map(Number);
      const RESULT = this.compare(GUESSES);
      this.printResult(RESULT);
    }
    print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
}

export default Game;

import { MissionUtils } from "@woowacourse/mission-utils";

export class Game {
  constructor() {
    this.playBall();
  }

  welcome() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  randomGenerator() {
    const set = new Set();
    while (set.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      set.add(number);
    }
    return [...set];
  }

  getUserInput(string) {
    async function getInputPromise() {
      const inputPromise = await MissionUtils.Console.readLineAsync(
        `${Game.prototype.stringList(string)}`
      );
      return inputPromise;
    }
    if (string === "New") {
      getInputPromise().then((input) => this.suggestNewGame(input));
    } else {
      getInputPromise().then((input) => this.validateUserInput(input));
    }
  }

  validateUserInput(input) {
    try {
      const set = new Set();
      for (const element of input) {
        set.add(parseInt(element));
      }
      set.forEach((el) => {
        if (isNaN(el)) {
          throw new Error("[ERROR] 숫자를 입력해주세요");
        } else if (set.size !== 3)
          throw new Error("[ERROR] 세 자리 숫자가 아닙니다");
      });
      console.log(`user: ${[...set]}`);
      this.compareNumbers([...set]);
    } catch (error) {
      console.log(error);
    }
  }

  compareNumbers(inputArray) {
    let balls = 0;
    let strikes = 0;
    for (let i = 0; i < this.targetArray.length; i++) {
      if (this.targetArray[i] === inputArray[i]) strikes++;
      else if (inputArray.includes(this.targetArray[i])) balls++;
    }
    if (balls === 0 && strikes === 0) {
      MissionUtils.Console.print(`낫싱`);
      this.getUserInput();
    } else if (strikes === 3) {
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      this.getUserInput("New");
    } else {
      MissionUtils.Console.print(`${balls}볼, ${strikes}스트라이크`);
      this.getUserInput();
    }
  }

  suggestNewGame(input) {
    if (input === "1") {
      this.playBall();
    }
  }

  stringList(value) {
    if (value === "New") {
      return "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    } else return "서로 다른 세 자리 숫자를 입력해주세요: ";
  }

  playBall() {
    this.welcome();
    this.targetArray = this.randomGenerator();
    // console.log(`target: ${this.targetArray}`);
    this.getUserInput();
  }
}

import { MissionUtils } from "@woowacourse/mission-utils";

export class Game {
  constructor() {}

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

  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync(
      `서로 다른 세 자리 숫자를 입력해주세요: `
    );
    this.validateUserInput(input);
    return this.compareNumbers(input);
  }

  validateUserInput(input) {
    const set = new Set();
    for (const element of input) {
      set.add(+element);
    }
    this.checkSet(set);
    return [...set];
  }

  checkSet(set) {
    set.forEach((el) => {
      if (isNaN(el)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      } else if (set.size !== 3)
        throw new Error("[ERROR] 세 자리 숫자가 아닙니다");
    });
  }

  compareNumbers(inputArray) {
    let balls = 0;
    let strikes = 0;
    for (let i = 0; i < this.targetArray.length; i++) {
      if (this.targetArray[i] === +inputArray[i]) strikes++;
      else if (inputArray.includes(this.targetArray[i])) balls++;
    }
    if (balls === 0 && strikes === 0) {
      MissionUtils.Console.print(`낫싱`);
    } else if (strikes === 3) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      return;
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
    return this.getUserInput();
  }

  async playBall() {
    this.welcome();
    this.targetArray = this.randomGenerator();
    // console.log(`target: ${this.targetArray}`);
    await this.getUserInput();
  }
}

import { MissionUtils } from "@woowacourse/mission-utils";

export class Game {
  constructor() {
    this.welcome();
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

  getUserInput() {
    async function getInputPromise() {
      try {
        const inputPromise = await MissionUtils.Console.readLineAsync(
          "서로 다른 세 자리 숫자를 입력해주세요: "
        );
        return inputPromise;
      } catch (error) {
        MissionUtils.Console.print("Unexpected Error Has Occured");
      }
    }

    getInputPromise().then((input) => this.validateUserInput(input));
  }

  validateUserInput(input) {
    const set = new Set();
    for (const element of input) {
      set.add(parseInt(element));
    }
    try {
      set.forEach((el) => {
        if (isNaN(el)) {
          throw new Error("[ERROR] 숫자를 입력해주세요");
        }
      });
      if (set.size !== 3) throw new Error("[ERROR] 세 자리 숫자가 아닙니다");
    } catch (error) {
      return 1;
    }
    console.log(`user: ${[...set]}`);
    this.compareNumbers([...set]);
  }

  compareNumbers(inputArray) {
    let balls = 0;
    let strikes = 0;
    for (let i = 0; i < this.targetArray.length; i++) {
      if (this.targetArray[i] === inputArray[i]) strikes++;
      else if (inputArray.includes(this.targetArray[i])) balls++;
    }
    if (balls === 0 && strikes === 0) MissionUtils.Console.print(`낫싱`);
    else if (strikes === 3) {
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다!`);
      return 0;
    } else MissionUtils.Console.print(`${balls}볼, ${strikes}스트라이크`);

    this.getUserInput();
  }

  playBall() {
    this.targetArray = this.randomGenerator();
    console.log(`target: ${this.targetArray}`);
    this.getUserInput();
  }
}

import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

export const ERROR_MESSAGE = {
  LENGTH: "[ERROR] 입력한 문자의 길이는 3이어야 합니다.",
  NUMBER: "[ERROR] 1~9 사이의 양수만 입력 가능합니다.",
  IS_RESTART: "[ERROR] 게임의 재시작 종료를 위해서는 1 혹은 2만 입력해주세요.",
  DUPLICATE: "[ERROR] 중복된 수를 입력했습니다. 각기 다른 수를 입력해주세요.",
};

class App {
  constructor() {
    this.computerRandomNums = [];
  }

  makeComputerRandomNums() {
    const computerNums = [];
    while (computerNums.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNums.includes(number)) computerNums.push(number);
    }
    return computerNums;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerRandomNums = this.makeComputerRandomNums();
    await this.makeUserRandomNums();
  }

  async makeUserRandomNums() {
    const numbers = await Console.readLineAsync("숫자를 입력해주세요: ");
    this.isValidNumber(numbers);
    const strikeNball = this.checkStrikeNBall(numbers);
    const message = this.makeMessage(strikeNball);
    Console.print(message);
    if (message === "3스트라이크") await this.restart();
    else this.makeUserRandomNums();
  }

  checkStrikeNBall(numbers) {
    const check = {
      ball: 0,
      strike: 0,
    };

    for (let i = 0; i < numbers.length; i++) {
      const num = Number(numbers[i]);
      const index = this.computerRandomNums.indexOf(num);

      if (index === -1) continue;
      else if (index > -1) {
        if (index === i) check.strike += 1;
        else check.ball += 1;
      }
    }

    return check;
  }

  makeMessage({ ball, strike }) {
    if (ball === 0 && strike === 0) return "낫싱";
    if (ball > 0 && strike > 0) return `${ball}볼 ${strike}스트라이크`;
    if (ball > 0) return `${ball}볼`;
    else return `${strike}스트라이크`;
  }

  async restart() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const isRestart = Number(await Console.readLineAsync(""));
    if (isRestart !== 1 && isRestart !== 2)
      throw new Error(ERROR_MESSAGE.IS_RESTART);
    if (isRestart === 1) {
      this.computerRandomNums = this.makeComputerRandomNums();
      await this.makeUserRandomNums();
    } else {
      Console.print("게임 종료");
    }
  }

  isValidNumber(num) {
    const regexp = /\D/g;
    if (num.length < 3 || num.length > 3) throw new Error(ERROR_MESSAGE.LENGTH);
    if (regexp.test(num)) throw new Error(ERROR_MESSAGE.NUMBER);
    const isdouble = num.split("");
    const set = new Set(isdouble);
    if (set.size !== 3) throw new Error(ERROR_MESSAGE.DUPLICATE);
  }
}

const app = new App();
app.play();

export default App;

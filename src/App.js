import { MissionUtils, Random } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.computer = this.getRandomNum();
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const userInput = await this.inputUser();
      const result = this.compareNum(userInput);

      MissionUtils.Console.print(result);

      if (result === '3스트라이크') {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        if (!(await this.restartOption())) {
          break;
        }
        this.computer = this.getRandomNum();
      }
    }
  }

  getRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNum)) {
        computer.push(randomNum);
      }
    }
    return computer;
  }

  async inputUser() {
    const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    if (!this.isValidInput(userInput)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return userInput.split('').map(Number);
  }

  isValidInput(userInput) {
    return new Set(userInput).size === 3 && /^[1-9]{3}$/.test(userInput);
  }

  compareNum(userInput) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] === this.computer[i]) {
        strike++;
      } else if (this.computer.includes(userInput[i])) {
        ball++;
      }
    }

    if (strike > 0 && ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      return `${strike}스트라이크`;
    } else if (ball > 0) {
      return `${ball}볼`;
    } else {
      return "낫싱";
    }
  }

  async restartOption() {
    const option = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (option === '1') {
      return true;
    } else if (option === '2') {
      return false;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}
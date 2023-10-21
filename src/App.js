import { MissionUtils } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.computerNumber = "";
  }

  initComputerNumber() {
    while (this.computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(randomNumber)) {
        this.computerNumber += randomNumber;
      }
    }
  }

  // 게임 진행 함수
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.initComputerNumber();
  }
}

const app = new App();
app.play();

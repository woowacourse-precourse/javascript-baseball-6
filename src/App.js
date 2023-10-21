import { MissionUtils } from "@woowacourse/mission-utils";

const VALID_INPUT_LENGTH = 3;
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
    MissionUtils.Console.print(this.computerNumber);
  }

  async getUserNumber() {
    return await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  checkUserNumberValid(userNumber) {
    if (!userNumber) {
      throw new Error("빈 입력값입니다.");
    }
    // 입력한 값이 모두 숫자인지 확인
    // ... 구현 필요 ...
    if (userNumber.length != VALID_INPUT_LENGTH) {
      throw new Error("유효한 자릿수가 아닙니다.");
    }
    const userNumberSet = new Set([...userNumber]);
    if (userNumberSet.size != VALID_INPUT_LENGTH) {
      throw new Error("각 자리의 숫자는 서로 다른 숫자여야 합니다.");
    }
  }

  // 게임 진행 함수
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.initComputerNumber();
    let userInput = await this.getUserNumber();
    this.checkUserNumberValid(userInput);
  }
}

const app = new App();
app.play();

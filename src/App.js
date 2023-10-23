import { MissionUtils } from "@woowacourse/mission-utils";

const VALID_INPUT_LENGTH = 3;
export default class App {
  constructor() {
    this.computerNumber = "";
    this.strikeCnt = 0;
    this.ballCnt = 0;
    this.result = "";
  }

  initComputerNumber() {
    while (this.computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(randomNumber)) {
        this.computerNumber += randomNumber;
      }
    }
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

  compareToComputerNumber(userNumber) {
    userNumber.split("").forEach((num, idx) => {
      if (this.computerNumber.indexOf(num) === idx) this.strikeCnt++;
      else if (this.computerNumber.split("").includes(num)) this.ballCnt++;
    });
  }

  printResult() {
    if (this.ballCnt === 0 && this.strikeCnt === 0) {
      this.result = "낫싱";
    }
    if (this.ballCnt > 0) {
      this.result += `${this.ballCnt}볼 `;
    }
    if (this.strikeCnt > 0) {
      this.result += `${this.strikeCnt}스트라이크`;
    }

    MissionUtils.Console.print(this.result);

    if (this.strikeCnt === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return;
    }
  }

  // 게임 진행 함수
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.initComputerNumber();
    let userInput = await this.getUserNumber();
    this.checkUserNumberValid(userInput);
    this.compareToComputerNumber(userInput);
    this.printResult();
  }
}

const app = new App();
app.play();

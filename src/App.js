import { MissionUtils } from "@woowacourse/mission-utils";

const VALID_INPUT_LENGTH = 3;
const ERROR_HEADER = "[ERROR]";
export default class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumber = "";
    this.strikeCnt = 0;
    this.ballCnt = 0;
    this.result = "";
    this.startFlag = true;
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
      throw new Error(`${ERROR_HEADER} 빈 입력값입니다.`);
    }
    // 입력한 값이 모두 숫자인지 확인
    // ... 구현 필요 ...
    if (userNumber.length != VALID_INPUT_LENGTH) {
      throw new Error(`${ERROR_HEADER} 유효한 자릿수가 아닙니다.`);
    }
    const userNumberSet = new Set([...userNumber]);
    if (userNumberSet.size != VALID_INPUT_LENGTH) {
      throw new Error(
        `${ERROR_HEADER} 각 자리의 숫자는 서로 다른 숫자여야 합니다.`
      );
    }
  }

  compareToComputerNumber(userNumber) {
    userNumber.split("").forEach((num, idx) => {
      if (this.computerNumber.indexOf(num) === idx) this.strikeCnt++;
      else if (this.computerNumber.split("").includes(num)) this.ballCnt++;
    });
  }

  async printResult() {
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
      await this.finishGame();
    } else {
      await this.play();
    }
  }

  async finishGame() {
    const isReplay = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (Number(isReplay) === 1) {
      this.startFlag = true;
      await this.play();
    }
    if (Number(isReplay) === 2) {
      return;
    }
  }

  initPlay() {
    // 재시작인 경우는 컴퓨터(상대방) 숫자 초기화
    if (this.startFlag) {
      this.computerNumber = "";
      this.initComputerNumber();
    }
    this.strikeCnt = 0;
    this.ballCnt = 0;
    this.result = "";
    this.startFlag = false;
  }

  // 게임 진행 함수
  async play() {
    this.initPlay();
    let userInput = await this.getUserNumber();
    this.checkUserNumberValid(userInput);
    this.compareToComputerNumber(userInput);
    await this.printResult();
  }
}

const app = new App();
(async () => {
  await app.play();
})();

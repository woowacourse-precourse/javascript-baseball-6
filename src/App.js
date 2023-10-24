import { Random, Console } from "@woowacourse/mission-utils";

const ERROR_HEADER = "[ERROR]";

export const Replay = Object.freeze({
  yes: "1",
  no: "2",
});

export default class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumber = "";
    this.strikeCnt = 0;
    this.ballCnt = 0;
    this.result = "";
    this.startFlag = true;
  }

  initComputerNumber() {
    while (this.computerNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(randomNumber)) {
        this.computerNumber += randomNumber;
      }
    }
    // console.log(this.computerNumber);
  }

  async getUserNumber() {
    return await Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  isUniqueThreeDigitNumber(number) {
    const regEx = /^(?!.*(\d).*\1)\d{3}$/;
    return regEx.test(number);
  }

  checkUserNumberValid(userNumber) {
    if (!userNumber) {
      throw new Error(`${ERROR_HEADER} 빈 입력값입니다.`);
    }
    if (!this.isUniqueThreeDigitNumber(userNumber)) {
      throw new Error(
        `${ERROR_HEADER} 입력값은 서로 다른 세자리 숫자여야 합니다.`
      );
    }
  }

  addStrikeCnt() {
    this.strikeCnt++;
  }
  addBallCnt() {
    this.ballCnt++;
  }

  compareToComputerNumber(userNumber) {
    userNumber.split("").forEach((num, idx) => {
      if (this.computerNumber.indexOf(num) === idx) {
        this.addStrikeCnt();
      } else if (this.computerNumber.split("").includes(num)) {
        this.addBallCnt();
      }
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

    Console.print(this.result);

    if (this.strikeCnt === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      await this.askReplay();
    } else {
      await this.play();
    }
  }

  async askReplay() {
    const isReplay = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (isReplay === Replay.yes) {
      this.startFlag = true;
      await this.play();
    }
    if (isReplay === Replay.no) {
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

import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.strikeZoneNumber = [];
    this.pitchingNumber = [];
    this.result = {
      strikes: 0,
      balls: 0,
    };
  }

  printMsgIs(message) {
    MissionUtils.Console.print(message);
  }

  makeStrikeZoneNumber() {
    while (this.strikeZoneNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.strikeZoneNumber.includes(number)) {
        this.strikeZoneNumber.push(number);
      }
    }
  }

  async makePitchingNumber() {
    const START_MESSAGE = this.message("START");
    const inputNumber = await MissionUtils.Console.readLineAsync(START_MESSAGE);
    // 입력값 유효성 검사
    // const reg = /[^1-9]/g;
    // if (inputNumber.length !== 3) throw new Error(this.ERROR_MESSAGE.LENGTH);
    // if (reg.test(inputNumber)) throw new Error(this.ERROR_MESSAGE.NOT_NUMBER);
    // if (inputNumber.length !== new Set(inputNumber).size)
    //   throw new Error(this.ERROR_MESSAGE.SAME_NUMBER);
    // 유효성 검사 통과하면 숫자 배열로 변환
    this.pitchingNumber = new Array(...inputNumber).map((number) =>
      parseInt(number)
    );
  }

  message(NAME) {
    const MESSAGE = {
      // 상수는 대문자로 짓고, _로 구분한다.
      START: "숫자 야구 게임을 시작합니다.",
      INPUT: "숫자를 입력해주세요 : ",
      RETRY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      STRIKE: "스트라이크",
      BALL: "볼",
      NOTHING: "낫싱",
      CONGRAT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    };
    return MESSAGE[NAME];
  }

  errorMessage(NAME) {
    const ERROR_MESSAGE = {
      // 상수는 대문자로 짓고, _로 구분한다.
      LENGTH: "[ERROR] 입력값은 3자리 수이어야 합니다.",
      NOT_NUMBER: "[ERROR] 입력값은 숫자여야 합니다.",
      SAME_NUMBER: "[ERROR] 입력값은 서로 다른 숫자여야 합니다.",
    };
    return ERROR_MESSAGE[NAME];
  }

  async play() {
    this.makeStrikeZoneNumber();
    this.makePitchingNumber();
  }
}

const app = new App();
app.play();

export default App;

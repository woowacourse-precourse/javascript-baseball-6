import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.strikeZoneNumber = [];
    this.pitchingNumber = [];
    this.compareResult = {
      strikes: 0,
      balls: 0,
    };
  }

  async play() {
    this.printMsgIs(this.message("START"));
    await this.makeStrikeZoneNumber();
    await this.game();
  }

  printMsgIs(message) {
    MissionUtils.Console.print(message);
  }

  async makeStrikeZoneNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.strikeZoneNumber = computer;
  }

  async game() {
    await this.makePitchingNumber();
    this.makeResult(this.strikeZoneNumber, this.pitchingNumber);
    await this.judge();
  }

  async makePitchingNumber() {
    const INPUT_MESSAGE = this.message("INPUT");
    const inputNumber = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
    // 유효성 테스트 통과 시 배열로 할당
    this.inputValidation(inputNumber);
    this.pitchingNumber = new Array(...inputNumber).map((number) =>
      parseInt(number)
    );
  }

  makeResult(strikeZoneArray, pitchingArray) {
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (strikeZoneArray[i] === pitchingArray[i]) {
        strikeCount += 1;
      } else if (strikeZoneArray.includes(pitchingArray[i])) {
        ballCount += 1;
      }
    }
    this.compareResult.strikes = strikeCount;
    this.compareResult.balls = ballCount;
  }

  async judge() {
    const STRIKES = this.compareResult.strikes;
    const BALLS = this.compareResult.balls;
    if (STRIKES === 3) {
      this.printMsgIs(`${STRIKES}스트라이크`);
      await this.retry();
    } else {
      this.replayMessagePrint(STRIKES, BALLS);
      await this.game();
    }
  }

  async retry() {
    this.congratMessagePrint();
    const RETRY = this.message("RETRY");
    const retryInput = await MissionUtils.Console.readLineAsync(RETRY);
    if (retryInput === "1") {
      await this.makeStrikeZoneNumber();
      await this.game();
    }
    return;
  }

  congratMessagePrint() {
    const CONGRAT = this.message("CONGRAT");
    this.printMsgIs(CONGRAT);
  }

  replayMessagePrint(strikes, balls) {
    const NOTHING = this.message("NOTHING");
    if (strikes === 0 && balls === 0) this.printMsgIs(NOTHING);
    if (strikes !== 0 && balls !== 0)
      this.printMsgIs(`${balls}볼 ${strikes}스트라이크`);
    if (strikes === 0 && balls !== 0) this.printMsgIs(`${balls}볼`);
    if (strikes !== 0 && balls === 0) this.printMsgIs(`${strikes}스트라이크`);
  }

  inputValidation(inputNumber) {
    //입력값 유효성 검사
    const reg = /[^1-9]/;
    if (typeof inputNumber !== "string")
      throw new Error(this.errorMessage("UNDEFINED"));
    if (inputNumber.length !== 3) throw new Error(this.errorMessage("LENGTH"));
    if (reg.test(inputNumber)) throw new Error(this.errorMessage("NOT_NUMBER"));
    if (inputNumber.length !== new Set(inputNumber).size)
      throw new Error(this.errorMessage("SAME_NUMBER"));
    return inputNumber;
  }

  message(NAME) {
    const MESSAGE = {
      // 상수는 대문자로 짓고, _로 구분한다.
      START: "숫자 야구 게임을 시작합니다.",
      INPUT: "숫자를 입력해주세요 : ",
      RETRY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      NOTHING: "낫싱",
      CONGRAT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    };
    return MESSAGE[NAME];
  }

  errorMessage(NAME) {
    const ERROR_MESSAGE = {
      // 상수는 대문자로 짓고, _로 구분한다.
      UNDEFINED: "[ERROR] 입력값을 확인해주세요.",
      LENGTH: "[ERROR] 입력값은 3자리 수여야 합니다.",
      NOT_NUMBER: "[ERROR] 입력값은 1-9 사이에 숫자여야 합니다.",
      SAME_NUMBER: "[ERROR] 입력값은 서로 다른 숫자여야 합니다.",
    };
    return ERROR_MESSAGE[NAME];
  }
}

export default App;

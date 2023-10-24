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
    // 게임 시작!
    this.printMsgIs(this.message("START"));
    this.makeStrikeZoneNumber();
    await this.game();
  }

  printMsgIs(message) {
    MissionUtils.Console.print(message);
  }

  makeStrikeZoneNumber() {
    // 컴퓨터 숫자 생성
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
    // 입력값 받고, 결과 만들고, 판단해서 출력까지 하나의 루틴
    await this.makePitchingNumber();
    this.makeResult(this.strikeZoneNumber, this.pitchingNumber);
    await this.judge();
  }

  async makePitchingNumber() {
    // 사용자 입력값으로 배열 생성
    const INPUT_MESSAGE = this.message("INPUT");
    const inputNumber = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
    // 유효성 테스트 통과 시 배열로 할당
    this.inputValidation(inputNumber);
    this.pitchingNumber = new Array(...inputNumber).map((number) =>
      // 문자열 파싱 진수 인자 추가
      parseInt(number, 10)
    );
  }

  makeResult(strikeZoneArray, pitchingArray) {
    // 컴퓨터 숫자 배열과 사용자 입력값 배열을 비교해서, 스트라이크/볼 개수를 담은 객체(compareResult) 생성
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
    // 스트라이크에 개수에 따라서 삼진과 삼진이 아닌 경우로 나누고, 진행을 위해 다음 메서드 호출
    const STRIKES = this.compareResult.strikes;
    const BALLS = this.compareResult.balls;
    if (STRIKES === 3) {
      this.printMsgIs(`${STRIKES}스트라이크`);
      // 축하 메세지 출력
      this.congratMessagePrint();
      await this.askRetry();
    } else {
      // 삼진이 아닌 경우 game 메서드 재귀호출
      this.resultMessagePrint(STRIKES, BALLS);
      await this.game();
    }
  }

  async askRetry() {
    // judge 메서드에서 삼진인 경우 호출
    const RETRY_MESSAGE = this.message("RETRY");
    // 게임 재시도 여부 물어봄
    const retryInput = await MissionUtils.Console.readLineAsync(RETRY_MESSAGE);
    if (retryInput === "1") {
      this.makeStrikeZoneNumber();
      await this.game();
    }
    return;
  }

  congratMessagePrint() {
    const CONGRAT_MESSAGE = this.message("CONGRAT");
    this.printMsgIs(CONGRAT_MESSAGE);
  }

  resultMessagePrint(strikes, balls) {
    // judge 메서드에서 삼진이 아닌 경우 호출
    // compareResult 객체에서 스트라이크, 볼 개수 출력
    const NOTHING_MESSAGE = this.message("NOTHING");
    if (strikes === 0 && balls === 0) this.printMsgIs(NOTHING_MESSAGE);
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
      // 상수명은 대문자로 짓고, _로 구분한다.
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
      // 상수명은 대문자로 짓고, _로 구분한다.
      UNDEFINED: "[ERROR] 입력값을 확인해주세요.",
      LENGTH: "[ERROR] 입력값은 3자리 수여야 합니다.",
      NOT_NUMBER: "[ERROR] 입력값은 1-9 사이에 숫자여야 합니다.",
      SAME_NUMBER: "[ERROR] 입력값은 서로 다른 숫자여야 합니다.",
    };
    return ERROR_MESSAGE[NAME];
  }
}

export default App;

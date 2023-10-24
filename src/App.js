import { Console, Random } from "@woowacourse/mission-utils";
// import { CONSTANTS } from "./constants/constants";

const CONSTANTS = {
  MESSAGES: {
    START: "⚾️ 숫자 야구 게임을 시작합니다.",
    INPUT: "숫자를 입력해주세요 : ",
    END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    EXIT: "게임을 종료합니다.",
  },
  ERROR: {
    TYPE_VALID: "[ERROR] 숫자를 입력해주세요.",
    LENGTH_VALID: "[ERROR] 숫자 3자리를 입력해주세요.",
    ZERO_VALID: "[ERROR] 0을 제외한 1~9까지의 숫자를 입력해주세요.",
    DUPLICATE_VALID: "[ERROR] 중복되지 않은 숫자를 입력해주세요.",
  },
};

class App {
  constructor() {
    this.userNum = "";
    this.computerNum = [];
    this.newGame = true;
  }
  // 컴퓨터 값 설정
  SetComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computerNum = computer;
    // 컴퓨터 값 확인용
    Console.print("쉿! 정답은 : " + computer);
    // Console.print(computer);
  }
  // 사용자 입력값 받기
  async userInput() {
    this.userNum = await Console.readLineAsync(CONSTANTS.MESSAGES.INPUT);
    this.isValidate();
  }
  // 입력값 유효성 검사 (타입, 길이, 0, 중복여부)
  isValidate() {
    // (1) 숫자가 아니라면
    if (isNaN(this.userNum)) {
      throw new Error(CONSTANTS.ERROR.TYPE_VALID);
    }
    // (2) 3자리수가 아니라면
    if (this.userNum.split("").length !== 3) {
      throw new Error(CONSTANTS.ERROR.LENGTH_VALID);
    }
    // (3) 입력된 수들 중 하나라도 0이라면
    this.userNum.split("").forEach((n) => {
      if (n == 0) {
        throw new Error(CONSTANTS.ERROR.ZERO_VALID);
      }
    });
    // (4) 중복된 값이라면 -> ✅ 보류
  }
  // 입력값을 컴퓨터 값과 비교해 결과 출력하는 메인 기능
  async playBaseballGame() {
    let strike = 0;
    let ball = 0;
    let result = "낫싱";
    let isCorrect = false;

    // 정답을 맞추기 전까지 실행되는 게임
    while (!isCorrect) {
      await this.userInput();

      // 스트라이크 계산하기: 인덱스가 같으면 스트라이크
      for (let i = 0; i < 3; i++) {
        if (this.userNum.split("")[i] == this.computerNum[i]) {
          strike++;
        }
      }
      // 볼 계산하기: 입력 수가 있고, 스트라이크가 아니면 볼
      for (let i = 0; i < 3; i++) {
        if (
          this.computerNum.includes(this.userNum.split("")[i]) &&
          this.userNum.split("")[i] !== this.computerNum[i]
        ) {
          ball++;
        }
      }

      // 최종 결과 출력!!!!!
      if (strike === 3) {
        result = "3스트라이크\n" + CONSTANTS.MESSAGES.END;
        isCorrect = true;
      } else if (strike > 0) {
        ball > 0
          ? (result = `${ball}볼 ${strike}스트라이크`)
          : `${strike}스트라이크`;
      }
      Console.print(result);
    }
  }

  // 게임 종료 후 -> 재시작 여부 결정
  async afterGame() {
    let input = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (input === "1") {
      return true;
    } else if (input === "2") {
      return false;
    }
  }

  // 게임 실행하기
  async play() {
    Console.print(CONSTANTS.MESSAGES.START);
    while (this.newGame) {
      this.SetComputerNumbers();
      await this.playBaseballGame();
      this.newGame = await this.afterGame();
      if (!this.newGame) {
        break;
      }
    }
  }
}

const app = new App();
app.play();

export default App;

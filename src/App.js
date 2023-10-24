import { Console, Random } from "@woowacourse/mission-utils";
import { CONSTANTS } from "./constants/constants";

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
    let;
  }

  // 게임 종료 -> 재시작 여부 결정
  async restartGame() {}

  // 게임 실행하기
  async play() {
    Console.print(CONSTANTS.MESSAGES.START);
    while (this.newGame) {
      this.SetComputerNumbers();
      await this.playBaseballGame();
      this.newGame = await this.restartGame();
      if (!this.newGame) {
        break;
      }
    }
  }
}

const app = new App();
app.play();

export default App;

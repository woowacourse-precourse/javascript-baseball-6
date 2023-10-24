import { Console, Random } from "@woowacourse/mission-utils";
import { CONSTANTS } from "./constants/constants";

class App {
  constructor() {
    this.userNum = "";
    this.computerNum = [];
  }
  // 컴퓨터 값 설정
  SetComputerNumber() {}
  // 사용자 입력값 받기
  async userInput() {
    this.userNum = await Console.readLineAsync(CONSTANTS.MESSAGES.INPUT);
    this.isValidate();
  }
  // 입력값 유효성 검사 (타입, 길이, 0~9, 중복여부)
  isValidate() {}
  // 입력값을 컴퓨터 값과 비교해 결과 출력
  async showResult() {}
  // 게임 종료 -> 재시작 여부 결정
  async restartGame() {}

  // 게임 실행하기
  async play() {
    Console.print(CONSTANTS.MESSAGES.START);
  }
}

const app = new App();
app.play();

export default App;

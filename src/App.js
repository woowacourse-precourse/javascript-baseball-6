import { Console } from "@woowacourse/mission-utils";
import User from "./utils/User.js";
import Computer from "./utils/Computer.js";
import Control from "./utils/Control.js";
import { ERROR_MESSAGE, GUIDE_TEXT } from "./constant.js";

class App {
  constructor() {
    this.computerNumber = "";
    this.isPlaying = true;
    this.user = new User();
    this.computer = new Computer();
    this.control = new Control(this);
  }

  async play() {
    this.control.startGame();
    this.control.assignComputerNumber();
    try {
      while (this.isPlaying) {
        // 사용자의 입력 값을 받아 유효성 확인
        const input = await this.user.getUserChoice();
        
        // 위 입력과 컴퓨터 숫자를 비교하여 문구 출력
        const result = this.control.compareNumbers(input);

        // 만약 3스트라이크라면
        if (result) {
          // 종료 또는 재시작 문구 출력 및 답 입력
          const reset = await Console.readLineAsync(GUIDE_TEXT.RESTART);

          // 입력된 값이 1, 2가 아닐 경우 에러 출력
          const pattern = /^[12]$/;
          if (!pattern.test(reset))
            throw new Error(ERROR_MESSAGE.INVALID_PATTERN);

          // 입력된 값이 1일 경우, 컴퓨터 값 다시 도출 및 while 반복
          if (reset === "1") {
            this.control.assignComputerNumber();
            continue;
          }

          // 입력된 값이 2일 경우, 게임 종료
          if (reset === "2") {
            this.control.endGame();
          }
        }
      }
    } catch (error) {
      // while 반복 중 에러 발생 시 문구 출력
      Console.print(ERROR_MESSAGE.ERROR_WHILE_PLAYING);
      throw error;
    }
  }
}

export default App;
import { Console } from "@woowacourse/mission-utils";
import {
  makeRandomNumber,
  checkNumber,
  makeText,
} from "../src/utils/gameUtil.js";
import { isValidNumber } from "../src/utils/validation.js";
import { GAME_MESSAGE, ERROR_MESSAGE } from "../src/constants/Message.js";

class App {
  constructor() {
    this.first = true;
  }

  async play() {
    //처음일때 시작 메시지
    if (this.first) {
      Console.print(GAME_MESSAGE.GAME_START);
    }
    //랜덤 숫자 생성
    const computer = makeRandomNumber();
    //맞출 때까지 반복
    while (true) {
      const user = await Console.readLineAsync(GAME_MESSAGE.INPUT_NUMBER);
      isValidNumber(user);
      const result = checkNumber(computer, user);
      makeText(result);
      if (result.strike === 3) {
        break;
      }
    }

    //게임 종료
    Console.print(GAME_MESSAGE.GAME_OVER);
    const endChoice = await Console.readLineAsync(GAME_MESSAGE.ASK_REPLAY);
    this.first = false;
    if (endChoice === "1") {
      await this.play();
    } else if (endChoice === "2") {
      return;
    } else {
      throw new Error(ERROR_MESSAGE.NOT_VALID_CHOICE);
    }
  }
}

const app = new App();
app.play();

export default App;

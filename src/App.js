import { Console } from "@woowacourse/mission-utils";
import { makeRandomNumber, checkNumber, makeText } from "./gameUtil";
import { isValidNumber } from "./validation";
import { GAME_MESSAGE, ERROR_MESSAGE } from "./Constant";

class App {
  constructor() {
    this.first = true;
  }

  async play() {
    //첫 시작일 때 시작 메시지
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

export default App;

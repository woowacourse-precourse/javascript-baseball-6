import { Console } from "@woowacourse/mission-utils";
import { checkNumber, makeRandomNumber, makeText } from "./utils/gameUtil.js";
import { isValidNumber } from "./utils/validation.js";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/Message.js";

class App {
  constructor() {
    //처음 들어왔는지
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
    let playing = true;
    while (playing) {
      const user = await Console.readLineAsync(GAME_MESSAGE.INPUT_NUMBER);
      isValidNumber(user);
      const result = checkNumber(computer, user);
      makeText(result);
      if (result.strike === 3) {
        playing = false;
      }
    }

    //게임 종료
    Console.print(GAME_MESSAGE.GAME_OVER);
    const endChoice = await Console.readLineAsync(GAME_MESSAGE.ASK_REPLAY);
    this.first = false;
    if (endChoice === "1") {
      await this.play();
    } else if (endChoice !== "2") {
      throw new Error(ERROR_MESSAGE.NOT_VALID_CHOICE);
    }
  }
}

export default App;

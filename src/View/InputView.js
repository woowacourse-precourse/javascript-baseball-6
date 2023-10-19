import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../Util/Message.js";

const InputView = {
  InputBaseBallNumber(message) {
    Console.readLine(GAME_MESSAGE.INPUT_BASEBALLNUMBER, (baseballNumber) => {
      console.log(`닉네임: ${baseballNumber}`);
    });
  }
};

export { InputView };

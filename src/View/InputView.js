import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../Util/Message.js";
import validation from "../Util/Validation.js";

const InputView = {
  InputBaseBallNumber(message) {
    Console.readLine(GAME_MESSAGE.INPUT_BASEBALLNUMBER, (baseballNumber) => {
      validation.checkBaseBallNumber(baseballNumber);
    });
  }
};

export { InputView };

import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../Util/Message.js";
import validation from "../Util/Validation.js";

const InputView = {

  async InputBaseBallNumber(handlerInputbaseballNumber) {
    const baseballNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT_BASEBALLNUMBER);
    validation.checkBaseBallNumber(baseballNumber);
    handlerInputbaseballNumber(baseballNumber);
  }

};

export { InputView };

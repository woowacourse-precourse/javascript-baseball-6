import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../Util/Message.js";
import validation from "../Util/Validation.js";

const InputView = {

  async InputBaseBallNumber(handlerInputbaseballNumber) {
    const baseballNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT_BASEBALLNUMBER);
    const player_num = validation.checkBaseBallNumber(baseballNumber);
    handlerInputbaseballNumber(player_num);
  },

  async InputRestartOrQuit(handlerInputRestartOrQuit) {
    const restartOrQuit = await Console.readLineAsync(GAME_MESSAGE.RESTART);
    validation.checkRestartCommand(restartOrQuit);
    handlerInputRestartOrQuit(restartOrQuit);
  }

};

export { InputView };

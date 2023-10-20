import { Console } from "@woowacourse/mission-utils";
import InputValidater from "../models/InputValidater.js";
import { MESSAGES } from "../constants/Messages.js";

const InputView = {
  async getUserNumber (message) {
      const userNumber = await Console.readLineAsync(message);
      if (!InputValidater.numberValidate(userNumber)) throw new Error (MESSAGES.INPUT_ERROR);
      return userNumber;
  }
};

export default InputView;
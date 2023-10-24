import { GAME_MESSAGE, ERROR_MESSAGE } from "../constants/Message";
import { CONSTANT } from "../constants/constant";
import { Console } from "@woowacourse/mission-utils";

export default class InputValid {

  async getUserChoice() {
    const userInput = await Console.readLineAsync(GAME_MESSAGE.inputNumber);
    return this.checkInputValidation(String(userInput));
  }

  checkInputValidation(input) {
    this.validateInputLength(input);
    this.validateInputReplay(input);
    return Number(input);
  }
  
  validateInputLength(input) {
    if (input.length !== CONSTANT.selectNumber) {
      throw new Error(ERROR_MESSAGE.invalidLength);
    }
  }
  
  validateInputReplay(input) {
    const isValidReplay = input.split('').every(char => '1' <= char && char <= '9');

    if (!isValidReplay) {
      throw new Error(ERROR_MESSAGE.duplicateNumber);
    }
  }
}

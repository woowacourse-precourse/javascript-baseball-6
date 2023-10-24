import { Console } from "@woowacourse/mission-utils";
import { GAMEMESSAGE, ERRORMESSAGE } from "../constants/Message";
import { CONSTANT } from "../constants/constant";

export default class InputValid {

  async getUserChoice() {
    const userInput = await Console.readLineAsync(GAMEMESSAGE.inputNumber);
    return this.checkInputValidation(String(userInput));
  }

  checkInputValidation(input) {
    this.validateInputLength(input);
    this.validateInputReplay(input);
    return Number(input);
  }
  
  validateInputLength(input) {
    if (input.length !== CONSTANT.selectNumber) {
      throw new Error(ERRORMESSAGE.invalidLength);
    }
  }
  
  validateInputReplay(input) {
    const isValidReplay = input.split('').every(char => '1' <= char && char <= '9');

    if (!isValidReplay) {
      throw new Error(ERRORMESSAGE.duplicateNumber);
    }
  }
}

import { CONSTANT } from "../common";

class Validator {
  async checkAnswerNumber(number) {
    if (
      number.length !== CONSTANT.NUMBER_LENGTH ||
      number[0] === number[1] ||
      number[0] === number[2] ||
      number[1] === number[2]
    )
      throw new Error("[ERROR]");
  }

  async checkRestartNumber(number) {
    if (number !== "1" && number !== "2") throw new Error("[ERROR]");
  }
}

export default Validator;

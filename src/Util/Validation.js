import { ERROR_MESSAGE } from "../Util/Message.js";

const validation = {
  checkBaseBallNumber(baseballNumber){
    commonValidation.checkLength(baseballNumber, 3);
    commonValidation.checkNumber(baseballNumber);
    commonValidation.checkDuplicate(baseballNumber);
    commonValidation.checkRange(baseballNumber);
    return baseballNumber.split("").map((num) => Number(num));
  },

  checkRestartCommand(input){
    if(input !== '1' && input !== '2') throw new Error(ERROR_MESSAGE.ONEORTWO);
  }
}

const commonValidation = {
  checkLength(input, length){
    if(input.length !== length) throw new Error(ERROR_MESSAGE.LENGTH);
  },

  checkNumber(input){
    if(isNaN(input)) throw new Error(ERROR_MESSAGE.NUMBER);
  },

  checkDuplicate(input){
    const baseballNumberSet = new Set(input.split(""));
    if([...baseballNumberSet].length !== 3) throw new Error(ERROR_MESSAGE.DUPLICATE);
  },

  checkRange(input){
    input.split("").forEach((num) => {
      if(Number(num) < 1 || Number(num) > 9) throw new Error(ERROR_MESSAGE.RANGE)
    })
  }
}

export default validation
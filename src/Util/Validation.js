import { ERROR_MESSAGE } from "../Util/Message.js";

const validation = {
  checkBaseBallNumber(baseballNumber){
    commonValidation.checkLength(baseballNumber, 3);
    commonValidation.checkNumber(baseballNumber);
    commonValidation.checkDuplicate(baseballNumber);
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
  }
}

export default validation
import { ERROR_MESSAGE } from "../Util/Message.js";

const validation = {
  checkBaseBallNumber(baseballNumber){
    commonValidation.checkLength(baseballNumber, 3);

  }
}

const commonValidation = {
  checkLength(input, length){
    if(input.length !== length) throw new Error(ERROR_MESSAGE.LENGTH);
  }
}

export default validation
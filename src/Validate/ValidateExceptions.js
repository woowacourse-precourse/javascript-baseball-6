import Message from '../Constants/Constant.js';
import ValidateDuplicate from './ValidateDuplicate.js';
import ValidateSpecialChar from './ValidateSpecialChar.js';

const ValidateExceptions = (userInput) => {
  if (ValidateSpecialChar(userInput)) {
    throw Message.ERROR.SPECIAL_CHAR;
  }

  if (userInput.length !== 3) {
    throw Message.ERROR.LENGTH;
  }

  if (ValidateDuplicate(userInput)) {
    throw Message.ERROR.DUPLICATE;
  }

  for (const NUMBER of userInput) {
    const ASCII = NUMBER.charCodeAt();

    if (ASCII === 32) {
      throw Message.ERROR.SPACE;
    }

    if (ASCII < 49 || ASCII > 57) {
      throw Message.ERROR.RANGE;
    }
  }
};

export default ValidateExceptions;

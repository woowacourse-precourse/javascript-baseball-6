import ValidateDuplicate from './ValidateDuplicate.js';
import ValidateSpecialChar from './ValidateSpecialChar.js';

const ValidateExceptions = (userInput) => {
  if (ValidateSpecialChar(userInput)) {
    throw '[ERROR] 입력하신 숫자에 특수문자가 포함되어 있습니다!';
  }

  if (userInput.length !== 3) {
    throw '[ERROR] 3자리 숫자를 입력해주세요!';
  }

  if (ValidateDuplicate(userInput)) {
    throw '[ERROR] 중복되지 않은 숫자를 입력해 주세요!';
  }

  for (const NUMBER of userInput) {
    const ASCII = NUMBER.charCodeAt();

    if (ASCII === 32) {
      throw '[ERROR] 입력하신 숫자에 공백이 포합되어 있습니다!';
    }

    if (ASCII < 49 || ASCII > 57) {
      throw '[ERROR] 1~9 사이의 숫자를 입력해 주세요!';
    }
  }
};

export default ValidateExceptions;

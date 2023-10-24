import {MissionUtils} from "@woowacourse/mission-utils";

class PlayerInput {
  isValidate(userInput) {
    // 유저 입력값이 유효한지 검사
    return this.isLengthValid(userInput) && this.isNumberValid(userInput) && this.isAllNumberDifferent(userInput);
  }

  isLengthValid(userInput) {
    // 유저 입력값이 3자리 숫자인지 검사
    if (userInput.length !== 3) {
      MissionUtils.Console.print('3자리 숫자를 입력해주세요.');
      return false;
    }
    return true;
  }

  isNumberValid(userInput) {
    // 유저 입력값이 숫자인지 검사
    if (isNaN(userInput)) {
      MissionUtils.Console.print('숫자를 입력해주세요.');
      return false;
    }
    return true;
  }

  isAllNumberDifferent(userInput) {
    // 유저 입력값이 서로 다른 숫자인지 검사
    const userInputList = userInput.split('');
    const uniqueUserInputList = [...new Set(userInputList)];
    if (userInputList.length !== uniqueUserInputList.length) {
      MissionUtils.Console.print('서로 다른 숫자를 입력해주세요.');
      return false;
    }
    return true;
  }
}

export default PlayerInput;

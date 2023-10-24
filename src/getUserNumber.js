import { MissionUtils } from "@woowacourse/mission-utils";

export async function getUserNumber(answerLength) {
  try {
    const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const userNumbers = userInput.split('').map(Number);

    if(!isValidInput(userNumbers, answerLength)) {
      throw new Error(`[ERROR] 사용자가 입력한 ${userInput}는 숫자가 잘못된 형식입니다.`);
    }

    return userNumbers;
  } catch (error) {
    console.error(error.message);
    return Promise.reject(error);
  }
}

export function isValidInput(userNumbers, answerLength) {
  if(userNumbers.length !== answerLength) {
    return false;
  }

  const set = new Set(userNumbers);
  if(set.size !== userNumbers.length) {
    return false;
  }

  for(const num of userNumbers) {
    if(num < 1 || num > 9) {
      return false;
    }
  }

  return true;
}

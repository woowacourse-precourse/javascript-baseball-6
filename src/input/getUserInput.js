import { MissionUtils } from "@woowacourse/mission-utils";
import checkInputValid from "../input/checkInputValid.js";

/**
 * 터미널로 유저에게 input을 입력받아 전달한다.
 * 
 * @returns {Promise<string>}
 * @throws 사용자가 잘못된 값을 입력했을 경우 throw Error
 */
export default async function getUserInput() {
  const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  
  if (!checkInputValid(userInput)) {
    MissionUtils.Console.print('잘못된 값을 입력했습니다.');
    throw new Error("[ERROR]");
  }

  return userInput;
}



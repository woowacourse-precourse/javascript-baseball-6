import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 터미널로 유저에게 input을 입력받아 전달한다.
 * 
 * @returns {string}
 */
export default async function getUserInput() {
  const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  
  return userInput;
}

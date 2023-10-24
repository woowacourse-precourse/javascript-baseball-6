import { MissionUtils } from "@woowacourse/mission-utils";
import checkInputValid from "./checkInputValid.js";

/**
 * 터미널로 유저에게 input을 입력받아 전달한다.
 * 
 * @returns {string}
 * @throws 
 */
export default async function getUserInput() {
  const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  
  try {
    if (!checkInputValid(userInput)) {
      throw new Error("잘못된 값을 입력했습니다.");
    }
  } catch (err){
    MissionUtils.Console.print("Error : " + err.message);
  }
  return userInput;
}

// console.log(await getUserInput());

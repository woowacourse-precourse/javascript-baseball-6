import { Console } from "@woowacourse/mission-utils";

async function userInput() {
  const inputValue = await Console.readLineAsync("숫자를 입력해주세요 : ");
  
  if (inputValue.length !== 3 || isNaN(Number(inputValue))) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  return inputValue;
}

export default userInput;

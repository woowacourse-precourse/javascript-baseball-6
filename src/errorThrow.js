import { Console } from "@woowacourse/mission-utils";

export const errorThrow = (userInput) => {
  let error = false;

  Console.print(userInput);
  if (userInput === null) {
    error = true;
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (userInput.length !== 3) {
    error = true;
    Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    throw new Error("[ERROR]");
  } else if (/^[1-9][1-9][1-9]$/.test(userInput) === false) {
    error = true;
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다..");
  }
  return error;
};

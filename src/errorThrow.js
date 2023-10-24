import { Console } from "@woowacourse/mission-utils";

export const errorThrow = (userInput) => {
  let error = false;

  if (userInput === null) {
    error = true;
    Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  if (userInput.length !== 3 || /^[1-9]+$/.test(userInput) === false) {
    error = true;
    Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return error;
};

import { Console, Random } from "@woowacourse/mission-utils";
import { printErrorMessage } from "./utils/messages.js";

export const generateComputerNumber = () => {
  const computerNumber = new Set();
  while (computerNumber.size < 3) {
    const randomNumber = String(Random.pickNumberInRange(1, 9));
    computerNumber.add(randomNumber);
  }
  return [...computerNumber];
};

const validateInput = (input) => {
  if (input.length !== 3)
    printErrorMessage("[ERROR] 3자리 숫자를 입력해주세요.");
  if (input.some((item) => Number.isNaN(Number(item)) || item === "0"))
    printErrorMessage("[ERROR] 1에서 9까지의 숫자를 입력해주세요.");
  if (new Set(input).size !== 3)
    printErrorMessage("[ERROR] 중복되지 않는 숫자를 입력해주세요.");
  return input;
};

export const getUserInput = async () => {
  const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ").then(
    (res) => res.split("")
  );
  return validateInput(userInput);
};

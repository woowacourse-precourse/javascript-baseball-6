import getUserInput from "./getUserInput";
import checkIsValidInput from "./checkIsValidInput";

export async function handleInput() {
  const userInput = await getUserInput();
  const isValidInput = checkIsValidInput(userInput);
  if (!isValidInput) {
    throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  return userInput;
}

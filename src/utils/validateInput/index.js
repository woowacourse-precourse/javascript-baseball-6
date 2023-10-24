import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../../constants";

/** input을 받아서 valid 한경우 리턴하는 함수 */
export const getValidInput = async ({ regEx }) => {
  const input = await Console.readLineAsync(MESSAGES.INPUT_NUMBER);

  const isValid = regEx.test(input);

  if (!isValid) {
    throw new Error(MESSAGES.INPUT_ERROR);
  }

  return input;
};

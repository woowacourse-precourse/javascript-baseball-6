import { Console } from "@woowacourse/mission-utils";
import { validateThreeNaturalNumbers, validateEndDecision } from "./validators.js";
import { MESSAGE } from "../constants.js";

const splitStringIntoNumbers = (numberString) => {
  return numberString.split("").map((char) => parseInt(char, 10));
};

const readAnswerInput = async () => {
  const input = await Console.readLineAsync(MESSAGE.ANSWER_QUERY);
  const parsedInput = splitStringIntoNumbers(input);

  validateThreeNaturalNumbers(parsedInput);
  return parsedInput;
};

const readEndDecisionInput = async () => {
  const input = await Console.readLineAsync(MESSAGE.END_QUERY);

  validateEndDecision(input);
  return input;
};

export { readAnswerInput, readEndDecisionInput };

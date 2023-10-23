import { Console } from "@woowacourse/mission-utils";
import { validateThreeNaturalNumbers, validateEndDecision } from "./validators.js";
import { message } from "./constants.js";

const splitStringIntoNumbers = (numberString) => {
  return numberString.split("").map((char) => parseInt(char, 10));
};

const readAnswerInput = async () => {
  const input = await Console.readLineAsync(message.ANSWER_QUERY);
  const parsedInput = splitStringIntoNumbers(input);

  validateThreeNaturalNumbers(parsedInput);
  return parsedInput;
};

const readEndDecisionInput = async () => {
  const input = await Console.readLineAsync(message.END_QUERY);

  validateEndDecision(input);
  return input;
};

export { readAnswerInput, readEndDecisionInput };

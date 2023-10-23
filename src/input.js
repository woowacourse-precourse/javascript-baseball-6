import { Console } from "@woowacourse/mission-utils";
import { validateThreeNaturalNumbers, validateEndDecision } from "./validators.js";

const readAnswerInput = async () => {
  const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
  const parsedInput = input.split("").map((char) => parseInt(char, 10));

  validateThreeNaturalNumbers(parsedInput);
  return parsedInput;
};

const readEndDecisionInput = async () => {
  const input = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );

  validateEndDecision(input);
  return input;
};

export { readAnswerInput, readEndDecisionInput };

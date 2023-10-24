import { Console } from "@woowacourse/mission-utils";
import { RESULT_CODE } from "../constants.js";

const evaluateScore = (numbers, answerNumbers) => {
  const scoredInput = numbers
    .map((number, index) => (number === answerNumbers[index] ? RESULT_CODE.STRIKE : number))
    .map((number) => (answerNumbers.includes(number) ? RESULT_CODE.BALL : number));

  return {
    ballCount: scoredInput.filter((score) => score === RESULT_CODE.BALL).length,
    strikeCount: scoredInput.filter((score) => score === RESULT_CODE.STRIKE).length,
  };
};

const getScore = ({ ballCount, strikeCount }) => {
  const isNothing = !ballCount && !strikeCount;
  const hasBallAndStrike = ballCount && strikeCount;

  return isNothing
    ? "낫싱"
    : hasBallAndStrike
    ? `${ballCount}볼 ${strikeCount}스트라이크`
    : ballCount
    ? `${ballCount}볼`
    : `${strikeCount}스트라이크`;
};

const printScore = ({ ballCount, strikeCount }) => {
  const score = getScore({ ballCount, strikeCount });
  Console.print(score);
};

export { evaluateScore, printScore };

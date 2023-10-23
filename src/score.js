import { Console } from "@woowacourse/mission-utils";
import { resultCode } from "./constants.js";

const evaluateScore = (numbers, answerNumbers) => {
  const scoredInput = numbers
    .map((number, index) => (number === answerNumbers[index] ? resultCode.STRIKE : number))
    .map((number) => (answerNumbers.includes(number) ? resultCode.BALL : number));

  return {
    ballCount: scoredInput.filter((score) => score === resultCode.BALL).length,
    strikeCount: scoredInput.filter((score) => score === resultCode.STRIKE).length,
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

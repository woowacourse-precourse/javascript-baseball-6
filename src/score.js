import { Console } from "@woowacourse/mission-utils";

const evaluateScore = (numbers, answerNumbers) => {
  const scoredInput = numbers
    .map((number, index) => (number === answerNumbers[index] ? "strike" : number))
    .map((number) => (answerNumbers.includes(number) ? "ball" : number));

  return {
    ballCount: scoredInput.filter((score) => score === "ball").length,
    strikeCount: scoredInput.filter((score) => score === "strike").length,
  };
};

const printScore = ({ ballCount, strikeCount }) => {
  const isNothing = !ballCount && !strikeCount;
  const hasBallAndStrike = ballCount && strikeCount;

  const hint = isNothing
    ? "낫싱"
    : hasBallAndStrike
    ? `${ballCount}볼 ${strikeCount}스트라이크`
    : ballCount
    ? `${ballCount}볼`
    : `${strikeCount}스트라이크`;

  Console.print(hint);
};

export { evaluateScore, printScore };

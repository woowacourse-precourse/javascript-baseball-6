import { MissionUtils } from "@woowacourse/mission-utils";

const calculateStrikeCount = (computerNums, answerNums) => {
  return answerNums.filter((answerNum, i) => answerNum === computerNums[i])
    .length;
};

const calculateBallCount = (computerNums, answerNums) => {
  const duplicateCount = answerNums.filter((answerNum) =>
    computerNums.includes(answerNum)
  ).length;

  return duplicateCount
    ? duplicateCount - calculateStrikeCount(computerNums, answerNums)
    : 0;
};

export const calculateCounts = (computerNums, answerNums) => {
  const strikeCount = calculateStrikeCount(computerNums, answerNums);
  const ballCount = calculateBallCount(computerNums, answerNums);

  return { strikeCount, ballCount };
};

export const printScore = (strikeCount, ballCount) => {
  let result = "";

  if (ballCount) result += `${ballCount}볼 `;
  if (strikeCount) result += `${strikeCount}스트라이크`;

  result = result.trimEnd();

  MissionUtils.Console.print(result ? result : "낫싱");
};

export const isThreeStrike = (strikeCount) => strikeCount === 3;

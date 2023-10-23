import { MissionUtils } from "@woowacourse/mission-utils";
import { stringToNumberArray } from "./utils/array.js";
import { validateProcessStateInput, validateNumberInput } from "./utils/input.js";

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

const calculateCounts = (computerNums, answerNums) => {
  const strikeCount = calculateStrikeCount(computerNums, answerNums);
  const ballCount = calculateBallCount(computerNums, answerNums);

  return { strikeCount, ballCount };
};

const printScore = (strikeCount, ballCount) => {
  let result = "";

  if (ballCount) result += `${ballCount}볼 `;
  if (strikeCount) result += `${strikeCount}스트라이크`;

  result = result.trimEnd();

  MissionUtils.Console.print(result ? result : "낫싱");
};

const isThreeStrike = (strikeCount) => strikeCount === 3;

const checkIsRestart = (processStateInput) => {
  const RESTART_GAME = "1";
  const END_GAME = "2";

  if (processStateInput === RESTART_GAME) return true;
  if (processStateInput === END_GAME) return false;
};

export const playAGame = async (computerNumbers) => {
  while (true) {
    const numberInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    validateNumberInput(numberInput);

    const { strikeCount, ballCount } = calculateCounts(
      computerNumbers,
      stringToNumberArray(numberInput)
    );

    printScore(strikeCount, ballCount);

    if (!isThreeStrike(strikeCount)) continue;

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    const processStateInput = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    validateProcessStateInput(processStateInput);

    return { isRestart: checkIsRestart(processStateInput) };
  }
};

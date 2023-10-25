import { MissionUtils } from "@woowacourse/mission-utils";

const printScore = (strikeCount, ballCount) => {
  let result = "";

  if (ballCount) result += `${ballCount}볼 `;
  if (strikeCount) result += `${strikeCount}스트라이크`;

  result = result.trimEnd();

  MissionUtils.Console.print(result ? result : "낫싱");
};

export default printScore;

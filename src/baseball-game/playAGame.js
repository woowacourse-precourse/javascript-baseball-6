import { MissionUtils } from "@woowacourse/mission-utils";
import { stringToNumberArray } from "../utils/array.js";
import {
  calculateCounts,
  checkIsRestart,
  isThreeStrike,
  printScore,
  validateNumberInput,
  validateProcessStateInput,
} from "./helpers/index.js";

const playAGame = async (computerNumbers) => {
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

export default playAGame;

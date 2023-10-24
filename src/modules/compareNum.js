import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, RESULT } from "../constants.js";
import { getUserInput } from "./getUserInput.js";

async function compareNumber(computerNum) {
  const userInputNum = await getUserInput();
  const strikeCount = countStrikes(computerNum, userInputNum);
  const ballCount = countBalls(computerNum, userInputNum);

  if (strikeCount === 0 && ballCount === 0) {
    MissionUtils.Console.print(RESULT.NOTHING);
  } else if (strikeCount === 0) {
    MissionUtils.Console.print(`${ballCount}${RESULT.BALL}`);
  } else if (ballCount === 0) {
    MissionUtils.Console.print(`${strikeCount}${RESULT.STRIKE}`);
  } else {
    MissionUtils.Console.print(`${ballCount}${RESULT.BALL} ${strikeCount}${RESULT.STRIKE}`);
  }

  if (userInputNum !== computerNum) return compareNumber(computerNum);
  return MissionUtils.Console.print(GAME_MESSAGE.GAME_END_MESSAGE);
}

function countStrikes(computerNum, userInputNum) {
  const computerNumArr = computerNum.split("");
  const userInputNumArr = userInputNum.split("");
  let strikes = 0;

  computerNumArr.map((num, index) => {
    if (num === userInputNumArr[index]) {
      strikes += 1;
    }
  });

  return strikes;
}
function countBalls(computerNum, userInputNum) {
  const computerNumArr = computerNum.split("");
  const userInputNumArr = userInputNum.split("");
  let ballCount = 0;

  computerNumArr.map((num, index) => {
    if (num === userInputNumArr[index]) {
      return;
    }
    if (userInputNumArr.includes(num)) {
      ballCount += 1;
    }
  });

  return ballCount;
}

export { compareNumber };

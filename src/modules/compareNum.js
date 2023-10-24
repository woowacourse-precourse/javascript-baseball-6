import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants.js";
import { getUserInput } from "./getUserInput.js";

async function compareNumber(computerNum) {
  const userInputNum = await getUserInput();
  const strikeCount = countStrikes(computerNum, userInputNum);
  const ballCount = countBalls(computerNum, userInputNum);
    console.log( computerNum, userInputNum);
    console.log('strikeCount',strikeCount);
  //   console.log('ballCount',ballCount);

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
  //   console.log("ball", computerNum, userInputNum);
}
// compareNumber(generateComputerNum());

export { compareNumber };

import { MissionUtils } from "@woowacourse/mission-utils";
import { exitGame } from "./Game";
import { getUserNum } from "./NumberSet";

async function checkResult(computerNum, userNum) {
  let strike = countStrike(computerNum, userNum);
  let ball = countBall(computerNum, userNum);
  if (strike === 0 && ball === 0) {
    MissionUtils.Console.print("낫싱");
    await getUserNum(computerNum);
  } else if (strike === 0) {
    MissionUtils.Console.print(`${ball}볼`);
    await getUserNum(computerNum);
  } else if (ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      await exitGame();
    } else {
      await getUserNum(computerNum);
    }
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    await getUserNum(computerNum);
  }
}

function countStrike(computerNum, userNum) {
  let strike = 0;
  for (let i = 0; i < computerNum.length; i++) {
    if (computerNum[i] === userNum[i]) {
      strike++;
    }
  }
  return strike;
}

function countBall(computerNum, userNum) {
  let ball = 0;
  for (let i = 0; i < computerNum.length; i++) {
    if (computerNum[i] !== userNum[i] && computerNum.includes(userNum[i])) {
      ball++;
    }
  }
  return ball;
}

export { checkResult };


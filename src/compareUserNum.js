import { MissionUtils } from "@woowacourse/mission-utils";
import userInputNum from "./userInputNum.js";

const getBallCount = (computerNum, userNum) => {
  let ball = 0;
  let strike = 0;

  userNum.forEach((num, index) => {
    if (computerNum.includes(num)) {
      if (computerNum[index] === num) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  });

  return { ball, strike };
};

const compareUserNum = async (computerNum) => {
  console.log(computerNum);
  const userNum = await userInputNum();
  const { ball, strike } = getBallCount(computerNum, userNum);

  let resultMessage = "";
  if (ball === 0 && strike === 0) {
    resultMessage = "낫싱";
  } else {
    if (ball > 0) {
      resultMessage += `${ball}볼 `;
    }
    if (strike > 0) {
      resultMessage += `${strike}스트라이크`;
    }
  }
  MissionUtils.Console.print(resultMessage.trim());

  if (strike !== 3) {
    await compareUserNum(computerNum);
  } else {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
};

export default compareUserNum;

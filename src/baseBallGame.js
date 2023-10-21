import { Console } from "@woowacourse/mission-utils";
import createRandomNumber from "./function/createRandomNumber.js";
import userInput from "./function/userInput.js";
import gameResultPrint from "./function/gameResultPrint.js";
import restartChecked from "./function/restartChecked.js";

const baseBallGame = async (computerValue) => {
  const userValue = await userInput();
  const userInputArr = userValue.split("").map((el) => {
    return Number(el);
  });
  let strike = 0;
  let ball = 0;

  computerValue.forEach((el, index) => {
    if (el === userInputArr[index]) {
      strike += 1;
    } else if (el !== userInputArr[index] && userInputArr.indexOf(el) !== -1) {
      ball += 1;
    }
  });

  Console.print(gameResultPrint(ball, strike));

  if (strike !== 3) {
    return baseBallGame(computerValue);
  }

  const reStartValue = await restartChecked();

  if (reStartValue === "1") {
    return baseBallGame(createRandomNumber());
  }

  Console.print("게임 종료");
};

export default baseBallGame;

import { Console } from "@woowacourse/mission-utils";
import createRandomNumber from "./function/createRandomNumber";
import userInput from "./function/userInput";
import gameResultPrint from "./function/gameResultPrint";
import restartChecked from "./function/restartChecked";

const baseBallGame = async (computerValue) => {
  const userValue = await userInput();
  const userInputArr = userValue.split('').map((el) => Number(el));

  let strike = 0;
  let ball = 0;

  computerValue.forEach((el, index) => {
    if (el === userInputArr[index]) {
      strike += 1;
    }

    if (el !== userInputArr[index] && userInputArr.indexOf(el) !== -1) {
      ball += 1;
    }
  });

  Console.print(gameResultPrint(ball, strike));

  if (strike !== 3) {
    return baseBallGame(computerValue);
  }

  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

  const reStartValue = await restartChecked();

  if (reStartValue === '1') {
    return baseBallGame(createRandomNumber());
  }

  Console.print('게임 종료');
};

export default baseBallGame;

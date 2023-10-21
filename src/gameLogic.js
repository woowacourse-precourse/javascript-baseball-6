import { MissionUtils } from "@woowacourse/mission-utils";
import { requestUserNumber } from "./consoleUI";

const playRound = async (computerNumber) => {
  let userNumber = await requestUserNumber();
  let { strikes, balls } = calculateStrikesAndBalls(computerNumber, userNumber);
  return determineGameResult(strikes, balls);
};

const determineGameResult = (strikes, balls) => {
  if (strikes === 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    return true;
  }

  if (strikes === 0 && balls === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (balls && !strikes) {
    MissionUtils.Console.print(`${balls}볼`);
  } else if (strikes && !balls) {
    MissionUtils.Console.print(`${strikes}스트라이크`);
  } else {
    MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
  }

  return false;
};

const calculateStrikesAndBalls = (computer, user) => {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (computer[i] === user[i]) {
      strikes++;
    } else if (computer.includes(user[i])) {
      balls++;
    }
  }

  return { strikes, balls };
};

export { playRound, determineGameResult, calculateStrikesAndBalls };

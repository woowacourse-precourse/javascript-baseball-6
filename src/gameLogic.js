import { MissionUtils } from "@woowacourse/mission-utils";

const playRound = async (comNumber, requestUserNumber, checkNumber) => {
  let userNumber = await requestUserNumber();
  let { strikes, balls } = checkNumber(comNumber, userNumber);

  return determineGameResult(strikes, balls);
};

const determineGameResult = (strikes, balls) => {
  if (strikes === 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    return true;
  } else if (strikes === 0 && balls === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (strikes === 0 && balls > 0) {
    MissionUtils.Console.print(`${balls}볼`);
  } else if (strikes > 0 && balls === 0) {
    MissionUtils.Console.print(`${strikes}스트라이크`);
  } else {
    MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
  }
  return false;
};

const checkNumber = (com, user) => {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (com[i] === user[i]) {
      strikes++;
    } else if (com.includes(user[i])) {
      balls++;
    }
  }

  return { strikes, balls };
};

export { playRound, determineGameResult, checkNumber };

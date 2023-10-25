import { Console } from "@woowacourse/mission-utils";

class CalculateScore {
  guessRandomNum(random, userNum) {
    let BALL = 0;
    let STRIKE = 0;

    for (let i = 0; i < 3; i++) {
      if (userNum[i] === random[i]) STRIKE++;
      else if (random.includes(userNum[i])) BALL++;
    }
    return { BALL, STRIKE };
  }

  printAnswer(BALL, STRIKE) {
    if (STRIKE && BALL) {
      Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    } else if (STRIKE && !BALL) {
      Console.print(`${STRIKE}스트라이크`);
    } else if (!STRIKE && BALL) {
      Console.print(`${BALL}볼`);
    } else {
      Console.print("낫싱");
    }
  }
}

export default CalculateScore;

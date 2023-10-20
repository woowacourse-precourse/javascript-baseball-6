import { MissionUtils } from "@woowacourse/mission-utils";

class InsideGame {
  randomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  strikeCheck(computerNumber, userNumber) {
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === userNumber[i]) strike++;
    }
  }
  ballCheck(computerNumber, userNumber) {
    let ball = 0;

    for (let j = 0; j < 3; j++) {
      if (computerNumber[j] === userNumber[j]) ball++;
    }
  }

  outputHint(ball, strike) {
    if (strike === 3) {
      return "3스트라이크";
    } else if (strike === 0 && ball === 0) {
      return "낫싱";
    } else if (strike === 0 && ball !== 0) {
      return `${ball}볼`;
    } else if (strike !== 0 && ball === 0) {
      return `${strike}스트라이크`;
    } else {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }
}
export default InsideGame;

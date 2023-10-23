import { Random, Console } from "@woowacourse/mission-utils";

class GameModel {
  getComputerAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer.join("");
  }

  getStrike(computerAnswer, userAnswer) {
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (computerAnswer[i] === userAnswer[i]) {
        strike++;
      }
    }
    return strike;
  }

  getBall(computerAnswer, userAnswer) {
    let ball = 0;
    computerAnswer.split("").forEach((num) => {
      if (userAnswer.includes(num)) ball++;
    });
    return ball;
  }

  getHint(computerAnswer, userAnswer) {
    const strike = this.getStrike(computerAnswer, userAnswer);
    const ball = this.getBall(computerAnswer, userAnswer) - strike;

    if (strike + ball === 0) {
      Console.print(`낫싱`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

export default GameModel;

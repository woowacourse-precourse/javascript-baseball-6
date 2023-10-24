import { Random } from "@woowacourse/mission-utils";

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
}

export default GameModel;

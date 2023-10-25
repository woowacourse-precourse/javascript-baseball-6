import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
  constructor(min, max, length) {
    this.minNumber = min;
    this.maxNumber = max;
    this.numberLength = length;
    this.answer;
  }

  setAnswer(answer) {
    this.answer = answer;
  }

  generateAnswer() {
    const answer = new Set();
    while (answer.size < this.numberLength) {
      answer.add(
        MissionUtils.Random.pickNumberInRange(this.minNumber, this.maxNumber)
      );
    }
    return Array.from(answer);
  }

  rateScore(number) {
    const inputNumberList = String(number)
      .split("")
      .map((element) => Number(element));
    const answerSet = new Set(this.answer);
    let ball = 0;
    let strike = 0;
    let isWinnerDefined = false;

    for (let i = 0; i < inputNumberList.length; i++) {
      if (inputNumberList[i] === this.answer[i]) {
        strike++;
      } else if (answerSet.has(inputNumberList[i])) {
        ball++;
      }
    }

    if (strike === this.numberLength) {
      isWinnerDefined = true;
    }

    return [ball, strike, isWinnerDefined];
  }

  printScoreMessage(ball, strike) {
    let scoreMessage;
    if (ball === 0 && strike === 0) {
      scoreMessage = "낫싱";
    } else if (ball === 0) {
      scoreMessage = `${strike}스트라이크`;
    } else if (strike === 0) {
      scoreMessage = `${ball}볼`;
    } else {
      scoreMessage = `${ball}볼 ${strike}스트라이크`;
    }
    return scoreMessage;
  }
}

export default Computer;

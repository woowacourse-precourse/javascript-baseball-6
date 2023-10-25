import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  showStartMessage = () => {
    const stratMessage = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(stratMessage);
  };

  setAnswer = () => {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  };

  getUserGuessNumber = async () => {
    const inputMessage = "숫자를 입력해주세요 : ";
    const userGuess = await MissionUtils.Console.readLineAsync(inputMessage);
    return [...userGuess].map(Number);
  };

  calculateUserScore = (answer, userGuess) => {
    let ball = 0,
      strike = 0;
    for (let answer_idx = 0; answer_idx < answer.length; answer_idx++) {
      const answerNumber = answer[answer_idx];
      for (let user_idx = 0; user_idx < userGuess.length; user_idx++) {
        const userGuessNumber = userGuess[user_idx];
        if (answerNumber == userGuessNumber) {
          if (answer_idx == user_idx) {
            strike += 1;
          } else if (answer_idx != user_idx) {
            ball += 1;
          }
        }
      }
    }
    const score = [strike, ball];
    return score;
  };
  showUserScoreMessage = (strike, ball) => {
    const ballMessage = ball ? `${ball}볼` : "";
    const strikeMessage = strike ? `${strike}스트라이크` : "";
    MissionUtils.Console.print(ballMessage + strikeMessage || "낫싱");
  };
  showEndMessage = async () => {
    const endMessage =
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
    MissionUtils.Console.print(endMessage);
    // const userDecision = await MissionUtils.Console.readLineAsync(endMessage);
    // return +userDecision;
  };
  getUserDecision = async () => {
    const userDecision = await MissionUtils.Console.readLineAsync("");
    return +userDecision;
  };
  async play() {
    let strike,
      ball,
      contorller = 1;
    while (contorller !== 2) {
      this.showStartMessage();
      const answer = [4, 2, 5];
      let userGuess = await this.getUserGuessNumber();
      [strike, ball] = this.calculateUserScore(answer, userGuess);
      this.showUserScoreMessage(strike, ball);
      while (strike !== 3) {
        let userGuess = await this.getUserGuessNumber();
        [strike, ball] = this.calculateUserScore(answer, userGuess);
        this.showUserScoreMessage(strike, ball);
      }
      this.showEndMessage();
      contorller = await this.getUserDecision();
    }
  }
}

const app = new App();
app.play();

export default App;

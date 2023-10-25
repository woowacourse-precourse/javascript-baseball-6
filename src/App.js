import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer = null;
    this.userNumber = null;
    this.texts = {
      NOTHING: "낫싱",
      BALL: "볼",
      STRIKE: "스트라이크",
      GAME_FINISH: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      GAME_START: "숫자 야구 게임을 시작합니다.",
      GAME_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력해주세요.\n",
      ERROR: "[ERROR] 입력하신 숫자는 잘못된 형식입니다.",
    };
  }

  createRandomNumber() {
    const result = [];
    while (result.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    return (this.answer = result.join(""));
  }

  getBallCount(answer, userInput) {
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (answer[i] !== userInput[i] && answer.includes(userInput[i])) {
        ball += 1;
      }
    }
    return ball;
  }

  getStrikeCount(answer, userInput) {
    let strike = 0;
    for (let i = 0; i < 3; i += 1) {
      if (answer[i] === userInput[i]) {
        strike += 1;
      }
    }
    return strike;
  }

  getResult(strike, ball) {
    let result = "";

    if (strike === 3) {
      MissionUtils.Console.print(this.texts.GAME_FINISH);
      return;
    }

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print(this.texts.NOTHING);
    }

    if (ball > 0) {
      result += `${ball}${this.texts.BALL} `;
    }

    if (strike > 0) {
      result += `${strike}${this.texts.STRIKE}`;
    }

    MissionUtils.Console.print(result);
  }

  validateNumber = (number) => {
    const setNumber = new Set(number);

    if (number.length !== setNumber.size || number.length !== 3) {
      return this.texts.ERROR;
    }

    return null;
  };
}

const myApp = new App();
myApp.play();

export default App;

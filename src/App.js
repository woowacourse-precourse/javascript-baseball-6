import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  computer() {
    const answer = [];

    while (answer.length < NUM_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(randomNumber))
        answer.push(randomNumber);
    }
    
    return answer;
  }

  async user() {
    const userInputNumber = [];
    
    try {
      const inputValue = await MissionUtils.Console.readLineAsync(RUN_GAME.inputMessage);
      if (inputValue == undefined || inputValue.length != NUM_LENGTH)
        throw new Error("[ERROR] 숫자가 3자리여야 합니다.");
      
      for (var i = 0; i < NUM_LENGTH; i++) {
        if (Number.isNaN(Number(inputValue[i])))
          throw new Error("[ERROR] 입력값은 숫자여야 합니다.");
        if (userInputNumber.includes(parseInt(inputValue[i])))
          throw new Error("[ERROR] 숫자가 중복되지 않아야 합니다.");
        if (inputValue[i] == 0)
          throw new Error("[ERROR] 숫자는 1~9 사이의 숫자여야 합니다.");
        else
          userInputNumber.push(parseInt(inputValue[i]));
      }

      return userInputNumber;

    } catch (error) {
      return Promise.reject(error);
    }
  }

  compare(answer, userInputNumber) {
    let strike = 0;
    let ball = 0;

    for (var i = 0; i < NUM_LENGTH; i++) {
      if (answer[i] == userInputNumber[i]) {
        strike++;
      } else if (answer.includes(userInputNumber[i]))
        ball++;
    }
    return [strike, ball];
  }

  async play() {
    let start = RUN_GAME.restart;
    MissionUtils.Console.print(RUN_GAME.startMessage);
  
    try {
      while (start == RUN_GAME.restart) {
        const answer = this.computer();
        let strike = 0;
        let ball = 0;

        while (strike != NUM_LENGTH) {
          const userInputNumber = await this.user();

          [strike, ball] = this.compare(answer, userInputNumber);

          if (strike > 0) {
            if (ball > 0)
              MissionUtils.Console.print(`${ball}${COUNT_BALL.ball} ${strike}${COUNT_BALL.strike}`);
            else
              MissionUtils.Console.print(`${strike}${COUNT_BALL.strike}`);
          } else {
            if (ball > 0)
              MissionUtils.Console.print(`${ball}${COUNT_BALL.ball}`);
            else // strike == ball == 0 일 때
              MissionUtils.Console.print(COUNT_BALL.nothing);
          }
        }

        MissionUtils.Console.print(RUN_GAME.collectMessage);
        
        start = await MissionUtils.Console.readLineAsync(RUN_GAME.checkMessage);
        if (start != RUN_GAME.restart && start != RUN_GAME.end)
          throw new Error(RESTART_ERROR_MESSAGE);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}


const NUM_LENGTH = 3;
const COUNT_BALL = {
  ball: "볼",
  strike: "스트라이크",
  nothing: "낫싱",
};
const RESTART_ERROR_MESSAGE = "[ERROR] 입력이 잘못되었습니다. 게임을 종료합니다.";
const RUN_GAME = {  
  startMessage: "숫자 야구 게임을 시작합니다.",
  inputMessage: "숫자를 입력해주세요 : ",
  collectMessage: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  checkMessage: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  restart: 1,
  end: 2,
};

const app = new App();
app.play();

export default App;
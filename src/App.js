const { Console, Random } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGE,
  BASEBALL_MESSAGE,
  END_OPTION,
  ERROR_MESSAGE,
} = require("./constants");

class App {
  async play() {
    // 게임 시작 메세지 출력
    Console.print(GAME_MESSAGE.START);
    // TODO : 1~9까지 랜덤 숫자를 생성하는 기능
    this.compterNumber = generateComputerNumber();
    // 게임 시작 메서드(BaseballGame) 호출
    return this.BaseballGame(this.compterNumber);
  }

  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    return computerNumber;
  }

  async BaseballGame(compterNumber) {
    // TODO : 숫자를 입력 받는 기능
    try {
      const userNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT);
      // TODO : 사용자가 입력한 숫자에 대해 유효한 값인지 확인하는 기능
      if (!this.inValidNumber(userNumber)) {
        return this.BaseballGame();
      }
      // TODO : 볼과 스트라이크를 계산하는 기능
      const { ball, strike } = this.calculateBallAndStrike(
        compterNumber,
        this.userNumber
      );
      // TODO : 비교한 결과에 대해 출력하는 기능
      this.printResult(ball, strike);
    } catch (error) {
      throw new Error(ERROR_MESSAGE.IS_INVALID);
    }
  }

  inValidNumber(userNumber) {
    const userNumberArray = String(userNumber).split("");
    const setUserNumber = new Set(userNumberArray);

    if (typeof userNumber !== number) {
      throw new Error(ERROR_MESSAGE.IS_NUMBER);
    }

    if (userNumberArray.length !== setUserNumber.size) {
      throw new Error(ERROR_MESSAGE.IS_DUPLICATION);
    }

    if (userNumberArray.length !== 3) {
      throw new Error(ERROR_MESSAGE.IS_DIGIT);
    }

    return true;
  }

  calculateBallAndStrike(compterNumber, userNumber) {
    const userNumberArray = String(userNumber).split("");
    let ball = 0;
    let strike = 0;

    compterNumber.forEach((number, index) => {
      if (compterNumber.includes(userNumber[index])) {
        ball++;
      }

      if (number === userNumberArray[index]) {
        strike++;
      }
    });

    return { ball, strike };
  }

  printResult(ball, strike) {
    this.ball = ball;
    this.strike = strike;

    if (this.ball === 0 && this.strike === 0) {
      Console.print(BASEBALL_MESSAGE.NOTHING);
      return this.BaseballGame();
    }

    if (this.strike > 0 && this.strike < 3) {
      Console.print(`${this.strike}${BASEBALL_MESSAGE.STRIKE}`);
      return this.BaseballGame();
    }

    if (this.ball > 0) {
      Console.print(`${this.ball}${BASEBALL_MESSAGE.BALL}`);
      return this.BaseballGame();
    }

    if (this.ball > 0 && this.strike > 0 && this.strike < 3) {
      Console.print(
        `${this.ball}${BASEBALL_MESSAGE.BALL} ${this.strike}${BASEBALL_MESSAGE.STRIKE}`
      );
      return this.BaseballGame();
    }

    if (this.strike === 3) {
      Console.print(`${this.strike}\n${GAME_MESSAGE.END}`);
      return this.reStart();
    }
  }
}

const app = new App();
app.play();

export default App;

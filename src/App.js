const { Console } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGE,
  BASEBALL_MESSAGE,
  END_OPTION,
  ERROR_MESSAGE,
} = require("./contants");
const { Computer } = require("./contants/Computer");

class App {
  async play() {
    //게임 시작 메세지
    Console.print(GAME_MESSAGE.START);
    const computer = new Computer();
    this.computerNumber = computer.generateComputerNumber();
    return this.BaseballGame(this.computerNumber);
  }

  async BaseballGame(computerNumber) {
    while (true) {
      try {
        const userNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT);
        this.inValidNumber(userNumber);
        //입력 숫자 유효 확인
        const { ball, strike } = this.calculateBallStrike(
          computerNumber,
          this.userNumber
        );

        const result = this.printResult(ball, strike);

        if (result) {
          return this.reStart();
        }
      } catch (error) {
        throw new Error(ERROR_MESSAGE.IS_INVALID);
        // 에러 상황시 에러 문구 출력 추가
      }
    }
  }
}

export default App;

const { Console, Random } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGE,
  BASEBALL_MESSAGE,
  END_OPTION,
  ERROR_MESSAGE,
} = require("./contants");

class App {
  async play() {
    console.print(GAME_MESSAGE.START);
    // 게임 메세지 출력
    this.computerNumber = this.computerNumber();
    // 게임 시작 메서드
    return this.BaseballGame(this.computerNumber);
  }

  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length <= 2) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.inclues(number)) {
        computerNumber.push(number);
      }
    }
    // 컴퓨터 숫자 생성, 없다면 푸쉬
    return computerNumber;
  }

  async BaseballGame(computerNumber) {
    try {
        const userNumber = awiat Console.readLineAsync(GAME_MESSAGE.INPUT)
        // 입력숫자 유효값 확인
        if(!this.inValiNumber(userNumber)) {
            return this.BaseballGame()
        }

        const {ball, strike} = this.calBallAndStrike(
            computerNumber,
            this.userNumber
        )

    }
  }
}

export default App;

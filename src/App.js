import { Random, Console } from "@woowacourse/mission-utils";

class App {
  //플레이 게임
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.getComputerInput();
    return this.checkInput();
  }

  // 컴퓨터 랜덤 생성
  async getComputerInput() {
    // Set로 unique element만 허용
    const computeArray = new Set();
    while (computeArray.size < 3) {
      computeArray.add(Random.pickNumberInRange(1, 9));
    }
    this.computerNum = [...computeArray];
  }

  // player 랜덤 입력 숫자
  async getPlayerInput() {
    const userInput = await Console.readLineAsync(
      "1~9까지의 수로 이루어진 3자리의 중복없는 숫자를 입력해 주세요."
    );
    if (userInput.length !== 3 || userInput.includes(0)) {
      throw new Error("[ERROR]");
    } else {
      return [...userInput].map((el) => Number(el));
    }
  }

  // 플레이어, 컴퓨터 input 검사
  async checkInput() {
    const PLAYER_INPUT = await this.getPlayerInput();
    const COMPUTER_INPUT = [...this.computerNum];

    let strikeCount = 0;
    let ballCount = 0;

    // 스트라이크 카운터
    for (let i = 0; i < PLAYER_INPUT.length; i++) {
      if (PLAYER_INPUT[i] === COMPUTER_INPUT[i]) {
        strikeCount++;
        //볼 카운터
      } else if (COMPUTER_INPUT.includes(PLAYER_INPUT[i])) {
        ballCount++;
      }
    }

    // }
    await this.outputMessage(strikeCount, ballCount);

    if (strikeCount !== 3) {
      return this.checkInput();
    } else {
      return this.gameOver();
    }
  }

  async outputMessage(strike, ball) {
    let message = "";

    switch (true) {
      case strike > 0 && ball > 0:
        message = `${ball}볼 ${strike}스트라이크`;
        break;
      case strike > 0:
        message = `${strike}스트라이크`;
        break;
      case ball > 0:
        message = `${ball}볼`;
        break;
      default:
        message = "낫싱";
    }

    return Console.print(message);
  }

  async gameOver() {
    const endGameMessage =
      await Console.readLineAsync(`3개의 숫자를 모두 맞히셨습니다! 게임 종료
    게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);

    if (endGameMessage === "1") {
      this.getComputerInput();
      return this.checkInput();
    } else if (endGameMessage === "2") {
      Console.print("게임 종료");
      return;
    } else {
      throw new Error("[ERROR]");
    }
  }
}

export default App;

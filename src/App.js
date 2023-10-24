import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // constructor() {
  // this.strikeCount = 0;
  // this.ballCount = 0;
  // this.strikesCountArray = [];
  // this.ballsCountArray = [];
  // }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getComputerInput();
    return this.checkInput();
    // if (this.strikeCount < 3) {
    //   return this.checkInput();
    // } else {
    //   return this.gameOver();
    // }

    // const computerInput = this.getComputerInput();
    // const playerInput = await this.getPlayerInput();
  }

  // 컴퓨터 랜덤 생성
  async getComputerInput() {
    const computeArray = [];
    while (computeArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computeArray.includes(number)) {
        computeArray.push(number);
      }
    }
    // this.computerOutput = computeArray;
    // return;
    // MissionUtils.Console.print(computeArray);
    // return computeArray;
    this.computerNum = computeArray;

    return;
  }

  // player 랜덤 입력 숫자
  async getPlayerInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "1~9까지의 수로 이루어진 3자리의 중복없는 숫자를 입력해 주세요."
    );
    if (userInput.length !== 3 || userInput.includes(0)) {
      throw new Error("[ERROR]");
    } else {
      return [...userInput].map((el) => Number(el));
    }

    // if (userInput.length !== 3 || userInput.includes(0)) {
    //   throw new Error("[ERROR]");
    // } else {
    //   return [...userInput].map((el) => Number(el));
    // }
  }

  // 플레이어, 컴퓨터 input 검사
  async checkInput() {
    // console.log(userInputArray);

    const PLAYER_INPUT = await this.getPlayerInput();
    const COMPUTER_INPUT = [...this.computerNum];
    // const COMPUTER_INPUT = this.getComputerInput();

    let strikeCount = 0;
    let ballCount = 0;

    // 스트라이크 카운터
    for (let i = 0; i < PLAYER_INPUT.length; i++) {
      if (PLAYER_INPUT[i] === COMPUTER_INPUT[i]) {
        strikeCount++;
        // strikesCountArray.push(strikeCount);
      } else if (COMPUTER_INPUT.includes(PLAYER_INPUT[i])) {
        ballCount++;
        // ballsCountArray.push(ballCount);
      }

      //볼 카운터
    }
    // for (let i = 0; i < PLAYER_INPUT.length; i++) {

    // }
    await this.outputMessage(
      strikeCount,
      ballCount
      // strikeCount,
      // this.ballCount
    );

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

    return MissionUtils.Console.print(message);

    // if (strike >= 3) {
    //   const winMessage = `🎉 3스트라이크
    //   3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    //   MissionUtils.Console.print(winMessage);
    // } else if (strike > 0 && ball > 0) {
    //   const strikeAndBallMsg = `볼${ball} 스트라이크${strike}`;
    //   MissionUtils.Console.print(strikeAndBallMsg);
    // } else if (strike > 0) {
    //   const strikeMessage = ` 스트라이크${strike}`;
    //   MissionUtils.Console.print(strikeMessage);
    // } else if (ball > 0) {
    //   const ballMessage = ` 볼${ball}`;
    //   MissionUtils.Console.print(ballMessage);
    // } else {
    //   MissionUtils.Console.print(`낫싱`);
    // }
  }
  async gameOver() {
    const endGameMessage = await MissionUtils.Console
      .readLineAsync(`3개의 숫자를 모두 맞히셨습니다! 게임 종료
    게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);

    if (endGameMessage === "1") {
      this.getComputerInput();
      return this.checkInput();
    } else if (endGameMessage === "2") {
      MissionUtils.Console.print("게임 종료");
      return;
    } else {
      throw new Error("[ERROR]");
    }
  }
}

export default App;

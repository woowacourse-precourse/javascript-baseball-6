import { MissionUtils } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.strikeCount = 0;
    this.ballCount = 0;
    this.strikesCountArray = [];
    this.ballsCountArray = [];
  }

  async play() {
    MissionUtils.Console.print("게임 시작");

    const computerInput = this.getComputerInput();
    const playerInput = await this.getPlayerInput();

    this.checkInput(playerInput, computerInput);
  }

  // 컴퓨터 랜덤 생성
  getComputerInput() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
    // MissionUtils.Console.print(computer);
  }

  // player 랜덤 입력 숫자
  async getPlayerInput() {
    while (this.strikeCount < 3) {
      const userInput = await MissionUtils.Console.readLineAsync(
        "1~9까지의 수로 이루어진 3자리의 중복없는 숫자를 입력해 주세요."
      );

      if (userInput.length !== 3) {
        throw new Error("[ERROR]");
      } else {
        return [...userInput].map((el) => Number(el));
      }
    }
  }

  async checkInput(playerInput, computerInput) {
    // console.log(userInputArray);

    const PLAYER_INPUT = await this.getPlayerInput();
    const COMPUTER_INPUT = this.getComputerInput();

    // 스트라이크 카운터
    for (let i = 0; i < PLAYER_INPUT.length; i++) {
      if (PLAYER_INPUT[i] === COMPUTER_INPUT[i]) {
        this.strikeCount++;
        this.strikesCountArray.push(this.strikeCount);
        //볼 카운터
      } else if (computerInput.includes(playerInput[i])) {
        this.ballCount += 1;
        this.ballsCountArray.push(this.ballCount);
      }
    }
    await this.outputMessage(
      this.strikesCountArray.length,
      this.ballsCountArray.length
    );

    if (this.strikesCountArray.length !== this.ballsCountArray.length) {
      return this.checkInput();
    }
  }

  async outputMessage(strike, ball) {
    let message = "";

    switch (true) {
      case strike >= 3:
        message = "🎉 3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
        break;
      case strike > 0 && ball > 0:
        message = `볼${ball} 스트라이크${strike}`;
        break;
      case strike > 0:
        message = `스트라이크${strike}`;
        break;
      case ball > 0:
        message = `볼${ball}`;
        break;
      default:
        message = "낫싱";
    }

    MissionUtils.Console.print(message);
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
      return this.getComputerInput();
    } else if (endGameMessage === "2") {
      return MissionUtils.Console.print("게임 종료");
    } else {
      throw new Error("[ERROR]");
    }
  }
}

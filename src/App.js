import {MissionUtils} from "@woowacourse/mission-utils";

class InputHandler {
  async getUserInput(message) {
    const input = await MissionUtils.Console.readLineAsync(message);
    if (typeof input === "undefined" || input === null || input === "") {
      throw new Error("[ERROR]:Invalid input");
    }
    return input;
  }

  async getRestartInput(message) {
    while (true) {
      const input = await this.getUserInput(message + "\n");
      if (input === "1" || input === "2") {
        return input;
      }
      MissionUtils.Console.print("1 또는 2를 입력해주세요.");
    }
  }
}

class Player {
  constructor(inputHandler) {
    this.inputHandler = inputHandler;
  }

  async guessNumber() {
    return await this.inputHandler.getUserInput(
      "숫자를 입력해주세요 (예: 123): "
    );
  }
}

class Game {
  constructor(player) {
    this.player = player;
    this.targetNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    let numbers = Array.from({length: 9}, (_, i) => i + 1);
    let result = "";

    for (let i = 0; i < 3; i++) {
      const randomIndex = MissionUtils.Random.pickNumberInRange(
        0,
        numbers.length - 1
      );
      result += numbers[randomIndex];
      numbers = numbers.filter((_, idx) => idx !== randomIndex);
    }
    return result;
  }

  checkStrikeAndBall(guess) {
    let strikes = 0;
    let balls = 0;
    console.log(typeof guess);
    for (let i = 0; i < 3; i++) {
      if (guess[i] === this.targetNumber[i]) {
        strikes++;
      } else if (this.targetNumber.includes(guess[i])) {
        balls++;
      }
    }

    return {strikes, balls};
  }

  async playRound() {
    const guess = await this.player.guessNumber();

    if (guess.length !== 3) {
      throw new Error("[ERROR]:3자리 수를 입력하세요");
    }

    const {strikes, balls} = this.checkStrikeAndBall(guess);

    if (strikes === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }

    if (strikes === 0 && balls === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strikes === 0) {
      MissionUtils.Console.print(`${balls}볼`);
    } else if (balls === 0) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }

    return false;
  }
}

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.player = new Player(this.inputHandler);
    this.game = new Game(this.player);
  }

  async play() {
    let isFirstGame = true;
    let restart;

    if (isFirstGame) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      isFirstGame = false;
    }

    let isGameOver = false;
    while (!isGameOver) {
      isGameOver = await this.game.playRound();
    }

    restart = await this.inputHandler.getRestartInput(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (restart === "1") {
      this.game = new Game(this.player);
    } else {
      MissionUtils.Console.print("게임을 종료합니다.");
    }
  }
}

const app = new App();
app.play();
export default App;

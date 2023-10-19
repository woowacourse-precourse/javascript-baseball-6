const { Console } = require("@woowacourse/mission-utils");
const GameUtil = require("./GameUtil");

class App extends GameUtil {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.randoms = super.generateRandomNumbers();
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    Console.readLine("숫자를 입력해주세요 : ", (playerInput) => {
      this.validateInput(playerInput);
    });
  }

  validateInput(playerInput) {
    const result = super.validateInput(playerInput);
    if (result === "PASS") return this.printHint(playerInput);

    throw new Error(result);
  }

  printHint(playerInput) {
    const ball = super.countBall(this.randoms, playerInput);
    const strike = super.countStrike(this.randoms, playerInput);

    if (strike === 3) return this.correctAnswer();

    Console.print(super.showHint(ball, strike));
    return this.play();
  }

  correctAnswer() {
    Console.print("3스트라이크");
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (decision) => {
        switch (Number(decision)) {
          case 1:
            return this.restart();
          case 2:
            return this.terminate();
          default:
            return this.correctAnswer();
        }
      }
    );
  }

  restart() {
    this.randoms = super.generateRandomNumbers();
    this.play();
  }

  static terminate() {
    Console.print("게임 종료");
    Console.close();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;

// ---------------------

const { Random } = require("@woowacourse/mission-utils");

class GameUtil {
  // eslint-disable-next-line class-methods-use-this
  generateRandomNumbers() {
    const uniqueRandomNumbers = [];

    while (uniqueRandomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!uniqueRandomNumbers.includes(number)) {
        uniqueRandomNumbers.push(number);
      }
    }

    return uniqueRandomNumbers;
  }

  // eslint-disable-next-line class-methods-use-this
  countStrike(randomsNumbers, playerInput) {
    let strikes = 0;

    for (let digit = 0; digit < 3; digit++) {
      if (randomsNumbers[digit] === Number(playerInput[digit])) strikes += 1;
    }

    return strikes;
  }

  // eslint-disable-next-line class-methods-use-this
  countBall(randomsNumbers, playerInput) {
    let balls = 0;

    for (let digit = 0; digit < 3; digit++) {
      if (
        randomsNumbers[digit] !== Number(playerInput[digit]) &&
        randomsNumbers.includes(Number(playerInput[digit]))
      ) {
        balls += 1;
      }
    }

    return balls;
  }

  // eslint-disable-next-line class-methods-use-this
  showHint(ball, strike) {
    if (ball !== 0 && strike !== 0) return `${ball}볼 ${strike}스트라이크`;
    if (ball !== 0 && strike === 0) return `${ball}볼`;
    if (ball === 0 && strike !== 0) return `${strike}스트라이크`;
    return "낫싱";
  }

  // eslint-disable-next-line class-methods-use-this
  validateInput(playerInput) {
    const inputToSet = new Set(playerInput.split("").map(Number));

    if (playerInput.length !== 3) return "입력값은 세자리 수를 입력해주세요.";
    if ([...inputToSet].length !== 3) {
      return "중첩되지 않는 세자리 수를 입력해주세요.";
    }
    if (playerInput.includes(" ")) return "공백은 넣지 말아주세요.";
    if (Number.isNaN(playerInput)) return "숫자만 입력해주세요.";

    return "PASS";
  }
}

module.exports = GameUtil;

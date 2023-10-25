import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.generateRandomNumbers();
    while (true) {
      if (this.printUserGuess(this.judgeUserGuess(computer, await this.takeUserGuess()))) {
        const playContinue = await this.takePlayContinue();
        if (playContinue !== "1" && playContinue !== "2") {
          throw MissionUtils.Console.print("1 또는 2만 입력 가능합니다.");
        }
        if (playContinue === "2") {
          break;
        }
      }
    }
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  async takeUserGuess() {
    const inputString = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const input = inputString.trim().split('').map(Number);

    if (input.length !== 3 || input.includes(NaN)) {
      throw MissionUtils.Console.print("3자리 숫자만 입력 가능합니다.");
    }

    return input;
  }

  judgeUserGuess(computerGuess, userGuess) {
    const guessResult = [0, 0];
    for (let i = 0; i < computerGuess.length; i++) {
      if (computerGuess[i] === userGuess[i]) {
        guessResult[1]++;
      } else if (computerGuess.includes(userGuess[i])) {
        guessResult[0]++;
      }
    }

    return guessResult;
  }

  printUserGuess(guessResult) {
    if (guessResult[1] === 3) {
      MissionUtils.Console.print("3스트라이크");
      return true;
    }
    if (guessResult[0] === 0 && guessResult[1] === 0) {
      MissionUtils.Console.print("낫싱");
      return false;
    }
    if (guessResult[0] === 0) {
      MissionUtils.Console.print(`${guessResult[1]}스트라이크`);
      return false;
    }
    if (guessResult[1] === 0) {
      MissionUtils.Console.print(`${guessResult[0]}볼`);
      return false;
    }
    MissionUtils.Console.print(`${guessResult[0]}볼 ${guessResult[1]}스트라이크`);
    return false;
  }

  async takePlayContinue() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const playContinueInput = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

    return playContinueInput.trim();
  }
}

export default App;

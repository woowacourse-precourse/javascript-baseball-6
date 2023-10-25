import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.gameFinished = false;
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");

    while (!this.gameFinished) {
      const computerNum = this.makeComputerNum();
      let isGameFinished = false;

      while (!isGameFinished) {
        try {
          const result = await this.startGame(computerNum);

          if (result === "3스트라이크") {
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            const resultNum = await this.endGame();

            if (resultNum === "1") {
              isGameFinished = true;
            } else if (resultNum === "2") {
              isGameFinished = true;
              this.gameFinished = true;
            }
          }
        } catch (error) {
          throw new Error(`[ERROR] ${error.message}`);
          // isGameFinished = true;
          // this.gameFinished = true;
        }
      }
    }
  }

  makeComputerNum() {
    const computer = [];
    while (computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  async startGame(computerNum) {
    const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    if (userNum.length === 0) {
      throw new Error("숫자가 잘못된 형식입니다.");
    } else if (this.isValidInput(userNum)) {
      const result = this.checkGuess(userNum, computerNum);
      await MissionUtils.Console.print(result);
      return result;
    } else {
      throw new Error("숫자가 잘못된 형식입니다.");
    }
  }

  isValidInput(input) {
    return /^[1-9][1-9][1-9]$/.test(input) && !/(.).*\1/.test(input);
  }

  checkGuess(userNum, computerNum) {
    const inputNum = userNum.split("").map(Number);
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (inputNum[i] === computerNum[i]) {
        strikeCount++;
      } else if (computerNum.includes(inputNum[i])) {
        ballCount++;
      }
    }

    if (strikeCount === 3) {
      return "3스트라이크";
    }

    const result = [];
    if (ballCount > 0) {
      result.push(`${ballCount}볼`);
    }
    if (strikeCount > 0) {
      result.push(`${strikeCount}스트라이크`);
    }
    if (strikeCount === 0 && ballCount === 0) {
      result.push("낫싱");
    }
    return result.join(" ");
  }

  async endGame() {
    const choice = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if (choice.length === 0) {
      throw new Error("숫자가 잘못된 형식입니다.");
    } else if (choice.trim() === "1") {
      return "1";
    } else if (choice.trim() === "2") {
      this.gameFinished = true;
      return "2";
    } else {
      throw new Error("숫자가 잘못된 형식입니다.");
    }
  }
}

const app = new App();
app.play();

export default App;

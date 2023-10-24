import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.answer = this.generateAnswer();
    this.gameOver = false;
  }

  generateAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  validateInput(input) {
    const isNumeric = /^\d+$/.test(input);
    return (
      isNumeric &&
      input.length === 3 &&
      ![...input].some((digit) => digit === "0")
    );
  }

  getUserInput() {
    return Console.readLineAsync("숫자를 입력해주세요 : ");
  }

  getMatchResults(userInput) {
    const inputNumbers = [...userInput].map(Number);
    let strikes = 0;
    let balls = 0;

    this.answer.forEach((num, idx) => {
      if (num === inputNumbers[idx]) {
        strikes++;
      } else if (inputNumbers.includes(num)) {
        balls++;
      }
    });

    return { strikes, balls };
  }

  displayResults({ strikes, balls }) {
    if (strikes === 3) {
      Console.print("3스트라이크! 게임 종료");
      this.gameOver = true;
    } else if (strikes === 0 && balls === 0) {
      Console.print("낫싱");
    } else {
      Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (!this.gameOver) {
      const userInput = await this.getUserInput();

      if (!this.validateInput(userInput)) {
        Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
        continue;
      }

      const results = this.getMatchResults(userInput);
      this.displayResults(results);
    }

    this.restartPrompt();
  }

  async restartPrompt() {
    const userInput = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    if (userInput === "1") {
      this.answer = this.generateAnswer();
      this.gameOver = false;
      await this.play();
    } else if (userInput === "2") {
      Console.print("게임 종료");
    } else {
      Console.print("1 또는 2를 입력하세요.");
      await this.restartPrompt();
    }
  }
}

export default App;

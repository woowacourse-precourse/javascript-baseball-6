import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.answer = [];
    this.isGameFinished = false;
  }

  generateAnswer() {
    while (this.answer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(randomNumber)) {
        this.answer.push(randomNumber);
      }
    }
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (!this.isGameFinished) {
      this.generateAnswer();
      await this.guessNumbers();
    }

    const restartOrExit = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (restartOrExit === "1") {
      this.answer = [];
      this.isGameFinished = false;
      await this.play();
    } else if (restartOrExit !== "2") {
      throw new Error("[ERROR]");
    }
  }

  async guessNumbers() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (userInput.length !== 3 || isNaN(userInput)) {
      throw new Error("[ERROR]");
    }

    const [strikeCount, ballCount] = this.checkAnswer(userInput);

    if (strikeCount === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.isGameFinished = true;
      return;
    } else if (strikeCount === 0 && ballCount === 0) {
      Console.print("낫싱");
    } else {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }

  checkAnswer(userInput) {
    let strikeCount = 0;
    let ballCount = 0;

    this.answer.forEach((num, idx) => {
      if (num === parseInt(userInput[idx])) {
        strikeCount++;
      } else if (userInput.includes(num.toString())) {
        ballCount++;
      }
    });

    return [strikeCount, ballCount];
  }
}

const app = new App();
app.play();

export default App;

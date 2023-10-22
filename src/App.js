const { Random, Console } = require('@woowacourse/mission-utils');

const MAX_NUM = 9;
const MIN_NUM = 1;
const MAX_DIGITS = 3;

class App {
  constructor() {
    this.randomNumbers = [];
    this.isPlaying = true;
  }

  generateRandomNumbers() {
    this.randomNumbers = [];
    while (this.randomNumbers.length < MAX_DIGITS) {
      const number = Random.pickNumberInRange(MIN_NUM, MAX_NUM);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }
  }

  async getAnswer() {
    const answer = await Console.readLineAsync("숫자를 입력해주세요: ");
    if (answer.length !== MAX_DIGITS || isNaN(Number(answer))) {
      throw new Error("[ERROR] 잘못된 값을 입력하셨습니다.");
    }
    return answer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (this.isPlaying) {
      this.generateRandomNumbers();
      try {
        const answer = await this.getAnswer();
        const [strike, ball] = this.checkAnswer(answer);
        this.displayResult(strike, ball);
      } catch (error) {
        Console.print(error.message);
        this.isPlaying = false;
      }
    }
  }

  displayResult(strike, ball) {
    if (strike === MAX_DIGITS) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.askReplay();
    } else if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async askReplay() {
    const replay = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ");
    this.isPlaying = replay === "1";
  }

  checkAnswer(answer) {
    const answerArray = answer.split("").map(Number);
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < MAX_DIGITS; i++) {
      if (this.randomNumbers[i] === answerArray[i]) {
        strike++;
      } else if (this.randomNumbers.includes(answerArray[i])) {
        ball++;
      }
    }

    return [strike, ball];
  }
}

export default App;

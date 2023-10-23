import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.strikes = [];
  }

  async play() {
    this.playGame();
  }

  playGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.strikes = [];
    this.strikes = this.generateStrikes();
    Console.print(this.strikes);
    this.playInning();
  }

  generateStrikes() {
    const numberArray = [];
    while (numberArray.length < 3) {
      let rn = this.generateRandomNumber();
      if (numberArray.includes(rn)) {
        continue;
      } else {
        numberArray.push(rn);
      }
    }
    return numberArray;
  }

  generateRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9); // 1~9 중 랜덤 숫자
    return randomNumber;
  }

  async playInning() {
    this.getGuess()
      .then(guess => {
        const [strikeCount, ballCount] = this.evaluateGuess(guess);
        let message = "";
        if (ballCount > 0) {
          message += `${ballCount}볼`;
        }
        if (strikeCount > 0) {
          message += `${message ? " " : ""}${strikeCount}스트라이크`;
        }
        if (!message) {
          message = "낫싱";
        }
        Console.print(message);
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  async getGuess() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync("숫자를 입력해주세요 : ").then(userInput => {
        try {
          this.isValidGuess(userInput);
          resolve(userInput);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  isValidGuess(inputNumber) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(inputNumber)) {
      throw new Error("Invalid guess");
    }
  }

  evaluateGuess(guessNumbers) {
    const numbers = [...guessNumbers].map(str => Number(str));
    Console.print(numbers);
    let strikeCount = 0;
    let ballCount = 0;
    numbers.forEach((number, index) => {
      if (number == this.strikes[index]) {
        strikeCount += 1;
      } else {
        if (this.strikes.includes(number)) {
          ballCount += 1;
        }
      }
    });
    return [strikeCount, ballCount];
  }
}

const app = new App();
app.play();

export default App;

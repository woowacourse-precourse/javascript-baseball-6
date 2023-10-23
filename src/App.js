import readline from "readline";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.strikes = [];
  }

  async play() {
    this.playGame();
  }

  playGame() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.strikes = [];
    this.strikes = this.generateStrikes();
    console.log(this.strikes);
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
    const randomNumber = Math.floor(Math.random() * 9) + 1; // 1~9 중 랜덤 숫자
    return randomNumber;
  }

  async playInning() {
    this.getGuess().then(guess => {
      const [strikeCount, ballCount] = this.evaluateGuess(guess);
      const ballMessage = ballCount ? `${ballCount}볼` : "";
      const strikeMessage = strikeCount ? `${strikeCount}스트라이크` : "";
      console.log(ballMessage, strikeMessage);
    });
  }

  async getGuess() {
    return new Promise((resolve, reject) => {
      this.rl.question("숫자를 입력해주세요 : ", userInput => {
        try {
          this.isValidGuess(userInput);
          resolve(userInput);
        } catch (error) {
          reject(error);
        } finally {
          this.rl.close();
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
    console.log(numbers);
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

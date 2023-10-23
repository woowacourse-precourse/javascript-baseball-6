import readline from "readline";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    const strikes = [];
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

  playInning() {
    this.getGuess();
  }

  getGuess() {
    this.rl.question("숫자를 입력해주세요 : ", userInput => {
      try {
        this.isValidGuess(userInput);
        this.evaluateGuess(userInput);
      } catch (error) {
        console.log(error);
      } finally {
        this.rl.close();
      }
    });
  }

  isValidGuess(inputNumber) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(inputNumber)) {
      throw new Error("Invalid guess");
    }
  }

  evaluateGuess(inputNumber) {
    console.log("evaluate", inputNumber);
  }
}

const app = new App();
app.play();

export default App;

import readline from "readline";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async play() {
    this.playGame();
  }

  playGame() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.playRound();
  }

  playRound() {
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

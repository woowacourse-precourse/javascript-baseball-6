const readline = require("readline");

class App {
  constructor() {
    this.computerNumber = this.generateRandomNumber();
    this.attempts = 0;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  generateRandomNumber() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      result.push(numbers[randomIndex]);
      numbers.splice(randomIndex, 1);
    }

    return result;
  }

  validateInput(userInput) {
    if (
      userInput.length !== 3 ||
      userInput.split("").some((num) => num < "1" || num > "9")
    ) {
      throw new Error("올바른 입력이 아닙니다.");
    }
  }

  compareNumbers(userInput) {
    this.attempts++;
    const userNumbers = userInput.split("").map(Number);
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === this.computerNumber[i]) {
        strikes++;
      } else if (this.computerNumber.includes(userNumbers[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }

  getInput() {
    return new Promise((resolve) => {
      this.rl.question(
        "3자리 숫자를 입력하세요 (1부터 9까지, 중복 없이): ",
        (userInput) => {
          resolve(userInput);
        }
      );
    });
  }

  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    const timeout = 5000; // 5초 타임아웃 설정

    while (true) {
      const userInputPromise = this.getInput();
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error("입력 시간이 초과되었습니다."));
        }, timeout);
      });

      try {
        const userInput = await Promise.race([
          userInputPromise,
          timeoutPromise,
        ]);
        this.validateInput(userInput);
        const { strikes, balls } = this.compareNumbers(userInput);

        if (strikes === 3) {
          console.log(`축하합니다! ${this.attempts}번만에 정답을 맞췄습니다.`);
          this.rl.close();
          break;
        } else {
          console.log(`${strikes}스트라이크 ${balls}볼`);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  }
}

export default App;

// 실행
const game = new App();
game.play();

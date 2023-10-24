export default class App {
  constructor() {
    this.secretNumber = this.generateRandomNumber();
    this.exitRequested = false;
    this.play();
  }

  generateRandomNumber() {
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    const computer = [];

    while (computer.length < 3) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      computer.push(numbers[randomIndex]);
      numbers.splice(randomIndex, 1);
    }

    return computer.join('');
  }

  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    while (!this.exitRequested) {
      try {
        const input = await this.getInput();
        if (input === '2') {
          console.log("게임을 종료합니다.");
          this.exitRequested = true;
        }

        if (!this.exitRequested) {
          if (this.isValidInput(input)) {
            const result = this.checkGuess(input);
            console.log(result);

            if (result === '3스트라이크') {
              console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
              this.exitRequested = true;
            }
          } else {
            console.log("[ERROR] 숫자가 잘못된 형식입니다.");
          }
        }
      } catch (error) {
        console.error(error);
        this.exitRequested = true;
      }
    }
  }

  getInput() {
    return new Promise((resolve, reject) => {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

      readline.question("숫자를 입력해주세요 : ", (answer) => {
        readline.close();
        resolve(answer);
      });
    });
  }

  isValidInput(input) {
    return /^\d{3}$/.test(input) && new Set(input).size === 3;
  }

  checkGuess(guess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (guess[i] === this.secretNumber[i]) {
        strikes++;
      } else if (this.secretNumber.includes(guess[i])) {
        balls++;
      }
    }

    if (strikes === 3) {
      return '3스트라이크';
    } else if (strikes > 0 || balls > 0) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else {
      return '낫싱';
    }
  }
}

new App();

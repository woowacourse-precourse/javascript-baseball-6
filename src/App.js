import readline from 'readline';

export default class App {
  constructor() {
    this.secretNumber = this.generateRandomNumber();
    this.attempts = 0;
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = this.getRandomNumber(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    let gameFinished = false;

    while (!gameFinished) {
      const input = await this.getInput();
      if (input === '2') {
        console.log("게임을 종료합니다.");
        gameFinished = true;
      } else if (this.isValidInput(input)) {
        const result = this.checkGuess(input);
        console.log(result);

        if (result === '3스트라이크') {
          console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          gameFinished = true;
        }
      } else if (!gameOver) {
        console.log("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
  }

  async getInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question("숫자를 입력해주세요 (게임 종료: 2) : ", (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }

  isValidInput(input) {
    if (input === '2') {
      return true; // 사용자가 게임 종료를 선택한 경우
    }
    if (/^\d{3}$/.test(input)) {
      const uniqueDigits = new Set(input.split(''));
      return uniqueDigits.size === 3;
    }
    return false;
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

const app = new App();
app.play();

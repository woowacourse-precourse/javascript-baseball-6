class Random {
    static PICK_NUMBER_IN_RANGE(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  
  class Console {
    static async READ_LINE_ASYNC() {
      return new Promise((resolve) => {
        const readline = require("readline");
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
  
        rl.question("숫자 야구 게임을 시작합니다. 숫자를 입력해주세요: ", (answer) => {
          resolve(answer);
          rl.close();
        });
      });
    }
  
    static PRINT(message) {
      console.log(message);
    }
  }
  
  class NumberBaseballGame {
    constructor() {
      this.COMPUTER_NUMBERS = this.GENERATE_COMPUTER_NUMBERS();
    }
  
    GENERATE_COMPUTER_NUMBERS() {
      const computer = [];
      while (computer.length < 3) {
        const number = Random.PICK_NUMBER_IN_RANGE(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return computer;
    }
  
    async PLAY() {
      Console.PRINT("숫자 야구 게임을 시작합니다. 숫자를 입력해주세요: ");
  
      while (true) {
        try {
          const input = await Console.READ_LINE_ASYNC();
          const playerInput = input.split(" ").map(Number);
  
          if (playerInput.length !== 3 || playerInput.some(isNaN)) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
          }
  
          const result = this.CHECK_GUESS(playerInput);
  
          Console.PRINT(`Result: ${result}`);
  
          if (result === "3 스트라이크") {
            Console.PRINT("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            break;
          }
        } catch (error) {
          Console.PRINT(error.message);
        }
      }
    }
  
    CHECK_GUESS(playerInput) {
      let strikes = 0;
      let balls = 0;
  
      for (let i = 0; i < 3; i++) {
        if (playerInput[i] === this.COMPUTER_NUMBERS[i]) {
          strikes++;
        } else if (this.COMPUTER_NUMBERS.includes(playerInput[i])) {
          balls++;
        }
      }
  
      return `${strikes} Strikes ${balls} Balls`;
    }
  }
  
  const app = new NumberBaseballGame();
  app.PLAY();
  
  

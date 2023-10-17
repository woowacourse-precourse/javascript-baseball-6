/*class App {
  async play() {}
}

export default App;
*/

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
  
        rl.question("Enter your guess: ", (answer) => {
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
      Console.PRINT("Number baseball game starts. Try to guess 3 different numbers between 1 and 9.");
  
      while (true) {
        try {
          const input = await Console.READ_LINE_ASYNC();
          const playerInput = input.split(" ").map(Number);
  
          if (playerInput.length !== 3 || playerInput.some(isNaN)) {
            throw new Error("[ERROR] Invalid number format.");
          }
  
          const result = this.CHECK_GUESS(playerInput);
  
          Console.PRINT(`Result: ${result}`);
  
          if (result === "3 Strikes") {
            Console.PRINT("Congratulations! You've guessed the numbers.");
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
  
  
  
import generateComputerNumbers from "./Computer.js";
import getUserInput from "./UserInput.js";

class App {
  constructor() {
    this.possibleNumbers = this.generateAllPossibleNumbers();
  }

  generateAllPossibleNumbers() {
    const numbers = [];
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        for (let k = 1; k <= 9; k++) {
          if (i !== j && j !== k && i !== k) {
            numbers.push(`${i}${j}${k}`);
          }
        }
      }
    }
    return numbers;
  }

  async play() {
    let count = 0;
    while (this.possibleNumbers.length > 0) {
      count++;
      const value = this.possibleNumbers.shift();
      console.log(`${count}번째 시도 : ${value}`);

      const userNumbers = value.split("").map((num) => parseInt(num, 10));
      const computerNumbers = generateComputerNumbers()
        .split("")
        .map((num) => parseInt(num, 10));

      let s = 0,
        b = 0;

      for (let i = 0; i < 3; i++) {
        if (userNumbers[i] === computerNumbers[i]) {
          s++;
        } else if (computerNumbers.includes(userNumbers[i])) {
          b++;
        }
      }

      if (s === 3) {
        console.log("3S");
        console.log(`${count}번만에 맞혔습니다. 게임을 종료합니다.`);
        break;
      } else if (s === 0 && b === 0) {
        console.log("낫싱");
      } else {
        console.log(`${b}B${s}S`);
      }
    }
  }
}

export default App;

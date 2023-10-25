import generateRandomNumbers from '../util/generateRandomNumbers.js';

class Computer {
  #number;

  constructor() {
    this.setNumber();
  }

  setNumber() {
    this.#number = generateRandomNumbers();
  }

  compareNumber(answer) {
    let strike = 0;
    let ball = 0;

    answer.split('').forEach((number, index) => {
      const currentNumber = this.#number[index];

      if (currentNumber === Number(number)) {
        strike += 1;
      }

      if (currentNumber !== Number(number) && this.#number.includes(Number(number))) {
        ball += 1;
      }
    });
    return { strike, ball };
  }
}
export default Computer;

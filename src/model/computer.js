import generateRandomNumber from '../util/generate-random-number';

class Computer {
  #number;

  constructor() {
    this.setNumber();
  }

  setNumber() {
    this.#number = generateRandomNumber();
  }

  compareNumber(answer) {
    let strike = 0;
    let ball = 0;

    answer.split('').forEach((number, index) => {
      const currentNumber = this.#number[index];

      if (currentNumber === Number(number)) {
        strike += 1;
      }

      if (currentNumber !== Number(number) && this.#number.includes(number)) {
        ball += 1;
      }
    });
    return { strike, ball };
  }
}
export default Computer;

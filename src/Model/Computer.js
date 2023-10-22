class Computer {
  constructor() {
    this.answer = '';
  }

  createAnswer(randomNumbersCreator) {
    this.answer = randomNumbersCreator.createRandomNumbers();
  }

  getAnswer() {
    return this.answer;
  }
}

export default Computer;

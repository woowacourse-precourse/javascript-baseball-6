import Player from './Player.js';

class Computer extends Player {
  createAnswer(randomNumbersCreator) {
    this.answer = randomNumbersCreator.createRandomNumbers();
  }
}

export default Computer;

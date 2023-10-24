class GameCalculator {
  constructor(userInput, randomNumber) {
    this.userInput = userInput.split('');
    this.randomNumber = randomNumber.split('');
    this.strike = 0;
    this.ball = 0;
  }

  calculate() {
    this.randomNumber.forEach((ranNum, randIndex) => {
      this.userInput.forEach((userNum, userIndex) => {
        if (ranNum === userNum) {
          if (randIndex === userIndex) {
            this.strike += 1;
          } else {
            this.ball += 1;
          }
        }
      });
    });
  }

  getStringResult() {
    this.calculate();

    if (this.strike === 0 && this.ball === 0) {
      return '낫싱';
    } else if (this.strike === 0) {
      return `${this.ball}볼`;
    } else if (this.ball === 0) {
      return `${this.strike}스트라이크`;
    } else {
      return `${this.ball}볼 ${this.strike}스트라이크`;
    }
  }

  validateAnswer() {
    return this.strike === 3;
  }
}

export default GameCalculator;

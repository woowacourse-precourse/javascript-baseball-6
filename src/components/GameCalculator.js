class GameCalculator {
  constructor(userInput, randomNumber) {
    this.userInputArr = userInput.split('');
    this.randomNumberArr = randomNumber.split('');
    this.strike = 0;
    this.ball = 0;
  }

  calculate() {
    this.randomNumberArr.forEach((number, index) => {
      if (number === this.userInputArr[index]) {
        this.strike += 1;
      } else if (this.userInputArr.includes(number)) {
        this.ball += 1;
      }
    });
  }

  getStringResult() {
    this.calculate();

    if (this.strike === 0 && this.ball === 0) {
      return '낫싱';
    } else if (this.strike === 0 && this.ball > 0) {
      return `${this.ball}볼`;
    } else if (this.ball === 0 && this.strike > 0) {
      return `${this.strike}스트라이크`;
    } else if(this.ball > 0 && this.strike > 0) {
      return `${this.ball}볼 ${this.strike}스트라이크`;
    }
  }

  validateAnswer() {
    return this.strike === 3;
  }
}

export default GameCalculator;

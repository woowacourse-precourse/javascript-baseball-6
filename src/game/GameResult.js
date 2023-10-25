class GameResult {
  constructor(computer, userInput) {
    this.answer = computer.getAnswer();
    this.userInput = userInput;
    this.strike = 0;
    this.ball = 0;
    this.calculateStrikesAndBalls();
  }

  calculateStrikesAndBalls() {
    for (let i = 0; i < this.answer.length; i++) {
      const userNumber = this.userInput.charAt(i) - "0";
      if (userNumber === this.answer[i]) {
        this.strike++;
      }
      if (this.answer.includes(userNumber) && userNumber !== this.answer[i]) {
        this.ball++;
      }
    }
  }

  isGameEnded() {
    return this.strike === this.answer.length;
  }

  getResultString() {
    let message = "";
    if (this.ball !== 0) {
      message += `${this.ball}볼 `;
    }
    if (this.strike !== 0) {
      message += `${this.strike}스트라이크`;
    }
    if (message === "") {
      message = "낫싱";
    }
    return message;
  }
}

export default GameResult;

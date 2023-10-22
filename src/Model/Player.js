class Player {
  #answer;

  constructor() {
    this.answer = '';
  }

  setAnswer(numbers) {
    this.answer = numbers;
  }

  getAnswer() {
    return this.answer;
  }
}

export default Player;

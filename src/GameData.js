class GameData {
  constructor() {
    this.state = true;
    this.threeStrike = false;
    this.ball = 0;
    this.strike = 0;
  }

  getState() {
    return this.state;
  }

  getRandomNumbers() {
    return this.randomNumbers;
  }
}

module.exports = GameData;
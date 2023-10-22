class GameData {
  constructor() {
    this.threeStrike = false;
    this.randomNumbers = [];
    this.ball = 0;
    this.strike = 0;
  }

  getRandomNumbers() {
    return this.randomNumbers;
  }
}

module.exports = GameData;
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

  getBall() {
    return this.ball;
  }

  getStrike() {
    return this.strike;
  }

  // ball 값 업데이트
  setBall(ball) {
    this.ball = ball;
  }
  // strike 값 업데이트
  setStrike(strike) {
    this.strike = strike;
  }
}

module.exports = GameData;
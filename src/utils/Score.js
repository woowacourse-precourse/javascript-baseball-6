class Score {
  constructor() {
    this.score = {
      strike: 0,
      ball: 0,
    };
  }

  async scoreReset() {
    this.score.strike = 0;
    this.score.ball = 0;
  }
}

export default new Score();
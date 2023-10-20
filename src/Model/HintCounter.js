class HintCounter {
  constructor() {
    this.strikeCnt = 0;
    this.ballCnt = 0;
  }

  countHint(userAnswer, computerAnswer) {
    userAnswer.split('').forEach((num, i) => {
      if (num === computerAnswer.charAt(i)) {
        this.addStrikeCnt();
      }
      if (computerAnswer.includes(num) && computerAnswer.charAt(i) !== num) {
        this.addBallCnt();
      }
    });
  }

  addStrikeCnt() {
    this.strikeCnt += 1;
  }

  addBallCnt() {
    this.ballCnt += 1;
  }
}

export default HintCounter;

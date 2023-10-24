class Judge {
  ballCount = 0;
  strikeCount = 0;

  counter(computerNumbers, userNumbers) {
    computerNumbers.map((number, index) => {
      if (number === userNumbers[index]) {
        this.strikeCount += 1;
      } else {
        if (userNumbers.includes(number)) {
          this.ballCount += 1;
        }
      }
    });
    return [this.ballCount, this.strikeCount];
  }

  result(ball, strike) {
    if (ball === 0 && strike === 0) return '낫싱';
    if (ball > 0 && strike === 0) return `${ball}볼`;
    if (strike > 0 && ball === 0) return `${strike}스트라이크`;
    if (ball > 0 && strike > 0) return `${ball}볼 ${strike}스트라이크`;
  }
}

export default Judge;

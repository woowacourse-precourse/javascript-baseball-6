const NumberChecker = {
  countBall(number, computerNumber) {
    return number.filter(
      (eachNumber, index) =>
        computerNumber.includes(eachNumber) && computerNumber[index] !== eachNumber,
    ).length;
  },
  countStrike(number, computerNumber) {
    return number.filter((eachNumber, index) => eachNumber === computerNumber[index]).length;
  },

  getResult(number, computerNumber) {
    const ball = this.countBall(number, computerNumber);
    const strike = this.countStrike(number, computerNumber);
    return {ball, strike};
  },
};

export default NumberChecker;

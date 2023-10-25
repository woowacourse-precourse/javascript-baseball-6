class Is {
  static gameOverBy({ strike }) {
    if (strike == 3) return true;
    else return false;
  }

  static tryAgainBy(inputString) {
    if (inputString === '1') return true;
    if (inputString === '2') return false;
  }
}

export default Is;
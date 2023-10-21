export default class StrikeAndBallCalculator {
  static calculate(userNumbers, computerNumbers) {
    let strike = 0;
    let ball = 0;

    const computerNumberSet = new Set(computerNumbers);

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === computerNumbers[i]) {
        strike++;
      } else if (computerNumberSet.has(userNumbers[i])) {
        ball++;
      }
    }

    return { strike, ball };
  }
}

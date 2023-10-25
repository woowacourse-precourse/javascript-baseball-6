class Checker {
  static getResult(ball, strike) {
    let result = '';

    if (strike > 0) {
      result += `${strike}스트라이크`;
    }

    if (ball > 0) {
      if (result) result += ' ';
      result += `${ball}볼`;
    }

    if (!result) {
      result = '낫싱';
    }

    return result;
  }

  static checkInput(input, answer) {
    let ball = 0;
    let strike = 0;

    input.forEach((value, index) => {
      const answerIndex = answer.indexOf(value);
      if (answerIndex !== -1) {
        if (index === answerIndex) {
          strike++;
        } else {
          ball++;
        }
      }
    });

    return this.getResult(ball, strike);
  }
}

export default Checker;

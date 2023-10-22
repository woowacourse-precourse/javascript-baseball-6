class Calculator {
  static calculateResult(selection, answer) {
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < selection.length; i++) {
      if (answer.includes(selection[i])) {
        answer.indexOf(selection[i]) === i ? strikes++ : balls++;
      }
    }

    return { balls: balls, strikes: strikes };
  }
}

export default Calculator;

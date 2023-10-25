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

  static generateCalculatedResultMassage(balls, strikes) {
    let resultMessage = "";
    if (balls > 0) resultMessage += `${balls}볼 `;
    if (strikes > 0) resultMessage += `${strikes}스트라이크`;
    if (balls === 0 && strikes === 0) resultMessage = "낫싱";
    return resultMessage.trim();
  }
}

export default Calculator;

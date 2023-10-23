const GameAnalyzer = {

  getBullsAndCows (computerNumber, userNumber) {
    const computerString = String(computerNumber), userString = String(userNumber);

    return this.calcBallAndStrik(computerString, userString);
  },

  calcBallAndStrik (computerString, userString) {
    let ball = 0, strike = 0;

    [...computerString].forEach((char, index) => {
      if (userString[index] === char) strike++;
      else if (userString.includes(char)) ball++;
    });
    
    return { ball, strike };
  }
}

export default GameAnalyzer;
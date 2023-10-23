const GameAnalyzer = {

  getBullsAndCows (computerNumber, userNumber) {

    return this.calcBallAndStrik(String(computerNumber), String(userNumber));
  },

  calcBallAndStrik (computerString, userString) {
    let ball = 0; 
    let strike = 0;

    [...computerString].forEach((char, index) => {
      if (userString[index] === char) strike += 1;
      else if (userString.includes(char)) ball += 1;
    });
    
    return { ball, strike };
  }
}

export default GameAnalyzer;
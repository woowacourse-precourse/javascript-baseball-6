const GameAnalyzer = {
  getBallAndStrike(computerNumber, userNumber) {
    return this.calcBallAndStrike(String(computerNumber), String(userNumber));
  },

  calcBallAndStrike(computerString, userString) {
    let ball = 0; 
    let strike = 0;

    [...computerString].forEach((char, index) => {
      if (userString[index] === char) strike += 1;
      else if (userString.includes(char)) ball += 1;
    });
    
    return { ball, strike };
  },
}

export default GameAnalyzer;
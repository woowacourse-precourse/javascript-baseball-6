const GameAnalyzer = {

  getBullsAndCows (computerNumber, userNumber) {
    const computerString = String(computerNumber);
    const userString = String(userNumber);
    return this.calcBallAndStrik(computerString, userString);
  },

  calcBallAndStrik (computerString, userString) {
    let ball = 0;
    let strike = 0;
    for (let index = 0; index < computerString.length; index++) {
      const strikeCondition = computerString[index] === userString[index];
      if (strikeCondition) strike++;
      if (!strikeCondition && userString.includes(computerString[index])) ball++;
    };
    return { ball, strike };
  },

};

export default GameAnalyzer;
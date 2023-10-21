import { NO_BALL, NO_STRIKE, FIRST_DIGIT } from "../constants/Constants.js";

const GameAnalyzer = {

  getBullsAndCows (computerNumber, userNumber) {
    const computerString = String(computerNumber);
    const userString = String(userNumber);
    return this.calcBallAndStrik(computerString, userString);
  },

  calcBallAndStrik (computerString, userString) {
    let ball = NO_BALL;
    let strike = NO_STRIKE;
    for (let index = FIRST_DIGIT; index < computerString.length; index++) {
      const strikeCondition = computerString[index] === userString[index];
      if (strikeCondition) strike++;
      if (!strikeCondition && userString.includes(computerString[index])) ball++;
    };
    return { ball, strike };
  },

};

export default GameAnalyzer;
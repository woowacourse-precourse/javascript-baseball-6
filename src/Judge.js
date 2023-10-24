import { GAME_SETTING } from './constants/Setting.js';

class Judge {
  ballCount = 0;
  strikeCount = 0;

  counter(computerNumbers, userNumbers) {
    computerNumbers.map((number, index) => {
      if (number === userNumbers[index]) {
        this.strikeCount += 1;
      } else {
        if (userNumbers.includes(number)) {
          this.ballCount += 1;
        }
      }
    });
    return [this.ballCount, this.strikeCount];
  }

  result(ball, strike) {
    if (ball === 0 && strike === 0) return GAME_SETTING.NOTHING;
    if (ball > 0 && strike === 0) return `${ball}${GAME_SETTING.BALL}`;
    if (strike > 0 && ball === 0) return `${strike}${GAME_SETTING.STRIKE}`;
    if (ball > 0 && strike > 0)
      return `${ball}${GAME_SETTING.BALL} ${strike}${GAME_SETTING.STRIKE}`;
  }
}

export default Judge;

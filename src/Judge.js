import { GAME_SETTING } from './constants/Setting.js';

class Judge {
  counter(computerNumbers, userNumbers) {
    let ballCount = 0;
    let strikeCount = 0;
    computerNumbers.map((number, index) => {
      if (number === userNumbers[index]) {
        strikeCount += 1;
      } else {
        if (userNumbers.includes(number)) {
          ballCount += 1;
        }
      }
    });
    return [ballCount, strikeCount];
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

import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER_LENGTH } from '../Constants.js';
class Game {
  constructor() {
    this.computerNumber = [];
  }

  //상대방 숫자 랜덤 생성
  generateRandomNumber() {
    while (this.computerNumber.length < NUMBER_LENGTH) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(NUMBER)) {
        this.computerNumber.push(NUMBER);
      }
    }
  }

  //유저의 숫자와 컴퓨터의 숫자 비교
  compareNumbers(guessNumber) {
    let strikeNumbers = 0;
    let ballNumbers = 0;
    this.computerNumber;
    for (let i = 0; i < NUMBER_LENGTH; i++) {
      if (Number(guessNumber[i]) === this.computerNumber[i]) {
        strikeNumbers += 1;
      } else if (this.computerNumber.includes(Number(guessNumber[i]))) {
        ballNumbers += 1;
      }
    }
    return { strikeNumbers, ballNumbers };
  }
}

export default Game;

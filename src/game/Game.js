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
  //스트라이크인지 확인
  isStrike(guessNumber, i) {
    if (Number(guessNumber[i]) === this.computerNumber[i]) {
      return 1;
    }
    return 0;
  }
  //볼인지 확인
  isBall(guessNumber, i) {
    if (
      this.computerNumber.includes(Number(guessNumber[i])) &&
      this.computerNumber[i] !== Number(guessNumber[i])
    ) {
      return 1;
    }
    return 0;
  }
  //유저의 숫자와 컴퓨터의 숫자 비교
  compareNumbers(guessNumber) {
    let strikeNumbers = 0;
    let ballNumbers = 0;
    for (let i = 0; i < NUMBER_LENGTH; i++) {
      strikeNumbers += this.isStrike(guessNumber, i);
      ballNumbers += this.isBall(guessNumber, i);
    }
    return { strikeNumbers, ballNumbers };
  }
}

export default Game;

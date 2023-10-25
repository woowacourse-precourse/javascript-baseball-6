import { MissionUtils } from '@woowacourse/mission-utils';

export default class Computer {
  static REPLAY_CODE = '1';
  static QUIT_CODE = '2';
  static NUM_SIZE = 3;
  static MODE_SIZE = 1;

  constructor() {
    this.numbers = [];
  }
  pickRandomNumbers() {
    this.clearNumbers();
    while (this.numbers.length < Computer.NUM_SIZE) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.numbers.includes(number)) {
        this.numbers.push(number);
      }
    }
  }
  async playGame(user) {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while (true) {
      this.pickRandomNumbers();
      while (true) {
        const input = await user.getUserNumber();
        const result = this.getMessage(input);
        MissionUtils.Console.print(result.result);
        if (result.success) {
          MissionUtils.Console.print(
            '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
          );
          break;
        }
      }
      const input = await user.getUserReplay();
      if (input === Computer.QUIT_CODE) break;
    }
  }
  getMessage(expectedNumbers) {
    const ballStrike = this.calculateBallStrike(expectedNumbers);
    const result = this.getResultString(ballStrike);
    return {
      result,
      success: ballStrike.strike === Computer.NUM_SIZE,
    };
  }
  calculateBallStrike(expectedNumbers) {
    return expectedNumbers
      .split('')
      .map(Number)
      .reduce(
        (res, cur, idx) => {
          const newRes = { ...res };
          if (this.numbers[idx] === cur) newRes.strike += 1;
          else if (this.numbers.includes(cur)) newRes.ball += 1;
          return newRes;
        },
        { ball: 0, strike: 0 }
      );
  }
  getResultString({ ball, strike }) {
    if (ball === 0 && strike === 0) return '낫싱';
    else if (ball === 0) return `${strike}스트라이크`;
    else if (strike === 0) return `${ball}볼`;
    else return `${ball}볼 ${strike}스트라이크`;
  }

  clearNumbers() {
    this.numbers = [];
  }
}

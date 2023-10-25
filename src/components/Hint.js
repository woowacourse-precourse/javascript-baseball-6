import { Console } from '@woowacourse/mission-utils';
import { BALL_COUNT } from '../constants/constants.js';

class Hint {
  /** @param {{computer: number[], user: number[]}} */
  constructor({ computer, user }) {
    this.player = {
      computer,
      user,
    };
  }

  /**
   * 게임 클리어 여부 체크 함수 (3스트라이크인 경우)
   * @returns {boolean} 게임 클리어 여부 리턴
   */
  checkBaseballWin() {
    /** @type {{ball:number, strike:number}} */
    const { ball, strike } = this.countHint();

    this.printHint(ball, strike);

    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return true;
    }
    return false;
  }

  /**
   * 컴퓨터와 유저의 숫자 비교해서 힌트 값 리턴 함수
   * @returns {ball:number, strike:number} 힌트 카운트 값 리턴
   */
  countHint() {
    const { computer, user } = this.player;
    let ball = BALL_COUNT.RESET;
    let strike = BALL_COUNT.RESET;

    user?.forEach((num, idx) => {
      const exist = computer.indexOf(num);

      if (exist === idx) strike++;
      else if (exist !== idx && exist !== -1) ball++;
    });

    return { ball, strike };
  }

  /**
   * 힌트 카운트 출력 함수
   * @param {number} ball
   * @param {number} strike
   */
  printHint(ball, strike) {
    if (ball === 0 && strike === 0) Console.print(BALL_COUNT.NOTHING);
    else if (ball !== 0 && strike === 0) Console.print(`${ball}${BALL_COUNT.BALL}`);
    else if (ball === 0 && strike !== 0) Console.print(`${strike}${BALL_COUNT.STRIKE}`);
    else if (ball !== 0 && strike !== 0) Console.print(`${ball}${BALL_COUNT.BALL} ${strike}${BALL_COUNT.STRIKE}`);
  }
}

export default Hint;

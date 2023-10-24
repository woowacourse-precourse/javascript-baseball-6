import { MissionUtils } from '@woowacourse/mission-utils';
import { DEFAULT, SCORE, LOG, ERROR } from './util/constants.js';


class BaseballGame {

  constructor() {
    this.answer = [];
  }


  /* 초기화 후, 1~9 사이의 서로 다른 3개의 숫자를 랜덤으로 선택 */
  init() {
    const computer = new Set();
    while (computer.size < DEFAULT.MAX_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(DEFAULT.RANDOM_RANGE_MIN, DEFAULT.RANDOM_RANGE_MAX);
      computer.add(number);
    }
    this.answer = [...computer];
  }


  /* 사용자로부터 숫자를 입력 받고 유효성 검사 시행 */
  async getPlayerInput() {
    const numRegExp = /[1-9]{3}/;
    const input = (await MissionUtils.Console.readLineAsync(LOG.INPUT)).trim();
    const set = new Set(input.split(""));

    if (isNaN(Number(input))) throw new Error(ERROR.NOT_NUMBER);
    if (set.size !== DEFAULT.MAX_LENGTH) throw new Error(ERROR.NOT_UNIQUE);
    if (!numRegExp.test(input)) throw new Error(ERROR.NOT_FORMAL);

    return input.split("").map(el => Number(el));
  }


  /* 선택된 숫자(answer)와 입력값(player)을 비교하여 볼, 스트라이크의 개수 카운트 */
  findStrikes(player) {
    const answer = this.answer;
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < DEFAULT.MAX_LENGTH; i++) {
      if (answer[i] === player[i]) {
        strike++;
      } else if (answer.includes(player[i])) {
        ball++;
      }
    }

    return { ball, strike };
  }


  /* 볼, 스트라이크의 개수 출력 */
  printScore(ball, strike) {
    let message = "";

    if (ball > 0 && strike > 0) {
      message = `${ball}${SCORE.BALL} ${strike}${SCORE.STRIKE}`;
    } else if (ball > 0) {
      message = `${ball}${SCORE.BALL}`;
    } else if (strike > 0) {
      message = `${strike}${SCORE.STRIKE}`;
    } else if (ball === 0 && strike === 0) {
      message = SCORE.NOTHING;
    }

    MissionUtils.Console.print(message);
  }


  /* 게임 진행 */
  async start(isPlaying) {
    let player = [];

    while (isPlaying) {
      player = await this.getPlayerInput();
      const { ball, strike } = this.findStrikes(player);
      this.printScore(ball, strike);

      if (strike === DEFAULT.MAX_LENGTH) { //3스트라이크일 경우
        MissionUtils.Console.print(LOG.CORRECT);
        break;
      }
    }
  }

  /* 게임 재시작(1) 또는 종료(2) 선택 */
  async selectAction() {
    const input = await MissionUtils.Console.readLineAsync(LOG.ACTION);
    const action = Number(input.trim());

    switch (action) {
      case DEFAULT.RESTART:
        return true;
      case DEFAULT.END:
        return false;
      default:
        throw new Error(ERROR.WRONG_ACTION);
    }
  }

}

export default BaseballGame;
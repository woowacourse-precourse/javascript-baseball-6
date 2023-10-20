import { MissionUtils } from '@woowacourse/mission-utils';

const { Random } = MissionUtils;

class Opponent {
  /**
   * private 필드 정의 제안
   * @type {[number, number, number]}
   */
  static randomNumberSet;

  constructor() {
    this.#createRandomNumber();
  }

  // O-1 1부터 9까지의 각기 다른 수로 이루어진 3개의 숫자를 요소로 갖는 배열 반환
  #createRandomNumber() {
    this.randomNumberSet = Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  checkBallCount = (arr) => {
    MissionUtils.Console.print(arr);
  };
}

export default Opponent;

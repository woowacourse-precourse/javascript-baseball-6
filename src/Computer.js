import { Console, Random } from '@woowacourse/mission-utils';

export default class Computer {
  #randomThreeNummber;
  constructor() {

  }

  setRandomThreeNummber() {
    // 랜덤 3개 수 생성
    this.#randomThreeNummber = [];
    while (this.#randomThreeNummber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#randomThreeNummber.includes(number)) {
        this.#randomThreeNummber.push(number);
      }
    }
  }
  getRandomThreeNummber() {
    // 랜덤 생성 수 배열 반환
    return this.#randomThreeNummber;
  }
}

import { Console, Random } from '@woowacourse/mission-utils';

export default class Computer {
  #randomThreeNummber;

  // 랜덤 3개 수 생성 함수
  setRandomThreeNummber() {
    this.#randomThreeNummber = [];
    while (this.#randomThreeNummber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#randomThreeNummber.includes(number)) {
        this.#randomThreeNummber.push(number);
      }
    }
  }

  // 랜덤 생성 수 배열 반환 함수
  getRandomThreeNummber() {
    return this.#randomThreeNummber;
  }
}

import { Random } from '@woowacourse/mission-utils';

export default class BaseBall {
  constructor() {}

  createPassword() {
    const passwordArray = [];
    while (passwordArray.length !== 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (passwordArray.includes(randomNumber)) continue;
      passwordArray.push(randomNumber);
    }

    return Number(passwordArray.join(''));
  }
}

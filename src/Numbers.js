import { Random } from '@woowacourse/mission-utils'

class Numbers {
  //todo: refactor variable name
  nums;

  constructor(nums) {
    this.nums = nums;
    Object.freeze(this.nums);
  }

  static create() {
    const numbers = Random.pickUniqueNumbersInRange(1, 9, 3);
    return new Numbers(numbers);
  }
}

export default Numbers;

import { Random } from '@woowacourse/mission-utils'
import Messages from './Messages.js'

//todo: refactor variable names (nums, numbers, ...)
class Numbers {
  nums;

  constructor(nums) {
    this.nums = nums;
    Object.freeze(this.nums);
  }

  static create() {
    const numbers = Random.pickUniqueNumbersInRange(1, 9, 3);
    return new Numbers(numbers);
  }

  // todo: check if there are more cases to throw error
  static checkNumbers(input) {
    if (input.length !== 3) throw new Error(Messages.ERROR_INPUT);

    const numbers = input.split('').map(Number);

    if (numbers.some((numbers) => isNaN(numbers))) throw new Error(Messages.ERROR_INPUT);

    return (new Numbers(numbers));
  }
}

export default Numbers;

import App from './App';
import { Random } from '@woowacourse/mission-utils';
class Computer {
  constructor() {
    this.computerNumber = this.createRandomNumber();
  }
  createRandomNumber() {
    const number = [];
    while (number.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!number.includes(num)) {
        number.push(num);
      }
    }
    return number;
  }
}
export default Computer;

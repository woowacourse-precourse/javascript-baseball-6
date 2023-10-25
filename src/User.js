import { Console } from '@woowacourse/mission-utils';

class User {
  constructor() {
    this.name = 'user';
  }

  async inputNumberList(str) {
    this.numberList = [];
    const input = await Console.readLineAsync(str);
    this.numberList = [...input];
    this.length = this.numberList.length;
  }

  returnUserInputNumber() {
    return (this.numberList);
  }
}

export default User;

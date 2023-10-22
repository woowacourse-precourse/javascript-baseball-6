import { Console, Random } from "@woowacourse/mission-utils";

class Computer {
  static computerNum = [];

  static createRandomNum(numberLength) {
    this.computerNum = [];
    while (this.computerNum.length < numberLength) {
      const randomNum = Random.pickNumberInRange(1, 9); // 랜덤 숫자를 돌린다.
      const isInclude = this.computerNum.includes(randomNum); // 중복 숫자가 있으면 true, 없으면 false 를 반환한다.

      if (!isInclude) {
        this.computerNum.push(randomNum);
      }
    }
  }
}
export default Computer;

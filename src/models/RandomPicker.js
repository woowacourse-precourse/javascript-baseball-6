import { Random } from "@woowacourse/mission-utils";

class RandomPicker {

  constructor () {
    this.computerNumber = null;
  }

  getComputerNumber() {
    if (this.computerNumber === null) { 
      this.computerNumber = this.pickRandomNumbers();
    }
    return this.computerNumber;
  }

  pickRandomNumbers() {
    // 세자리의 중복되지 않는 랜덤한 숫자 생성하기
  }
}

export default RandomPicker;
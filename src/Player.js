import { Console } from "@woowacourse/mission-utils";

class Player {
  async inputValue() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.checkValue(input);
    return input;
  }
  checkValue = (input) => {
    if (input.length !== 3) {
      throw new Error("입력값은 3자리여야 합니다.");
    }

    const inputArray = input.split("").map(Number);
    if (!this.isUnique(inputArray)) {
      throw new Error("입력값에 중복된 숫자가 있습니다.");
    }

    if (!this.isWithinRange(inputArray)) {
      throw new Error("입력값은 1에서 9 사이의 숫자여야 합니다.");
    }
  };
  // 중복값 확인하는 함수
  isUnique = (arr) => {
    return arr.length === new Set(arr).size;
  };
  // 1 ~ 9 사이의 수로 이루어졌는지 확인하는 함수
  isWithinRange = (arr) => {
    return arr.every((number) => number >= 1 && number <= 9);
  };
}

export default Player;

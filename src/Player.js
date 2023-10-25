import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";

class Player {
  static MESSAGE_INPUT = "숫자를 입력해주세요 : ";
  static LENGTH_INPUT = 3;
  static MAX_NUM = 9;
  static MIN_NUM = 1;
  static RESTART_COMMAND = "1";
  static END_COMMAND = "2";
  static LENGTH_ERROR = "[ERROR]입력값은 3자리여야 합니다.";
  static DUPLICATION_ERROR = "[ERROR]입력값에 중복된 숫자가 있습니다.";
  static RANGE_ERROR = "[ERROR]입력값은 1에서 9 사이의 숫자여야 합니다.";

  // 게임 시작, 입력 값 받기, 재시작 or 종료 함수
  async inputValue() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computer = new Computer();
    var result = true;
    while (result) {
      const input = await Console.readLineAsync(Player.MESSAGE_INPUT);
      this.checkValue(input);
      result = this.computer.compareAnswer(input);
    }
    const select = await this.computer.correctAnswer();
    if (select === Player.RESTART_COMMAND) {
      this.inputValue();
    }
    if (select === Player.END_COMMAND) {
      return;
    }
  }
  // Player의 입력값 검증하는 함수
  checkValue = (input) => {
    if (input.length !== Player.LENGTH_INPUT) {
      throw new Error(Player.LENGTH_ERROR);
    }
    const inputArray = input.split("").map(Number);
    if (!this.isUnique(inputArray)) {
      throw new Error(Player.DUPLICATION_ERROR);
    }

    if (!this.isWithinRange(inputArray)) {
      throw new Error(Player.RANGE_ERROR);
    }
  };
  // 중복값 확인하는 함수
  isUnique = (arr) => {
    return arr.length === new Set(arr).size;
  };
  // 1 ~ 9 사이의 수로 이루어졌는지 확인하는 함수
  isWithinRange = (arr) => {
    return arr.every(
      (number) => number >= Player.MIN_NUM && number <= Player.MAX_NUM,
    );
  };
}

export default Player;

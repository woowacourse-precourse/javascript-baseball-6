import { Console } from "@woowacourse/mission-utils";

// 유저의 행동을 관리하는 클래스
class User {
  /**
   * 컴퓨터에서 생성된 랜덤한 숫자를 맞추기
   * @returns {string} 유저의 입력값
   */
  async guess() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");

    // 입력값이 문자가 입력될때 예외처리
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    // 입력값의 자릿수가 3보다 클때 예외처리
    if (input.length !== 3) {
      throw new Error("[ERROR] 숫자의 길이가 올바르지 않습니다.");
    }

    // 입력값에 중복된 숫자가 들어갈때 예외처리
    const numbers = input.split("");
    const set = new Set(numbers);
    if (set.size !== 3) {
      throw new Error("[ERROR] 중복되는 숫자가 있습니다.");
    }

    return input;
  }

  /**
   * 재시작(1) 또는 종료(2)를 입력 받기
   * @returns {string} 입력 값
   */
  selectOption() {
    const option = Console.readLineAsync(""); 
    return option
  }
}

export default User;
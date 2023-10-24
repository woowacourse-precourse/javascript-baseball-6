import { Random, Console } from "@woowacourse/mission-utils";

class BaseballInput {
  startString() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  makeComputerNum() {
    // 컴퓨터가 생각하고 있는 랜덤값
    const computer = Random.pickUniqueNumbersInRange(1, 9, 3);
    return Number(computer.join(""));
  }

  makeUserInput(random) {
    // 임의의 3개의 수 입력 하기
    Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
      const isValidNum = this.checkValidNum(userNum);
      console.log(isValidNum);
    });
  }

  checkValidNum(userNum) {
    // 유효성 확인
    if (isNaN(userNum)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    else if (userNum.length !== 3)
      throw new Error("[ERROR] 입력한 수의 개수가 잘못된 형식입니다.");

    return true;
  }
}

export default BaseballInput;

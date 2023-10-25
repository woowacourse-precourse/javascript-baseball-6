import { Random, Console } from "@woowacourse/mission-utils";

class BaseballInput {
  startPrint() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  makeComputerNum() {
    // 컴퓨터가 생각하고 있는 랜덤값
    let computer = [];
    while (computer.length < 3) {
      let number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async makeUserInput() {
    // 임의의 3개의 수 입력 하기
    const userinputNum = await Console.readLineAsync("숫자를 입력해주세요 : ");
    this.checkValidNum(userinputNum);
    const userNum = Array.from(String(userinputNum), Number);
    return userNum;
  }

  checkValidNum(userNum) {
    // 유효성 확인
    if (isNaN(userNum)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    else if (userNum.length !== 3 || new Set(userNum).size !== 3) {
      throw new Error("[ERROR] 3개의 숫자를 입력해주세요.");
    }
  }

  guessRandomNum(random, userNum) {
    let BALL = 0;
    let STRIKE = 0;

    for (let i = 0; i < 3; i++) {
      if (userNum[i] === random[i]) STRIKE++;
      else if (random.includes(userNum[i])) BALL++;
    }
    return { BALL, STRIKE };
  }

  printAnswer(BALL, STRIKE) {
    if (STRIKE && BALL) {
      Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    } else if (STRIKE && !BALL) {
      Console.print(`${STRIKE}스트라이크`);
    } else if (!STRIKE && BALL) {
      Console.print(`${BALL}볼`);
    } else {
      Console.print("낫싱");
    }
  }

  async printEnd() {
    const INPUT = await Console.readLineAsync(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
    );

    if (INPUT === "1") return true;
    else if (INPUT === "2") return false;
    else throw new Error("[ERROR] 1 또는 2만 입력 가능합니다.");
  }
}

export default BaseballInput;

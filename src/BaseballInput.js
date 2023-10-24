import { Random, Console } from "@woowacourse/mission-utils";

class BaseballInput {
  startPrint() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  makeComputerNum() {
    // 컴퓨터가 생각하고 있는 랜덤값
    const computer = Random.pickUniqueNumbersInRange(1, 9, 3);
    return computer.join("");
  }

  makeUserInput(random) {
    // 임의의 3개의 수 입력 하기
    Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
      const isValidNum = this.checkValidNum(userNum);
      if (isValidNum) {
        const { ball, strike } = this.guessRandomNum(random, userNum);
        this.printAnswer(ball, strike);

        if (strike !== 3) return this.makeUserInput(random);
        this.printEnd();
      }
    });
  }

  checkValidNum(userNum) {
    // 유효성 확인
    if (isNaN(userNum)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    else if (userNum.length !== 3)
      throw new Error("[ERROR] 입력한 수의 개수가 잘못된 형식입니다.");

    return true;
  }

  guessRandomNum(random, userNum) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (userNum[i] === random[i]) strike++;
      else if (random.includes(userNum[i])) ball++;
    }

    return { ball, strike };
  }

  printAnswer(ball, strike) {
    if (ball === 0 && strike === 0) Console.print("낫싱");
    else {
      if (ball === 0) Console.print(`${strike}스트라이크`);
      else Console.print(`${ball}볼`);
    }
  }

  printEnd() {
    Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (Number(input) === 1) this.makeUserInput(this.makeComputerNum);
        else if (Number(input) === 2) Console.close();
        else throw new Error("[ERROR] 1 또는 2만 입력 가능합니다.");
      }
    );
  }
}

export default BaseballInput;

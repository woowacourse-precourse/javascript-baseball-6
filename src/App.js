import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumber = this.makeComputerNumber();
  }

  makeComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }

    return computerNumber;
  }

  checkStrikeAndBall(computerNumber, userNumber) {
    let strike = 0;
    let ball = 0;
    // 스트라이크, 볼, 낫싱 판단
    for (let i = 0; i < computerNumber.length; i++) {
      if (computerNumber[i] === userNumber[i]) strike += 1;
      else if (computerNumber.includes(userNumber[i])) ball += 1;
    }
    return [strike, ball];
  }

  checkValidateInput(input) {
    // 잘못된 입력 시 에러 던지기
    for (let i = 0; i < input.length; i++) {
      if (Number.isNaN(input[i])) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
    if (input.length !== 3) {
      throw new Error("[ERROR] 숫자가 3자리가 아닙니다.");
    }
  }

  async play() {
    // 맞출 때까지 반복
    while (true) {
      // 숫자 입력
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const userInputNumber = input.split("").map((num) => parseInt(num));

      this.checkValidateInput(userInputNumber);

      const [strike, ball] = this.checkStrikeAndBall(
        this.computerNumber,
        userInputNumber
      );

      if (strike === 3) {
        Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const choice = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
        );

        if (choice !== "1") {
          return "게임 종료";
        }

        this.computerNumber = this.makeComputerNumber();
      }

      if (ball && !strike) Console.print(`${ball}볼`);
      if (!ball && strike) Console.print(`${strike}스트라이크`);
      if (ball && strike) Console.print(`${ball}볼 ${strike}스트라이크`);
      if (!ball && !strike) Console.print("낫싱");
    }
  }
}

export default App;

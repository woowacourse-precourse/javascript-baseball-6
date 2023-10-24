import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let randomNum = this.makeRandomNumber();

    while (true) {
      Console.print("숫자를 입력해주세요 : ");
      const input = await Console.readLineAsync();

      this.isCorrect(input);

      const [strike, ball] = this.calc(randomNum, input);

      if (strike === 3) {
        Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        const restart = await Console.readLineAsync();

        if (restart === "1") {
          randomNum = this.makeRandomNumber();
          continue;
        } else if (restart === "2") {
          break;
        }
      } else if (strike === 0 && ball === 0) {
        Console.print("낫싱");
      } else {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    }
  }

  makeRandomNumber() {
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const random = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(random)) {
        randomNumber.push(random);
      }
    }

    return Number(randomNumber.join(""));
  }

  calc(randomNum, input) {
    let randomNumArr = randomNum.toString().split("");
    let inputArr = input.toString().split("");

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      const idx = inputArr.findIndex((v) => v === randomNumArr[i]);
      if (idx === i) {
        strike++;
      } else if (idx > -1 && idx !== i) {
        ball++;
      }
    }

    return [strike, ball];
  }

  isCorrect(inputNum) {
    const inputNumArr = inputNum.toString().split("").map(Number);

    if (inputNumArr.length !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    for (let i = 0; i < 3; i++) {
      if (isNaN(inputNumArr[i])) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      if (inputNumArr[i] < 1 || inputNumArr[i] > 9) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      if (inputNumArr.indexOf(inputNumArr[i]) !== i) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    return true;
  }
}

export default App;

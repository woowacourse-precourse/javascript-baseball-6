import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("\n숫자 야구 게임을 시작합니다.");
    const numberLength = 3;

    while (true) {
      try {
        const computerNum = this.generateComputerNumber(numberLength);
        // console.log("Computer: ", computerNum);

        const userNum = await this.getUserNumber(numberLength); // 사용자 숫자
        // console.log("User: ", userNum);

        const { strikes, balls } = this.compareNumbers(numberLength, computerNum, userNum); // 두 숫자 비교해서 strike와 ball 개수 세기

        if (await this.checkResult(numberLength, strikes, balls)) {
          // console.log("진짜 종료?");
          break;
        }
      } catch (error) {
        Console.print("에러 발생: " + error.message);
        Console.print("예외 처리로 인해 프로그램이 종료되었습니다.");
        break;
      }
    }
  }

  generateComputerNumber(numberLength) {
    const startInclusive = 1;
    const endInclusive = 9;
    const computerNumbers = [];

    while (computerNumbers.length < numberLength) {
      const number = Random.pickNumberInRange(startInclusive, endInclusive);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }

    if (computerNumbers.length === 3) {
      const computerNum = computerNumbers.join("");
      return computerNum;
    }
  }

  async getUserNumber(numberLength) {
    let isValidInput = false;
    let userNum;

    while (!isValidInput) {
      const userInput = await Console.readLineAsync("3자리 숫자를 입력하세요 (1~9): ");
      userNum = userInput.trim();
      const userNumbers = userNum.split("");
      const userNumbersSet = new Set(userNumbers);

      if (userNum.length !== numberLength || !/^[1-9]{3}$/.test(userNum) || numberLength !== userNumbersSet.size) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      } else {
        isValidInput = true;
      }

      return userNum;
    }
  }

  compareNumbers(numberLength, computerNum, userNum) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < numberLength; i++) {
      const computerDigit = computerNum[i];
      const userDigit = userNum[i];

      if (computerDigit === userDigit) {
        strikes++;
      } else if (computerNum.includes(userDigit)) {
        balls++;
      }
    }

    return { strikes, balls };
  }

  async checkResult(numberLength, strikes, balls) {
    if (strikes === numberLength) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료합니다.");
      const option = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

      if (option === "2") {
        Console.print("게임이 종료되었습니다.");
        return true;
      } else {
        Console.print("\n숫자 야구 게임을 시작합니다.");
        return false;
      }
    } else if (strikes > 0 || balls > 0) {
      Console.print(`${strikes}스트라이크 ${balls}볼`);
    } else {
      Console.print("낫싱");
    }

    return false;
  }
}

export default App;

const app = new App();
app.play();

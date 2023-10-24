import { Console, Random } from "@woowacourse/mission-utils";

const BALL = "볼";
const STRIKE = "스트라이크";
const NOTHING = "낫싱";
const DIGIT_COUNT = 3;

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    try {
      while (true) {
        const computerNumbers = this.getComputerNumbers();
        await this.startBaseballGame(computerNumbers);

        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        const restartInput = await Console.readLineAsync("");
        if (restartInput === "2") {
          break;
        }
      }
    } catch (error) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  getComputerNumbers() {
    const computer = [];

    while (computer.length < DIGIT_COUNT) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  calculateScore(computerNumbers, numbers) {
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < computerNumbers.length; i += 1) {
      if (computerNumbers[i] === numbers[i]) {
        strikeCount += 1;
      } else if (computerNumbers.includes(numbers[i])) {
        ballCount += 1;
      }
    }

    return { ballCount, strikeCount };
  }

  printScore(ballCount, strikeCount) {
    const ballMessage = ballCount > 0 ? `${ballCount}${BALL}` : "";
    const strikeMessage = strikeCount > 0 ? `${strikeCount}${STRIKE}` : "";

    let message = [ballMessage, strikeMessage].filter(Boolean).join(" ");

    if (!message) {
      message = NOTHING;
    }

    Console.print(message);
  }

  checkValidation(stringInput, integerInput) {
    const regex = new RegExp(`^[1-9]{${DIGIT_COUNT}}$`);
    const threeDigit = regex.test(stringInput);
    const uniqueNumbers = new Set(integerInput);
    const pass = threeDigit && uniqueNumbers.size === DIGIT_COUNT;

    if (!pass) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async startBaseballGame(computerNumbers) {
    while (true) {
      const readInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const playerNumbers = Array.from(readInput).map((input) => parseInt(input, 10));
      this.checkValidation(readInput, playerNumbers);

      const { ballCount, strikeCount } = this.calculateScore(computerNumbers, playerNumbers);
      if (strikeCount === DIGIT_COUNT) {
        Console.print(`${strikeCount}${STRIKE}`);
        Console.print(`${strikeCount}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        break;
      }

      this.printScore(ballCount, strikeCount);
    }
  }
}

export default App;

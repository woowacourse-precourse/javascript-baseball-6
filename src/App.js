import { Console, Random } from "@woowacourse/mission-utils";

const CORRECT = "correct";
const KEEP_GOING = "keepGoing";
const RESTART = "restart";
const END = "end";
const LIMIT_LENGTH = 3;
const EXCEPT_NUMBER = "0";

class App {
  #answerArray;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.#answerArray = createRandomAnswer();

    while (true) {
      const numberString = await this.getNumberString();

      const { ball, strike } = this.getBallStrikeCount(numberString);

      const result = this.printGameResult(ball, strike);

      if (result === CORRECT) {
        const restartOrExit = await this.askRestartOrExit();

        if (restartOrExit === RESTART) {
          await this.play();
          break;
        }
        if (restartOrExit === END) {
          break;
        }
      }
    }
  }

  async getNumberString() {
    const input = await Console.readLineAsync("숫자를 입력해 주세요: ");
    inputValidation(input);

    return input;
  }

  getBallStrikeCount(input) {
    let strike = 0;
    let ball = 0;

    for (let char in input) {
      this.#answerArray.forEach((number, index) => {
        if (Number(input[char]) === number) {
          if (Number(char) === index) strike += 1;
          else ball += 1;
        }
      });
    }

    return { ball, strike };
  }

  async askRestartOrExit() {
    const restartGameNumber = await Console.readLineAsync(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
    );

    restartOrEndValidation(restartGameNumber);

    if (Number(restartGameNumber) === 1) {
      return RESTART;
    }
    if (Number(restartGameNumber) === 2) {
      return END;
    }
  }

  printGameResult(ball, strike) {
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

      return CORRECT;
    }
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
      return KEEP_GOING;
    }
    let ballCountMessage = ball !== 0 ? `${ball}볼 ` : "";
    let strikeCountMessage = strike !== 0 ? `${strike}스트라이크` : "";
    Console.print(`${ballCountMessage}${strikeCountMessage}`);
    return KEEP_GOING;
  }
}

function createRandomAnswer() {
  const computer = [];
  while (computer.length < LIMIT_LENGTH) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

function inputValidation(input) {
  const numberStringRegex = /^[0-9]+$/;

  if (!input.match(numberStringRegex)) {
    throw new Error("[ERROR] 숫자만 입력해 주세요.");
  }

  if (
    input.length !== LIMIT_LENGTH ||
    input.includes(EXCEPT_NUMBER) ||
    checkDuplicate(input)
  ) {
    throw new Error("[ERROR] 0을 제외한 서로 다른 세자리 수로 입력해주세요.");
  }
}

function checkDuplicate(input) {
  const numbers = input.split("");
  return [...new Set(numbers)].length === 3 ? false : true;
}

function restartOrEndValidation(input) {
  const oneOrTwoRegex = /^[12]$/;

  if (!input.match(oneOrTwoRegex)) {
    throw new Error("[ERROR] 숫자 1과 2만 입력 가능합니다.");
  }
}

export default App;

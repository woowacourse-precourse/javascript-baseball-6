import { Console, Random } from "@woowacourse/mission-utils";

const CORRECT = "correct";
const KEEP_GOING = "keepGoing";

class App {
  #answerArray;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.#answerArray = createRandomAnswer();

    const input = await Console.readLineAsync("숫자를 입력해 주세요: ");
    inputValidation(input);

    const { ball, strike } = getBallStrikeCount(input, this.#answerArray);

    const result = printGameResult(ball, strike);
  }
}

function createRandomAnswer() {
  const computer = [];
  while (computer.length < 3) {
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

  if (input.length !== 3 || input.includes("0") || checkDuplicate(input)) {
    throw new Error("[ERROR] 0을 제외한 서로 다른 세자리 수로 입력해주세요.");
  }
}

function checkDuplicate(input) {
  const numbers = input.split("");
  return [...new Set(numbers)].length === 3 ? false : true;
}

function getBallStrikeCount(input, answer) {
  let strike = 0;
  let ball = 0;

  for (let i in input) {
    answer.forEach((number, index) => {
      if (Number(input[i]) === number) {
        if (Number(i) === index) strike += 1;
        else ball += 1;
      }
    });
  }

  return { ball, strike };
}

function printGameResult(ball, strike) {
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

export default App;

import { Console, Random } from "@woowacourse/mission-utils";

class App {
  #answerArray;

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.#answerArray = createRandomAnswer();

    const input = await Console.readLineAsync("숫자를 입력해 주세요: ");
    inputValidation(input);
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

export default App;

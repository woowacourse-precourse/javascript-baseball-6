import { Console, Random } from "@woowacourse/mission-utils";

const START_MESSAGE = "숫자 야구 게임 시작을 시작합니다."
const NUMBER_LENGTH = 3
const RANGE_START = 1
const RANGE_END = 9

function computer_start() {
  Console.print(START_MESSAGE);
  const computer = [];
  while (computer.length < NUMBER_LENGTH) {
    const number = Random.pickNumberInRange(RANGE_START, RANGE_END);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  Console.print(computer);
  return computer;
}

class App {
  async play() {
    const computer_number = computer_start();
  }
}
export default App;

const app = new App();
app.play();
import { Console, Random } from "@woowacourse/mission-utils";

const START_MESSAGE = "숫자 야구 게임 시작을 시작합니다."
const USER_MESSAGE = "숫자를 입력해주세요 : "
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

async function player() {
  let userNum = [];
  const input = await Console.readLineAsync(USER_MESSAGE);
  const user = (input + '').split('').map((num) => parseInt(num));
  user.map((item) => userNum.push(item));
  Console.print(userNum)
}

class App {
  async play() {
    const computer_number = computer_start();
    player();
  }
}
export default App;

const app = new App();
app.play();
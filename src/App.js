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

async function player(computer_number) {
  let userNum = [];
  const input = await Console.readLineAsync(USER_MESSAGE);
  const user = (input + '').split('').map((num) => parseInt(num));
  user.map((item) => userNum.push(item));

  compare(computer_number, userNum);

}

function compare(computer_number, player_number) {
  let strike = 0;
  let ball = 0;

  for (let computer_item in computer_number) {
    for (let player_item in player_number) {
      if (computer_number[computer_item] === player_number[player_item]) {
        if (computer_item === player_item) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }
  Console.print(strike);
  Console.print(ball);

  if (strike === 0 && ball === 0) {
    Console.print("낫싱");
  } else if (strike !== 0 && ball === 0) {
    Console.print(`${strike}스트라이크`);
  } else if (ball !== 0 && strike === 0) {
    Console.print(`${ball}볼`);
  } else {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }

}
class App {
  async play() {
    const computer_number = computer_start();
    const userNum = player(computer_number);
  }
}
export default App;

const app = new App();
app.play();
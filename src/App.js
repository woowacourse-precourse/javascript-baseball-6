import { Console, Random } from "@woowacourse/mission-utils";

const START_MESSAGE = "숫자 야구 게임 시작을 시작합니다.";
const USER_MESSAGE = "숫자를 입력해주세요 : ";
const SUCCESS_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESTART_MESSAGE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
const NUMBER_LENGTH = 3;
const RANGE_START = 1;
const RANGE_END = 9;

function computer_start() {
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

async function finish() {
  Console.print(RESTART_MESSAGE)
  const input = await Console.readLineAsync("")
  if (input === "1") return true
  else if (input === "2") return false
}

async function player(computer_number) {
  while (true) {
    let userNum = [];
    const input = await Console.readLineAsync(USER_MESSAGE);
    const user = (input + '').split('').map((num) => parseInt(num));
    user.map((item) => userNum.push(item));
    const result = compare(computer_number, userNum);
    Console.print(result);
    if (result === '3스트라이크') {
      Console.print(SUCCESS_MESSAGE);
      break;
    }
  }

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

  if (strike === 0 && ball === 0) {
    return "낫싱";
  } else if (strike !== 0 && ball === 0) {
    return `${strike}스트라이크`;
  } else if (ball !== 0 && strike === 0) {
    return `${ball}볼`;
  } else {
    return `${ball}볼 ${strike}스트라이크`;
  }

}
class App {
  async play() {
    let restart = true;
    Console.print(START_MESSAGE);
    while (restart) {
      const computer_number = computer_start();
      await player(computer_number);
      restart = await finish();
    }
  }
}
export default App;

const app = new App();
app.play();
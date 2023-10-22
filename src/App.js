import { Random, Console } from "@woowacourse/mission-utils";

function pickRandomNumber(array) {
  while (array.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!array.includes(number)) {
      array.push(number);
    }
  }
}

async function start() {
  Console.print("숫자 야구 게임을 시작합니다.");
  return await Console.readLineAsync("숫자를 입력해주세요 : ");
}

async function finish() {
  return await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
}

class App {
  async play() {
    let randomArray = [];
    let inputData = 0;
    let resetCode = 0;

    while (Number(resetCode) !== 2) {
      pickRandomNumber(randomArray);
      inputData = await start();

      resetCode = await finish();
    }
  }
}

export default App;

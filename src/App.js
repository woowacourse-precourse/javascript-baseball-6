import { Random, Console } from "@woowacourse/mission-utils";

function pickRandomNumber(array) {
  while (array.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!array.includes(number)) {
      array.push(number);
    }
  }
}

function initalizeArray(array) {
  while (array.length !== 0) array.pop();
}

async function start() {
  Console.print("숫자 야구 게임을 시작합니다.");
  return await Console.readLineAsync("숫자를 입력해주세요 : ");
}

function judgeError(array) {
  if (Number(array) > 999 || Number(array) < 100 || isNaN(array)) {
    throw new Error("[ERROR] 잘못된 값을 입력하였습니다.");
  }
}

function dataToArray(data, array) {
  let count = 2;

  while (array.length < 3) {
    array.push(Math.floor(data / 10 ** count));
    data = data % 10 ** count;

    count--;
  }
}

async function finish() {
  return await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
}

class App {
  async play() {
    let randomArray = [];
    let inputArray = [];
    let inputData = 0;
    let resetCode = 0;

    while (Number(resetCode) !== 2) {
      initalizeArray(inputArray);
      pickRandomNumber(randomArray);

      inputData = await start();
      dataToArray(inputData, inputArray);

      judgeError(inputData);

      resetCode = await finish();
    }
  }
}

export default App;

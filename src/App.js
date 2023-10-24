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

function calculateStrike(randomArray, inputArray) {
  let count = 0;

  for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] === inputArray[i]) count++;
  }

  return count;
}

function calculateBall(randomArray, inputArray, strikeCount) {
  let judgeArray = [];

  judgeArray = randomArray.map((data) => inputArray.includes(data));
  return judgeArray.filter((data) => data === true).length - strikeCount;
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

    let strikeCount = 0;
    let ballCount = 0;

    while (Number(resetCode) !== 2) {
      initalizeArray(inputArray);
      pickRandomNumber(randomArray);

      inputData = await start();
      judgeError(inputData);

      dataToArray(inputData, inputArray);

      strikeCount = calculateStrike(randomArray, inputArray);
      ballCount = calculateBall(randomArray, inputArray, strikeCount);

      if (strikeCount === 3) {
        Console.print("3스트라이크");
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        resetCode = await finish();

        initalizeArray(randomArray);
      } else if (strikeCount > 0 || ballCount > 0) {
        Console.print(ballCount + "볼 " + strikeCount + "스트라이크");
      } else {
        Console.print("낫싱");
      }
    }
  }
}

export default App;

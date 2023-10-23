import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 시작
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let answerArray = createAnswerNumber();
    //console.log(answerArray);
    let inputArray = await createInputNumber();
    await compareNumber(answerArray, inputArray);
  }
}

async function createInputNumber() {
  let input = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  let inputArray = input.split("").map(Number);
  let inputSet = new Set(inputArray);
  if (
    inputArray.length !== inputSet.size ||
    inputArray.length !== 3 ||
    Number.isNaN(parseInt(input))
  ) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  } else {
    return inputArray;
  }
}

async function compareNumber(answerArray, inputArray) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (answerArray[i] === inputArray[i]) {
      strike++;
    } else if (answerArray.includes(inputArray[i])) {
      ball++;
    }
  }
  if (strike === 3) {
    MissionUtils.Console.print("3스트라이크");
    return restartQuestion();
  }
  if (strike !== 0 && ball !== 0) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (strike === 0 && ball === 0) {
    MissionUtils.Console.print(`낫싱`);
  } else if (strike === 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else if (ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  }
  inputArray = await createInputNumber();
  await compareNumber(answerArray, inputArray);
}

async function restartQuestion() {
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  try {
    let restart = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (restart === "1") {
      let answerArray = createAnswerNumber();
      let inputArray = await createInputNumber();
      compareNumber(answerArray, inputArray);
    } else if (restart === "2") {
      return;
    }
  } catch (error) {
    MissionUtils.Console.print(error.message);
  }
}

function createAnswerNumber() {
  const answerNumArray = [];
  while (answerNumArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answerNumArray.includes(number)) {
      answerNumArray.push(number);
    }
  }
  return answerNumArray;
}

const app = new App();
app.play();

export default App;

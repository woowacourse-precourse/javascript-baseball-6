import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await start();
  }
}

//게임 시작 함수
async function start() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  const ANSWER_ARRAY = createAnsArray();
  let inputArray = await createNumArray();
  await compareNumber(ANSWER_ARRAY, inputArray);
}

//정답 배열 생성 함수
function createAnsArray() {
  const ANSWER_NUM_ARRAY = [];
  while (ANSWER_NUM_ARRAY.length < 3) {
    const NUBMER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!ANSWER_NUM_ARRAY.includes(NUBMER)) {
      ANSWER_NUM_ARRAY.push(NUBMER);
    }
  }
  return ANSWER_NUM_ARRAY;
}

//입력 배열 생성 및 유효성 검증 함수
async function createNumArray() {
  const INPUT = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  let inputArray = INPUT.split("").map(Number);
  const INPUT_SET = new Set(inputArray);
  if (
    inputArray.length !== INPUT_SET.size ||
    inputArray.length !== 3 ||
    Number.isNaN(parseInt(INPUT))
  ) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  } else {
    return inputArray;
  }
}

//숫자 비교 함수
async function compareNumber(ANSWER_ARRAY, inputArray) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (ANSWER_ARRAY[i] === inputArray[i]) {
      strike++;
    } else if (ANSWER_ARRAY.includes(inputArray[i])) {
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
  inputArray = await createNumArray();
  await compareNumber(ANSWER_ARRAY, inputArray);
}

//게임 재시작 여부 확인 함수
async function restartQuestion() {
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const RESTART = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (RESTART === "1") {
    start();
  } else if (RESTART === "2") {
    return;
  } else {
    throw new Error("[ERROR] 1 또는 2만 입력해 주세요.");
  }
}

const app = new App();
app.play();

export default App;

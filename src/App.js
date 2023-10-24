import { Random, Console } from "@woowacourse/mission-utils";

// 비교 할 수의 총 갯수를 지정하는 상수
const COMPARE_LENGTH = 3;

// 출력 할 때 사용할 메시지를 지정하는 상수
const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  SUCCESS: "개의 숫자를 모두 맞히셨습니다! 게임 종료",
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

// 컴퓨터가 3개의 난수 배열을 생성하는 함수
const getComputerNumber = () => {
  const computer = [];
  while (computer.length < COMPARE_LENGTH) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

// 사용자로부터 입력을 받는 함수
const readFromPlayer = async () => {
  let answer = "";
  try {
    answer = await Console.readLineAsync(MESSAGE.INPUT);
  } catch (e) {
    Console.print(e.message);
  }
  if (isValid(answer)) {
    return readToList(answer);
  } else {
    throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
};

// 입력된 수의 유효성을 검사하는 함수
const isValid = (answer) => {
  return (
    answer.length === COMPARE_LENGTH &&
    answer >= 100 &&
    answer <= 999 &&
    !isDuplicated(answer)
  );
};

// 유효성 검사 항목 중 중복된 숫자가 있는지 검사하는 함수
const isDuplicated = (str) => {
  const charSet = new Set(str);
  return str.length !== charSet.size;
};

// 입력받은 숫자를 리스트 형식으로 반환하는 함수
const readToList = (answer) => {
  const arr = [...answer].map(Number);
  return arr;
};

// 두 배열을 비교하는 함수
const compareNumber = (computerList, humanList) => {
  let strikeCnt = 0;
  let ballCnt = 0;
  for (let i = 0; i < computerList.length; i++) {
    if (computerList[i] === humanList[i]) {
      strikeCnt += 1;
    } else if (humanList.includes(computerList[i])) {
      ballCnt += 1;
    }
  }
  return { strikeCnt, ballCnt };
};

// 게임을 재시작할지 종료할지 입력받는 함수
const readRestart = async () => {
  let answer = "";
  try {
    answer = await Console.readLineAsync(MESSAGE.RESTART);
  } catch (e) {
    Console.print(e.message);
  }
  if (answer === "1" || answer === "2") {
    return answer;
  } else {
    throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
};

// 결과를 출력하는 함수
const printResult = (strikeCnt, ballCnt) => {
  if (strikeCnt === COMPARE_LENGTH) {
    Console.print(`${strikeCnt}${MESSAGE.STRIKE}`);
    Console.print(`${strikeCnt}${MESSAGE.SUCCESS}`);
    return true;
  } else {
    const ballText = ballCnt > 0 ? `${ballCnt}${MESSAGE.BALL}` : "";
    const strikeText = strikeCnt > 0 ? `${strikeCnt}${MESSAGE.STRIKE}` : "";
    Console.print(
      ballText && strikeText
        ? `${ballText} ${strikeText}`
        : ballText
        ? `${ballText}`
        : strikeText
        ? `${strikeText}`
        : MESSAGE.NOTHING
    );
    return false;
  }
};

// 게임을 시작하는 함수
const initGame = async () => {
  Console.print(MESSAGE.START);
  let restart = "1";
  while (restart === "1") {
    const computerList = getComputerNumber();
    await playGame(computerList);
    restart = await readRestart();
  }
};

// 게임을 진행하는 함수
const playGame = async (computerList) => {
  let isEnd = false;
  while (!isEnd) {
    const humanList = await readFromPlayer();
    const { strikeCnt, ballCnt } = compareNumber(computerList, humanList);
    isEnd = printResult(strikeCnt, ballCnt);
  }
};

class App {
  async play() {
    await initGame();
  }
}

const app = new App();
app.play();

export default App;

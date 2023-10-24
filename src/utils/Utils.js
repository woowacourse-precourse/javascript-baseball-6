import { Random, Console } from "@woowacourse/mission-utils";
import COMPARE_LENGTH from "../constants/constants.js";
import MESSAGE from "../constants/messages.js";

// 게임을 진행하는 함수
const playGame = async (computerList) => {
  let isEnd = false;
  while (!isEnd) {
    const humanList = await readFromPlayer();
    const { strikeCnt, ballCnt } = compareNumber(computerList, humanList);
    isEnd = printResult(strikeCnt, ballCnt);
  }
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

export { playGame, getComputerNumber, readRestart };

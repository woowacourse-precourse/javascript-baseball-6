import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./MESSAGE.js";

class App {
  async play() {
    await init();
  }
}
// 기본 입출력 함수
const print = (message) => Console.print(message);
const input = async (input = {}) => await Console.readLineAsync(input);

//init - 게임 시작메시지출력, 게임 진행시작
const init = async () => {
  let gamePlay = false;
  while (!gamePlay) {
    print(MESSAGE.GAME_START);
    const computerNumber = generateRandomoNumber();
    gamePlay = await handleGame(computerNumber);
  }
};

// 게임 핸들링 함수
const handleGame = async (computerNumber) => {
  let gamePlay = false;
  // 사용자 입력, 비교, 출력, 재시작 반복
  while (!gamePlay) {
    const playerNumber = await getPlayerNumber(computerNumber);
    const compareResult = compareNumber(computerNumber, playerNumber);
    const result = printResult(compareResult);
    if (isCorrect(result)) return askReplay();
  }
};

// 컴퓨터의 임의의 3자리 수 생성 함수
const generateRandomoNumber = () => {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber;
};

// 플레이어로부터 3자리수 입력받는 함수
const getPlayerNumber = async () => {
  const playerNum = await input(MESSAGE.INPUT_NUMBER);
  if (!isValidateNumber(playerNum)) {
    throw new Error(MESSAGE.INPUT_NUMBER_ERROR);
  }
  // 컴퓨터의 수도 숫자배열이니까 플레이어의 수도 숫자배열로
  const playerNumber = [...playerNum].map(Number);
  return playerNumber;
};

// 플레이어로부터 입력받은 수 유효성 검사 함수
const isValidateNumber = (playerNum) => {
  if (playerNum.length !== 3) return false;
  if (!/^[1-9]{3}$/.test(playerNum)) return false;
  const playerNumber = [...playerNum].map(Number);
  if (new Set(playerNumber).size !== 3) return false;

  return true;
};

// 컴퓨터수와 플레이어수 비교해서 볼, 스트라이크 카운트 함수
const compareNumber = (computerNumber, playerNumber) => {
  const compareResult = {
    ball: 0,
    strike: 0,
  };
  playerNumber.forEach((num, idx) => {
    if (num === computerNumber[idx]) compareResult.strike += 1;
    else if (computerNumber.includes(num)) compareResult.ball += 1;
  });
  return compareResult;
};

// 비교 결과 출력 함수
const printResult = (compareResult) => {
  const { strike, ball } = compareResult;
  if (!strike && !ball) {
    print(MESSAGE.NOTHING);
  } else {
    let result = "";
    if (ball > 0) result += `${ball}${MESSAGE.BALL} `;
    if (strike > 0) result += `${strike}${MESSAGE.STRIKE}`;
    print(result);
  }
};

// 정답 확인해서 정답이면 게임 종료 메시지 출력하는 함수
const isCorrect = (compareResult) => {
  if (compareResult.strike === 3) {
    print(MESSAGE.RESULT_SUCCESS);
    return true;
  }
  return false;
};

// 게임 재시작 or 종료 옵션 함수
const askReplay = async () => {
  const endSelect = await input(MESSAGE.INPUT_NUMBER);
  if (endSelect === "1") {
    return false;
  } else if (endSelect === "2") {
    return true;
  } else {
    throw new Error(MESSAGE.END_SELECT_ERROR);
  }
};

export default App;

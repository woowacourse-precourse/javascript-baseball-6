import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MSG, ERROR_MSG } from "./Messages";

// 1. 컴퓨터의 랜덤 숫자
function getComputerNum() {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const random = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(random)) {
      COMPUTER.push(random);
    }
  }
  return COMPUTER;
}

// 2. 유저의 숫자 입력
async function getUserNum() {
  let USER_INPUT = await MissionUtils.Console.readLineAsync(GAME_MSG.INPUT);
  let isDuple = new Set(USER_INPUT).size;

  if (USER_INPUT.length !== 3) {
    throw new Error(ERROR_MSG.INPUT_ERROR_LEN);
  } else if (isDuple !== 3) {
    throw new Error(ERROR_MSG.INPUT_ERROR_DUPLE);
  } else if (Number.isInteger(parseInt(USER_INPUT)) == false) {
    throw new Error(ERROR_MSG.INPUT_ERROR_NOT_NUM);
  }
  try {
    return USER_INPUT;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}

// 3. 컴퓨터와 유저의 숫자 비교
export async function compareNum() {
  const COMPUTER_NUM = getComputerNum();

  let ball = 0;
  let strike = 0;
  while (strike !== 3) {
    let USER_NUM = await getUserNum();
    USER_NUM = USER_NUM.split("").map(Number);
    ball = 0;
    strike = 0;

    for (let i = 0; i < 3; i++) {
      if (COMPUTER_NUM[i] === USER_NUM[i]) strike++;
      else if (USER_NUM.includes(COMPUTER_NUM[i])) ball++;
    }

    getHint(ball, strike);
  }

  MissionUtils.Console.print(GAME_MSG.END);
  await reStartOrNot();
}

// 4. 힌트 출력
function getHint(ball, strike) {
  if (ball === 0 && strike === 0) {
    MissionUtils.Console.print(GAME_MSG.NOTHING);
  } else if (ball > 0 && strike === 0) {
    MissionUtils.Console.print(ball + GAME_MSG.BALL);
  } else if (ball === 0 && strike > 0) {
    MissionUtils.Console.print(strike + GAME_MSG.STRIKE);
  } else {
    MissionUtils.Console.print(
      ball + GAME_MSG.BALL + " " + strike + GAME_MSG.STRIKE
    );
  }
}

// 6. 게임 재시작/종료 선택
async function reStartOrNot() {
  let answer = await MissionUtils.Console.readLineAsync(GAME_MSG.RESTART);
  if (answer === "1") {
    await compareNum();
  } else if (answer === "2") {
    endGame();
  } else {
    throw new Error(ERROR_MSG.RESTART_ERROR_NOT_ANS);
  }
}

function endGame() {
  return;
}

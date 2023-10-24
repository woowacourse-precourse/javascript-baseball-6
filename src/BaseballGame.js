import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MSG, ERROR_MSG } from "./Messages";

const gameStart = async () => {
  try {
    while (true) {
      const COMPUTER_NUM = getComputerNum();
      await compareNum(COMPUTER_NUM);
      restartOrNot();
    }
  } catch (error) {
    throw new Error("[ERROR]");
  }
};

// 1. 컴퓨터의 랜덤 숫자
const getComputerNum = () => {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(number)) {
      COMPUTER.push(number);
    }
  }
  return COMPUTER.join("");
};

// 2. 유저의 숫자 입력
const getUserNum = async () => {
  try {
    const USER_NUM = await MissionUtils.Console.readLineAsync(GAME_MSG.INPUT);
    userValid(USER_NUM);
    return USER_NUM;
  } catch (error) {
    throw new Error("[ERROR]");
  }
};
// 2-1. 유저 validation
const userValid = (num) => {
  const checkDup = new Set(num.split(""));
  if (checkDup.length !== 3) throw new Error(ERROR_MSG.INPUT_ERROR_SAME);
  if (Number.isInteger(num)) throw new Error(ERROR_MSG.INPUT_ERROR_NOT_NUM);
  if (num.length !== 3) throw new Error(ERROR_MSG.INPUT_ERROR_LEN);
};

// 3. 컴퓨터와 유저의 숫자 비교
const compareNum = async (COMPUTER_NUM) => {
  try {
    while (true) {
      let strike = 0;
      let ball = 0;
      const USER_NUM = await getUserNum();
      //   MissionUtils.Console.print(GAME_MSG.INPUT + USER_NUM);

      for (let i = 0; i < 3; i++) {
        if (COMPUTER_NUM[i] === USER_NUM[i]) strike++;
        else if (COMPUTER_NUM.includes(USER_NUM[i])) ball++;
      }

      getHint(ball, strike);
      if (strike === 3) {
        MissionUtils.Console.print(GAME_MSG.END);
        break;
      }
    }
  } catch (error) {
    throw new Error("[ERROR]");
  }
};
// 4. 힌트 출력
const getHint = (ball, strike) => {
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
};

// 6. 게임 재시작/종료 선택
const restartOrNot = async () => {
  try {
    const ANSWER = await MissionUtils.Console.readLineAsync(GAME_MSG.RESTART);
    // MissionUtils.Console.print(ANSWER);
    if (ANSWER === "1") {
      await gameStart();
    } else if (ANSWER === "2") {
      endGame();
    } else {
      throw new Error(ERROR_MSG.RESTART_ERROR_NOT_ANS);
    }
  } catch (error) {
    throw new Error("[ERROR]");
  }
};

const endGame = () => {
  MissionUtils.Console.print("게임 종료");
  return;
};

export { gameStart };

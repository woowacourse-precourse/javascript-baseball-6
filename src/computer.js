import { MissionUtils } from "@woowacourse/mission-utils";
import { enterNumber } from "./player.js";
import { ERROR_MESSAGES, OUTPUT_MESSAGES } from "./constant/constant.js";

export async function pickRandomNumber() {
  MissionUtils.Console.print(OUTPUT_MESSAGES.START_GAME);

  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  await enterNumber(computer);
}

export async function judgeNumber(computerNum, playerNum) {
  let strike = 0;
  let ball = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (playerNum[i] == computerNum[j]) {
        if (i == j) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }

  if (strike == 3) {
    MissionUtils.Console.print(`${strike}${OUTPUT_MESSAGES.STRIKE}\n${OUTPUT_MESSAGES.END_GAME}`);
    await endGame();
  } else if (strike == 0 && ball == 0) {
    MissionUtils.Console.print(OUTPUT_MESSAGES.NOTHING);
    await enterNumber(computerNum);
  } else {
    const ballComment = ball == 0 ? '' : `${ball}${OUTPUT_MESSAGES.BALL} `
    const strikeComment = strike == 0 ? '' : `${strike}${OUTPUT_MESSAGES.STRIKE}`;
    MissionUtils.Console.print(`${ballComment}${strikeComment}`);
    await enterNumber(computerNum);
  }
}

export async function endGame() {
  const REGEX = /[^1-2]/; // 숫자 1~2 외의 문자 찾아내는 정규표현식

  const gameStatus = await MissionUtils.Console.readLineAsync(`${OUTPUT_MESSAGES.END_GAME}\n`);

  if (REGEX.test(gameStatus)) {
    throw new Error(ERROR_MESSAGES.OUT_OF_RANGE_1_TO_2);
  } else if (gameStatus.length != 1) {
    throw new Error(ERROR_MESSAGES.INCORRECT_INPUT_COUNT_1);
  }

  if (gameStatus == 1) {
    await pickRandomNumber();
  }
}
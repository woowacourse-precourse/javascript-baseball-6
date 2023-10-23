import { MissionUtils } from "@woowacourse/mission-utils";

export function createRandomNumber() {
  const NUMBERS = [];
  while (NUMBERS.length < 3) {
    const RANDOMNUM = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!NUMBERS.includes(RANDOMNUM)) {
      NUMBERS.push(RANDOMNUM);
    }
  }
  return NUMBERS;
}

export async function getUserNumber() {
  try {
    const USERNUM = await MissionUtils.Console.readLineAsync(
      "3자리 숫자를 입력해주세요: "
    );
    return USERNUM;
  } catch (error) {
    MissionUtils.Console.print("[ERROR]");
  }
}

export async function getUserChoice() {
  try {
    const USERCHOICE = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    return USERCHOICE;
  } catch (error) {
    MissionUtils.Console.print("[ERROR]");
  }
}

export function strikeCheck(RAND_ANSWER, USER_ANSWER) {
  let STRIKE_CNT = 0;
  for (var i = 0; i < RAND_ANSWER.length; i++) {
    if (RAND_ANSWER[i] === USER_ANSWER[i]) {
      STRIKE_CNT++;
    }
  }

  return STRIKE_CNT;
}

export function ballCheck(RAND_ANSWER, USER_ANSWER) {
  let BALL_CNT = 0;
  for (var i = 0; i < RAND_ANSWER.length; i++) {
    if (
      RAND_ANSWER[i] !== USER_ANSWER[i] &&
      RAND_ANSWER.includes(USER_ANSWER[i])
    ) {
      BALL_CNT++;
    }
  }

  return BALL_CNT;
}

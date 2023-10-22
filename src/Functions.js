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

export function strikeCheck() {}

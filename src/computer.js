import { MissionUtils } from "@woowacourse/mission-utils";

export function pickRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

export function judgeNumber() {
    // 입력한 숫자에 대한 결과 출력
}

export function endGame() {
    // 게임 종료
}
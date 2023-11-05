import { MissionUtils } from "@woowacourse/mission-utils";

// 숫자 비교
export default function compareNumbers(computer_number, human_number) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (computer_number.toString()[i] == human_number[i]) {
      strike++;
    } else {
      if (computer_number.toString().includes(human_number.toString()[i])) {
        ball++;
      }
    }
  }

  if (ball == 0 && strike == 0) {
    MissionUtils.Console.print("낫싱");
  } else if (ball == 0) {
    MissionUtils.Console.print(strike + "스트라이크");
  } else if (strike == 0) {
    MissionUtils.Console.print(ball + "볼");
  } else if (strike == 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  } else {
    MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");
  }
}

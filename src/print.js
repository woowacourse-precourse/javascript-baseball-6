import {MissionUtils} from "@woowacourse/mission-utils"

const BALL = "볼";
const STRIKE = "스트라이크";
const NOTHING = "낫싱"

// 시작 문구 출력
export function printStart() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

// 결과(볼, 스트라이크) 출력
export function printResult(result) {
  let str = ""
  if(result["ball"] > 0) {
    str = str + result["ball"] + BALL + " ";
  }
  if(result["strike"] > 0) {
    str = str + result["strike"] + STRIKE;
  }
  MissionUtils.Console.print(str);
}

// 결과(나싱) 출력
export function printNothing() {
  MissionUtils.Console.print(NOTHING);
}

// 종료 문구 출력
export function printCorrect() {
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
}

// 재시작 문구 출력
export function printRestart() {
  MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
}
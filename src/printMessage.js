import { Console } from "@woowacourse/mission-utils";

export function printStart() {
  Console.print("숫자 야구 게임을 시작합니다.");
}

export function printEnd() {
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
}

export function printResult(ball, strike) {
  if (ball === 0 && strike === 0) {
    Console.print("낫싱");
  } else if (ball === 0) {
    Console.print(`${strike}스트라이크`);
  } else if (strike === 0) {
    Console.print(`${ball}볼`);
  } else {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

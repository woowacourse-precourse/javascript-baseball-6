import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printStartMessage: () => {
    Console.print("숫자 야구 게임을 시작합니다.\n");
  },
  printGuessResult: ({ ball, strike }) => {
    Console.print(`${ball}볼 ${strike}스트라이크\n`);
  },
  printEndMessage: () => {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
  },
}

export default OutputView;
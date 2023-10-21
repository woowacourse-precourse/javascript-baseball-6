import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printStartMessage: () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  },
  printGuessResult: ({ ball, strike }) => {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱\n");
      return;
    }

    const printBall = ball ? `${ball}볼 ` : '';
    const printStrike = strike ? `${strike}스트라이크` : '';

    Console.print(`${printBall}${printStrike}`);
  },
  printEndMessage: () => {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  },
  printExitMessage: () => {
    Console.print("숫자 야구 게임을 종료합니다.");
  },
}

export default OutputView;
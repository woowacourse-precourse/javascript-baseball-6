import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printGameStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  printUserScore(strike, ball) {
    const score = [];
    if (ball !== 0) score.push(`${ball}볼`);
    if (strike !== 0) score.push(`${strike}스트라이크`);
    if (ball === 0 && strike === 0) score.push("낫싱");

    Console.print(score.join(" "));
  },

  printGameOverMessage() {
    Console.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
  },
};

export default OutputView;

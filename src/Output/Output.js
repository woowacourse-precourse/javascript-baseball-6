import { Console } from "@woowacourse/mission-utils";

const Output = {
  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  printHintMessage(ballCount, strikeCount) {
    const hint = [];
    if (ballCount !== 0) hint.push(`${ballCount}볼`);
    if (strikeCount !== 0) hint.push(`${strikeCount}스트라이크`);
    if (ballCount === 0 && strikeCount === 0) hint.push("낫싱");

    Console.print(hint.join(" "));
  },

  printEndMessage() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  },
};

export default Output;

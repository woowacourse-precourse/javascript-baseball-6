import { Console } from "@woowacourse/mission-utils";
import getRandomNumBer from "./getRandomNumber.js";

export default function startGame() {
  Console.print("숫자 야구 게임을 시작합니다.");
  const targetNumber = getRandomNumBer(3);
}

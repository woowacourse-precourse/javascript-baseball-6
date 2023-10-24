import { Console } from "@woowacourse/mission-utils";
import start from "./start";

const askRepeat = () => {
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

  Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n").then((value) => {
    if (value === "1") {
      start();
    } else if (value === "2") {
      Console.print("게임 종료");
    } else {
      throw new Error("[ERROR] 잘못된 숫자 형식입니다.");
    }
  });
};

export default askRepeat;

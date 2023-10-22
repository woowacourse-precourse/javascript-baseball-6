import { Console } from "@woowacourse/mission-utils";
import App from "./App.js";

const SelectStatus = async () => {
  const selection = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
  );
  if (selection === "1") {
    const game = new App();
    game.play();
  } else if (selection === "2") {
    return;
  } else {
    Console.print("error");
  }
};

export default SelectStatus;

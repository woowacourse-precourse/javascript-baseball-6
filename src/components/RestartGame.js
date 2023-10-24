import * as MissionUtils from "@woowacourse/mission-utils";
import App from "../App.js";

export default async function RestartGame() {
  const userInput = await MissionUtils.Console.readLineAsync(
    `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
  );
  // console.log(userInput);
  if (userInput === "1") {
    const app = new App();
    app.play();
  } else if (userInput === "2") {
    return;
  }
}

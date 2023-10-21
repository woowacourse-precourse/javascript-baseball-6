import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";
import compareInput from "./compareInput.js";
import restartGame from "./restartGame.js";

const strikeBallCount = (gameInstance, computer, user) => {
  let result = "";
  const strikeBall = compareInput(computer, user);

  if (strikeBall[0] > 0) result += `${strikeBall[0]}볼 `;
  if (strikeBall[1] > 0) result += `${strikeBall[1]}스트라이크`;
  if (strikeBall === "nothing") result += "낫싱";
  Console.print(result);

  if (strikeBall[1] === 3) {
    Console.print(Messages.SUCCESS_MESSAGE);
    restartGame();
  } else gameInstance.getUserInputNumbers();
};

export default strikeBallCount;

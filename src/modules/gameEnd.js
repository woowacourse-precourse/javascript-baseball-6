const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR } = require("../constants");


function gameEnd() {
    MissionUtils.Console.print(MESSAGE.CORRECT);
    MissionUtils.Console.readLine(MESSAGE.INPUT_OPT, (res) => {
      if (res === "1") return gameLoop();
      else if (res === "2") Console.close();
      else throw new Error(ERROR.INPUT_ERROR);
    })
}

module.exports.gameEnd = gameEnd;
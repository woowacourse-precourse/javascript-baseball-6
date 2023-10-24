import { Random, Console } from "@woowacourse/mission-utils";
import { Message } from "./constants/Message.js";
import { handleError } from "./HandleError.js";

export default class BaseballGame {
  removeDuplicate = (num, nums) => {
    if (!nums.includes(num)) {
      nums.push(num);
    }
  };

  makeCoumputerNum = () => {
    const nums = [];
    while (nums.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      this.removeDuplicate(num, nums);
    }
    const computerNum = nums.join("");
    return computerNum;
  };

  countResult = (playerNum, computerNum) => {
    const playResult = [0, 0, 0]; //스트라이크, 볼, 아웃
    for (let i = 0; i < 3; i++) {
      if (playerNum[i] == computerNum[i]) {
        playResult[0] += 1;
      } else if (computerNum.includes(playerNum[i])) {
        playResult[1] += 1;
      } else {
        playResult[2] += 1;
      }
    }
    return playResult;
  };

  showResultMessage = (playResult) => {
    let resultMessage = "";
    if (playResult[0] > 0) resultMessage += `${playResult[0]}볼 `;
    if (playResult[1] > 0) resultMessage += `${playResult[1]}스트라이크`;
    if (playResult[2] === 3) resultMessage += "낫싱";
    Console.print(resultMessage);
  };

  play = () => {
    Console.print(Message.INIT);
    Console.readLine(Message.INPUT, (playerNum) => {
      handleError(playerNum);
      const computerNum = this.makeCoumputerNum();
      const playResult = this.countResult(playerNum, computerNum);
      this.showResultMessage(playResult);
    });
  };
}

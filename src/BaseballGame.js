import { Random, Console } from "@woowacourse/mission-utils";
import { Message } from "./constants/Message.js";
import { handleError } from "./HandleError.js";

export default class BaseballGame {
  start() {
    const answer = '';
    Console.print(Message.INIT);
    Console.readLine(Message.INPUT, (playerNum) => {
      handleError(playerNum);
    }); 
  }

  removeDuplicate(num, nums) {
    if (!nums.includes(num)){
      nums.push(num);
    }
  }

  makeCoumputerNum() {
    const nums = []
    while (nums.length < 3){
      const num = Random.pickNumberInRange(1, 9);
      this.removeDuplicate(num, nums);
    }
    const computerNum = nums.join('');
    return computerNum;
  }

  play() {
    const playerAnswer = this.start();
    const computerAnswer = this.makeCoumputerNum();
  }
}

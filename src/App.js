import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./messages/messages";

class App {
  constructor() {
    this.pick = Random.pickUniqueNumbersInRange(1, 9, 3);
    this.message = Console.print(MESSAGES.GAME_PROCESS.START);
    this.userAnswer;
  }

  userPickNums() {
    Console.readLine(
      "1~9 숫자 내에서 중복 없이 임의의 숫자 3자리를 입력하세요.",
      (nums) => {
        const PICK_NUMS_IN_ARRAY = nums.split("").map(Number);
        if (PICK_NUMS_IN_ARRAY.length !== 3)
          throw new Error(MESSAGES.GAME_ERROR.LENGTH_VALID);
        const CORRECT_NUMS_IN_RANGE = (nums) => 1 <= nums && nums < 10;
        if (!PICK_NUMS_IN_ARRAY.every(CORRECT_NUMS_IN_RANGE))
          throw new Error(MESSAGES.GAME_ERROR.RANGE_VALID);
        const DUPLICATE_NUMS_IN_ARRAY = new Set([...PICK_NUMS_IN_ARRAY]);
        if (DUPLICATE_NUMS_IN_ARRAY.length !== nums.length)
          throw new Error(MESSAGES.GAME_ERROR.DUPLICATE_VALID);
        else this.userAnswer = nums;
      }
    );
  }
}

const app = new App();
app.play();

export default App;

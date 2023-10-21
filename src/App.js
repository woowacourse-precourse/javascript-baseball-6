import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./messages/messages";

class App {
  constructor() {
    this.computerAnswers = [];
    this.userAnswers;
    this.message;
  }

  userNumbersInput() {
    Console.readLine(
      "1~9 숫자 내에서 중복 없이 임의의 숫자 3자리를 입력하세요.",
      (nums) => {
        const PICK_USER_NUMBERS = nums.split("").map(Number);

        if (PICK_USER_NUMBERS.length !== 3)
          throw new Error(MESSAGES.GAME_ERROR.LENGTH_VALID);

        const CORRECT_USER_NUMBERS_IN_RANGE = (nums) => 1 <= nums && nums < 10;
        if (!PICK_USER_NUMBERS.every(CORRECT_USER_NUMBERS_IN_RANGE))
          throw new Error(MESSAGES.GAME_ERROR.RANGE_VALID);

        const DUPLICATE_USER_NUMBERS_IN_ARRAY = [...new Set(arr)];
        if (DUPLICATE_USER_NUMBERS_IN_ARRAY.length !== nums.length)
          throw new Error(MESSAGES.GAME_ERROR.DUPLICATE_VALID);

        this.userAnswer = nums;
      }
    );
  }
}

const app = new App();
app.play();

export default App;

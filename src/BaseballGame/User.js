import { readLineAsync } from "../utils/console.js";
import { MESSAGE } from "../constants/message.js";
import {
  validateDuplicate,
  validateGuessNumberLength,
  validateOnlyOneToNine,
} from "../validates/guessNumber.js";

class User {
  #numbers = [];

  async guessNumbers() {
    const answer = await readLineAsync(MESSAGE.GUESS_NUMBER);

    validateGuessNumberLength(answer);
    validateOnlyOneToNine(answer);
    validateDuplicate(answer);

    this.#numbers = answer.split("").map((n) => parseInt(n));
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default User;

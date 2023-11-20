import { Console } from "@woowacourse/mission-utils";
import { GAME } from "../static/Message.js";
import Validator from "../common/Validator.js";
import SplitNumbers from "../domain/SplitNumbers.js";

class InputView {
    #numbers;
    #validator;
    #splitNumbers;
    #finalNumbers;

    constructor() {
        this.#validator = new Validator();
    }

    async inputNumbers() {
        while (true) {
            try {
                this.#numbers = await Console.readLineAsync(GAME.inputNumber);
                this.#validator.validateInputLength(this.#numbers);
                this.#splitNumbers = new SplitNumbers(this.#numbers);
                this.#finalNumbers = this.#splitNumbers.getSplitNum();
                this.#validator.validateNaN(this.#finalNumbers);
                this.#validator.validateNumberRange(this.#finalNumbers);
                this.#validator.validateDuplicate(this.#finalNumbers);
                return this.#finalNumbers;    
            } catch (error) {
                Console.print(error.message);
            }
        }
    }
}
export default InputView;
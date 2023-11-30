import { Console } from "@woowacourse/mission-utils";
import { GAME } from "../static/Message.js";
import Validator from "../common/Validator.js";
import SplitNumbers from "../domain/SplitNumbers.js";

class InputView {
    #validator;
    #numbers;
    #splitNumbers;
    #finalNumbers;
    #status;

    constructor() {
        this.#validator = new Validator();
    }

    async inputNumbers() {
        this.#numbers = await Console.readLineAsync(GAME.inputNumber);
        this.#validator.validateInputLength(this.#numbers);
        this.#splitNumbers = new SplitNumbers(this.#numbers);
        this.#finalNumbers = await this.#splitNumbers.getSplitNum();
        this.#validator.validateNaN(this.#finalNumbers);
        this.#validator.validateNumberRange(this.#finalNumbers);
        this.#validator.validateDuplicate(this.#finalNumbers);
        return this.#finalNumbers;    
    }
    async continueOrExitFunc() {
        this.#status = await Console.readLineAsync(GAME.restart);
        this.#validator.validateExitInput(Number(this.#status));
        return this.#status;
    }
}
export default InputView;
import CheckNumber from "../domain/CheckNumber.js";
import RandomNumber from "../domain/RandomNumber.js";
import SplitNumbers from "../domain/SplitNumbers.js";
import NUMBERS from "../static/Numbers.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class BaseballController{
    #inputView;
    #outputView;
    #numbers;
    #random;
    #randomNum;
    #checkNum;
    #checkNumberFunc;

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
        this.#random = new RandomNumber();
        this.#checkNumberFunc = new CheckNumber();
    }
    async #intro() {
        this.#randomNum = await this.#random.getRandomNumber();
        this.#outputView.intro();
        await this.#inputArea();
    }
    async #inputArea() {
        while (true) {
            this.#numbers = await this.#inputView.inputNumbers();
            this.#checkNum = this.#checkNumberFunc.checkNumber(this.#numbers, this.#randomNum);
            this.#outputView.result(this.#checkNum);
            if(this.#checkNum[0] === NUMBERS.three) {
                this.#outputView.exit;
                break;
            }
        }
        this.#result();
    }
    #result(inputNum,randomNum) {
        this.#outputView.endGame();
    }
    async gameStart() {
        this.#intro();
    }
}
export default BaseballController;
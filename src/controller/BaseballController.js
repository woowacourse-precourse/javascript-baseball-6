import RandomNumber from "../domain/RandomNumber.js";
import SplitNumbers from "../domain/SplitNumbers.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class BaseballController{
    #inputView;
    #outputView;
    #numbers;
    #random;
    #randomNum;

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
        this.#random = new RandomNumber();
    }
    #intro() {
        this.#outputView.intro();
        this.#inputArea();
    }
    async #inputArea() {
        this.#numbers = await this.#inputView.inputNumbers();
        this.#randomNum = await this.#random.getRandomNumber();
        this.#result(this.#numbers, this.#randomNum);
    }
    #result(inputNum,randomNum) {
        
    }
    async gameStart() {
        this.#intro();
    }
}
export default BaseballController;
import NUMBERS from "../static/Numbers.js";

import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import CheckNumber from "../domain/CheckNumber.js";
import RandomNumber from "../domain/RandomNumber.js";
import ContinueOrExit from "../domain/ContinueOrExit.js";


class BaseballController{
    #inputView;
    #outputView;
    #numbers;
    #random;
    #randomNum;
    #checkNum;
    #checkNumberFunc;
    #statusNum;
    #restartFunc;

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
        this.#random = new RandomNumber();
        this.#checkNumberFunc = new CheckNumber();
        this.#restartFunc = new ContinueOrExit();
    }
    async #intro() {
        this.#randomNum = await this.#random.getRandomNumber();
        this.#outputView.intro();
        await this.#gameArea();
    }
    async #gameArea() {
        while(true) {
            this.#numbers = await this.#inputView.inputNumbers();
            this.#checkNum = this.#checkNumberFunc.checkNumber(this.#numbers, this.#randomNum);
            this.#outputView.result(this.#checkNum);
            if(this.#checkNum[0] === NUMBERS.three) {
                this.#outputView.exit();
                break;
            }    
        }
        this.#statusNum = await this.#inputView.continueOrExitFunc();
        this.#restartFunc.continueOrExit(this.#statusNum);
    }
    async gameStart() {
        await this.#intro();
    }
}
export default BaseballController;
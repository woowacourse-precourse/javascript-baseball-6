import Model from '../model/Model.js';
import View from '../view/View.js';
import { ERROR } from '../constant/constant.js';

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    async gameStart() {
        while (true) {
            this.model.generateRandomNumber();

            const userInput = await this.view.showUserInput();
            if (!this.model.isValidUserNumber(userInput)) {
                throw new Error(ERROR.INVALID_USER_INPUT);
            }

            const result = this.model.compareNumbers(userInput);
            this.view.showResult(result);

            if (this.isCorrectNumber(result)) {
                this.view.showEndMessage(); 
                return ;
            }
        }

    }

    isCorrectNumber(result) {
        return result.strike === 3;
    }
}

export default Controller;
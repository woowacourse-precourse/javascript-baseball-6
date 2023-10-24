import Model from "../model/Model.js";
import View from "../view/View.js";

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
                //에러처리
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
        if (result.strike === 3) {
            return true;
        }
        return false;
    }
}

export default Controller;
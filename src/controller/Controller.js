import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    async gameStart() {
        this.model.generateRandomNumber();

        const userInput = await this.view.showUserInput();
        if (!this.model.isValidUserNumber(userInput)) {
            //에러처리
        }

        const result = this.model.compareNumbers(userInput);
        this.view.showResult(result);

    }
}

export default Controller;
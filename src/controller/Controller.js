import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    async gameStart() {
        const userInput = await this.view.showUserInput();
        if (!this.model.isValidUserNumber(userInput)) {
            //에러처리
        }
    }
}

export default Controller;
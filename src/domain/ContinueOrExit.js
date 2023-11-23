import App from "../App.js";
import NUMBERS from "../static/Numbers.js";
import OutputView from "../view/OutputView.js";

class ContinueOrExit{
    #outputView;
    constructor() {
        this.#outputView = new OutputView();
    }
    async continueOrExit(status) {
        const numberStatus = Number(status);
        if(numberStatus === NUMBERS.continueNum) await new App().play();
        else if(numberStatus === NUMBERS.exitNum) this.#outputView.endGame();
    }
}
export default ContinueOrExit;
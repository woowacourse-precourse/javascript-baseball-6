import getUserGameDecision from './getUserGameDecision.js';
import getUserNumberInput from './getUserNumberInput.js';

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async getUserGameDecision() {
        return await getUserGameDecision();
    }

    async getUserNumberInput() {
        return await getUserNumberInput();
    }

    async playRound() {
        this.model.setRandomComputerNumber();
        let hint;
        do {
            hint = this.model.getHint(await this.getUserNumberInput());
            this.view.printHintMsg(hint);
        } while (this.model.isRoundContinuedFromHint(hint))
        this.view.printEndMsg();
    }

    async playGame() {
        do {
            await this.playRound()
        } while (this.model.isGameContinued(await this.getUserGameDecision()) === true)
    }
}

export default Controller;
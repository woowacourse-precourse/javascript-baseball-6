import { getUserGameDecision } from "./getUserGameDecision.js";
import { getUserNumberInput } from "./getUserNumberInput.js";

export class Controller {
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

    async playGame() {
        while (true) {
            const computerNumber = this.model.setRandomComputerNumber();
            while (true) {
                const userNumber = await this.getUserNumberInput()
                const hint = this.model.getHint(userNumber);
                this.view.printHintMsg(hint);
                if (this.model.isRoundEndedFromHint(hint) === true) {
                    this.view.printEndMsg();
                    break;
                }
            }
            const decision = await this.getUserGameDecision();
            if (this.model.isGameEnded(decision) === true) {
                // break;
                return;
            }
        }
    }
}
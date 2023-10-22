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
            this.model.setRandomComputerNumber();
            while (true) {
                const hint = this.model.getHint(await this.getUserNumberInput());
                this.view.printHintMsg(hint);
                if (this.model.isRoundEndedFromHint(hint) === true) {
                    this.view.printEndMsg();
                    break;
                }
            }
            if (this.model.isGameEnded(await this.getUserGameDecision()) === true) {
                return;
            }
        }
    }
}
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async playRound() {
        this.model.setRandomComputerNumber();
        let hint;
        do {
            hint = this.model.getHint(await this.view.getUserNumberInput());
            this.view.printHintMsg(hint);
        } while (this.model.isRoundContinuedFromHint(hint))
        this.view.printRoundEndMsg();
    }

    async playGame() {
        this.view.printGameStartMsg()
        do {
            await this.playRound()
        } while (this.model.isGameContinued(await this.view.getUserGameDecision()) === true)
    }
}

export default Controller;
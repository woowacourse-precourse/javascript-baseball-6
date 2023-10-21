const OutputView = require('./OutputView');
const Computer = require('./Computer');


class Game {
    #computer;

    constructor() {
        this.#computer;
    }
    start() {
        OutputView.printStart();
        this.getNumbers();
    }

    getNumbers() {
        this.#computer = new Computer().getNumbers();
    }
}

module.exports = Game;
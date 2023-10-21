const OutputView = require('./OutputView');
const InputView = require('./InputView');
const Computer = require('./Computer');


class Game {
    #computer;
    #user;

    constructor() {
        this.#computer;
        this.#user;
    }
    start() {
        OutputView.printStart();
        this.getNumbers();
    }

    getNumbers() {
        this.#computer = new Computer().getNumbers();
        InputView.getNumbers(this.handleUserNumbers);
    }
    handleUserNumbers = (numbers) => {
        this.#user = numbers.split('').map((number) => {
            return parseInt(number, 10);
        });
    };
}

module.exports = Game;
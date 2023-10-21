const OutputView = require('./OutputView');
const InputView = require('./InputView');
const Computer = require('./Computer');
const Referee = require('./Referee');


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
        this.compare();
    };
    compare() {
        const result = new Referee().compare(this.#computer, this.#user);
    }
}

module.exports = Game;
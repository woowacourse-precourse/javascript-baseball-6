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
        let message = [];

        if (result.ball === 0 && result.strike === 0) message.push('낫싱');
        if (result.ball !== 0) message.push(`${result.ball}볼`);
        if (result.strike !== 0) message.push(`${result.strike}스트라이크`);
    
        OutputView.printResult(message);
    }
}

module.exports = Game;
import { Console } from '@woowacourse/mission-utils';

const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const RandomNumberGenerator = require('../model/RandomNumberGenerator');
const Referee = require('../model/Referee');
const UserValidation = require('../validation/UserValidation');
const OptionValidation = require('../validation/OptionValidation');


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
        this.#computer = RandomNumberGenerator.generate();
        this.getUserNumbers();
    }

    getUserNumbers() {
        InputView.getNumbers(this.handleUserNumbers);
    }
    handleUserNumbers = (numbers) => {
        UserValidation.validateUser(numbers);
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
        
        this.progress(result);
    }

    progress(result) {
        if (result.strike !== 3) {
            return this.getUserNumbers();
        }
        InputView.getOptions(this.handleOptions);
    }
    handleOptions = (option) => {
        OptionValidation.validateOption(option);
        if (option === '1') return this.getNumbers();
        if (option === '2') Console.close();
    };
}

module.exports = Game;
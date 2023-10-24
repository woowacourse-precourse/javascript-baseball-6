import { Console } from '@woowacourse/mission-utils';

const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const RandomNumberGenerator = require('../model/RandomNumberMaker');
const Referee = require('../model/Referee');
const UserValidation = require('../validation/UserValidation');
const OptionValidation = require('../validation/OptionValidation');
const MESSAGE = require('../constant/message');
const VALUE = require('../constant/value');


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
            return parseInt(number, VALUE.DECIMAL_NUMBER);
        });
        this.compare();
    };

    compare() {
        const result = new Referee().compare(this.#computer, this.#user);
        let message = [];
        if (result.ball === VALUE.NOTHING && result.strike === VALUE.NOTHING) message.push(MESSAGE.NOTHING);
        if (result.ball !== VALUE.NOTHING) message.push(MESSAGE.BALL(result.ball));
        if (result.strike !== VALUE.NOTHING) message.push(MESSAGE.STRIKE(result.strike));
        OutputView.printResult(message);
    
        this.progress(result);
    }

    progress(result) {
        if (result.strike !== VALUE.LENGTH) {
            return this.getUserNumbers();
        }
        InputView.getOptions(this.handleOptions);
    }
    
    handleOptions = (option) => {
        OptionValidation.validateOption(option);
        if (option === VALUE.OPTION_RESTART) return this.getNumbers();
        if (option === VALUE.OPTION_FINISH) return OutputView.finishGame();
    };
}

module.exports = Game;
import Machine from '../Model/Machine.js';
import { MAX_VALUE, MIN_VALUE } from '../Model/ModelConstant.js';
import Player from '../Model/Player.js';
import generateRandomNumber from '../Model/RandomNumberGenerator.js';
import Score from '../Model/Score.js';
import Output from '../View/Output.js';
import Input from '../View/Input.js';
import Validator from './Validator.js';

export default class Controller {
    constructor() {
        this.newGame();
        this.gameStatus = true;
    }

    static validate(input, validateFunction) {
        try {
            validateFunction(input);
        } catch (error) {
            throw new Error(error);
        }
    }

    async start() {
        Output.printStart();
        this.createNewRandom();

        await this.readPlayerAnswer();
    }

    async readPlayerAnswer() {
        const answer = await Input.readAnswer();
        Controller.validate(answer, Validator.validateAnswer);
        this.player.setAnswer(answer);
        this.calculateScore();
        Output.print(this.score.getHint());

        await this.checkCorrectAnswer(this.score);
    }

    calculateScore() {
        this.score.calculateScore(
            this.machine.getRandomNumber(),
            this.player.getAnswer()
        );
    }

    createNewRandom() {
        const randomNumber = generateRandomNumber(
            MIN_VALUE,
            MAX_VALUE,
        ).toString();
        console.log(randomNumber);

        this.machine.setRandomNumber(randomNumber);
    }

    newGame() {
        this.machine = new Machine();
        this.player = new Player();
        this.score = new Score();
    }

    async restart() {
        const request = await Input.readRestartRequest();
        Controller.validate(request, Validator.validateCorrectRequest);

        await this.checkRestart(request);
    }

    async checkRestart(request) {
        if (request === '1') {
            this.newGame();
            await this.start();
        }
    }

    async checkCorrectAnswer(score) {
        if (score.isAllStrikes()) {
            Output.printCorrectMessage();
            return await this.restart();
        }

        await this.readPlayerAnswer();
    }
}
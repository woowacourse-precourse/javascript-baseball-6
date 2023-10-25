import { Random, Console } from '@woowacourse/mission-utils';

const NUMBER_OF_DIGITS = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;

class BaseballGame {
    constructor() {
        this.computer = [];
    }

    generateComputerNumber() {
        while (this.computer.length < NUMBER_OF_DIGITS) {
            const number = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
            if (!this.computer.includes(number)) {
                this.computer.push(number);
            }
        }
    }

    getHint(input) {
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < 3; i++) {
            if (this.computer[i] === input[i]) {
                strike += 1;
            } else if (this.computer.includes(input[i])) {
                ball += 1;
            }
        }

        if (strike === 0 && ball === 0) {
            return '낫싱';
        } else if (strike === 0) {
            return `${ball}볼`;
        } else if (ball === 0) {
            return `${strike}스트라이크`;
        } else {
            return `${ball}볼 ${strike}스트라이크`;
        }
    }

    validateInput(input) {
        if (input.length !== 3 || isNaN(input) || [...new Set(input)].length !== 3) {
            throw new Error('[ERROR] 입력값이 유효하지 않습니다. 1부터 9까지 서로 다른 숫자 3개를 입력해주세요.');
        }
    }

    async play() {
        console.log('숫자 야구 게임을 시작합니다.');
        this.generateComputerNumber();
        while (true) {
            let input = '';
            try {
                input = await Console.readLineAsync('숫자를 입력해주세요: ');
                this.validateInput(input);
            } catch (error) {
                console.log(error.message);
                process.exit(1);
            }

            const hint = this.getHint(input.split('').map(Number));
            console.log(hint);

            if (hint === '3스트라이크') {
                console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
                const restart = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
                if (restart === '1') {
                    return new BaseballGame().play();
                } else {
                    break;
                }
            }
        }
    }
}

class App {
    constructor() {
        this.baseballGame = new BaseballGame();
    }

    play() {
        this.baseballGame.play();
    }
}

const app = new App();
app.play();

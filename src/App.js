import { MissionUtils } from '@woowacourse/mission-utils';

const REG_INPUT_NUMBER = /^(?!.*(.).*\1)[1-9]{3}$/;

class App {
    async play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        const computerNumber = this.createComputerNumber();
        return this.calculateResults(computerNumber);
    }

    // * 유저 숫자를 받는 함수
    async inputUserNumber() {
        const inputValue = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        if (!REG_INPUT_NUMBER.test(inputValue)) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        } else {
            return Array.from(inputValue).map(Number);
        }
    }

    // * 컴퓨터 숫자 생성 함수
    createComputerNumber() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }

    // * 야구 결과 계산 함수
    async calculateResults(computerNumber) {
        const userNumber = await this.inputUserNumber();
        let score = {
            strike: 0,
            ball: 0,
        };

        computerNumber.forEach((element, index) => {
            if (computerNumber[index] === userNumber[index]) {
                score.strike++;
            } else if (computerNumber.includes(userNumber[index])) {
                score.ball++;
            }
        });

        this.resultText(score);

        if (score.strike !== 3) {
            return this.calculateResults(computerNumber);
        } else {
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            const inputValue = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
            if (inputValue === '1') {
                const computerNumber = this.createComputerNumber();
                return this.calculateResults(computerNumber);
            } else if (inputValue === '2') {
                return;
            } else {
                throw new Error('[ERROR] 잘못된 입력입니다.');
            }
        }
    }

    resultText(score) {
        if (score.strike <= 0 && score.ball <= 0) {
            MissionUtils.Console.print('낫싱');
        } else {
            let result = [];
            if (score.ball > 0) {
                result.push(`${score.ball}볼`);
            }
            if (score.strike > 0) {
                result.push(`${score.strike}스트라이크`);
            }
            MissionUtils.Console.print(result.join(' '));
        }
    }
}

export default App;

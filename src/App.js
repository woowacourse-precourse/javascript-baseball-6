import { MissionUtils } from "@woowacourse/mission-utils";

export default class App {
    constructor() {
        this.computerNumbers = [];
        this.addComputerNumbers(); 
    }

    addComputerNumbers() {
        while (this.computerNumbers.length < 3) {
            const randomDigit = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.computerNumbers.includes(randomDigit)) {
                this.computerNumbers.push(randomDigit);
            }
        }
    }

    async play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

        while (true) {
            const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

            if (userInput.length !== 3 || !this.isInputValid(userInput)) {
                throw new Error('[ERROR] 잘못된 입력입니다.');
            }

            const { strike, ball } = this.getStrikeAndBallCount(userInput);

            if (strike === 3) {
                MissionUtils.Console.print('3스트라이크');
                MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

                const userChoice = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
                if (userChoice === '1') {
                    this.computerNumbers = [];
                    this.addComputerNumbers();
                    continue;
                } else {
                    break;
                }
            }

            let resultMessage = this.generateResultMessage(strike, ball);
            MissionUtils.Console.print(resultMessage);
        }
    }

    isInputValid(input) {
        const uniqueDigits = [...new Set(input.split(''))];
        return uniqueDigits.length === 3 && uniqueDigits.every(digit => digit >= '1' && digit <= '9');
      }
      getStrikeAndBallCount(userInput) {
        let strike = 0;
        let ball = 0;

        userInput.split('').forEach((digit, index) => {
            if (digit == this.computerNumbers[index]) {
                strike++;
            } else if (this.computerNumbers.includes(Number(digit))) {
                ball++;
            }
        });

        return { strike, ball };
    }
    generateResultMessage(strike, ball) {
      let resultMessage = '';
      if (ball > 0) resultMessage += `${ball}볼 `;
      if (strike > 0) resultMessage += `${strike}스트라이크`;
      if (ball === 0 && strike === 0) resultMessage = '낫싱';
      return resultMessage.trim();
  }
}

const app = new App();
app.play().catch(error => {
    MissionUtils.Console.print(error.message);
});

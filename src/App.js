import {MissionUtils} from "@woowacourse/mission-utils";

class App {
    async play() {
        while (true) {
            const computer = await this.generateRandomNumber();
            // MissionUtils.Console.print(computer);
            let gameOver = false;

            while (!gameOver) {
                const userInput = await this.getUserInput();

                const {ballCount, strikeCount} = await this.calculateBallAndStrike(computer, userInput);

                await this.printResult(ballCount, strikeCount);

                if (strikeCount === 3) {
                    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
                    const newGame = await this.askForNewGame();
                    if (newGame === '1') {
                        gameOver = true;
                    } else if (newGame === '2') {
                        MissionUtils.Console.print("게임 종료");
                        return;
                    }
                }
            }
        }
    };

    async generateRandomNumber() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        //console.log(computer)
        return computer;
    };

    async getUserInput() {
        let userInput;

        userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        if (!/^\d{3}$/.test(userInput) || isNaN(userInput) || userInput.includes(0)) {
            throw new Error('[ERROR]');
        }
        return userInput;
    };

    async calculateBallAndStrike(computer, userInput) {
        let strikeCount = 0;
        let ballCount = 0;

        for (let i = 0; i < 3; i++) {
            if (computer[i] === parseInt(userInput[i])) {
                strikeCount++;
            } else if (computer.includes(parseInt(userInput[i]))) {
                ballCount++;
            }
        }

        return {ballCount, strikeCount};
    };

    async askForNewGame() {
        const num = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ");
        if (num !== '1' && num !== '2') {
            throw new Error('[ERROR]');
        }
        return num;
    };

    async printResult(ballCount, strikeCount) {
        if (ballCount > 0 && strikeCount > 0) {
            MissionUtils.Console.print(ballCount + "볼 " + strikeCount + "스트라이크");
        } else if (ballCount > 0) {
            MissionUtils.Console.print(ballCount + "볼");
        } else if (strikeCount > 0) {
            MissionUtils.Console.print(strikeCount + "스트라이크");
        } else {
            MissionUtils.Console.print("낫싱");
        }
    };

}

export default App;

MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
const app = new App();

app.play();






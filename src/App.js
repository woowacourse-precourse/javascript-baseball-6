import Computer from './Computer.js';
import BaseballGame from './BaseballGame.js';
import { Console } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.computer = new Computer();
        this.baseballGame = new BaseballGame();
    }

    async play() {
        Console.print('숫자 야구 게임을 시작합니다.');

        while(1) {
            const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
            const checkUserInput = this.baseballGame.check(userInput);

            // 사용자가 잘못된 값을 입력한 경우
            if (checkUserInput === false) {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }

            // 사용자가 정상적인 값을 입력한 경우
            const result = this.baseballGame.compare(this.computer.numbers, userInput);
            Console.print(result);

            if (result === '3스트라이크') {
                Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
                break;
            }
        }
    }
}

// 숫자아구 게임 시작
const app = new App();
app.play();

export default App;
import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";

//사용자의 입력받기

export class BaseballGame {

    /**게임 시작*/
    async startGame() {
        Console.print('숫자 야구 게임을 사작합니다.');
        const computer = new Computer();
        const answer = computer.createRandomNum();
        console.log(answer); //테스트를 위한 출력
        let pitch = false;
        while (!pitch) {
            try {
                const userInput = await Console.readLineAsync('숫자를 입력해주세요: ');
                if (isNaN(userInput)) {
                    throw new Error("[ERROR]");
                }

                const userNumber = userInput.split('').map(Number);
                if (userNumber.length != 3) {
                    throw new Error("[ERROR]");
                }
                if (userNumber[0] == userNumber[1] || userNumber[1] == userNumber[2] || userNumber[0] == userNumber[2]) {
                    throw new Error("[ERROR]");
                }

                pitch = this.compare(answer, userNumber);

            } catch (error) {
                Console.print(error.message);
                return false;
            }
        }
        if (pitch) {
            Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            return true;
        }

    }

    //숫자 비교 함수
    compare(answer, userNumber) {
        
    }
}

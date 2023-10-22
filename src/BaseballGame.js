import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";

//사용자의 입력받기

export class BaseballGame {

    /**게임 시작*/
    async startGame() {
        Console.print('숫자 야구 게임을 사작합니다.');
        const computer = new Computer();
        const answer = computer.createRandomNum();
        
        let pitch = false;
        while (!pitch) {
            try {
                const userInput = await Console.readLineAsync('숫자를 입력해주세요: ');
                if (isNaN(userInput)) {
                    throw new Error("");
                }

                const userNumber = userInput.split('').map(Number);
                if (userNumber.length != 3) {
                    throw new Error("");
                }
                if (userNumber[0] == userNumber[1] || userNumber[1] == userNumber[2] || userNumber[0] == userNumber[2]) {
                    throw new Error("");
                }

                pitch = this.compare(answer, userNumber);

            } catch (error) {
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
        let strikeCount = 0;
        let ballCount = 0;
        answer.forEach((element1, index1) => {
            userNumber.forEach((element2, index2) => {
                if (element1 == element2 && index1 == index2) strikeCount++;
                else if (element1 == element2) ballCount++;
            })
        });

        if (strikeCount != 0 && ballCount != 0) {
            Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
            return false;
        }
        else if (strikeCount != 0 && ballCount == 0) {
            Console.print(`${strikeCount}스트라이크`);
            if (strikeCount == 3) return true;
            else return false;
        }
        else if (strikeCount == 0 && ballCount != 0) {
            Console.print(`${ballCount}볼`);
            return false;
        }
        else {
            Console.print('낫싱');
            return false;
        }
    }
}

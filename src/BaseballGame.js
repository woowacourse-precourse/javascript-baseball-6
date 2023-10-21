import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";

//사용자의 입력받기

export class BaseballGame {

    /**게임 시작*/
    async startGame() {
        Console.print('숫자 야구 게임을 사작합니다.');
        const computer = new Computer();
        const answer = computer.createRandomNum();
        try {
            const userInput = await Console.readLineAsync('숫자를 입력해주세요: ');
            const userNumber = userInput.split('').map(Number);
            this.compare(answer, userNumber);
        } catch (error) {
            throw error;
        }
        
    }

    //숫자 비교 함수
    compare(answer, userNumber) {
        let strikeCount = 0;
        let ballCount = 0;
        answer.forEach((element1, index1) => {
            userNumber.forEach((element2, index2) => {
                if(element1 == element2 && index1 == index2) strikeCount++;
                else if (element1 == element2) ballCount++;
            })
        });
        
        if(strikeCount != 0 && ballCount != 0){
            Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
        }
        else if (strikeCount != 0 && ballCount == 0) {
            Console.print(`${strikeCount}스트라이크`);
        }
        else if (strikeCount == 0 && ballCount != 0) {
            Console.print(`${ballCount}볼`);
        }
        else {
            Console.print('낫싱');
        }
    }
}

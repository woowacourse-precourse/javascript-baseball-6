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
                for (let i = 0; i < userInput.length; i++) {
                    let char = userInput.charAt(i)
                    let ascii = char.charCodeAt()
                    if ('1'.charCodeAt() <= ascii && ascii <= '9'.charCodeAt()) {
                        continue;
                    }
                    throw new Error("[ERROR] 문자를 입력하였습니다");
                }

                const userNumber = userInput.split('').map(Number);
                if (userNumber.length != 3) {
                    throw new Error("[ERROR] 3자리 숫자가 아닙니다");
                }
                if (new Set(userNumber).size != 3) {
                    throw new Error("[ERROR] 중복된 숫자가 있습니다");
                }

                pitch = this.compare(answer, userNumber);

            } catch (error) {
                Console.print(error);
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
                if(element1 != element2) return;
                if (index1 == index2) {
                    strikeCount++;
                }
                else {
                    ballCount++;
                }
            })
        });

        let result = "";
        if (ballCount > 0) {
            result += ballCount + "볼 ";
        }
        if (strikeCount > 0) {
            result += strikeCount + "스트라이크";
        }
        if (strikeCount + ballCount == 0) {
            result = "낫싱"
        }
        Console.print(result.trim());
        return strikeCount == 3
    }
}

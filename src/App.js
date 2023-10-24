import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async play() {
        let finish = true; // 게임의 끝을 정하는 변수
        Console.print('숫자 야구 게임을 시작합니다.');
        while (finish) {
            const computer = this.computerNumber();
            await this.userNumber(computer);
            finish = await this.restart();
        }
    }

    // 컴퓨터의 숫자를 무작위로 설정
    computerNumber() {

        const computer = [];
        while (computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }

    // 유저의 숫자를 입력 및 게임종료
    async userNumber(computerInput) {
        while (true) {
            const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
            const userInput = input.trim().split('').map(Number);

            const result = this.checkNumber(userInput, computerInput);
            Console.print(result);

            if (result === '3스트라이크') {
                Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
                break;
            }

        }

    }
    // 스트라이크와 볼의 횟수를 측정
    countNumber(userInput, computerInput) {
        let strike = 0;
        let ball = 0;
        if (this.vaildData(userInput)) {
            for (let i = 0; i < 3; i++) {
                if (userInput[i] === computerInput[i]) {
                    strike++;
                } else if (computerInput.includes(userInput[i])) {
                    ball++;
                }
            }
        } else {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
        return [strike, ball];
    }

    //측정된 스트라이크와 볼을 출력
    checkNumber(userInput, computerInput) {
        const [strike, ball] = this.countNumber(userInput, computerInput);

        if (strike === 0 && ball === 0) {
            return '낫싱'
        } else if (strike === 0) {
            return `${ball}볼`
        } else if (ball === 0) {
            return `${strike}스트라이크`
        } else {
            return `${ball}볼 ${strike}스트라이크`
        }
    }

   

}

export default App;
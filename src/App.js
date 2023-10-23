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
    async userNumber(ComputerInput) {
        while (true) {
            const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
            const userInput = input.trim().split('').map(Number);

            if (userInput.length !== 3 || userInput.some(isNaN)) {
                throw Error('[ERROR] 숫자가 잘못된 형식입니다.');
            }

            const result = this.checkNumber(userInput, ComputerInput);
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
        for (let i = 0; i < 3; i++) {
            if (userInput[i] === computerInput[i]) {
                strike++;
            } else if (computerInput.includes(userInput[i])) {
                ball++;
            }
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

    //게임 재시작 여부 확인 및 재시작
    async restart() {
        Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        const input = await Console.readLineAsync(" 숫자 입력 : ");
        if (input === '1') {
            return true
        } else if (input === '2') {
            return false
        } else {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
        
    }
    
}

export default App;



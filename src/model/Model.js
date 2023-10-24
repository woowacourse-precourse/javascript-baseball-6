import { MissionUtils } from'@woowacourse/mission-utils';

class Model {
    constructor() {
        this.computer = [];
    }

    //랜덤 숫자 생성 메서드
    generateRandomNumber() {
        while (this.computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.computer.includes(number)) {
                this.computer.push(number);
            }
        }
    }

    //사용자 입력 유효성 판단 로직
    isValidUserNumber(input) {
        if (input.length !== 3) return false;
        if (new Set(input).size !== 3) return false;
        if (input.includes('0')) return false;
        if (Number.isNaN(Number(input)) || !Number.isInteger(Number(input)) || Number(input) < 0) return false;
        return true;
    }

    //랜덤 숫자와 사용자 입력 숫자 비교 로직
    compareNumbers(userInput) {
        const compareResult = {
            strike: 0,
            ball: 0,
        };

        const userInputArray = Array.from(String(userInput), Number);
    
        userInputArray.forEach((number, index) => {
            if (number === this.computer[index]) {
                compareResult.strike += 1;
            }
            else if (this.computer.includes(number)) {
                compareResult.ball += 1;
            }
        });

        return compareResult;
    }

}

export default Model;
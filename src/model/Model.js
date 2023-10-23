import { MissionUtils } from "@woowacourse/mission-utils";

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
        if (input.includes(0)) return false;
        if (Number.isNaN(Number(input)) || !Number.isInteger(Number(input)) || Number(input) < 0) return false;
        return true;
    }

}

export default Model;
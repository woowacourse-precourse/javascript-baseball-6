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
    
}

export default Model;
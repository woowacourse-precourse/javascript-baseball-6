import { Random } from "@woowacourse/mission-utils";

class Computer {
    constructor() {
        this.numbers = this.pickRandomNumbers();
    }

    // 1 ~ 9 사이의 서로 다른 3개의 숫자 생성
    pickRandomNumbers() {
        const numbers = [];

        while (numbers.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }

        return numbers.join('');
    }
}

export default Computer;
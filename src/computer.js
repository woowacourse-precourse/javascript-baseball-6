import { Random } from '@woowacourse/mission-utils';

class Computer {
    constructor() {
        this.generatedNumbers = [];
    }

    // 1부터 9까지 중복되지 않는 세 자리 수를 생성
    generateRandomNumber() {
        while (this.generatedNumbers.length < 3) {
            const randomNumber = Random.pickNumberInRange(1, 9);
            if (!this.generatedNumbers.includes(randomNumber)) {
                this.generatedNumbers.push(randomNumber);
            }
        }
        return this.generatedNumbers.join('');
    }
}

export default Computer;

import { Random } from '@woowacourse/mission-utils';

class Computer {
    constructor() {
        this.generatedNumbers = [];
    }

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

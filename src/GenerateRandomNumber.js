import {Random} from '@woowacourse/mission-utils';
const generateRandomNumber = function generateRandomNumberForComputer () {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
        const NUMBER = Random.pickNumberInRange(1, 9);
        if  (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
        }

    }

    return COMPUTER;
}

export default generateRandomNumber;

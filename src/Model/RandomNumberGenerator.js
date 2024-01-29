import { Random } from '@woowacourse/mission-utils';
import { ANSWER_LENGTH } from './ModelConstant.js';

export default function generateRandomNumber(min, max) {
    const numbers = [];
    while ( numbers.length < ANSWER_LENGTH ) {
        const number = Random.pickNumberInRange(min, max);
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    return numbers.join('');
}
import { MissionUtils } from '@woowacourse/mission-utils';
import NUMBERS_LENGTH from './numbersLength.js';

const pickNumberInRange = () => MissionUtils.Random.pickNumberInRange(1, 9);

const isUnique = (arr, number) => !arr.includes(number);

const getPushedUniqueNumbersArr = (arr, number) => {
    if (isUnique(arr, number)) {
        return [...arr, number];
    }
    return [...arr];
};

const makeNumbersArrayGivenLength = (arr = []) => {
    if (arr.length < NUMBERS_LENGTH) {
        return makeNumbersArrayGivenLength(getPushedUniqueNumbersArr(arr, pickNumberInRange()));
    }
    return [...arr];
};

const pickUniqueNumbersInRange = () => {
    return makeNumbersArrayGivenLength();
};

export { pickUniqueNumbersInRange };
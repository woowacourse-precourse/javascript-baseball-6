import { MissionUtils } from '@woowacourse/mission-utils';

const pickNumberInRange = () => MissionUtils.Random.pickNumberInRange(1, 9);

const isUnique = (arr, number) => !arr.includes(number);

const getPushedUniqueNumbersArr = (arr, number) => {
    if (isUnique(arr, number)) {
        return [...arr, number];
    }
    return [...arr];
};

const makeNumbersArrayGivenLength = (numbersLength, arr = []) => {
    if (arr.length < numbersLength) {
        return makeNumbersArrayGivenLength(numbersLength, getPushedUniqueNumbersArr(arr, pickNumberInRange()));
    }
    return [...arr];
};

const pickUniqueNumbersInRange = (numbersLength) => {
    return makeNumbersArrayGivenLength(numbersLength);
};

export { pickUniqueNumbersInRange };
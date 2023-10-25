import { MissionUtils } from '@woowacourse/mission-utils';

const pickNumberInRange = () => MissionUtils.Random.pickNumberInRange(1, 9);

const isUnique = (arr, number) => !arr.includes(number);

const getPushedArr = (arr, number) => {
    if (isUnique(arr, number)) {
        return [...arr, number];
    }
};

const makeNumbersLength = (numbersLength, arr = []) => {
    if (arr.length < numbersLength) {
        return makeNumbersLength(numbersLength, getPushedArr(arr, pickNumberInRange()));
    }

    return [...arr];
};



const pickUniqueNumbersInRange = (numbersLength) => {
    return makeNumbersLength(numbersLength);
};

export { pickUniqueNumbersInRange };
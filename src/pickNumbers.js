import { MissionUtils } from '@woowacourse/mission-utils';

const pickNumberInRange = () => MissionUtils.Random.pickNumberInRange(1, 9);

const isUnique = (arr, number) => !arr.includes(number);

const pickUniqueNumbersInRange = (numbersLength) => {
    const numbers = [];

    while (numbers.length < numbersLength) {
        const randomNumber = pickNumberInRange();

        if (isUnique(numbers, randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers;
};

export { pickUniqueNumbersInRange };
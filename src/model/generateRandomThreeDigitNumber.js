import { MissionUtils } from '@woowacourse/mission-utils';

export const generateRandomThreeDigitNumber = function returnThreeDigitNumberByRandom() {
    let randomNumbersList = [];

    while (randomNumbersList.length < 3) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!randomNumbersList.includes(randomNumber)) {
            randomNumbersList.push(randomNumber)
        }
    }

    return randomNumbersList.join('')
}
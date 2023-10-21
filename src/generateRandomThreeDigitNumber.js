import { MissionUtils } from '@woowacourse/mission-utils';

const generateRandomThreeDigitNumber = () => {
    let randomNumbersList = [];

    while (randomNumbersList.length < 3) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!randomNumbersList.includes(randomNumber)) {
            randomNumbersList.push(randomNumber)
        }
    }

    return randomNumbersList.join('')
}
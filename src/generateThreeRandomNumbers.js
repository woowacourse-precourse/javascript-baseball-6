import { MissionUtils } from '@woowacourse/mission-utils';

const generateRandomThreeDigitNumber = () => {
    let randomThreeDigitNumber = '';
    
    for (let _ = 0; _ < 3; _++) {
        randomThreeDigitNumber += MissionUtils.Random.pickNumberInRange(1, 9).toString();
    }
    return randomThreeDigitNumber
}
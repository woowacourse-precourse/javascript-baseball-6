import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME, ERROR } from '../pages/texts';

export default async function inputUserNumber() {
    /* User에게 숫자 입력받기 */
    const userNumber = MissionUtils.Console.readLineAsync(GAME.INPUT);

    /* 입력받은 숫자가 숫자가 아닐때 */
    if (isNaN(userNumber)) {
        throw new Error(ERROR.NUMERIC);
    }

    /* 입력받은 숫자가 0일때 */
    if (userNumber.includes(0)) {
        throw new Error(ERROR.INCLUDE_0);
    }

    /* 입력받은 숫자가 세 자리가 아닐때 */
    if (userNumber.length !== 3) {
        throw new Error(ERROR.LENGTH);
    }

    /* 입력받은 숫자의 각 자리수가 모두 같은숫자 일때 */
    const sameNumber = new Set(userInput);
    if (sameNumber.size !== userInput.length) {
        throw new Error(ERROR.DOUBLE);
    }

    /* 유저에게 입력받은 숫자 -> int형으로 */
    const userNumberArray = userNumber.split('').map((x) => parseInt(x));

    return userNumberArray;
}

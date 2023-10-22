import { MissionUtils } from '@woowacourse/mission-utils';

export const getUserNumberInput = async () => {
    return await MissionUtils.Console.readLineAsync('숫자를 입력하세요 : ')
        .then(userNumberInput => {
            return userNumberInput;
        })
        .catch(err => {
            throw err;
        });
}
import { MissionUtils } from '@woowacourse/mission-utils';

const isValidDecision = (input) => {
    if (input === '1' || input === '2') {
        return true
    } else {
        return false
    }
}

export const getUserGameDecision = async () => {
    return await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n')
        .then(userGameDecision => {
            if (isValidDecision(userGameDecision)) {
                return userGameDecision;
            } else {
                throw new Error('1과 2 중에서 입력해주세요.')
            }
        })
        .catch(err => {
            throw err;
        });
}
import { MissionUtils } from '@woowacourse/mission-utils';

export const getUserGameDecision = async () => {
    return await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n')
        .then(userGameDecision => {
            return userGameDecision;
        })
        .catch(err => {
            throw err;
        });
}
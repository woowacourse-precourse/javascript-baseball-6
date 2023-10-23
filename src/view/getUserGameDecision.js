import { MissionUtils } from '@woowacourse/mission-utils';

const checkValidDecision = function checkDecisionIsOneOrTwo(input) {
    const validValueList = ['1', '2'];
    if (!validValueList.includes(input)) {
        throw new Error('[ERROR] 1과 2 중에서 입력해주세요.')
    }
}

const getUserGameDecision = async function getUserGameDecisionFromUserInput() {
    const userGameDecision = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    checkValidDecision(userGameDecision)
    return userGameDecision
}

export default getUserGameDecision;
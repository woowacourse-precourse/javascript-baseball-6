import { MissionUtils } from '@woowacourse/mission-utils';
export default class User {
    async returnUserNumber() {
        const input = await MissionUtils.Console.readLineAsync(
            '숫자를 입력해주세요 : '
        );

        if (input.length !== 3 || input.includes('0') || Number.isNaN(input)) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

        return input;
    }

    async returnUserReplay() {
        const input = await MissionUtils.Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
        );
        if (
            input.length !== 1 ||
            (input !== '1' && input !== '2') ||
            Number.isNaN(input)
        ) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

        return input;
    }
}

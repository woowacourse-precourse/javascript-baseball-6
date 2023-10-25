import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from './Computer';
export default class User {
    async getUserNumber() {
        const input = await MissionUtils.Console.readLineAsync(
            '숫자를 입력해주세요 : '
        );

        if (
            input.length !== Computer.NUM_SIZE ||
            input.includes('0') ||
            Number.isNaN(input)
        ) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

        return input;
    }

    async getUserReplay() {
        const input = await MissionUtils.Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
        );
        if (
            input.length !== Computer.MODE_SIZE ||
            (input !== Computer.REPLAY_CODE && input !== Computer.QUIT_CODE) ||
            Number.isNaN(input)
        ) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

        return input;
    }
}

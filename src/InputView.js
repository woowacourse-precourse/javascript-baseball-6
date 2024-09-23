import { MissionUtils } from "@woowacourse/mission-utils";

export const InputView = {
    async inputNumber() {
        const tryNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요:');
        return tryNumber;
    },

    async inputRestartNumber() {
        //Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        const restart = await MissionUtils.Console.readLineAsync('');
        return restart;
    }
}
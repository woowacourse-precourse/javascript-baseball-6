import App  from '../src/App';
const MissionUtils = require('@woowacourse/mission-utils');

describe('기능 테스트', () => {
    test('게임 메세지 출력', async () => {
        const app = new App();
        const logSpy = jest.spyOn(MissionUtils.Console, 'print');
        app.gameStartText();
        expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
    });
});

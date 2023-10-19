import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

test('콘솔 테스트', async () => {
  const logSpy = getLogSpy();

  const app = new App();
  app.play();

  await expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
});

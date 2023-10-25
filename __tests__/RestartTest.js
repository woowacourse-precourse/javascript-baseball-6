import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR_MESSAGE } from '../src/App.js';

const mockConsoleFn = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(()=> input);
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
}

describe("게임 종료 및 재개 테스트", () => {
  test("게임을 종료하는 경우", async () => {
    const app = new App();
    const logSpy = getLogSpy();
    mockConsoleFn('2');
    await app.wantToReplay();
    expect(logSpy).toHaveBeenCalledWith(MESSAGE.END);
  })

  test("1과 2가 아닌 다른 값을 입력했을 경우", async () => {
    const app = new App();
    mockConsoleFn('게임종료해줘.');
    await expect(app.wantToReplay()).rejects.toThrow(ERROR_MESSAGE.RESTART);
  })
})
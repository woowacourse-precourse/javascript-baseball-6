import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockGetResult = (randomNumber, userInput) => {
  const app = new App();
  app.randomNumber = randomNumber;
  app.userInput = userInput;
  app.getResult();
  app.printResult();
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
}

describe("게임 결과 출력 테스트", () => {
  test("3스트라이크인 경우", () => {
    const logSpy = getLogSpy();
    mockGetResult([1,5,8], [1,5,8])    
    expect(logSpy).toHaveBeenCalledWith('3스트라이크');
  });

  test("1볼 1스트라이크인 경우", () => {
    const logSpy = getLogSpy();
    mockGetResult([1,5,8], [9,5,1])    
    expect(logSpy).toHaveBeenCalledWith('1볼 1스트라이크');
  });

  test("낫싱인 경우", () => {
    const logSpy = getLogSpy();
    mockGetResult([1,5,8], [2,4,9])    
    expect(logSpy).toHaveBeenCalledWith('낫싱');
  });
});
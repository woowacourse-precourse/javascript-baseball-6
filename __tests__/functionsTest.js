import App from '../src/App'
import {MissionUtils} from "@woowacourse/mission-utils";


const mockQuestions = (answers) => {
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, MissionUtils.Console.readLine);
  };

describe("야구 게임 테스트", () => {
  test("시작 메세지 출력", () => {
    const logSpy = jest.spyOn(console, 'log');
    logSpy.mockClear();

    const app = new App();
    app.startGame();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test("사용자 숫자 입력 받기", () => {
    const userNumber = ["456"];

    mockQuestions(userNumber);

    const app = new App();
    const result = app.selectUser(); 

    expect(result).toEqual("456");
  });

});
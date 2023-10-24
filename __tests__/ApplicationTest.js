import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";


export const mockQuestions = (inputs) => {
  // App.js에서 사용되는 readLineAsync을 jest mock함수로 대체
  MissionUtils.Console.readLineAsync = jest.fn();
  
  // readLineAsync의 기능을 미리 만든 배열의 첫번째 인덱스 값을 반환하는 코드로 수정
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

export const mockRandoms = (numbers) => {

  // App.js의 랜덤 숫자 3개를 뽑는 코드를 mock 함수로 대체 
  MissionUtils.Random.pickNumberInRange = jest.fn();
  
  // [1, 3, 5, 5, 8, 9];
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);


};

const getLogSpy = () => {
  // Console.print가 실행되는 것을 spy를 통해 확인하도록 설정
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};



describe("숫자 야구 게임", () => {
  test("게임 종료 후 재시작", async () => {
    // given
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();
    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

});


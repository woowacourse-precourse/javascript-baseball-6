import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => { //가짜 입력값 설정
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => { // mockImplementation를 이용하여 함수를 즉석으로 구현한다.
    const input = inputs.shift();
    return Promise.resolve(input); // answer 배열의 앞에 있는 인자 도출
  });
};

const mockRandoms = (numbers) => { // 가짜 랜덤값을 설정
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => { // MissionUtils.Random.pickNumberInRange에 numbers 배열의 값들을 매기는 기능
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
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
    // app.play() 함수가 Promise를 반환하고 해당 Promise가 성공적으로 해결되며 예외를 던지지 않는 경우에만 테스트가 통과한다는 것을 의미
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    // then
    messages.forEach((output) => { 
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output)); //logspy 함수가 output 문자열을 포함하는 문자열을 인수로 호출하였는가
      //expect.stringContaining(output) 해당 문자열을 포함하였는가 확인
    });
  });

  test("예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();
    
    // app.play() 함수가 Promise를 반환하고 해당 Promise가 거부되며 [ERROR] 예외 메시지가 발생해야 테스트가 통과한다는 것을 의미
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

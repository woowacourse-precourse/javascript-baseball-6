import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
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
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
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

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  //예외테스트
  test("예외 테스트: 입력값이 4자리 이상인 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 3자리여야 합니다.");
  });
  test("예외 테스트: 입력값이 2자리인 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 3자리여야 합니다.");
  });
  test("예외 테스트: 입력값이 1자리인 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 3자리여야 합니다.");
  });
  test("예외 테스트: 입력값이 공백인 경우", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = [" "];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 3자리여야 합니다.");
  });
  // 예외테스트2
  test("예외 테스트: 입력값이 숫자가 아닌 값이 포함된 경우 - 문자 1개", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["12a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 입력값은 숫자여야 합니다.");
  });
  test("예외 테스트: 입력값이 숫자가 아닌 값이 포함된 경우 - 문자 2개", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1ab"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 입력값은 숫자여야 합니다.");
  });
  test("예외 테스트: 입력값이 숫자가 아닌 값이 포함된 경우 - 문자 3개", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["abb"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR] 입력값은 숫자여야 합니다.");
  });

    // 예외테스트3
    test("예외 테스트: 입력값이 숫자가 중복인 경우1, 1자리와 2자리 동일", async () => {
      // given
      const randoms = [1, 3, 5];
      const answers = ["112"];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 중복되지 않아야 합니다.");
    });
    test("예외 테스트: 입력값이 숫자가 중복인 경우2, 1자리와 3자리 동일", async () => {
      // given
      const randoms = [1, 3, 5];
      const answers = ["121"];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 중복되지 않아야 합니다.");
    });
    test("예외 테스트: 입력값이 숫자가 중복인 경우3, 2자리와 3자리 동일", async () => {
      // given
      const randoms = [1, 3, 5];
      const answers = ["122"];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 중복되지 않아야 합니다.");
    });
    test("예외 테스트: 입력값이 숫자가 중복인 경우4, 모두 동일", async () => {
      // given
      const randoms = [1, 3, 5];
      const answers = ["111"];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow("[ERROR] 숫자가 중복되지 않아야 합니다.");
    });
  
    // 예외테스트4
    test("예외 테스트: 입력값에 숫자 0이 포함된 경우 1", async () => {
      // given
      const randoms = [1, 3, 5];
      const answers = ["011"];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow("[ERROR] 숫자는 1~9 사이의 숫자여야 합니다.");
    });
    test("예외 테스트: 입력값에 숫자 0이 포함된 경우 2", async () => {
      // given
      const randoms = [1, 3, 5];
      const answers = ["102"];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow("[ERROR] 숫자는 1~9 사이의 숫자여야 합니다.");
    });
    test("예외 테스트: 입력값에 숫자 0이 포함된 경우 3", async () => {
      // given
      const randoms = [1, 3, 5];
      const answers = ["120"];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow("[ERROR] 숫자는 1~9 사이의 숫자여야 합니다.");
    });

});

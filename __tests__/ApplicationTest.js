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
  let originalPickNumberInRange = MissionUtils.Random.pickNumberInRange;

  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);

  MissionUtils.Random.pickNumberInRange = originalPickNumberInRange;
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test("게임 종료 후 재시작", async () => {
    // given
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

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
  //
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

  describe("입력값 테스트", () => {
    test("3자리 숫자인 경우", () => {
      const isValid = app.validateInput("123");

      expect(isValid).toBe(true);
    });
    test("3자리 숫자가 아닌 경우", () => {
      const isValid = app.validateInput("1234");

      expect(isValid).toBe(false);
    });
    test("1~9 사이의 숫자가 아닌 경우", () => {
      const isValid = app.validateInput("abc");

      expect(isValid).toBe(false);
    });
    test("중복된 숫자가 있는 경우", () => {
      const isValid = app.validateInput("112");

      expect(isValid).toBe(false);
    });
  });

  describe("랜덤값 테스트", () => {
    test("랜덤값 길이 확인", () => {
      const randomNumber = app.generateRandomNumber();
      expect(randomNumber.length).toBe(3);
    });
    test("중복 확인", () => {
      for (let i = 0; i < 50; i++) {
        const randomNumber = app.generateRandomNumber();
        const regEx = /(\d).*\1/;
        expect(regEx.test(randomNumber)).toBe(false);
      }
    });
  });

  describe("pitch 결과 테스트", () => {
    let answer = "123";

    describe("스트라이크 테스트", () => {
      test("3스트라이크", () => {
        const input = "123";

        const { strike, ball } = app.countPitchResult(answer, input);
        const output = app.outputPitchResult(strike, ball);

        expect(output).toBe("3스트라이크");
      });
      test("2스트라이크", () => {
        const input = ["124", "423", "183"];

        input.forEach((input) => {
          const { strike, ball } = app.countPitchResult(answer, input);
          const output = app.outputPitchResult(strike, ball);

          expect(output).toBe("2스트라이크");
        });
      });
      test("1스트라이크", () => {
        const input = ["145", "425", "453"];

        input.forEach((input) => {
          const { strike, ball } = app.countPitchResult(answer, input);
          const output = app.outputPitchResult(strike, ball);

          expect(output).toBe("1스트라이크");
        });
      });
    });

    describe("볼 테스트", () => {
      test("3볼", () => {
        const input = "312";

        const { strike, ball } = app.countPitchResult(answer, input);
        const output = app.outputPitchResult(strike, ball);

        expect(output).toBe("3볼");
      });
      test("2볼", () => {
        const input = ["412", "241", "214"];

        input.forEach((input) => {
          const { strike, ball } = app.countPitchResult(answer, input);
          const output = app.outputPitchResult(strike, ball);

          expect(output).toBe("2볼");
        });
      });
      test("1볼", () => {
        const input = ["516", "651"];

        input.forEach((input) => {
          const { strike, ball } = app.countPitchResult(answer, input);
          const output = app.outputPitchResult(strike, ball);

          expect(output).toBe("1볼");
        });
      });
    });

    describe("스트라이크 & 볼 테스트", () => {
      test("1볼 1스트라이크 ", () => {
        const input = ["142", "324", "243"];

        input.forEach((input) => {
          const { strike, ball } = app.countPitchResult(answer, input);
          const output = app.outputPitchResult(strike, ball);

          expect(output).toBe("1볼 1스트라이크");
        });
      });
      test("2볼 1스트라이크 ", () => {
        const input = ["132", "321", "213"];

        input.forEach((input) => {
          const { strike, ball } = app.countPitchResult(answer, input);
          const output = app.outputPitchResult(strike, ball);

          expect(output).toBe("2볼 1스트라이크");
        });
      });
    });

    test("낫싱 테스트", () => {
      const input = "456";

      const { strike, ball } = app.countPitchResult(answer, input);
      const output = app.outputPitchResult(strike, ball);

      expect(output).toBe("낫싱");
    });
  });
});

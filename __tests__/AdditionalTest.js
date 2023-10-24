import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { ERROR_MESSAGES } from "../src/constants/errorMessages.js";
import Gong from "../src/domains/Gong.js";

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
  test("한 게임 플레이", async () => {
    const randoms = [6, 4, 8];
    const answers = ["123", "345", "456", "621", "468", "645", "648", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1스트라이크",
      "2볼",
      "1스트라이크",
      "2볼 1스트라이크",
      "2스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("재시작 테스트", async () => {
    const randoms = [...Array(11).fill([1, 2, 3])].flat();
    const answers = [...Array(10).fill(["123", "1"]), "123", "2"].flat();
    const logSpy = getLogSpy();
    const messages = [
      ...Array(10).fill("3스트라이크"),
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("중복 숫자에 관한 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["122"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGES.HAVE_DUPLICATION);
  });

  test("타입에 관한 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["asd"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGES.NOT_A_NUMBER);
  });

  test("공백 포함에 관한 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = [" 12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGES.NOT_A_NUMBER);
  });

  test("단일 공백에 관한 예외테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = [""];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGES.NOT_MATCH_LENGTH);
  });

  test("입력 범위에 관한 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["120"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGES.OUT_OF_RANGE);
  });

  test("게임 종료 후 입력값 예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["135", "a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    const app = new App();

    await expect(app.play()).rejects.toThrow(
      ERROR_MESSAGES.NOT_MATCH_END_OR_RESTART
    );
  });


  describe("Gong 클래스의 getNewGongs 메서드", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it("중복 없는 숫자 배열을 반환", () => {
      const mockNumbers = [1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9];
      mockRandoms(mockNumbers);
  
      const newGongs = Gong.getNewGongs();
  
      expect(newGongs.length).toBe(Gong.GONGS_LENGTH);
  
      const uniqueGongs = [...new Set(newGongs)];
      expect(uniqueGongs.length).toBe(Gong.GONGS_LENGTH);

      uniqueGongs.forEach(num => {
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(9);
      });
    });
  });
  


});

const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '3스트라이크', '1볼 1스트라이크', '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});






// const { App } = require('../src/index');
// const { Console, Random } = require("@woowacourse/mission-utils");

// const mockQuestions = (inputs) => {
//   Console.readLineAsync = jest.fn();
//   Console.readLineAsync.mockImplementation(() => {
//     const input = inputs.shift();
//     return Promise.resolve(input);
//   });
// };

// const mockRandoms = (numbers) => {
//   Random.pickNumberInRange = jest.fn();
//   numbers.reduce((acc, number) => {
//     return acc.mockReturnValueOnce(number);
//   }, Random.pickNumberInRange);
// };

// const getLogSpy = () => {
//   const logSpy = jest.spyOn(Console, "print");
//   logSpy.mockImplementation(() => {});
//   return logSpy;
// };

// describe("숫자 야구 게임", () => {
//   test("게임 종료 후 재시작", async () => {
//     // given
//     const randoms = [1, 3, 5, 5, 8, 9];
//     const answers = ["246", "135", "1", "597", "589", "2"];
//     const logSpy = getLogSpy();
//     const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

//     mockRandoms(randoms);
//     mockQuestions(answers);

//     // when
//     const app = new App();
//     await expect(app.play()).resolves.not.toThrow();

//     // then
//     messages.forEach((output) => {
//       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
//     });
//   });

//   test("예외 테스트", async () => {
//     // given
//     const randoms = [1, 3, 5];
//     const answers = ["1234"];

//     mockRandoms(randoms);
//     mockQuestions(answers);

//     // when & then
//     const app = new App();

//     await expect(app.play()).rejects.toThrow("[ERROR]");
//   });
// });

import { Console } from "@woowacourse/mission-utils";

const getLogSpy = (str) => {
  const logSpy = jest.spyOn(Console, str);
  logSpy.mockClear();
  return logSpy;
};

describe("console.js test", () => {
  test("print 함수 출력 테스트", () => {
    const outputs = ["123", "aaa", "안녕"];
    const logSpy = getLogSpy("print");

    outputs.forEach((output) => {
      Console.print(output);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

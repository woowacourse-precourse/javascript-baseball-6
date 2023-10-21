import { Console } from "./console";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("console.js test", () => {
  test("출력 테스트", () => {
    const outputs = ["123", "aaa", "안녕"];
    const logSpy = getLogSpy();

    outputs.forEach((output) => {
      Console.print(output);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

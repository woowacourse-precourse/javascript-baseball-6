import OutputView from "../src/views/OutputView";

describe('OutputView', () => {
  let printStaticMessageMock;

  beforeEach(() => {
    printStaticMessageMock = jest.fn();
    OutputView.printStaticMessage = printStaticMessageMock;
  });

  const testCases = [
    { ball: 2, strike: 1, expectedMessage: '2볼 1스트라이크' },
    { ball: 0, strike: 0, expectedMessage: '낫싱' },
    { ball: 3, strike: 0, expectedMessage: '3볼' },
    { ball: 0, strike: 3, expectedMessage: '3스트라이크' },
  ];

  test.each(testCases)('게임진행상황 출력테스트', (testCase) => {
    const { ball, strike, expectedMessage } = testCase;
    OutputView.printGameProgress(ball, strike);
    expect(printStaticMessageMock).toHaveBeenCalledWith(expectedMessage);
  });
});
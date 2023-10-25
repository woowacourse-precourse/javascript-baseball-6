import AnswerComparator from "../src/gameUtils/AnswerComparator";
const expectedAnswer = [
  { ball: 1, strike: 1, nothing: 1 },
  { ball: 1, strike: 0, nothing: 2 },
  { ball: 2, strike: 0, nothing: 1 },
  { ball: 0, strike: 1, nothing: 2 },
  { ball: 0, strike: 3, nothing: 0 },
];
describe("AnswerComparator 클래스 테스트", () => {
  test("compareAnswer 함수를 가지고 있어야 한다.", () => {
    expect(typeof AnswerComparator.compareAnswer).toBe("function");
  });

  test("스트라이크, 볼에 대한 판정을 한다.", () => {
    const answer = "713";
    const listGuess = ["123", "145", "671", "216", "713"];

    const temp = listGuess.map((guess) => {
      return AnswerComparator.compareAnswer(guess, answer);
    });
    expect(temp).toEqual(expectedAnswer);
  });
});

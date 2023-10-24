import Computer from "../src/computer.js";

describe("컴퓨터", () => {
  test("랜덤 숫자 선택", () => {
    // when
    const computer = new Computer();
    computer.selectNumbers();

    const numbers = computer.getNumbers();

    // then
    expect(numbers.length).toBe(3);
    expect(numbers.includes(0)).toBe(false);
    expect([...new Set(numbers)].length).toBe(3);
  });

  test("사용자 에측 입력값 검증", () => {
    // given
    const validAnswer = "123";
    const inValidLengthAnswers = ["12", "1234"];
    const notAllowedCharacterAnswers = ["12a", "120"];
    const duplicatedCharacterAnswer = "112";

    // then
    expect(Computer.validateAnswerLength(validAnswer)).toBe(true);
    expect(Computer.validateAnswerCharacter(validAnswer)).toBe(true);
    expect(Computer.validateAnswerUnique(validAnswer)).toBe(true);
    inValidLengthAnswers.forEach((answer) => {
      expect(Computer.validateAnswerLength(answer)).toBe(false);
    });
    notAllowedCharacterAnswers.forEach((answer) => {
      expect(Computer.validateAnswerCharacter(answer)).toBe(false);
    });
    expect(Computer.validateAnswerUnique(duplicatedCharacterAnswer)).toBe(false);
  });

  test("스트라이크, 볼 계산", () => {
    // given
    const answers = ["248", "328", "318", "238", "321", "391", "319"];
    const results = [
      { strike: 0, ball: 0 },
      { strike: 1, ball: 0 },
      { strike: 2, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 1, ball: 1 },
      { strike: 1, ball: 2 },
      { strike: 3, ball: 0 },
    ];

    // when
    const computer = new Computer();
    jest.spyOn(computer, "selectNumbers").mockImplementation(function() {
      this.numbers = [3, 1, 9];
    });
    computer.selectNumbers();

    //then
    answers.forEach((answer, index) => {
      const { strike, ball } = computer.calculateResult(answer);
      const { strike: correctStrike, ball: correctBall } = results[index];

      expect(strike).toBe(correctStrike);
      expect(ball).toBe(correctBall);
    })
  });

  test("재시작 입력값 검증", () => {
    // given
    const answers = ["1", "2", "0", "a"];
    const results = [true, true, false, false];

    // then
    answers.forEach((answer, index) => {
      const result = results[index];

      expect(Computer.validateReplayValue(answer)).toBe(result);
    });
  });
});
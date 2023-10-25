class AnswerComparator {
  static compareAnswer(guess, answer) {
    const result = { ball: 0, strike: 0, nothing: 0 };
    const listGuess = [...guess];
    const listAnswer = [...answer];

    listGuess.map((number, index) => {
      if (listAnswer.indexOf(number) === -1) {
        result.nothing += 1;
      } else if (listAnswer.indexOf(number) === index) {
        result.strike += 1;
      } else {
        result.ball += 1;
      }
    });

    return result;
  }
}

export default AnswerComparator;

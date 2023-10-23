async function compareInputWithAnswer(answer, input) {
  const LAST_ANSWER = answer.slice(-3);
  let strikeCount = 0;
  let ballCount = 0;

  for (let aIndex = 0, iIndex = 0; iIndex < LAST_ANSWER.length; ) {
    if (LAST_ANSWER[aIndex] === input[iIndex]) {
      strikeCount = strikeCount + 1;
    } else {
      if (LAST_ANSWER.includes(input[iIndex])) {
        ballCount = ballCount + 1;
      }
    }
    aIndex = aIndex + 1;
    iIndex = iIndex + 1;
  }

  const RESULT = {
    strike: strikeCount,
    ball: ballCount,
  };

  return RESULT;
}

export default compareInputWithAnswer;

const calculateCounts = (computerNums, answerNums) => {
  const strikeCount = calculateStrikeCount(computerNums, answerNums);
  const ballCount = calculateBallCount(computerNums, answerNums);

  return { strikeCount, ballCount };
};

const calculateStrikeCount = (computerNums, answerNums) => {
  return answerNums.filter((answerNum, i) => answerNum === computerNums[i])
    .length;
};

const calculateBallCount = (computerNums, answerNums) => {
  const duplicateCount = answerNums.filter((answerNum) =>
    computerNums.includes(answerNum)
  ).length;

  return duplicateCount
    ? duplicateCount - calculateStrikeCount(computerNums, answerNums)
    : 0;
};

export default calculateCounts;

function getBallStrikeCount(computer, userInput) {
  let strikeCount = 0;
  let ballCount = 0;
  for(let i = 0; i < computer.length; i++) {
    if(computer[i] === userInput[i]) strikeCount++;
    else if(computer.includes(userInput[i])) ballCount++;
  }
  return [ballCount, strikeCount];
}

export default getBallStrikeCount;

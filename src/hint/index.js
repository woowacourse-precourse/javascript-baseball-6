function calculateStrikeCount(target, input) {
  let strikeCount = 0;

  for (let index = 0; index < 3; index++) {
    if (target[index] === input[index]) strikeCount++;
  }

  return strikeCount;
}

function calculateBallCount(target, input) {
  let ballCount = 0;

  for (let targetIndex = 0; targetIndex < 3; targetIndex++) {
    for (let inputIndex = 0; inputIndex < 3; inputIndex++) {
      if (targetIndex === inputIndex) continue;
      if (target[targetIndex] === input[inputIndex]) ballCount++;
    }
  }

  return ballCount;
}

export function getHint(target, input) {
  const strikeCount = calculateStrikeCount(target, input);
  const ballCount = calculateBallCount(target, input);

  if (ballCount && strikeCount) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
  if (ballCount) {
    return `${ballCount}볼`;
  }
  if (strikeCount) {
    return `${strikeCount}스트라이크`;
  }
  return "낫싱";
}

export function checkIsAnswer(hint) {
  return hint === "3스트라이크";
}

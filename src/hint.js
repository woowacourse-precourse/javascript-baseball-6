export function getHint(target, input) {
  let strike = 0,
    ball = 0;

  for (let i = 0; i < 3; i++) {
    if (target[i] === input[i]) strike++;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) continue;
      if (target[i] === input[j]) ball++;
    }
  }

  if (ball && strike) {
    return `${ball}볼 ${strike}스트라이크`;
  }
  if (ball) {
    return `${ball}볼`;
  }
  if (strike) {
    return `${strike}스트라이크`;
  }
  return "낫싱";
}

export function checkIsAnswer(hint) {
  return hint === "3스트라이크";
}

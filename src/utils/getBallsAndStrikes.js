// 출력값 계산
export default getBaseball = function getBallsAndStrikes(
  computer,
  user,
  baseball
) {
  const userSet = new Set(Array.from(user, Number));
  const ballAndStrike = { ...baseball };
  computer.forEach((v, i) => {
    if (v === Number(user[i])) ballAndStrike.strike += 1;
    else if (userSet.has(v)) ballAndStrike.ball += 1;
  });

  return ballAndStrike;
};

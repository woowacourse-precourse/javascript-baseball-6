// 출력값 계산
export const getBallsAndStrikes = (computer, user, baseball) => {
  const userSet = new Set(user.split('').map(Number));
  for (let i = 0; i < 3; i++) {
    if (computer[i] === Number(user[i])) baseball['strike']++;
    else if (userSet.has(computer[i])) baseball['ball']++;
  }
  return baseball;
};

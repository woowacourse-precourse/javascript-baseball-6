// 출력값 계산
export const getBallsAndStrikes = (computer, user, baseball) => {
  for (let i = 0; i < 3; i++) {
    if (computer[i] === Number(user[i])) {
      baseball['strike']++;
    }
    for (let j = 0; j < 3; j++)
      if (i !== j && computer[i] === Number(user[j])) baseball['ball']++;
  }
  return baseball;
};

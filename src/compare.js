const compareUserToComputer = (computer, user, result) => {
  let [copyComputer, copyUser] = [[...computer], [...user]];
  const copyResult = { ...result };

  copyResult.strike = countStrikes(copyComputer, copyUser);
  copyResult.ball = countBalls(copyComputer, copyUser);

  return copyResult;
};

const countStrikes = (computer, user) => {
  let strikes = 0;
  user.forEach((u, i) => {
    if (u === computer[i]) strikes++;
  });
  return strikes;
};
const countBalls = (computer, user) => {
  let balls = 0;
  user.forEach((u, i) => {
    if (u !== computer[i] && computer.includes(u)) balls++;
  });
  return balls;
};

export default compareUserToComputer;

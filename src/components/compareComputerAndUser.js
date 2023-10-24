const compareComputerAndUser = async (computer, user) => {
  let ball = 0,
    strike = 0;

  for (let i = 0; i < computer.length; i++) {
    for (let j = 0; j < user.length; j++) {
      if (computer[i] === user[j]) {
        if (i == j) strike += 1;
        else ball += 1;
      }
    }
  }

  return { ball, strike };
};

export { compareComputerAndUser };

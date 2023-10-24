const compareNumbers = (computer, user) => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < computer.length; i++) {
    if (computer[i] === user[i]) {
      strike++;
    } else if (user.includes(computer[i])) {
      ball++;
    }
  }

  return { strike, ball };
};

export default compareNumbers;

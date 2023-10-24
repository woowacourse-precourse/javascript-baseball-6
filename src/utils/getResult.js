const getResult = (computer, player) => {
  let strike = 0;
  let ball = 0;

  computer.forEach((data, index) => {
    if (data === player[index]) {
      strike += 1;
    } else if (computer.includes(player[index])) {
      ball += 1;
    }
  });

  return { strike, ball };
};

export { getResult };

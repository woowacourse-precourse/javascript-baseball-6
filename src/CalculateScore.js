function calculateScore(computer, user) {
  let strike = 0;
  let ball = 0;

  const determine = [...computer].filter((number) => [...user].includes(number));
  determine.forEach((number) => {
    if ([...computer].indexOf(number) === [...user].indexOf(number)) strike += 1;
    else ball += 1;
  });
  return { strike, ball }
}

export { calculateScore };

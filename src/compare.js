export const compare = (COMPUTER, userInput) => {
  let strike = 0;
  let ball = 0;

  if (COMPUTER[0] === userInput[0]) {
    strike += 1;
  } else if (userInput.includes(COMPUTER[0])) {
    ball += 1;
  }
  if (COMPUTER[1] === userInput[1]) {
    strike += 1;
  } else if (userInput.includes(COMPUTER[1])) {
    ball += 1;
  }
  if (COMPUTER[2] === userInput[2]) {
    strike += 1;
  } else if (userInput.includes(COMPUTER[2])) {
    ball += 1;
  }
  return [strike, ball];
};

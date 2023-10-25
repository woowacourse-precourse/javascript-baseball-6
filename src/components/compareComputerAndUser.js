const compareComputerAndUser = (computer, user) => {
  let ball = 0,
    strike = 0;

  computer.forEach((computerNumber, computerIndex)=>{
    user.forEach((userNumber, userIndex)=>{
      if (computerNumber === userNumber){
        if (computerIndex === userIndex) strike += 1;
        else ball+=1;
      }
    })
  })
  return { ball, strike };
};

export { compareComputerAndUser };

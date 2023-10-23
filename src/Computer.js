import { MissionUtils } from "@woowacourse/mission-utils";


export const getComputerNumber = () =>{
  const computer = [];
  while (computer.length < 3) {
    const number = String(MissionUtils.Random.pickNumberInRange(1, 9));
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

export const compareNum = (computer, user) =>{
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (computer[i] === user[i]) strike += 1;
    else {
      if (computer.includes(user[i])) ball += 1;
    }
  }
  
  return { strike, ball };
}


// export default computer;
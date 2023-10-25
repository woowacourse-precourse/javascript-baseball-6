
//strike와 ball을 확인하는 함수
async function checkStrikesBalls(answer,computer) {
  let countStrikes = 0, countBalls = 0;
  
  for(let i in answer){
    if(Number(answer[i]) === computer[i]) {
      countStrikes += 1;
    }else if(computer.includes(Number(answer[i]))) {
      countBalls += 1;
    }
  }
  return { balls: countBalls, strikes: countStrikes }
}

export default checkStrikesBalls;

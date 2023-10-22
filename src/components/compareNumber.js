import restartGame from './restartGame';

const isDuplicate = (number) => {
  return new Set(number.split('')).size === 3;
}

const compareNumber = (answer, user) => {
  let strike = 0;
  let ball = 0;  
  let compareResult = ''

  user.split('').forEach((i, idx) => {
    if (answer.indexOf(i) === idx) {
      strike++;
    } else if (answer.split('').includes(i)) {
      ball++;
    } 
  });

 if (strike > 0 && ball > 0) {
    console.print(`${ball}볼 ${strike}스트라이크`)
  } else if(strike === 3) {
    console.print(`${strike}스트라이크<br>${strike}개의 숫자를 모두 맞히셨습니다! 게임 종료`)
    restartGame()
  } else if (strike > 0) {
    console.print(`${strike}스트라이크`)
  } else if (ball > 0){
    console.print(`${ball}볼`)
  } else{
    console.print(`낫싱`)
  }
}

export { isDuplicate,  compareNumber }
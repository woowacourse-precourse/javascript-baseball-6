import restartGame from './restartGame.js';
import { resultBall } from './playGame.js';

const isDuplicate = (number) => {
  return new Set(number.split('')).size === 3;
}

const compareNumber = (answer, user) => {
  let strike = 0;
  let ball = 0;  
  let compareResult = ''

  console.log(answer, user)
  user.split('').forEach((i, idx) => {
    if (answer.indexOf(i) === idx) {
      strike++;
    } else if (answer.split('').includes(i)) {
      ball++;
    } 
  });

 if (strike > 0 && ball > 0) {
    resultBall.innerText = `${ball}볼 ${strike}스트라이크`;
  } else if(strike === 3) {
    resultBall.innerHTML = `${strike}스트라이크<br>${strike}개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    restartGame()
  } else if (strike > 0) {
    resultBall.innerText = `${strike}스트라이크`
  } else if (ball > 0){
    resultBall.innerText = `${ball}볼`
  } else{
    resultBall.innerText = `낫싱`;
  }
}

export { isDuplicate,  compareNumber }
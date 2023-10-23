import { MissionUtils } from "@woowacourse/mission-utils";
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

// 랜덤세자리 만들기
const randomThree = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number.toString())) {
      computer.push(number.toString());
    }
  }
  return computer;
}

// 유저 인풋 받기
const userInput = async () => {
  const rl = readline.createInterface({ input, output })
  let userInputValue = await rl.question('숫자를 입력해주세요 : ');
  rl.close();
  return userInputValue;
}

// 타겟넘버랑 유저인풋 비교하기
const compare = (TARGET_NUMBER, input) => {
  let [ball, strike] = [0, 0];
  input.forEach((v,i) => {
    if(TARGET_NUMBER.includes(v)){
      if(TARGET_NUMBER.indexOf(v)=== i){
        strike++;
      }else{
        ball++;
      }
    }
  }) 
  return [ball, strike];
}

// 라운드 종료 메세지
const endMessage = (ball, strike) => {
  let message = '';

  message = ball + strike == 0? '낫싱' : 
    ball == 0? `${strike}스트라이크` : 
    strike == 0? `${ball}볼` :
    `${ball}볼 ${strike}스트라이크`;

  return message;
}

// 도전 시작
const round = async (TARGET_NUMBER, input) => {
  let [ball, strike] = await compare(TARGET_NUMBER, input);
  console.log(await endMessage(ball, strike));
  return strike === 3 ? 'clear' : 'fail';
}

// 맞힐 때까지 반복
const trial = async (TARGET_NUMBER, round) => {
  let trialN = await userInput()
  trialN = trialN.toString().split('');
  let result = await round(TARGET_NUMBER, trialN);

  if(result === 'fail'){
    return await trial(TARGET_NUMBER, round);
  }else if(result === 'clear'){
    console.log('3개의 숫자를 모두 맞히셨습니다! 게임을 새로시작하려면 1을 종료하시려면 2를 입력하세요.') 
    let restart = await userInput();
    return restart;
  }
}   

// 야구 게임 클래스 선언
class BaseBall {
  async play() {
    console.log('숫자 야구 게임을 시작합니다.')
    const TARGET_NUMBER = randomThree();
    console.log(TARGET_NUMBER)
    let restart = await trial(TARGET_NUMBER, round);
    console.log(restart)
    if(restart == 1){
      await this.play();
    }else if(restart == 2){
      return;
    }
  }  
}

let baseball = new BaseBall();
baseball.play();
import { Console, Random } from '@woowacourse/mission-utils';

let computer = [];

const shuffleNumber = ()=> {
  
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

const userInput = async ()=>{
  let valid = false;
  let userNumber;

  while(!valid){
    const userNum = await Console.readLineAsync('숫자를 입력해주세요 : ');
    userNumber = userNum.trim();
    const userNumbers = userNum.split("");
    const userNumbersSet = new Set(userNumbers);

    if (
      userNum.length !== 3 ||
      !/^[1-9]{3}$/.test(userNum) ||
      userNumbersSet.size !== 3
    ) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    } else {
      valid = true;
    }

    return userNumber;
  }
}

const compareNumbers = (answer) => {
  let strike = 0;
  let ball = 0;

  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){

      if(computer[i] === answer[j]){
        if(i === j){
          strike++;
        }else{
          ball++;
        }
      }

    }
  }

  return { strike, ball };
}

const checkGame = async (strike,ball) =>{
  if(strike === 3){
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료합니다.');
    const option = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

    if(option === '2'){
      Console.print('게임이 종료되었습니다.');
      return true;
    }
    computer = [];
    shuffleNumber();
    Console.print('\n숫자 야구 게임을 시작합니다.');
    return false;
  }
  if (strike > 0 || ball > 0) {
    if(strike === 0){
      Console.print(`${ball}볼`);
    }else if(ball === 0){
      Console.print(`${strike}스트라이크`);
    }else{
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    
  } else {
    Console.print('낫싱');
  }

  return false;
}

class App {
  
  async play() {
    
    Console.print("숫자 야구 게임을 시작합니다.");
    shuffleNumber();
    while(true) {
      Console.print(computer);
      let answerTemp = [];
      let answer = [];

      let input = await userInput();

      answerTemp.push(input);
      answer = answerTemp[0].split('').map(Number);
      
      let {strike,ball} = compareNumbers(answer);

      if(await checkGame(strike,ball)){
        break;
      }
    }
  }
}

export default App;
const app = new App();
//app.play();

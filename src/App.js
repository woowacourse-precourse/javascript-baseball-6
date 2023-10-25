const MissionUtils = require('@woowacourse/mission-utils');

const NUM_LENGTH = 3;

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while(true) {
      const computerNum = computerPickNum();
      startGame(computerNum);
      
    }
  }
}

//(1)컴퓨터 랜덤 숫자 선택
const computerPickNum = () => {
  const computer = [];
  while (computer.length < NUM_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

//(2)플레이어 숫자 입력
const startGame = (computerNum) => {
  while(true) {
    const input = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    const userNum = input.split('').map(Number);

    checkInput(input);

    let strike = countStrike(computerNum, userNum);
    let ball = countBall(computerNum, userNum);

    const result = printResult(ball, strike);
    MissionUtils.Console.print(result);

    if (result === '3스트라이크') {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      break;
    }
  }

}

const checkInput = (input) => {
  const userInput = new Set(input.split('').map(Number));

  if (input.length !== NUM_LENGTH)
    throw Error('[ERROR] 숫자가 잘못된 형식입니다. 숫자 3개를 입력해주세요.');
  if ([...userInput].length !== NUM_LENGTH)
    throw Error('[ERROR] 숫자가 잘못된 형식입니다. 중복되지 않는 숫자를 입력해주세요.');
}

//(3)결과 출력
const countStrike = (computerNum, userNum) => {
  let strike = 0;

  for (let i = 0; i < NUM_LENGTH; i++)
    if (computerNum[i] === Number(userNum[i]))
      strike += 1;

  return strike;
}

const countBall = (computerNum, userNum) => {
  let ball = 0;

  for (let i = 0; i < NUM_LENGTH; i++)
    if (computerNum[i] !== Number(userNum[i]) && computerNum.includes(Number(userNum[i])))
      ball += 1;

  return ball;
}

const printResult = (ball, strike) => {
  if (ball !== 0 && strike === 0)
    return `${ball}볼`;
  if (ball !== 0 && strike !== 0)
    return `${ball}볼 ${strike}스트라이크`;
  if (ball === 0 && strike !== 0)
    return `${strike}스트라이크`;
  return '낫싱';
}

//(4)게임 결과

export default App;
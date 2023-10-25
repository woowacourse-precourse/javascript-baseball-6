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

//(4)게임 결과

export default App;
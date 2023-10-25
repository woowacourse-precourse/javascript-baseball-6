const readline = require('readline');
const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.')

    // 기능 1. 상대방(컴퓨터)가 1~9까지의 숫자 중 3개를 중복없이 뽑기 
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    // (확인용 콘솔_나중에 지울 것)
    console.log('이건 컴퓨터가 선택한 숫자: ' + computer.join(''));

    // 기능 2. 사용자에게 숫자를 입력 받기 
    // Error 2.1 숫자 입력이 범위를 벗어날 경우 - [ERROR] 숫자의 범위는 1~9입니다
    // Error 2.2 입력된 숫자의 수가 3개 이상일 경우 - [ERROR] 입력가능한 숫자의 수는 3개입니다
    // Error 2.3 입력값에 숫자 외의 문자가 들어갈 경우 - [ERROR] 숫자만 입력이 가능합니다 

    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');


    // 기능 3. 입력된 숫자를 정답과 비교하여 볼과 스트라이크 판단
    // 기능 3.1 하나도 없는 경우 - 낫싱
    // 기능 3.2 일부 정답일 경우 - ~볼 ~스트라이크
    // 기능 3.3 전부 정답일 경우 - 3스트라이트 /n 3개의 숫자를 모두 맞히셨습니다! 게임 종료
    const userNumbers = userInput.split('').map(Number);
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === computer[i]) {
        strikes++;
      } else if (computer.includes(userNumbers[i])) {
        balls++;
      }
    }

    // 볼과 스트라이크 결과 출력
    if (strikes === 3) {
      console.log(`${strikes}스트라이크`);
      console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (strikes > 0 || balls > 0) {
      console.log(`${balls}볼 ${strikes}스트라이크 `);
    } else {
      console.log('낫싱');
    }
  }
}

export default App;

const app = new App();
app.play();


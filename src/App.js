import { MissionUtils } from '@woowacourse/mission-utils';

class Com {
  constructor() {
    const comNum = [];
    while (comNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!comNum.includes(number)) {
        comNum.push(number);
      }
    }
    console.log(comNum);
    this.comNum = comNum;
  }
}
class User {
  constructor() {
    this.userNum = [];
  }

  async getNumber() {
    let user = [];
    let number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    // #2.1 아무것도 입력하지 않은경우
    if (number.length == 0) {
      throw new Error('[ERROR] 아무것도 입력하지 않았습니다.');
    }
    // #2.2 숫자가 아닌 값을 입력한경우
    if (Number.isNaN(Number(number))) {
      throw new Error('[ERROR] 숫자를 입력하지 않았습니다.');
    }
    // #2.3 3자리 숫자를 입력하지 않았을 경우
    if (number.length != 3) {
      throw new Error('[ERROR] 3자리 숫자를 입력하지 않았습니다.');
    }
    // #2.4 1 ~ 9 사이의 숫자를 입력하지 않은 경우 == 0을 입력한 경우
    if (number.includes('0')) {
      throw new Error('[ERROR] 1 ~ 9 사이의 숫자를 입력하지 않았습니다.');
    }
    // #2.5 같은 숫자를 입력한 경우
    if ([...new Set(number)].length != 3) {
      throw new Error('[ERROR] 서로 다른 숫자를 입력하지 않았습니다.');
    }

    if (number.length == 3) {
      for (let i = 0; i < number.length; i++) {
        user.push(Number(number[i]));
      }
    }

    this.userNum = user;
    return Promise.resolve();
  }
}

class App {
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    let newGame = 1;
    while (newGame % 2) {
      //1일때 실행, 2일때 종료
      let com = new Com();
      while (1) {
        //strikeCnt==3일때까지 무한반복
        let strikeCnt = 0;
        let ballCnt = 0;
        let answer = '';
        let user = new User();
        await user.getNumber();
        for (let i = 0; i < com.comNum.length; i++) {
          if (com.comNum[i] == user.userNum[i]) {
            strikeCnt += 1;
          } else if (com.comNum.includes(user.userNum[i])) {
            ballCnt += 1;
          }
        }
        if (ballCnt) {
          answer += `${ballCnt}볼`;
        }
        if (strikeCnt) {
          if (ballCnt) {
            answer += ' ';
          }
          answer += `${strikeCnt}스트라이크`;
        }
        if (!(ballCnt || strikeCnt)) {
          answer += '낫싱';
        }

        MissionUtils.Console.print(answer);
        if (strikeCnt == 3) {
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        }
      }

      newGame = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if (newGame != '1' && newGame != '2') {
        throw new Error('1 또는 2 를 입력해주세요');
      }
    }
  }
}
const app = new App();
// await app.play();
// test completed🎉

export default App;

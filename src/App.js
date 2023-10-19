import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    let b = true;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while(b) {
      let num = [];
      while (num.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!num.includes(number)) {
          num.push(number);
        }
      }
    while(true) {
      try {
        let ball = 0;
        let strike = 0;
        let input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        if(isNaN(input) || input.length != 3) {
          throw new Error();
        }
          const Arr = input.split('');
          num.map((a, i)=> {
            if(Arr.indexOf(String(a)) >= 0) {
              if (a === Number(Arr[i])) {
                strike += 1;
              } else {
                ball += 1;
              }
            } 
          });
          if(strike === 3) {
            MissionUtils.Console.print('3스트라이크');
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
            let a = await MissionUtils.Console.readLineAsync('');
            if (a === '1') {
              break;
            } else if (a === '2'){
              b = false;
              break;
            };
          } else {
            if(ball === 0){
              if (strike === 0) {
                MissionUtils.Console.print(`낫싱`);
              } else {
                MissionUtils.Console.print(`${strike} 스트라이크`);
              }
            } else if (strike === 0) {
              MissionUtils.Console.print(`${ball} 볼`);
            } else {
              MissionUtils.Console.print(`${ball}볼 ${strike} 스트라이크`);
            }
          }
      } catch(err) {
      }
    }
    }
  }
  
}
export default App;
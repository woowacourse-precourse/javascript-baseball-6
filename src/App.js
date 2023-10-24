import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    let conti = true;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while(conti) {
      // 랜덤 숫자 생성
      let num = [];
      while (num.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!num.includes(number)) {
          num.push(number);
        }
      }
      // 숫자 입력 반복
      let answer = true;
      while(answer) {
          let ball = 0;
          let strike = 0;
          let input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
          // 입력 형식 체크 (숫자가 아니거나 3자리수가 아니거나 0이 들어가거나 중복된 값이 있으면 안됨)
          let Arr = input.split('');
          Arr = [...new Set(Arr)]
          if(isNaN(input) || Arr.length != 3 || Arr.indexOf('0') >= 0) {   
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
          }
            // ball, strike 개수
            num.map((a, i)=> {
              if(Arr.indexOf(String(a)) >= 0) {
                if (a === Number(Arr[i])) {
                  strike += 1;
                } else {
                  ball += 1;
                }
              } 
            });
            // 정답을 맞췄을 때
            if(strike === 3) {
              MissionUtils.Console.print('3스트라이크');
              MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다!');
              MissionUtils.Console.print('게임 종료');
              MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
              // 사용자 입력 체크
              while(true){
                let a = await MissionUtils.Console.readLineAsync('');
                  if (a === '1') {  //새로운 게임 시작
                    answer = false;
                    break;
                  } else if (a === '2'){  //게임 종료
                    answer = false;
                    conti = false;
                    break;
                  } else {  //에러처리
                    throw new Error("ERROR] 숫자가 잘못된 형식입니다.");
                  };
              }
            } 
            // 정답이 아닐 때
            else {
              if(ball === 0){
                if (strike === 0) {
                  MissionUtils.Console.print(`낫싱`);
                } else {
                  MissionUtils.Console.print(`${strike}스트라이크`);
                }
              } else if (strike === 0) {
                MissionUtils.Console.print(`${ball}볼`);
              } else {
                MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
              }
        }
      }
    }
  }
}
export default App;
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    
    class Computer {
      // 클래스로 배열 생성
      constructor ( answer ) {
        this.answer = [];
      }
      
      // 정답 난수 생성(초기화)
      set answer (number) {
        while (this.answer.length < 3) {
          number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!number.includes(this.answer)) {
            this.answer.push(number);
          }
        }
      }

      // 정답 난수 반환
      get answer () {
        return this.answer;
      }
    }

    // 사용자에게서 숫자를 받아오는 함수
    async function getUsernumber(user) {
      while( user.length < 3 ) {
        
        try {
          const number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요.');

          if ( typeof(number) != "number" ) {
            throw new SyntaxError("[ERROR] 숫자를 입력하지 않았습니다.");
          }
          else if ( number == 0 ) {
            throw new SyntaxError("[ERROR] 0은 입력할 수 없습니다.");
          }
          else if ( !user.includes(number) ) {
            throw new SyntaxError("[ERROR] 동일한 숫자를 입력할 수 없습니다.")
          }
          
          user.push(number);
        } catch (error) {
          MissionUtils.Console.print('[ERROR] 에러가 발생했습니다.');
        }
      }
        return user;
    }

    // 정답 난수와 유저 숫자를 비교하고, 콘솔에 결과 출력
    async function compareResult (answer, user) {
      if ( answer.length != 3 || user.length != 3) {
        MissionUtils.Console.print('[ERROR] 에러가 발생했습니다.');
      }

      var ball = 0;
      var strike = 0;

      for ( answer_num in answer ) {
        for ( user_num in user ) {
          if ( answer_num == user_num ) {
            if ( answer.indexOf(answer_num) == user.indexOf(user_num) ) {
              strike++;
            }
            else {
              ball++;
            }
          }
        }
      }

      if ( ball == 0 ) {
        if ( strike == 0 ) {
          MissionUtils.Console.print('낫싱');
        }
        else if ( strike == 3 ) {
          MissionUtils.Console.print(strike, '스트라이크');
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        }
        else {
          MissionUtils.Console.print(strike, '스트라이크');
        }
      }
      else {
        if ( strike == 0 ) {
          MissionUtils.Console.print(ball, '볼');
        }
        else {
          MissionUtils.Console.print(ball, '볼', strike, '스트라이크');
        }
      }
    }



      // get isEnd () {
      //   return (
      //     await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
          
      //     )
      // 

    Console.print('숫자 야구 게임을 시작합니다.')
    let answer = new Computer();
    let user = [];
    //숫자 입력
    user = getUsernumber(user);
    compareResult(answer, user);
    
  }
}

export default App;
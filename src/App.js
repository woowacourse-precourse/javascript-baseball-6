import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    
    async function setAnswer ( answer ) {
      while ( answer.length < 3 ) {
        const element = MissionUtils.Random.pickNumberInRange(1,9);
        if(!answer.includes(element)) {
          answer.push(element);
        }
      }
      return answer;
    }


    async function getUsernumber( user ) {
      let input = '';

      try {
        input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요.');
        
        user.push(Number(input.substring(0,1)));
        user.push(Number(input.substring(1,2)));
        user.push(Number(input.substring(2,3)));


      } catch (error) {
        MissionUtils.Console.print('[ERROR] 에러가 발생했습니다');
      }
      return user;
    }
  
  
    // 정답 난수와 유저 숫자를 비교
    function compareResult ( answer, user, result ) {
      for (let answer_num of answer ) {
        for ( let user_num of user ) {
          if ( answer_num == user_num ) {
            if ( answer.indexOf(answer_num) == user.indexOf(user_num) ) {
              result.strike++;
            }
            else {
              result.ball++;
            }
          }
        }
      }
      return result;
    }
    
  
    // 비교한 결과 출력
    function printResult ( strike, ball ) {
      
      if ( ball == '0' ) {
        
        if ( strike == '3' ) {
          MissionUtils.Console.print(strike + '스트라이크');
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          return;
        } else if ( strike == '0' ) {
          MissionUtils.Console.print('낫싱');
          return;
        }
        
        else {
          MissionUtils.Console.print(strike + '스트라이크');
          return;
        }
      }
      else {
        if ( result.strike == '0' ) {
          MissionUtils.Console.print(ball + '볼');
          return;
        }
        else {
          MissionUtils.Console.print(ball + '볼 ' + strike + '스트라이크');
          return;
        }
      }
    }
  
  
    async function isEnd ( userwant ) {
      userwant = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if ( userwant == 1 ) {
        return 1;
      }
      return;
    }




    var answer = [];
    var user = [];
    var result = {
      ball: 0,
      strike: 0
    };
    var userwant = 0;
    
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    do {
      answer = await setAnswer(answer);
      user = await getUsernumber(user);

      result = compareResult( answer, user, result );
      printResult( result.strike, result.ball );

      if ( result.strike == 3 ) {
        userwant = isEnd( userwant );
        if ( userwant == 2) {
          return;
        }
      }
    } while ( userwant == 1 );
  }
}
export default App;

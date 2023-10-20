import { Console, MissionUtils } from "@woowacourse/mission-utils";

//상수명 SNAKE_CASE로 작성 !!!

class App {
    async play() {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");


      //랜덤 숫자 뽑기 (서로 다른 수로 이루어진 3자리 숫자)
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      MissionUtils.Console.print(computer) //테스트

        
      //입력 받기
      try {
        let user = await Console.readLineAsync("숫자를 입력해주세요 : ");

        if (user<100 || user>999){   //3자리 숫자가 아닐 경우 에러
        throw "[ERROR] 숫자가 잘못된 형식입니다.";
        }

        user=user.split("");         //배열
        for(let i=0; i<3; i++){      //문자열->숫자
          user[i]=Number(user[i]);
        }
        MissionUtils.Console.print(user); //테스트

      } catch (error) {
        MissionUtils.Console.print(error);
      }  

        
    }
  }

  export default App;

const app = new App();
app.play();

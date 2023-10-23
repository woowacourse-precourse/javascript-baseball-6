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
      // MissionUtils.Console.print(computer) //테스트


      while(true){
        try {   //입력 받기
          let user = await Console.readLineAsync("숫자를 입력해주세요 : ");

          //3자리 수 아닌 입력값 에외 처리
          if (user<100 || user>999){
            throw "[ERROR] 숫자가 잘못된 형식입니다.";
          }
  
          //입력값 배열로
          user=user.split("");         //배열
          for(let i=0; i<3; i++){      //문자열->숫자
            user[i]=Number(user[i]);
          }


          let strike = 0;
          let ball = 0;

          //비교(user와 computer)
          for(let i=0; i<3; i++){
            if(computer.includes(user[i])==true){
              let xindex = 5
              xindex = computer.indexOf(user[i])
              if(xindex==i){
                strike=strike+1
              }
              else{
                ball=ball+1
              }
            }
          }

          //strike, ball 결과 출력
          if(strike==0 && ball==0){
            MissionUtils.Console.print("낫싱");
          }
          else if(strike==0){
            MissionUtils.Console.print(ball+"볼");
          }
          else if(ball==0){
            MissionUtils.Console.print(strike+"스트라이크");
          }
          else{
            MissionUtils.Console.print(ball+"볼"+strike+"스트라이크");
          }

          //정답
          if(strike==3){
            break;
          }
            
  
        } catch (error) {
          MissionUtils.Console.print(error);
          }
      }


      let again;
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다 ! 게임 종료");
      while(true){   //재시작 or 종료
        try{
          again = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
          if (again==1 || again==2){
            break;
          }
          else{
            throw "[ERROR] 숫자가 잘못된 형식입니다.";
          }
        }
        catch(error){
          MissionUtils.Console.print(error);
        }
      }
      if (again==1){
        app.play();
      }
    }
}
export default App;

const app = new App();
app.play();

import { Console, MissionUtils } from "@woowacourse/mission-utils";


let n=0;    //처음에만 시작 안내 문구 출력(재시작 시 출력X)
class App {
    async play() {
        
      if(n==0{
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      }


      //랜덤 숫자 뽑기 (서로 다른 수로 이루어진 3자리 숫자)
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      // MissionUtils.Console.print(computer) //테스트


      let again;    //재시작 여부 저장할 변수
      while(true){
        try {
          let user = await Console.readLineAsync("숫자를 입력해주세요 : ");

            
          //3자리 수 아닌 입력값 에외 처리
          if (user<100 || user>999 || isNaN(user)==true){
            throw "[ERROR] 숫자가 잘못된 형식입니다.";
          }

            
          //입력값 배열로
          user=user.split("");         //배열
          for(let i=0; i<3; i++){      //문자열->숫자
            user[i]=Number(user[i]);
          }


          let strike = 0;    //스트라이크, 볼 개수 저장할 변수
          let ball = 0;      //(숫자 입력 때마다 0으로 초기화)

          //비교(user와 computer)
          for(let i=0; i<3; i++){
            if(computer.includes(user[i])==true){         //user의 수가 computer에 있는 지
              let computer_index;
              computer_index = computer.indexOf(user[i])  //겹치는 수의 computer의 인덱스 위치
              if(computer_index==i){    //user와 같은 위치
                strike=strike+1
              }
              else{                     //user와 같은 위치
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
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다 ! 게임 종료");
            again = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
            if (again==1 || again==2){  //게임 종료
              break;
            }
            else{
              throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
            }
          }
        } catch (error) {
          MissionUtils.Console.print(error);
          break;
          }
      }

      //재시작
      if (again==1){
        n=1;
        app.play();
      }
    }
}
export default App;
const app = new App();
app.play();

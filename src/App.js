import { MissionUtils } from "@woowacourse/mission-utils";
import 출력 from "./export.js";
class App {
    
  async play() {
    const  start = async () => {     

        const 재시작기능 = async () => {
            const onetwo = await MissionUtils.Console.readLineAsync("");
            if (onetwo === "1") {
                await start(); // 이 부분에 await 키워드 추가
              } else if (onetwo === "2") {
               return;
              } else {
                throw new Error("[ERROR]");
              }
            };

    const 컴퓨터값 = []
    while (컴퓨터값.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!컴퓨터값.includes(number)) {
            컴퓨터값.push(number);
        }
      }
      console.log(컴퓨터값)
     출력("숫자 야구 게임을 시작합니다.");
      
    const 시작 = async () => {
        const 입력내용 = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        // try {
          if (입력내용.length != 3) {//세자리수이상 세자리수 이하
            throw new Error ("[ERROR] 세자리수를 입력하세요");
        }
        if (isNaN(입력내용)) {//문자열을 입력받았을때
            throw new Error ("[ERROR] 숫자를 입력하세요");
        }
        if (입력내용.split('').filter((item, index) => 입력내용.indexOf(item) !== index).length > 0) {//서로같은 수를 입력받았을때
            throw new Error ("[ERROR] 서로다른 숫자를 입력하세요");
        }
        if (입력내용.length == 3 && isNaN(입력내용) == false) {//정상적으로 입력했을때
          //비교기능
          const 입력값 = 입력내용.split("").map((a) => parseInt(a));
          let strike = 0;
          let ball = 0;
          //아무것도 없을 때
          if (컴퓨터값.filter((i) => 입력값.includes(i)).length == 0) {
           출력("낫싱")
           await 시작();
          }
          //같은게 있을때 각각 으로 검사해야함
          if(컴퓨터값.filter((i)=> 입력값.includes(i)).length > 0 ){
            //각각 비교시작
            컴퓨터값.forEach((a, i) => {
              if (입력값.indexOf(a) == i) {
                strike += 1;
                // console.log("스트라이크");
              }
              if (입력값.indexOf(a) != -1 && 입력값.indexOf(a) != i) {
                ball += 1;
                // console.log("볼");
              }

            });
    
            //출력
            if (strike == 3) {
               출력("3스트라이크")
               출력("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
               출력("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
             await 재시작기능()
            }
            if (strike == 0) {
               출력(ball + "볼")

             await 시작()
            }
            if (ball == 0 && strike != 3) {
           
            출력(strike + "스트라이크")
              await 시작()
            }
            if (strike > 0 && ball > 0) {
                
                출력 ( ball + "볼"+" "+strike + "스트라이크" )
              await 시작()
            }
            
          }
        }
    //   } catch (e) {
    //     출력(e)

        
    //   }
      
    
    
    };
   await 시작()
  }
 await start()
}


}
export default App;




import { MissionUtils,Console } from "@woowacourse/mission-utils";

class App {
  computer = [];
  
  init(){
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다")
    this.init();
    while(true){
      const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
  
      //숫자 검증
      if(await this.confirm(input)){
        let strike = 0;
        let ball = 0;
        for(let i=0;i<3;i++){
          for(let j=0;j<3;j++){
            if(Number(input[i])===this.computer[j]){
              if(i===j){
                strike++;
              }else{
                ball++;
              }
            }
          }
        }

        let result = "";

        if(ball===0&&strike===0){
          result = "낫싱"
        }else{
          if(ball>0){
            result+=`${ball}볼 `;
          }
          if(strike>0){
            result+=`${strike}스트라이크`;
          }
        }

        //결과 출력.
        Console.print(result);

        if(strike===3){
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료.")
          const cmd = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
          if(Number(cmd)===1){
            this.init();//새로운 컴퓨터 번호 생성
          }else if(Number(cmd)===2){
            break;//게임종료
          }else{
            throw new Error("[ERROR]")//예외 발생
          }
        }
      }else{
        throw new Error("[ERROR]")//예외 발생
      }
    }
  }
  //받은 숫자의 검증
  async confirm(number){
    //1~9까지 숫자 3글자만 입력
    const re = new RegExp("^[1-9]{3}$")
    return re.test(number)
  }
}

export default App;
import { MissionUtils, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    let play=true;
    while(play){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    let clear = false;
    while(!clear){
      let player_str = await Console.readLineAsync('숫자를 입력해주세요 : ');
      Console.print(player_str);
      let player = player_str.split('');
    try{
      if (player.length !== 3 || player.includes('0') || player.includes(' ') || !player) {
        throw new Error("[ERROR]");
    }
    
    const numberMap = {};
      player.forEach((e)=>{
        numberMap[e] = (numberMap[e]||0)+1;
      })
      Object.values(numberMap).forEach((e) => {
        if (e > 1) {
          throw new Error("[ERROR]");
        }
      })
    } catch(e){
      throw new Error("[ERROR]");
    }
    
    let strike = 0;
    let ball = 0;

      player.forEach((p,pi)=>{
        computer.forEach((c,ci)=>{
          if(p==c){
            if(pi==ci){
              strike++;
            }else{
              ball++;
            }
          }
        })
      })

      if(strike==0 && ball==0){
        Console.print('낫싱')
      }else if(strike>0 && ball>0){
        Console.print(`${ball}볼 ${strike}스트라이크`)
      }else if(strike>0){
        Console.print(`${strike}스트라이크`)
      }else if(ball>0){
        Console.print(`${ball}볼`)
      }

      if (strike==3){
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        let replay = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        clear=true;
        if(replay==2){
          play=false;
        }
      }
  }}
}
}

export default App;
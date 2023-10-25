import {MissionUtils} from "@woowacourse/mission-utils";

const MAX_LENGTH = 3;
const RESTART ="1";
const QUIT = "2";

const GAME_START_MSG ="숫자 야구 게임을 시작합니다.";
const INPUT_MSG= "숫자를 입력해주세요 : ";
const ERROR_MSG = "[ERROR] 숫자가 잘못된 형식입니다.";
const GAME_WIN_MSG = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RETRY_MSG= "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";


class App {
  constructor(){
    this.answerList= this.makeRandom();
  }
  
  //랜덤값 구하기
  makeRandom(){
    const randomList= [];
    while(randomList.length < MAX_LENGTH){
      //1~9 중 숫자 한개를 뽑는다.
      const answer = MissionUtils.Random.pickNumberInRange(1,9);
      //리스트에 없는 숫자이면
      if(!randomList.includes(answer)){
        randomList.push(answer);
      }      
    }
    return randomList;
  }

  //스트라이크, 볼 체크
  checkNumber(player,computer){
    
    let strike=0;
    let ball=0;

    for (let i =0; i<player.length; i++){
      //내가 선택한 숫자가 안에 있으면
      if(computer.includes(player[i])){
        //거기에 위치까지 같으면
        if(computer[i]===player[i]){
          strike++;
        }
        else{
          ball++;
        }
      }
    }
    return { strike, ball };
  }

  tellStrike(strike, ball){
    //조건별 출력
    if (strike ===0 && ball ===0){
      MissionUtils.Console.print("낫싱");
    }
    else if(strike ===0){
      MissionUtils.Console.print(`${ball}볼`);
    }
    else if(ball ===0){
      MissionUtils.Console.print(`${strike}스트라이크`);
    }
    else{
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async play() {
    MissionUtils.Console.print(GAME_START_MSG);
    while(true){
      //숫자 입력받기
      const userInput = await MissionUtils.Console.readLineAsync(INPUT_MSG);
      
      //에러체크
      if (!userInput){
        throw new Error(ERROR_MSG);
      }
      
      //입력받은 숫자 배열에 넣기
      const inputList = userInput.split('').map(Number);
      
      //스트라이크 볼 체크
      const { strike, ball } = this.checkNumber(inputList, this.answerList);
      this.tellStrike(strike,ball);

      // 게임종료
      if (strike===3){
        MissionUtils.Console.print(GAME_WIN_MSG);
        const again =await MissionUtils.Console.readLineAsync(RETRY_MSG);
        //1 일때는 한번 더
        if (again===RESTART){
          this.answerList=this.makeRandom();
          continue;
        //2 일때는 그만
        }else if(again ===QUIT){
          break;
        }
      }
    }  
  }  
}


export default App;
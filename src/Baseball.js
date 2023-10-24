import { MissionUtils } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import SystemMessage from './SystemMessage.js';

class Baseball{
  //사용자가 입력한 숫자가 들어갈 변수
  userInput;

  //컴퓨터가 만들어낸 무작위의 숫자 불러옴, 시작 메시지 출력
  start = () => {
    this.computerInput = new Computer();
    //MissionUtils.Console.print(`${this.computerInput} <- 컴퓨터가 만든 숫자 `);

    MissionUtils.Console.print(SystemMessage.START);
    this.getUserInput();
  };

  //유저가 입력한 값을 받아와서 저장함
  getUserInput = () => {
    // MissionUtils.Console.print("getUserInput");
    MissionUtils.Console.readLineAsync(SystemMessage.INPUT_NUMBER)
    .then((number) => {
      if (this.checkNotThreeDigits(number)) {
        throw new Error(SystemMessage.ERROR.INVALID_BALL_NUMBER);
      }
      this.userInput = number.split('').map(Number);

      const checkCount = this.compareNumber();
      
      //MissionUtils.Console.print(`${checkCount} <- checkCount `);
      this.getNumberResult(checkCount);
    })
    ; 
  };

  //숫자가 3자리가 입력되었는지 확인
  checkNotThreeDigits = (number) => {
    const inputNumSet = new Set(number);
    const numberRegExp = RegExp(/[1-9]{3}/g);
    
    return(
      number.length !== 3 || inputNumSet.size !== 3 || !numberRegExp.test(number)
    );
  };

  //문자가 입력되었는지 확인
  checkLetterEntered = (number) => {
    const inputNumSet = new Set(number);
    if(isNaN(inputNumSet)){
      return true;
    }
  };

  //입력된 숫자를 비교
  compareNumber = () => {
    const computerNumber = this.computerInput.computerNumber;
    //MissionUtils.Console.print(`${computerNumber} <- computerNumber `);
    return this.userInput.reduce(
      (checkCount, number, index) => {
        if(computerNumber[index] === number) {
          checkCount[0]++;
        }
        else if(computerNumber.includes(number)){
          checkCount[1]++;
        }
        else checkCount[2]++;
        return checkCount; 
      }, [0,0,0]
    );
  }

  //비교한 결과값을 출력
  getNumberResult = ([strike, ball, out]) => {
    let resultText = "";
    
    if(ball > 0) {
      resultText += `${ball}볼 `;
    }
    if(strike > 0) {
      resultText += `${strike}스트라이크 `;
    }
    if(out === 3){
      resultText += "낫싱";
    }

    if(strike === 3) {
      MissionUtils.Console.print(resultText);
      this.selectRestartOrFinish();
    } 

    else {
      MissionUtils.Console.print(resultText);
      this.getUserInput();
    }
  }

  //3스트라이크일 경우, 재시작 혹은 종료 여부 선택
  selectRestartOrFinish = () => {
    MissionUtils.Console.print(SystemMessage.THREE_STRIKE);

    MissionUtils.Console.readLineAsync(SystemMessage.RESTART_OR_EXIT)
    .then((selectNum) => {
      if (selectNum === '1') {
        this.restartGame();
      } 
      else if (selectNum === '2') {
        MissionUtils.Console.print(SystemMessage.GAME_OVER);
        this.finishGame();
      }
      else {
        throw new Error(SystemMessage.ERROR.INVALID_SELECTED_NUMBER);
      }
    });
  }

  restartGame = () => {
    this.start();
  }

  finishGame = () => {
    return 0;
  }
}

export default Baseball;
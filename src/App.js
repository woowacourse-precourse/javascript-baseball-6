import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    function setComputer() {
      const computer = [];
      while(computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if(!computer.includes(number)) {
          computer.push(number);
        }
      }

      playGame(computer);
    }

    Console.print("숫자 야구 게임을 시작합니다.");
    setComputer();

    //맞출 때까지 사용자 입력 받기
    async function getNum() {
      try {
        //new Promise((function(t, n))) 객체를 반환
        const USER_NUM = await Console.readLineAsync('숫자를 입력해주세요 : ');
        if(USER_NUM === null) {
          throw new Error('input error!');
        } else if(USER_NUM.match(/\D/)) {
          throw new Error('input error!');
        } else if(USER_NUM.length != 3) {
          throw new Error('input error!');
        } else if(new Set(USER_NUM).size !==3) {
          throw new Error('input error!');
        }

        return USER_NUM;
      } catch (error) {
        Console.print('[ERROR] 숫자가 잘못된 형식입니다.');
        return;
      }
    }

    async function isContinue() {
      try {
        const USER_NUM = await Console.readLineAsync('');
        if(USER_NUM === null) {
          throw new Error('input error!');
        } else if(USER_NUM.match(/\D/)) {
          throw new Error('input error!');
        } else if(USER_NUM.length != 1) {
          throw new Error('input error!');
        }
        return USER_NUM;
      } catch (error) {
        Console.print('[ERROR] 숫자가 잘못된 형식입니다.');
        return;
      }
    }

    function playGame(computer) {
      getNum().then((USER_NUM) => {
        let S = 0, B = 0;
        //Console.print('정답 : ' + computer);

        computer.forEach((elem, idx) => {
          if(USER_NUM.indexOf(elem) == idx) S++;
          else if(USER_NUM.includes(elem)) B++;
        });

        if(S === 3) {
          Console.print(`${S}스트라이크`);
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
          isContinue().then((INPUT_NUM) => {
            if(INPUT_NUM === "1") setComputer();
            else if(INPUT_NUM === "2") {
              Console.print('게임 종료');
              return;
            }
          }).catch(() => {
            return;
          });

        } else if (B === 3) {
          Console.print(`${B}스트라이크`);
          playGame(computer)
        } else if (S === 0 && B === 0) {
          Console.print('낫싱');
          playGame(computer)
        } else {
          Console.print(`${B}볼 ${S}스트라이크`);
          playGame(computer)
        }
      }).catch((error) => {
        return;
      });
      
    }
    
  }
}

export default App;

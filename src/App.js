import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 무작위 숫자 생성 함수
    const createNumber = () => {
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return computer
    }

    let randomNumber = createNumber();
    // 유저의 인풋을 확인함
    const checkUserInput = async () => {
      const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
      const strUserInput = String(userInput)
      if (userInput < 123 ||
        userInput > 987 ||
        isNaN(userInput) === true ||
        userInput === '' ||
        strUserInput[0] === strUserInput[1] ||
        strUserInput[1] === strUserInput[2] ||
        strUserInput[2] === strUserInput[0]
      ) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
      } else {
        return userInput
      } 
    }
    // 인풋에 따라 게임 결과를 계산
    const checkGameResult = async (userInput, randomNumber) => {
      let strike = 0
      let ball = 0
      let isEnd = false
    
      String(userInput).split('').forEach((e, idx) => {
        const num = Number(e)
        if (randomNumber[idx] === num) {
          strike += 1
        } else if (randomNumber.includes(num)) {
          ball += 1
        }
      });
      if (strike === 3) {
        MissionUtils.Console.print(`${strike}스트라이크`)
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        isEnd = true
      } else if (ball >= 1 && strike >= 1) {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
      } else if (ball >= 1) {
        MissionUtils.Console.print(`${ball}볼`)
      } else if (strike >= 1) {
        MissionUtils.Console.print(`${strike}스트라이크`)
      } else {
        MissionUtils.Console.print('낫싱')
      }
      
      return isEnd
    }
    // 게임 종료 후 다시 게임을 시작할지
    const gameAgain = async () => {
      MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
      const userInputIfAgain = await MissionUtils.Console.readLineAsync('');
      if (userInputIfAgain == 1) {
        randomNumber = createNumber();
        return true
      } else if (userInputIfAgain == 2) {
        return false
      } else {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
      }
    }
    // 게임 실행 메인 함수
    const playGame = async () => {
        const userInput = await checkUserInput();
        let isEnd = await checkGameResult(userInput, randomNumber)
        if (isEnd === true) {
          const isGameAgain = await gameAgain();
            if (isGameAgain === true) {
              return await playGame();
            } else {
              return 'end'
            }
        } else {
          return await playGame();
        }
    }

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    return await playGame();
  }
}

export default App;

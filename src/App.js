import { MissionUtils } from "@woowacourse/mission-utils";

class InputValidationError extends Error { }

class App {
  async play() {

    // 랜덤 3자리 숫자 생성
    const numberCreate = () => {
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number)
        }
      }

      return computer
    }

    // 정수 입력 받기 + 배열로 전환
    const inputs = async () => {
      MissionUtils.Console.print("숫자를 입력해주세요 : ");

      const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

      const inputArr = [...input];

      if (!isValidInput(inputArr)) {
        throw new Error("[ERROR]");
      }

      return inputArr;
    }

    // 2숫자 비교
    const compare = (inputArr, computer) => {

      let answer = [0, 0] // 볼, 스트라이크
      //스트라이크 확인, 볼 확인
      for (let i = 0; i < 3; i++) {
        const nowInput = inputArr[i]

        for (let j = 0; j < 3; j++) {
          const nowComputer = computer[j]

          if (nowInput == nowComputer) {  //같은 숫자가 있으면
            //위치가 같으면
            if (i === j) {
              answer[1]++
            } else {
              answer[0]++
            }
          }
        }
      }

      return answer
    }

    //결과 출력
    const result = (answer) => {
      const [ball, strike] = answer


      if (ball === 0 && strike === 0) {
        MissionUtils.Console.print("낫싱")
      } else if (ball === 0 && strike < 3) {
        MissionUtils.Console.print(strike + "스트라이크")
      } else if (ball <= 3 && strike === 0) {
        MissionUtils.Console.print(ball + "볼")
      } else if (ball < 3 && strike < 3) {
        MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크")
      } else {
        MissionUtils.Console.print("3스트라이크")
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
        playBall = false
      }

      return playBall
    }

    const isValidInput = (inputArr) => {
      // 입력값이 3자리이며 1부터 9까지의 서로 다른 숫자인지 확인
      if (inputArr.length !== 3) return false;
      const uniqueInput = [...new Set(inputArr)];
      return uniqueInput.length === 3 && uniqueInput.every(num => num >= 1 && num <= 9);
    }

    //시작 -> 반복 -> 끝 or 시작
    let ReStart = 1
    let playBall = true

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    while (ReStart === 1) {
      try {
        const computer = numberCreate()
        playBall = true

        while (playBall) {
          const inputArr = await inputs();
          const answer = compare(inputArr, computer)
          playBall = result(answer)
        }

        MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요")
        ReStart = parseInt(await MissionUtils.Console.readLineAsync())


      } catch (error) {
        if (error instanceof InputValidationError) {
          MissionUtils.Console.print(`[ERROR]`);
        } else {
          throw error;
        }
      }
    }
  }

}



export default App;

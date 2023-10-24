import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while(true) {
      // 상대방(컴퓨터)의 수 얻기
      const computerNumbers = this.getComputerNumbers();

      // 숫자 맞추기
      while(true) {
        // 플레이어의 숫자 입력 받기
        const userInput = await this.getUserInput();
        MissionUtils.Console.print("숫자를 입력해주세요 : " + userInput);

        // 플레이어의 숫자를 숫자로 된 배열로 변경
        const userInputArr = userInput.split('').map(Number);

        // 유효성 확인
        if(this.isValidInput(userInputArr)) {
          // 입력한 수, 상대방(컴퓨터)수에 대한 결과
          const result = this.checkGuessResult(computerNumbers, userInputArr);
          MissionUtils.Console.print(result);

          if (result === "3스트라이크") {
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            break;
          }
        } else { // 예외 발생
          MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
          throw new Error("[ERROR]");
        }
      }

      // 재시작/종료 여부 얻기
      const restart = await this.askForRestart()
      MissionUtils.Console.print(restart)

      // restart 값이 2일 때, 프로그램 완전 종료
      if (restart === 2) break;
    }
  }

  // 상대방(컴퓨터)의 수 얻기
  getComputerNumbers() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(computer);
  }

  // 플레이어의 숫자 입력 받기
  async getUserInput() {
    return await MissionUtils.Console.readLineAsync();
  }
  
  // 입력한 수 유효성 검사
  isValidInput(userInput) {
    // 숫자 3개가 아니거나 중복된 수가 있으면
    if (userInput.length !== 3 || new Set(userInput).size !== 3)
      return false;
    return true; // 제대로 입력
  }

  // 입력한 수, 상대방(컴퓨터)수에 대한 결과
  checkGuessResult(computer, user) {
    let strike = 0;
    let ball = 0;

    for (let i=0; i<3; i++) {
      if (computer[i] === user[i]) 
        strike++;
      else if (computer.includes(user[i]))
        ball++;
    }

    if (strike === 0 && ball ===0) return "낫싱";

    if (ball > 0) {
      return `${ball}볼 ${strike > 0 ? `${strike}스트라이크` : ''}`
    }
    return `${strike}스트라이크`;
  }

  // 재시작/종료 여부 얻기
  async askForRestart() {
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
    const result = await MissionUtils.Console.readLineAsync();
    return Number(result);
  }
}

export default App;
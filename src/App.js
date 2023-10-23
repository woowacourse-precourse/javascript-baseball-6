import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let restart_game = true;

    while (restart_game) {
      console.log("숫자 야구 게임을 시작합니다.");
      restart_game = await this.play_game(); // 게임 재시작 여부를 확인
    }
    MissionUtils.Console.print("게임 종료");
  }


  async play_game() {
    // 컴퓨터가 선택한 임의의 숫자 3개 생성
    const computer_numbers = this.random_numbers();
    let game_end = false;

    while (!game_end) {
      const user_enter = await this.user_input(); // 사용자로부터 3자리 숫자 입력 받기
      const result = this.calculate_result(user_enter, computer_numbers); // 입력한 숫자에 대한 스트라이크, 볼, 낫싱 결과 계산

      this.print_result(result); // 결과 출력

      if (result.strikes === 3) { // 게임 종료 조건 확인
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        game_end = true;
      }
    }
    return await this.ask_for_restart(); // 게임 재시작 여부 확인
  }

  random_numbers() {
    const computer = []; // 1에서 9까지 서로 다른 임의의 수 3개 선택

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async user_input() {
    // "숫자를 입력해주세요" 출력 후 사용자로부터 3자리 숫자 입력 받기
    const input = await MissionUtils.Console.readLineAsync();

    if (!input || input.length !== 3 || !/^\d+$/.test(input)) {
      throw new Error("[ERROR]"); // 에러 발생
    }
    return input;
  }

  calculate_result(user_enter, computer_numbers) {
    // 입력한 숫자에 대한 스트라이크, 볼, 낫싱 결과 계산
    const user_digits = user_enter.split('').map(Number);
    const computer_digits = computer_numbers.map(Number);

    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (user_digits[i] === computer_digits[i]) { // 같은 숫자가 같은 자릿수에 있다면
        strikes++; // 스트라이크인 경우
      } else if (computer_digits.includes(user_digits[i])) { // 선택한 숫자 중에 포함되어 있는지 확인
        balls++; // 볼인 경우
      }
    }
    return { strikes, balls }; // 낫싱인 경우는 별도로 계산할 필요 없음
  }

  print_result(result) {
    let message = "";
    if (result.strikes === 0 && result.balls === 0) {
      message = "낫싱";
    } else {
      if (result.balls > 0) {
        message += `${result.balls}볼 `;
      }
      if (result.strikes > 0) {
        message += `${result.strikes}스트라이크`;
      }
    }
    MissionUtils.Console.print(message);
  }

  async ask_for_restart() { // 게임을 다시 시작할지 종료할지 선택하는 옵션 제공
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    
    function restart_option() {
      return new Promise(resolve => {
        MissionUtils.Console.readLineAsync().then(input => {
          if (input === '1') {
            resolve(true);
          } else if (input === '2') {
            resolve(false);
          } else {
            console.log("올바른 옵션을 선택하세요 (1: 재시작, 2: 종료)");
            resolve(restart_option());
          }
        });
      });
    }

    return restart_option();
  }
}

export default App;
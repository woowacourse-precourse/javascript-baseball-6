import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 사용자로부터 숫자를 입력받는 메소드
  async player() {
    const number = []; // 입력받은 숫자를 담을 배열

    try {
      // 서로 다른 3개의 숫자를 문자열 형식으로 입력받음 ex) "123"
      const num = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if (num == undefined || num.length != 3) // 길이가 3인지 확인
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다."); // 예외가 발생하면 catch문 실행
      // 길이가 3일 때 이하 실행
      for (var i = 0; i < 3; i++) {
        if (+num[i] == NaN) // 각 문자가 number인지 확인
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        if (num[i] == 0) // 각 문자가 0인지 확인
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        if (number.includes(parseInt(num[i]))) // 이미 입력된 숫자인지 확인
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        else // 위의 예외가 발생하지 않았으면
          number.push(parseInt(num[i])); // number 배열에 숫자 추가
      }

      return number;

    } catch (error) {
      return Promise.reject(error); // 예외가 발생했으면 reject 객체를 반환
    }
  }

  // 랜덤으로 정답 숫자를 생성하는 메소드
  computer() {
    const answer = []; // 랜덤 생성한 숫자를 담을 배열

    while (answer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9); // 1~9 사이의 숫자를 랜덤으로 생성
      if (!answer.includes(num)) // 중복되지 않는 숫자면
        answer.push(num); // answer에 숫자 추가
    }

    return answer;
  }

  // 정답 숫자와 사용자가 입력한 숫자를 비교하는 메소드
  compare(answer, number) {
    let strike = 0; // 같은 숫자가 같은 자리에 있는 경우의 수
    let ball = 0; // 같은 숫자가 다른 자리에 있는 경우의 수

    for (var i = 0; i < 3; i++) {
      if (answer[i] == number[i]) { // 같은 숫자가 같은 자리에 있는지 확인
        strike++;
      } else if (answer.includes(number[i])) // 같은 숫자가 다른 자리에 있는지 확인
        ball++;
    }
    return [strike, ball]; // strike, ball을 배열 형식으로 반환 
  }

  // 게임을 진행하는 메소드
  async play() {
    let start = 1; // 게임 시작 여부

    try {
      while (start == 1) { // 사용자가 재시작(1)을 원하면 플레이를 반복하기 위함
        Console.print("숫자 야구 게임을 시작합니다.");

        // 정답 숫자 생성하여 answer에 저장
        const answer = this.computer();
        let strike = 0;
        let ball = 0;

        while (strike != 3) { // 사용자가 숫자를 모두 맞힐 때까지 반복
          // 사용자에게 유효한 형식의 숫자를 입력받음
          const number = await this.player();

          // 정답 숫자와 사용자가 입력한 숫자가 얼마나 일치하는지 비교
          [strike, ball] = this.compare(answer, number);

          if (strike > 0) {
            if (ball > 0)
              Console.print(`${ball}볼 ${strike}스트라이크`);
            else
              Console.print(`${strike}스트라이크`);
          } else {
            if (ball > 0)
              Console.print(`${ball}볼`);
            else // strike == ball == 0 일 때
              Console.print("낫싱");
          }
        }

        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

        // 게임 재시작 여부를 사용자에게 입력받음
        start = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        if (start != 1 && start != 2) // 유효한 형식(1 또는 2)이 아니면 예외 발생
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

    } catch (error) {
      return Promise.reject(error); // 예외가 발생했으면 reject 객체를 반환
    }
  }
}

const app = new App(); // app 객체 생성
app.play(); // play() 메소드를 실행하여 숫자 야구 게임 시작

export default App;
